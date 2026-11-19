// First Commit contributor wall — each contributor has their own JSON file in /contributors.
const grid = document.querySelector('#contributor-grid');
const count = document.querySelector('#contributor-count');
const empty = document.querySelector('#empty-state');
const search = document.querySelector('#search');
let contributors = [];

// Update this if the repository is renamed or moved.
const REPOSITORY = 'ddennis18/first-commit';
const CONTRIBUTORS_PATH = 'contributors';
const API_URL = `https://api.github.com/repos/${REPOSITORY}/contents/${CONTRIBUTORS_PATH}`;

function isValidContributor(person) {
  return person && typeof person === 'object' &&
    typeof person.name === 'string' && person.name.trim() &&
    typeof person.github === 'string' && /^[a-zA-Z0-9-]{1,39}$/.test(person.github) &&
    (person.learning === undefined || typeof person.learning === 'string');
}

function makeCard(person) {
  const card = document.createElement('article');
  card.className = 'contributor-card';
  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = person.name.trim().charAt(0).toUpperCase();
  const img = document.createElement('img');
  img.src = `https://github.com/${encodeURIComponent(person.github)}.png?size=96`;
  img.alt = '';
  img.loading = 'lazy';
  img.onerror = () => { img.remove(); };
  avatar.textContent = '';
  avatar.append(img);

  const info = document.createElement('div');
  info.className = 'card-info';
  const name = document.createElement('h3');
  name.textContent = person.name.trim();
  info.append(name);

  const username = document.createElement('a');
  username.className = 'username';
  username.textContent = `@${person.github}`;
  username.href = `https://github.com/${encodeURIComponent(person.github)}`;
  username.target = '_blank';
  username.rel = 'noopener noreferrer';
  info.append(username);

  if (person.learning?.trim()) {
    const interest = document.createElement('p');
    interest.className = 'interest';
    interest.textContent = person.learning.trim();
    info.append(interest);
  }
  card.append(avatar, info);
  return card;
}

function render() {
  const query = (search?.value || '').trim().toLowerCase();
  const filtered = contributors.filter(person =>
    [person.name, person.github, person.learning || ''].join(' ').toLowerCase().includes(query)
  );
  grid.replaceChildren(...filtered.map(makeCard));
  count.textContent = String(contributors.length);
  empty.style.display = filtered.length === 0 ? 'block' : 'none';
  if (query && filtered.length === 0) {
    empty.querySelector('h3').textContent = 'No contributors found.';
    empty.querySelector('p').textContent = 'Try a different search, or be the first to add your name.';
  } else {
    empty.querySelector('h3').textContent = 'The wall is waiting for its first names.';
    empty.querySelector('p').textContent = 'Be the first to contribute—or search for a contributor above.';
  }
}

async function loadContributors() {
  try {
    const response = await fetch(API_URL, { headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
    const files = await response.json();
    if (!Array.isArray(files)) throw new Error('Contributor directory response was not a file list');
    const jsonFiles = files.filter(file => file.type === 'file' && file.name.toLowerCase().endsWith('.json'));
    const results = await Promise.allSettled(jsonFiles.map(async file => {
      const response = await fetch(file.download_url);
      if (!response.ok) throw new Error(`Could not load ${file.name}`);
      const person = await response.json();
      if (!isValidContributor(person)) throw new Error(`Invalid contributor data in ${file.name}`);
      return person;
    }));
    contributors = results
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);
    results.filter(result => result.status === 'rejected').forEach(result => console.warn(result.reason));
    render();
  } catch (error) {
    console.error('Unable to load contributors:', error);
    contributors = [];
    render();
    empty.querySelector('h3').textContent = 'Could not load contributors.';
    empty.querySelector('p').textContent = 'Please refresh the page or try again later.';
  }
}

search?.addEventListener('input', render);
loadContributors();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.topbar nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

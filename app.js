// First Commit contributor wall — entries are sourced from contributors.json.
const grid = document.querySelector('#contributor-grid');
const count = document.querySelector('#contributor-count');
const empty = document.querySelector('#empty-state');
const search = document.querySelector('#search');
let contributors = [];

function makeCard(person) {
  const card = document.createElement('article');
  card.className = 'contributor-card';
  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = (person.name || '?').trim().charAt(0).toUpperCase();
  if (person.github && /^[a-zA-Z0-9-]{1,39}$/.test(person.github)) {
    const img = document.createElement('img');
    img.src = `https://github.com/${encodeURIComponent(person.github)}.png?size=96`;
    img.alt = '';
    img.loading = 'lazy';
    img.onerror = () => { img.remove(); };
    avatar.textContent = '';
    avatar.append(img);
  }
  const info = document.createElement('div');
  info.className = 'card-info';
  const name = document.createElement('h3');
  name.textContent = person.name || 'Contributor';
  info.append(name);
  if (person.github) {
    const username = document.createElement('a');
    username.className = 'username';
    username.textContent = `@${person.github}`;
    username.href = `https://github.com/${encodeURIComponent(person.github)}`;
    username.target = '_blank'; username.rel = 'noopener noreferrer';
    info.append(username);
  }
  if (person.learning) {
    const interest = document.createElement('p');
    interest.className = 'interest';
    interest.textContent = person.learning;
    info.append(interest);
  }
  card.append(avatar, info);
  return card;
}
function render() {
  const query = (search?.value || '').trim().toLowerCase();
  const filtered = contributors.filter(p => [p.name, p.github, p.learning].join(' ').toLowerCase().includes(query));
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
search?.addEventListener('input', render);
fetch('./contributors.json')
  .then(response => { if (!response.ok) throw new Error('Could not load contributors'); return response.json(); })
  .then(data => { contributors = Array.isArray(data) ? data : []; render(); })
  .catch(error => { console.error(error); render(); });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.topbar nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));

# Contributing to First Commit

Welcome! This project is a friendly place to practice your first open-source contribution. You do not need to be an experienced developer.


## Add your name

1. Open an issue labelled **good first issue** and check that someone has not already claimed it (if the project is using issue assignments).
2. Fork this repository to your GitHub account.
3. In your fork, open `contributors.json`.
4. Add one object to the JSON array. Use the format below and keep the file valid JSON.
5. Commit your changes with a clear message, such as `Add Ada to contributors`.
6. Open a Pull Request from your fork to this repository. In the PR description, mention the issue you are addressing (for example `Closes #1`, if there is an issue).
7. Wait for review. A maintainer may ask you to make a change. Once approved and merged, your entry will show on the website.

## Entry format

```json
{
  "name": "Your Name",
  "github": "your-github-username",
  "learning": "A short topic you're learning (optional)"
}
```

### Example placement

Add your entry after the last existing entry, and put a comma after the previous object. If you are the first contributor, your object goes between the array's `[` and `]`.

```json
[
  {
    "name": "Ada Example",
    "github": "ada-example",
    "learning": "Web development"
  }
]
```

Use your actual name and GitHub username. The `learning` field is optional; keep it short and suitable for a public profile. Do not add phone numbers, email addresses, student IDs, home addresses, or other private information.

## Contribution rules

- Add only your own entry. Do not edit or remove another contributor's information.
- Use your real GitHub username and make sure it is spelled correctly.
- Do not add a duplicate entry.
- Keep the JSON valid (quotes, commas, and brackets matter).
- Be respectful in issue discussions and pull requests.
- Your contribution should be a small, focused change.


## Need help?
If you're stuck, comment on the issue or ask for help during the event. Mistakes are part of learning. Thank you for contributing!

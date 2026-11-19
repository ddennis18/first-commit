# Contributing to First Commit

Welcome! This project is a friendly place to practice your first open-source contribution. You do not need to be an experienced developer—and you can do the entire contribution on GitHub.com.

## Add your name

1. Open the **Add your name to the First Commit Contributors Wall** issue (or the event's contribution issue) and read its instructions.
2. Fork this repository using the **Fork** button at the top of the repository page.
3. In your fork, open the `contributors` folder.
4. Click **Add file → Create new file**.
5. Name your file `your-github-username.json` (replace this with your actual GitHub username). For example, `ada-example.json`.
6. Paste the entry format below, replace the sample details with yours, and do not edit anyone else's file.
7. Click **Commit changes**, add a short commit message (for example, `Add ada-example contributor file`), and commit to your fork's branch.
8. Open **Pull requests → New pull request** (or use the **Compare & pull request** button shown after your commit). Make sure the base repository is this project and the base branch is its default branch.
9. Create your pull request and wait for review. A maintainer may ask for a correction. After it is approved and merged, your card will appear on the website.

## File format

Your file must contain one JSON object:

```json
{
  "name": "Your Name",
  "github": "your-github-username",
  "learning": "A short topic you're learning"
}
```

- `name`: your display name.
- `github`: your exact GitHub username (without the `@`).
- `learning`: a short learning interest; this field is optional.

Example filename: `ada-example.json`.

## Contribution rules

- Add **one file for yourself** inside `contributors/`.
- Use your GitHub username as the filename: `username.json`.
- Do not edit, rename, or delete another contributor's file.
- Do not add a duplicate file or duplicate GitHub username.
- Keep the JSON valid: use double quotes around strings and no trailing comma.
- Only include information you are comfortable making public. Do not include phone numbers, email addresses, student IDs, home addresses, or other private information.
- Be respectful in issue discussions and pull requests.
- Keep your contribution small and focused.

## Need help?
If you're stuck, comment on the contribution issue or ask for help during the event. Mistakes are part of learning. Thank you for contributing!

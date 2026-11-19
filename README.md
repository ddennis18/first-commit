# First Commit

A small contributor wall website for UNIBEN students learning GitHub and open-source collaboration. Each participant adds **their own JSON file** inside `contributors/` via a fork and pull request. After a PR is reviewed and merged, the website discovers and displays their card automatically.

## Local preview

This is a static site and requires no build step. Since it fetches contributor files from GitHub, run it through a local web server instead of opening `index.html` directly.

### Python (if installed)

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

### VS Code Live Server

Open this folder in VS Code, install/enable Live Server if needed, and click **Go Live**.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload/push these files to its default branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select your default branch and `/ (root)`, then save.
5. Wait for the Pages deployment and use the URL shown on the Pages settings screen.

## Add contributors

See [CONTRIBUTING.md](CONTRIBUTING.md). Add one file named `your-github-username.json` inside the `contributors/` directory. The site reads that directory through the GitHub Contents API and loads each valid contributor file; malformed files are skipped so they do not break the entire wall.

**Note:** The website currently reads from `ddennis18/first-commit`. If the repository is moved or renamed, update the `REPOSITORY` value in `app.js`.

## License

This project is licensed under the MIT License; see [LICENSE](LICENSE).

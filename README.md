# First Commit

A small contributor wall website for UNIBEN students learning GitHub and open-source collaboration. Participants add their details to `contributors.json` via a fork and pull request; after a PR is reviewed and merged, the site displays their card.


## Local preview

This is a static site and requires no build step. Because the site fetches a JSON file, run it through a local web server instead of opening `index.html` directly.


### Python (if installed)

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

### VS Code Live Server

Open this folder in VS Code, install/enable Live Server if needed, and click **Go Live**.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload/push these files to its default branch.
2. In your repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select your default branch and `/ (root)`, then save.
5. Wait for the Pages deployment and use the URL shown on the Pages settings screen.
6. Replace the generic GitHub links in `index.html` with your actual repository URL before publishing.


## Add contributors

See [CONTRIBUTING.md](CONTRIBUTING.md). Entries are stored in `contributors.json` and rendered automatically by the browser.


## License
This project is licensed under the MIT License; see [LICENSE](LICENSE).

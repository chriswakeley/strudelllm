# Live Env (GitHub Pages)

This folder can be deployed as a static GitHub Pages site via the workflow:
- `.github/workflows/pages-live-env.yml`

## One-time GitHub setup

In your GitHub repo:
- **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**

After the next push to `main`, your site will be available at:
- `https://<owner>.github.io/<repo>/`

## Local dev

Run a local server from this folder:

```bash
python3 -m http.server 81234 --bind 0.0.0.0
```

- Locally: the page polls `track1.js` for changes.
- On GitHub Pages: polling is disabled and `track1.js` loads once.

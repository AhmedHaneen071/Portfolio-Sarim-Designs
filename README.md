# Sarim's Portfolio

## Deploy to GitHub Pages

### 1. Initialize Git & Connect to Remote

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/AhmedHaneen071/Portfolio-Sarim-Designs.git
git push -u origin main
```

### 2. Update `vite.config.js`

The repo name is `Portfolio-Sarim-Designs`, so update `base` to match:

```js
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-Sarim-Designs/",
});
```

### 3. Install `gh-pages` & Add Deploy Script

```bash
npm install --save-dev gh-pages
```

In `package.json`, add:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 4. Deploy

```bash
npm run deploy
```

This pushes the `dist/` folder to the `gh-pages` branch.

### 5. Enable GitHub Pages

Go to repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `gh-pages` / `(root)` → **Save**.

Your site will be live at:  
`https://ahmedhaneen071.github.io/Portfolio-Sarim-Designs/`

---

## Alternative: Deploy with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then enable Pages in repo Settings → **Pages** → Source: **GitHub Actions**.

---

## Alternative: Deploy to Vercel (Easier)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo
3. Framework preset: **Vite** → **Deploy**
4. Done — auto-deploys on every push

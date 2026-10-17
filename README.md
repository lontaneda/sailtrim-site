# Sailtrim landing page

Responsive static site recreated from the supplied desktop/mobile Figma exports.

## Files

- `index.html` — one semantic HTML document for all screen sizes
- `styles.css` — responsive styling; mobile adaptation starts at `820px`
- `script.js` — mobile navigation and responsive accordion state
- `assets/` — images extracted from the supplied SVG exports
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing

Figtree is loaded directly from Google Fonts.

## Preview locally

From this folder:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy with GitHub Pages

Create a repository and push this folder:

```powershell
git init
git add .
git commit -m "Initial Sailtrim website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sailtrim-site.git
git push -u origin main
```

In GitHub open **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

## Before production

The supplied design did not contain destination URLs for the App Store, Google Play, privacy policy, terms of service, or account/data deletion links. Those anchors currently preserve the visual layout but do not navigate. Replace the `href="#"` values in `index.html` once the final URLs are available.

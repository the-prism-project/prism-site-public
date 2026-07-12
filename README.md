# PRISM Site

This is the main public site for the PRISM Framework — currently the only
public-facing surface of the project. It's a React/Vite app: landing page,
landscape viewer/editor, spec browser.

Deploy target: [`prism-site-public/`](../prism-site-public) (built via
`npm run build:full`, which runs `vite build` then `scripts/deploy.js`).

## Paper

- PDF: [PRISM_Framework_V1.0.pdf](public/PRISM_Framework_V1.0.pdf)
- SSRN: https://ssrn.com/abstract=7037719
- Zenodo (DOI): https://doi.org/10.5281/zenodo.21325668

## License

Three licenses, by scope:

| Covers | License | File |
|---|---|---|
| PRISM framework specs (SPEC.md, all frameworks) | CC BY-SA 4.0 | [LICENSE-CONTENT](LICENSE-CONTENT) |
| Landscape viewer, editor, interactive app code (`src/**`) | AGPL-3.0 | [LICENSE-AGPL](LICENSE-AGPL) |
| Build tooling/config (vite, package.json, deploy script) | Apache 2.0 | [LICENSE](LICENSE) |

## Dev

```
npm install
npm run dev          # local dev server
npm run build        # build only, output to dist/
npm run build:full   # build + deploy to prism-site-public/
```

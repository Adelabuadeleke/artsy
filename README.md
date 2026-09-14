# Artsy

A React single-page app built with [Vite](https://vite.dev/).

## Available Scripts

### `npm run dev` (alias: `npm start`)

Runs the app in development mode with hot module replacement on
[http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the app for production into the `build` folder.

### `npm run preview`

Serves the contents of `build` locally so you can check the production bundle
before deploying.

### `npm test`

Runs the test suite with [Vitest](https://vitest.dev/) in watch mode.
Use `npx vitest run` for a single, non-watching run.

## Deployment

The app is deployed to Firebase Hosting, which serves the `build` directory
(see `firebase.json`):

```
npm run build
firebase deploy
```

## Project layout

- `index.html` — the app entry point; Vite serves it from the project root.
- `src/index.jsx` — the React root, loaded as a module by `index.html`.
- `public/` — static files copied to the build root as-is. Anything here is
  served from `/`, so `public/assets/chat.svg` is available at `/assets/chat.svg`.

# Huevos

A desktop game built with Rust and Bevy. This repository also hosts the download site at [huevos.cluff.us](https://huevos.cluff.us).

The site currently says the first beta is still in progress. Game binaries are not published yet. When a beta exists, the builds will live in R2 and the site will link to them. Do not commit binaries.

## Game

You own the game code in `game/`. The crate only opens a window titled Huevos.

```sh
cargo run -p huevos
```

## Site

The site is a Cloudflare Worker in `site/`, configured with `cf` rather than Wrangler.

```sh
cd site
npm install
npm run dev
```

Deploy from `site/`:

```sh
npm run deploy
```

That publishes the Worker and attaches `huevos.cluff.us`.

# [hlzmnhnry.github.io](https://hlzmnhnry.github.io/)

Personal research portfolio and publication archive, built with Jekyll and hosted on GitHub Pages.

## Local preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000> in a browser. Generated files in `_site` and `.jekyll-cache` are ignored by Git.

## LTC map previews

The editable preview points and campaign images for the interactive LTC route map are stored in `assets/data/ltc-map-previews.json`. Coordinates use `EPSG:25832` and are entered as `x` (easting) and `y` (northing). Each entry belongs to either `route-a` or `route-b`; its `images` object maps campaign IDs to files below `assets/ltc/previews/` and stores the matched INS altitude as `z` in metres.

The sampled route geometry, map bounds, and selectable Satellite/CLC backgrounds are stored separately in `assets/data/ltc-map-data.json`.

## LTC matching explorer

The terrain-aware matching examples are configured in `assets/data/ltc-matching-examples.json`. Their aerial images, land-cover annotations, and verified-match visualizations are stored in `assets/ltc/matching/`; the interactive behavior lives in `assets/ltc-matching.js`.

Each example records the displayed terrain share, verified matches, PnP inliers, and pose errors. The current examples come from the full-resolution SuperPoint + LightGlue evaluation of campaign `2022-02-23-11-45-35`.

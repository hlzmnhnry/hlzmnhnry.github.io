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

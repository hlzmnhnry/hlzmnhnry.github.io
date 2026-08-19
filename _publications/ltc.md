---
title: "Leaving the City"
paper_title: "Leaving the City: A Large-Scale Aerial Dataset for Cross-Season Localization in Unstructured Environments"
date: 2026-06-26
category: Paper
image: /assets/ltc_white.png
image_dark: /assets/ltc_black.png
interactive_map: true
interactive_matching: true
authors:
  - name: "Michael Schleiss"
  - name: "Henry Hölzemann"
  - name: "Fahmi Rouatbi"
  - name: "Torsten Fiolka"
  - name: "Thomas Pany"
  - name: "Roger Förstner"
  - name: "Daniel Cremers"
venue: "ECCV 2026"
venue_note: "Poster"
resources:
  - label: "Paper"
    detail: "Coming soon"
    icon: /assets/icons/arxiv.svg
  - label: "Code"
    detail: "GitHub"
    icon: /assets/icons/github.svg
    url: "https://github.com/hlzmnhnry/pygeon"
  - label: "Dataset"
    detail: "LTC Server"
    icon: /assets/icons/tum.svg
    url: "https://ltc.cvg.cit.tum.de/"
  - label: "Poster"
    detail: "Coming soon"
    icon: /assets/icons/poster.svg
---

Leaving the City (LTC) is a large-scale aerial dataset for cross-season localization in unstructured environments.

<!-- more -->

<div class="themed_figure">
  <img class="themed_image themed_image--light" src="/assets/ltc_white.png" alt="Overview of the Leaving the City aerial dataset">
  <img class="themed_image themed_image--dark" src="/assets/ltc_black.png" alt="Overview of the Leaving the City aerial dataset">
</div>

LTC provides aerial recordings captured across multiple seasons and environmental conditions, targeting robust localization beyond structured urban scenes. The dataset focuses on challenging unstructured environments such as forests, fields, rural areas, and repetitive natural landscapes, where visual localization is particularly difficult.

The dataset includes multiple flight sequences together with calibration data, sensor metadata, aerial imagery, semantic coverage information, and land-cover annotations.

## Dataset at a glance

<p class="dataset_stats__intro">Repeated aerial recordings across western Germany capture long-term appearance change at a scale that supports both aggregate and terrain-aware evaluation.</p>

<dl class="dataset_stats" aria-label="Key statistics of the Leaving the City dataset">
  <div class="dataset_stat">
    <span class="dataset_stat__index" aria-hidden="true">01</span>
    <dt>1,379 <span>km</span></dt>
    <dd class="dataset_stat__label">Flight trajectories</dd>
    <dd class="dataset_stat__note">Across repeatedly flown routes</dd>
  </div>
  <div class="dataset_stat">
    <span class="dataset_stat__index" aria-hidden="true">02</span>
    <dt>1.65 <span>M</span></dt>
    <dd class="dataset_stat__label">Aerial images</dd>
    <dd class="dataset_stat__note">Global-shutter grayscale imagery</dd>
  </div>
  <div class="dataset_stat">
    <span class="dataset_stat__index" aria-hidden="true">03</span>
    <dt>3</dt>
    <dd class="dataset_stat__label">Seasons</dd>
    <dd class="dataset_stat__note">Winter · summer · autumn</dd>
  </div>
  <div class="dataset_stat">
    <span class="dataset_stat__index" aria-hidden="true">04</span>
    <dt>6</dt>
    <dd class="dataset_stat__label">Flight campaigns</dd>
    <dd class="dataset_stat__note">February 2022 – January 2024</dd>
  </div>
</dl>

<ul class="dataset_facts" aria-label="Additional dataset details">
  <li><strong>2 routes</strong><span>approximately 125 km and 335 km</span></li>
  <li><strong>9 h 48 min</strong><span>total recorded flight time</span></li>
  <li><strong>4 terrain classes</strong><span>artificial surfaces, agricultural areas, forest and semi-natural areas, wetlands and waterbodies</span></li>
  <li><strong>50 / 200 Hz</strong><span>camera / inertial data and 6-DoF ground truth</span></li>
</ul>

## Explore the flight routes

The two repeatedly flown routes can be inspected together or individually. Select one of the numbered points and switch between the available flight campaigns to compare the nearest recorded camera frames across seasons.

<div class="route_explorer" data-ltc-map data-map-data="{{ '/assets/data/ltc-map-data.json' | relative_url }}" data-preview-data="{{ '/assets/data/ltc-map-previews.json' | relative_url }}">
  <div class="route_explorer__toolbar">
    <div class="route_explorer__toggles" role="group" aria-label="Visible flight routes">
      <button class="route_toggle route_toggle--a" type="button" data-route-toggle="route-a" aria-pressed="true" disabled>
        <span class="route_toggle__swatch" aria-hidden="true"></span>
        <span><strong>Route A</strong><small>Short · approximately 125 km</small></span>
      </button>
      <button class="route_toggle route_toggle--b" type="button" data-route-toggle="route-b" aria-pressed="true" disabled>
        <span class="route_toggle__swatch" aria-hidden="true"></span>
        <span><strong>Route B</strong><small>Long · approximately 335 km</small></span>
      </button>
    </div>
    <div class="route_explorer__actions">
      <div class="map_style_switch" role="group" aria-label="Map background">
        <button type="button" data-background-toggle="satellite" aria-pressed="true" disabled>Satellite</button>
        <button type="button" data-background-toggle="clc" aria-pressed="false" disabled>Land cover</button>
      </div>
      <button class="route_fit" type="button" data-route-fit disabled>Fit visible routes</button>
    </div>
  </div>

  <div class="route_explorer__body">
    <div class="route_map" data-route-map role="application" aria-label="Interactive map of the Leaving the City flight routes"></div>
    <aside class="route_preview" data-route-preview aria-live="polite">
      <div class="route_preview__media">
        <img data-preview-image src="{{ '/assets/ltc/previews/placeholder.svg' | relative_url }}" alt="Map illustration shown before a preview point is selected" decoding="async">
      </div>
      <div class="route_preview__content">
        <span class="route_preview__eyebrow" data-preview-route>Data preview</span>
        <h3 data-preview-title>Select a point</h3>
        <p data-preview-caption>Click one of the numbered markers to inspect a sample location.</p>
        <div class="route_preview__campaigns" data-preview-campaigns hidden>
          <span>Campaign</span>
          <div class="route_preview__campaign_options" data-preview-campaign-options role="group" aria-label="Preview campaign"></div>
        </div>
        <dl class="route_preview__coordinates" data-preview-coordinates hidden>
          <div><dt>X</dt><dd data-preview-x>—</dd></div>
          <div><dt>Y</dt><dd data-preview-y>—</dd></div>
          <div><dt>CRS</dt><dd>EPSG:25832</dd></div>
          <div><dt>Z</dt><dd data-preview-z>—</dd></div>
        </dl>
      </div>
    </aside>
  </div>

  <p class="route_explorer__status" data-route-status>Loading interactive map…</p>
  <noscript><p class="route_explorer__status">JavaScript is required to use the interactive route viewer.</p></noscript>
</div>

<p class="route_explorer__source">Satellite background: <a href="https://sgx.geodatenzentrum.de/wms_sentinel2_de">Sentinel2-DE RGB (2019)</a> — European Union, contains Copernicus Sentinel-2 data 2019, processed by the Bundesamt für Kartographie und Geodäsie (BKG). Land-cover background: <a href="https://sgx.geodatenzentrum.de/wms_clc5_2018">CORINE Land Cover – 5ha (2018)</a>, © BKG 2026, licensed under <a href="https://www.govdata.de/dl-de/by-2-0">dl-de/by-2.0</a>.</p>

## Abstract

Long-term aerial localization requires matching live flight imagery against archival reference maps, demanding feature representations that are invariant to severe appearance changes and perceptual aliasing. However, current benchmarks report only aggregate accuracy over predominantly man-made environments, masking severe terrain-dependent performance gaps. As a result, localization performance over unstructured natural landscapes — where self-similar textures and drastic seasonal changes dominate — remains effectively unmeasured.

To address this, we introduce *Leaving the City*, the first large-scale aerial benchmark designed to isolate and quantify terrain-dependent localization gaps. Captured via a microlight aircraft, our dataset comprises 1,379 km of flight trajectories flown repeatedly to capture distinct seasonal variations. We pair high-frame-rate imagery and inertial measurements with semantic terrain masks, multi-year-old orthophotos, and precise 6-DoF ground truth.

Evaluating state-of-the-art matchers through our terrain-stratified protocol reveals a systematic bias: methods that succeed on man-made surfaces degrade sharply over natural terrain undergoing strong appearance change. By exposing where current methods fail, our benchmark provides a rigorous foundation for developing robust, all-terrain aerial localization. The dataset and code are publicly available.

## Terrain-aware matching

The same matcher can behave very differently depending on the terrain beneath the aircraft. Select a terrain class, then drag across the query image to compare the recorded appearance with its land-cover annotation. The correspondence view below shows the geometrically verified matches between the archival orthoreference and the aerial query.

<section class="matching_explorer" data-matching-explorer data-examples="{{ '/assets/data/ltc-matching-examples.json' | relative_url }}?v={{ site.time | date: '%s' }}" aria-label="Interactive terrain-aware image matching examples">
  <div class="matching_explorer__tabs" role="tablist" aria-label="Terrain class">
    <button id="matching-tab-built-up" type="button" role="tab" aria-controls="matching-example-panel" aria-selected="true" data-matching-tab="built-up"><span>01</span>Artificial surfaces</button>
    <button id="matching-tab-agriculture" type="button" role="tab" aria-controls="matching-example-panel" aria-selected="false" data-matching-tab="agriculture"><span>02</span>Agricultural areas</button>
    <button id="matching-tab-forest" type="button" role="tab" aria-controls="matching-example-panel" aria-selected="false" data-matching-tab="forest"><span>03</span>Forest and semi-natural areas</button>
    <button id="matching-tab-water" type="button" role="tab" aria-controls="matching-example-panel" aria-selected="false" data-matching-tab="water"><span>04</span>Wetlands and Waterbodies</button>
  </div>

  <div id="matching-example-panel" class="matching_explorer__overview" role="tabpanel" aria-labelledby="matching-tab-built-up">
    <div class="terrain_compare" data-terrain-compare style="--reveal: 50%;">
      <img class="terrain_compare__image" data-aerial-image src="{{ '/assets/ltc/matching/built-up-aerial.webp' | relative_url }}" alt="Aerial query over artificial surfaces">
      <div class="terrain_compare__overlay" aria-hidden="true">
        <img class="terrain_compare__image" data-landcover-image src="{{ '/assets/ltc/matching/built-up-landcover.webp' | relative_url }}" alt="">
      </div>
      <span class="terrain_compare__label terrain_compare__label--left">Land cover</span>
      <span class="terrain_compare__label terrain_compare__label--right">Aerial image</span>
      <span class="terrain_compare__divider" aria-hidden="true"><span>↔</span></span>
      <input type="range" min="0" max="100" value="50" aria-label="Reveal land-cover annotation over the aerial image" data-terrain-slider>
    </div>

    <aside class="matching_explorer__story" aria-live="polite">
      <div>
        <span class="matching_explorer__eyebrow" data-example-sample>22-02-23-11 · #93581</span>
        <h3 data-example-title>Artificial surfaces</h3>
        <p class="matching_explorer__assessment" data-example-assessment>Strong geometric support</p>
        <p data-example-description>Distinct roads, roofs, and other artificial structures yield a dense, geometrically consistent set of correspondences.</p>
      </div>
      <dl class="matching_metrics">
        <div><dt>Terrain share</dt><dd data-metric="terrainShare">91.3%</dd></div>
        <div><dt>Verified matches</dt><dd data-metric="verifiedMatches">388</dd></div>
        <div><dt>PnP inliers</dt><dd data-metric="pnpInliers">385</dd></div>
        <div><dt>Pose error (R / t)</dt><dd><span data-metric="rotationError">0.19°</span> / <span data-metric="translationError">2.04 m</span></dd></div>
      </dl>
    </aside>
  </div>

  <figure class="matching_explorer__matches">
    <div class="matching_explorer__image_labels" aria-hidden="true"><span>Orthoreference</span><span>Aerial query</span></div>
    <img data-matches-image src="{{ '/assets/ltc/matching/artificial-surfaces-matches.jpg' | relative_url }}" alt="Geometrically verified matches between the orthoreference and an aerial query over artificial surfaces">
    <figcaption>Green lines show correspondences retained by geometric verification. Results use SuperPoint + LightGlue with MAGSAC filtering at full input resolution. Each orthoreference is evaluated at 0°, 90°, 180°, and 270°; correspondences from the best rotation are mapped back to the north-aligned view shown here.</figcaption>
  </figure>

  <div class="landcover_legend" aria-label="Land-cover color guide">
    <span><i class="landcover_legend__swatch landcover_legend__swatch--built" aria-hidden="true"></i>Artificial surfaces</span>
    <span><i class="landcover_legend__swatch landcover_legend__swatch--agri" aria-hidden="true"></i>Agricultural areas</span>
    <span><i class="landcover_legend__swatch landcover_legend__swatch--forest" aria-hidden="true"></i>Forest and semi-natural areas</span>
    <span><i class="landcover_legend__swatch landcover_legend__swatch--water" aria-hidden="true"></i>Wetlands and Waterbodies</span>
  </div>

  <noscript><p class="matching_explorer__noscript">Enable JavaScript to switch between the four terrain examples. The example for Artificial surfaces remains visible without it.</p></noscript>
</section>

## Dataset Download

The dataset is organized into the following flight campaigns:

<ul>
  <li><code>2022-02-23-11-45-35</code></li>
  <li><code>2022-02-23-15-53-20</code></li>
  <li><code>2022-06-10-10-42-22</code></li>
  <li><code>2022-06-14-10-16-48</code></li>
  <li><code>2022-10-19-14-14-59</code></li>
  <li><code>2024-01-29-12-31-01</code></li>
</ul>

In addition, global metadata are provided under a shared `meta` folder.
The expected local dataset layout is documented in the <a href="https://github.com/hlzmnhnry/pygeon/blob/main/data/README.md">DATA README</a>.
The dataset can be browsed directly via directory access at <a href="https://ltc.cvg.cit.tum.de/">ltc.cvg.cit.tum.de</a>.
Individual download links are provided at the bottom of this page.

For questions, download problems, or issues with the dataset, please open an issue in the <a href="https://github.com/hlzmnhnry/pygeon/issues">Pygeon repository</a>.

### Download the complete dataset

```bash
wget --mirror --no-parent --no-host-directories \
  --reject-regex='[?]C=' \
  --reject='index.html*' \
  --directory-prefix=ltc-dataset \
  https://ltc.cvg.cit.tum.de/
```

### Download a single campaign

Replace the `<campaign>` in the command below with one of the campaign identifiers listed above:

```bash
wget --mirror --no-parent --no-host-directories \
  --reject-regex='[?]C=' \
  --reject='index.html*' \
  --cut-dirs=1 \
  --directory-prefix=<campaign> \
  https://ltc.cvg.cit.tum.de/<campaign>/
```

For example, to download the campaign <code>2022-06-14-10-16-48</code>:

```bash
wget --mirror --no-parent --no-host-directories \
  --reject-regex='[?]C=' \
  --reject='index.html*' \
  --cut-dirs=1 \
  --directory-prefix=2022-06-14-10-16-48 \
  https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/
```

### Download global metadata

```bash
wget --mirror --no-parent --no-host-directories \
  --reject-regex='[?]C=' \
  --reject='index.html*' \
  --cut-dirs=1 \
  --directory-prefix=meta \
  https://ltc.cvg.cit.tum.de/meta/
```

## Sequence Downloads

<details markdown="1" class="download_campaign">
<summary><strong>2022-02-23-11-45-35</strong> — 31 files, 187.6 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(296 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(686 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00000.zip">images/2022-02-23-11-45-35_images_00000.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00001.zip">images/2022-02-23-11-45-35_images_00001.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00002.zip">images/2022-02-23-11-45-35_images_00002.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00003.zip">images/2022-02-23-11-45-35_images_00003.zip</a> <span class="file_size">(9.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00004.zip">images/2022-02-23-11-45-35_images_00004.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00005.zip">images/2022-02-23-11-45-35_images_00005.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00006.zip">images/2022-02-23-11-45-35_images_00006.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00007.zip">images/2022-02-23-11-45-35_images_00007.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00008.zip">images/2022-02-23-11-45-35_images_00008.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00009.zip">images/2022-02-23-11-45-35_images_00009.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00010.zip">images/2022-02-23-11-45-35_images_00010.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00011.zip">images/2022-02-23-11-45-35_images_00011.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00012.zip">images/2022-02-23-11-45-35_images_00012.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00013.zip">images/2022-02-23-11-45-35_images_00013.zip</a> <span class="file_size">(9.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00014.zip">images/2022-02-23-11-45-35_images_00014.zip</a> <span class="file_size">(9.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00015.zip">images/2022-02-23-11-45-35_images_00015.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00016.zip">images/2022-02-23-11-45-35_images_00016.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00017.zip">images/2022-02-23-11-45-35_images_00017.zip</a> <span class="file_size">(2.6 GiB)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/landcover/2022-02-23-11-45-35_corine_land_cover.zip">landcover/2022-02-23-11-45-35_corine_land_cover.zip</a> <span class="file_size">(1.2 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(12.3 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(14.7 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/barometer.csv">barometer.csv</a> <span class="file_size">(9.0 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/camera.csv">camera.csv</a> <span class="file_size">(4.8 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(1.8 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(5.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/imu.csv">imu.csv</a> <span class="file_size">(265.4 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/ins.csv">ins.csv</a> <span class="file_size">(276.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-11-45-35/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(30.3 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-02-23-15-53-20</strong> — 31 files, 178.8 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(678 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00000.zip">images/2022-02-23-15-53-20_images_00000.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00001.zip">images/2022-02-23-15-53-20_images_00001.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00002.zip">images/2022-02-23-15-53-20_images_00002.zip</a> <span class="file_size">(9.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00003.zip">images/2022-02-23-15-53-20_images_00003.zip</a> <span class="file_size">(9.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00004.zip">images/2022-02-23-15-53-20_images_00004.zip</a> <span class="file_size">(9.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00005.zip">images/2022-02-23-15-53-20_images_00005.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00006.zip">images/2022-02-23-15-53-20_images_00006.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00007.zip">images/2022-02-23-15-53-20_images_00007.zip</a> <span class="file_size">(9.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00008.zip">images/2022-02-23-15-53-20_images_00008.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00009.zip">images/2022-02-23-15-53-20_images_00009.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00010.zip">images/2022-02-23-15-53-20_images_00010.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00011.zip">images/2022-02-23-15-53-20_images_00011.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00012.zip">images/2022-02-23-15-53-20_images_00012.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00013.zip">images/2022-02-23-15-53-20_images_00013.zip</a> <span class="file_size">(9.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00014.zip">images/2022-02-23-15-53-20_images_00014.zip</a> <span class="file_size">(9.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00015.zip">images/2022-02-23-15-53-20_images_00015.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00016.zip">images/2022-02-23-15-53-20_images_00016.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00017.zip">images/2022-02-23-15-53-20_images_00017.zip</a> <span class="file_size">(2.8 GiB)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/landcover/2022-02-23-15-53-20_corine_land_cover.zip">landcover/2022-02-23-15-53-20_corine_land_cover.zip</a> <span class="file_size">(1.2 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(12.1 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(14.6 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/barometer.csv">barometer.csv</a> <span class="file_size">(9.0 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/camera.csv">camera.csv</a> <span class="file_size">(4.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(1.8 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(5.8 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/imu.csv">imu.csv</a> <span class="file_size">(265.2 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/ins.csv">ins.csv</a> <span class="file_size">(276.5 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-02-23-15-53-20/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(30.4 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-06-10-10-42-22</strong> — 28 files, 155.4 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(684 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00000.zip">images/2022-06-10-10-42-22_images_00000.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00001.zip">images/2022-06-10-10-42-22_images_00001.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00002.zip">images/2022-06-10-10-42-22_images_00002.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00003.zip">images/2022-06-10-10-42-22_images_00003.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00004.zip">images/2022-06-10-10-42-22_images_00004.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00005.zip">images/2022-06-10-10-42-22_images_00005.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00006.zip">images/2022-06-10-10-42-22_images_00006.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00007.zip">images/2022-06-10-10-42-22_images_00007.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00008.zip">images/2022-06-10-10-42-22_images_00008.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00009.zip">images/2022-06-10-10-42-22_images_00009.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00010.zip">images/2022-06-10-10-42-22_images_00010.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00011.zip">images/2022-06-10-10-42-22_images_00011.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00012.zip">images/2022-06-10-10-42-22_images_00012.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00013.zip">images/2022-06-10-10-42-22_images_00013.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00014.zip">images/2022-06-10-10-42-22_images_00014.zip</a> <span class="file_size">(5.1 GiB)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/landcover/2022-06-10-10-42-22_corine_land_cover.zip">landcover/2022-06-10-10-42-22_corine_land_cover.zip</a> <span class="file_size">(1.1 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(9.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(12.1 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/barometer.csv">barometer.csv</a> <span class="file_size">(7.7 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/camera.csv">camera.csv</a> <span class="file_size">(4.1 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(1.5 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(4.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/imu.csv">imu.csv</a> <span class="file_size">(224.0 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/ins.csv">ins.csv</a> <span class="file_size">(233.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-10-10-42-22/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(25.7 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-06-14-10-16-48</strong> — 52 files, 432.9 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(688 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00000.zip">images/2022-06-14-10-16-48_images_00000.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00001.zip">images/2022-06-14-10-16-48_images_00001.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00002.zip">images/2022-06-14-10-16-48_images_00002.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00003.zip">images/2022-06-14-10-16-48_images_00003.zip</a> <span class="file_size">(11.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00004.zip">images/2022-06-14-10-16-48_images_00004.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00005.zip">images/2022-06-14-10-16-48_images_00005.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00006.zip">images/2022-06-14-10-16-48_images_00006.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00007.zip">images/2022-06-14-10-16-48_images_00007.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00008.zip">images/2022-06-14-10-16-48_images_00008.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00009.zip">images/2022-06-14-10-16-48_images_00009.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00010.zip">images/2022-06-14-10-16-48_images_00010.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00011.zip">images/2022-06-14-10-16-48_images_00011.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00012.zip">images/2022-06-14-10-16-48_images_00012.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00013.zip">images/2022-06-14-10-16-48_images_00013.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00014.zip">images/2022-06-14-10-16-48_images_00014.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00015.zip">images/2022-06-14-10-16-48_images_00015.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00016.zip">images/2022-06-14-10-16-48_images_00016.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00017.zip">images/2022-06-14-10-16-48_images_00017.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00018.zip">images/2022-06-14-10-16-48_images_00018.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00019.zip">images/2022-06-14-10-16-48_images_00019.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00020.zip">images/2022-06-14-10-16-48_images_00020.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00021.zip">images/2022-06-14-10-16-48_images_00021.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00022.zip">images/2022-06-14-10-16-48_images_00022.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00023.zip">images/2022-06-14-10-16-48_images_00023.zip</a> <span class="file_size">(12.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00024.zip">images/2022-06-14-10-16-48_images_00024.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00025.zip">images/2022-06-14-10-16-48_images_00025.zip</a> <span class="file_size">(12.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00026.zip">images/2022-06-14-10-16-48_images_00026.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00027.zip">images/2022-06-14-10-16-48_images_00027.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00028.zip">images/2022-06-14-10-16-48_images_00028.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00029.zip">images/2022-06-14-10-16-48_images_00029.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00030.zip">images/2022-06-14-10-16-48_images_00030.zip</a> <span class="file_size">(10.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00031.zip">images/2022-06-14-10-16-48_images_00031.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00032.zip">images/2022-06-14-10-16-48_images_00032.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00033.zip">images/2022-06-14-10-16-48_images_00033.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00034.zip">images/2022-06-14-10-16-48_images_00034.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00035.zip">images/2022-06-14-10-16-48_images_00035.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00036.zip">images/2022-06-14-10-16-48_images_00036.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00037.zip">images/2022-06-14-10-16-48_images_00037.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00038.zip">images/2022-06-14-10-16-48_images_00038.zip</a> <span class="file_size">(4.6 GiB)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/landcover/2022-06-14-10-16-48_corine_land_cover.zip">landcover/2022-06-14-10-16-48_corine_land_cover.zip</a> <span class="file_size">(3.7 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(28.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(35.8 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/barometer.csv">barometer.csv</a> <span class="file_size">(20.4 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/camera.csv">camera.csv</a> <span class="file_size">(10.6 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(4.0 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(13.0 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/imu.csv">imu.csv</a> <span class="file_size">(589.5 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/ins.csv">ins.csv</a> <span class="file_size">(615.6 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-06-14-10-16-48/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(67.5 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-10-19-14-14-59</strong> — 57 files, 492.5 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(296 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(693 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00000.zip">images/2022-10-19-14-14-59_images_00000.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00001.zip">images/2022-10-19-14-14-59_images_00001.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00002.zip">images/2022-10-19-14-14-59_images_00002.zip</a> <span class="file_size">(10.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00003.zip">images/2022-10-19-14-14-59_images_00003.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00004.zip">images/2022-10-19-14-14-59_images_00004.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00005.zip">images/2022-10-19-14-14-59_images_00005.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00006.zip">images/2022-10-19-14-14-59_images_00006.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00007.zip">images/2022-10-19-14-14-59_images_00007.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00008.zip">images/2022-10-19-14-14-59_images_00008.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00009.zip">images/2022-10-19-14-14-59_images_00009.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00010.zip">images/2022-10-19-14-14-59_images_00010.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00011.zip">images/2022-10-19-14-14-59_images_00011.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00012.zip">images/2022-10-19-14-14-59_images_00012.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00013.zip">images/2022-10-19-14-14-59_images_00013.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00014.zip">images/2022-10-19-14-14-59_images_00014.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00015.zip">images/2022-10-19-14-14-59_images_00015.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00016.zip">images/2022-10-19-14-14-59_images_00016.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00017.zip">images/2022-10-19-14-14-59_images_00017.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00018.zip">images/2022-10-19-14-14-59_images_00018.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00019.zip">images/2022-10-19-14-14-59_images_00019.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00020.zip">images/2022-10-19-14-14-59_images_00020.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00021.zip">images/2022-10-19-14-14-59_images_00021.zip</a> <span class="file_size">(12.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00022.zip">images/2022-10-19-14-14-59_images_00022.zip</a> <span class="file_size">(12.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00023.zip">images/2022-10-19-14-14-59_images_00023.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00024.zip">images/2022-10-19-14-14-59_images_00024.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00025.zip">images/2022-10-19-14-14-59_images_00025.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00026.zip">images/2022-10-19-14-14-59_images_00026.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00027.zip">images/2022-10-19-14-14-59_images_00027.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00028.zip">images/2022-10-19-14-14-59_images_00028.zip</a> <span class="file_size">(12.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00029.zip">images/2022-10-19-14-14-59_images_00029.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00030.zip">images/2022-10-19-14-14-59_images_00030.zip</a> <span class="file_size">(12.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00031.zip">images/2022-10-19-14-14-59_images_00031.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00032.zip">images/2022-10-19-14-14-59_images_00032.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00033.zip">images/2022-10-19-14-14-59_images_00033.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00034.zip">images/2022-10-19-14-14-59_images_00034.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00035.zip">images/2022-10-19-14-14-59_images_00035.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00036.zip">images/2022-10-19-14-14-59_images_00036.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00037.zip">images/2022-10-19-14-14-59_images_00037.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00038.zip">images/2022-10-19-14-14-59_images_00038.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00039.zip">images/2022-10-19-14-14-59_images_00039.zip</a> <span class="file_size">(9.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00040.zip">images/2022-10-19-14-14-59_images_00040.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00041.zip">images/2022-10-19-14-14-59_images_00041.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00042.zip">images/2022-10-19-14-14-59_images_00042.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00043.zip">images/2022-10-19-14-14-59_images_00043.zip</a> <span class="file_size">(4.4 GiB)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/landcover/2022-10-19-14-14-59_corine_land_cover.zip">landcover/2022-10-19-14-14-59_corine_land_cover.zip</a> <span class="file_size">(3.8 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(33.0 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(40.5 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/barometer.csv">barometer.csv</a> <span class="file_size">(23.1 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/camera.csv">camera.csv</a> <span class="file_size">(12.0 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(4.5 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(14.7 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/imu.csv">imu.csv</a> <span class="file_size">(667.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/ins.csv">ins.csv</a> <span class="file_size">(697.7 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2022-10-19-14-14-59/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(76.4 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2024-01-29-12-31-01</strong> — 59 files, 496.7 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(681 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00000.zip">images/2024-01-29-12-31-01_images_00000.zip</a> <span class="file_size">(11.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00001.zip">images/2024-01-29-12-31-01_images_00001.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00002.zip">images/2024-01-29-12-31-01_images_00002.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00003.zip">images/2024-01-29-12-31-01_images_00003.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00004.zip">images/2024-01-29-12-31-01_images_00004.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00005.zip">images/2024-01-29-12-31-01_images_00005.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00006.zip">images/2024-01-29-12-31-01_images_00006.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00007.zip">images/2024-01-29-12-31-01_images_00007.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00008.zip">images/2024-01-29-12-31-01_images_00008.zip</a> <span class="file_size">(10.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00009.zip">images/2024-01-29-12-31-01_images_00009.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00010.zip">images/2024-01-29-12-31-01_images_00010.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00011.zip">images/2024-01-29-12-31-01_images_00011.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00012.zip">images/2024-01-29-12-31-01_images_00012.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00013.zip">images/2024-01-29-12-31-01_images_00013.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00014.zip">images/2024-01-29-12-31-01_images_00014.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00015.zip">images/2024-01-29-12-31-01_images_00015.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00016.zip">images/2024-01-29-12-31-01_images_00016.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00017.zip">images/2024-01-29-12-31-01_images_00017.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00018.zip">images/2024-01-29-12-31-01_images_00018.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00019.zip">images/2024-01-29-12-31-01_images_00019.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00020.zip">images/2024-01-29-12-31-01_images_00020.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00021.zip">images/2024-01-29-12-31-01_images_00021.zip</a> <span class="file_size">(12.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00022.zip">images/2024-01-29-12-31-01_images_00022.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00023.zip">images/2024-01-29-12-31-01_images_00023.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00024.zip">images/2024-01-29-12-31-01_images_00024.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00025.zip">images/2024-01-29-12-31-01_images_00025.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00026.zip">images/2024-01-29-12-31-01_images_00026.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00027.zip">images/2024-01-29-12-31-01_images_00027.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00028.zip">images/2024-01-29-12-31-01_images_00028.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00029.zip">images/2024-01-29-12-31-01_images_00029.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00030.zip">images/2024-01-29-12-31-01_images_00030.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00031.zip">images/2024-01-29-12-31-01_images_00031.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00032.zip">images/2024-01-29-12-31-01_images_00032.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00033.zip">images/2024-01-29-12-31-01_images_00033.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00034.zip">images/2024-01-29-12-31-01_images_00034.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00035.zip">images/2024-01-29-12-31-01_images_00035.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00036.zip">images/2024-01-29-12-31-01_images_00036.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00037.zip">images/2024-01-29-12-31-01_images_00037.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00038.zip">images/2024-01-29-12-31-01_images_00038.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00039.zip">images/2024-01-29-12-31-01_images_00039.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00040.zip">images/2024-01-29-12-31-01_images_00040.zip</a> <span class="file_size">(9.8 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00041.zip">images/2024-01-29-12-31-01_images_00041.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00042.zip">images/2024-01-29-12-31-01_images_00042.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00043.zip">images/2024-01-29-12-31-01_images_00043.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00044.zip">images/2024-01-29-12-31-01_images_00044.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00045.zip">images/2024-01-29-12-31-01_images_00045.zip</a> <span class="file_size">(987.8 MiB)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/landcover/2024-01-29-12-31-01_corine_land_cover.zip">landcover/2024-01-29-12-31-01_corine_land_cover.zip</a> <span class="file_size">(4.3 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(34.1 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(42.2 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/barometer.csv">barometer.csv</a> <span class="file_size">(23.9 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/camera.csv">camera.csv</a> <span class="file_size">(12.4 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(4.7 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(15.3 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/imu.csv">imu.csv</a> <span class="file_size">(691.3 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/ins.csv">ins.csv</a> <span class="file_size">(722.7 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/2024-01-29-12-31-01/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(79.1 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>Global metadata</strong> — 5 files, &lt;0.1 GiB</summary>

### Shared metadata files

<ul class="download_list">
  <li><a href="https://ltc.cvg.cit.tum.de/meta/available_tiles_nrw.csv">available_tiles_nrw.csv</a> <span class="file_size">(315.2 KiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/meta/corine_landcover_superclasses.json">corine_landcover_superclasses.json</a> <span class="file_size">(647 B)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/meta/historic_tiles_rlp.json">historic_tiles_rlp.json</a> <span class="file_size">(7.6 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/meta/tile_acquisition_dates_nrw.csv">tile_acquisition_dates_nrw.csv</a> <span class="file_size">(6.7 MiB)</span></li>
  <li><a href="https://ltc.cvg.cit.tum.de/meta/tile_acquisition_dates_rlp.csv">tile_acquisition_dates_rlp.csv</a> <span class="file_size">(1.6 MiB)</span></li>
</ul>

</details>

## Citation

<div class="citation_card citation_card--pending">
  <p>Coming soon.</p>
</div>

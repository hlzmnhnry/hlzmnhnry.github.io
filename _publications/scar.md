---
title: "SCAR"
paper_title: "SCAR: Satellite Imagery-Based Calibration for Aerial Recordings"
date: 2026-04-07
category: Paper
image: /assets/scar_white.png
image_dark: /assets/scar_black.png
authors:
  - name: "Henry Hölzemann"
  - name: "Michael Schleiss"
venue: "CVPR 2026 Workshops"
venue_note: "VOCVALC"
resources:
  - label: "Paper"
    detail: "arXiv"
    icon: /assets/icons/arxiv.svg
    url: "https://arxiv.org/abs/2602.16349"
  - label: "Code"
    detail: "GitHub"
    icon: /assets/icons/github.svg
    url: "https://github.com/hlzmnhnry/scar"
  - label: "Data"
    detail: "OwnCloud"
    icon: /assets/icons/owncloud.svg
    url: "https://owncloud.fraunhofer.de/index.php/s/Cf7U6xfx5YHMRSs"
  - label: "Poster"
    detail: "PDF · 19 MiB"
    icon: /assets/icons/poster.svg
    url: /assets/poster/scar_poster.pdf
    download: true
---

SCAR (Satellite Imagery-Based Calibration for Aerial Recordings) is a framework for long-term calibration refinement of aerial visual-inertial systems.

<!-- more -->

<div class="themed_figure">
  <img class="themed_image themed_image--light" src="/assets/scar_white.png" alt="Overview of the SCAR calibration framework">
  <img class="themed_image themed_image--dark" src="/assets/scar_black.png" alt="Overview of the SCAR calibration framework">
</div>

SCAR leverages georeferenced satellite imagery and elevation data to establish large-scale 2D–3D correspondences and refines both camera intrinsics and camera–INS extrinsics directly from flight data.

Unlike traditional calibration procedures, SCAR operates without dedicated calibration targets or specific motion patterns, enabling continuous calibration during real-world deployments.

## Abstract

Visual–inertial state estimation depends on stable intrinsic and extrinsic calibration, yet these parameters can drift during long-term aerial deployments. SCAR uses georeferenced satellite imagery and elevation models to derive large-scale 2D–3D correspondences and refine camera intrinsics and camera–INS extrinsics directly from flight data. Evaluations across six campaigns recorded over two years show lower reprojection and localization errors than established calibration baselines, without dedicated calibration maneuvers or manually surveyed control points.

## Citation

<div class="citation_card">
  <p class="citation_card__entry"><strong>Henry Hölzemann and Michael Schleiss.</strong> “SCAR: Satellite Imagery-Based Calibration for Aerial Recordings.” In <em>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops</em>, pp. 987–996, June 2026.</p>
  <details class="citation_card__bibtex">
    <summary>Show BibTeX</summary>
    <div class="citation_card__code">
      <button class="citation_copy" type="button" data-copy-target="citation-scar">Copy</button>
      <pre id="citation-scar"><code>@InProceedings{Holzemann_2026_CVPR,
  author    = {H\"olzemann, Henry and Schleiss, Michael},
  title     = {SCAR: Satellite Imagery-Based Calibration for Aerial Recordings},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops},
  month     = {June},
  year      = {2026},
  pages     = {987--996}
}</code></pre>
    </div>
  </details>
</div>

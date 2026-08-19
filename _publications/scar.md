---
title: "SCAR"
date: 2026-04-07
category: Paper
image: /assets/scar_white.png
image_dark: /assets/scar_black.png
---

SCAR (Satellite Imagery-Based Calibration for Aerial Recordings) is a framework for long-term calibration refinement of aerial visual-inertial systems.

<!-- more -->

<div class="themed_figure">
  <img class="themed_image themed_image--light" src="/assets/scar_white.png" alt="Overview of the SCAR calibration framework">
  <img class="themed_image themed_image--dark" src="/assets/scar_black.png" alt="Overview of the SCAR calibration framework">
</div>

SCAR leverages georeferenced satellite imagery and elevation data to establish large-scale 2D–3D correspondences and refines both camera intrinsics and camera–INS extrinsics directly from flight data.

Unlike traditional calibration procedures, SCAR operates without dedicated calibration targets or specific motion patterns, enabling continuous calibration during real-world deployments.

<a class="conference_badge" href="https://openaccess.thecvf.com/content/CVPR2026W/VOCVALC/papers/Holzemann_SCAR_Satellite_Imagery-Based_Calibration_for_Aerial_Recordings_CVPRW_2026_paper.pdf">Accepted at CVPR Workshop (VOCVALC) 2026</a>

## Abstract

Visual–inertial state estimation depends on stable intrinsic and extrinsic calibration, yet these parameters can drift during long-term aerial deployments. SCAR uses georeferenced satellite imagery and elevation models to derive large-scale 2D–3D correspondences and refine camera intrinsics and camera–INS extrinsics directly from flight data. Evaluations across six campaigns recorded over two years show lower reprojection and localization errors than established calibration baselines, without dedicated calibration maneuvers or manually surveyed control points.

## Resources

<ul class="resource_list">
  <li><img src="/assets/icons/arxiv.svg" class="resource_icon" alt=""><span class="resource_label">Paper</span><a href="https://arxiv.org/abs/2602.16349">arxiv.org/abs/2602.16349</a></li>
  <li><img src="/assets/icons/github.svg" class="resource_icon" alt=""><span class="resource_label">Code</span><a href="https://github.com/hlzmnhnry/scar">github.com/hlzmnhnry/scar</a></li>
  <li><img src="/assets/icons/owncloud.svg" class="resource_icon" alt=""><span class="resource_label">Data</span><a href="https://owncloud.fraunhofer.de/index.php/s/Cf7U6xfx5YHMRSs">owncloud.fraunhofer.de/Cf7U6xfx5YHMRSs</a></li>
  <li><img src="/assets/icons/poster.svg" class="resource_icon" alt=""><span class="resource_label">Poster</span><a href="{{ '/assets/poster/scar_poster.pdf' | relative_url }}" download>Download poster <span class="file_size">(PDF · 19 MiB)</span></a></li>
</ul>

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

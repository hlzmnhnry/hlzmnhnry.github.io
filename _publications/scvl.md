---
title: "SCVL"
paper_title: "Semantic Clustering of Image Retrieval Databases used for Visual Localization"
date: 2025-02-22
category: Paper
image: /assets/scvl_white.png
image_dark: /assets/scvl_black.png
authors:
  - name: "Henry Hölzemann"
  - name: "Torsten Fiolka"
venue: "WACV 2025"
venue_note: "Poster"
resources:
  - label: "Paper"
    detail: "CVF Open Access"
    icon: /assets/icons/scholar.svg
    url: "https://openaccess.thecvf.com/content/WACV2025/papers/Holzemann_Semantic_Clustering_of_Image_Retrieval_Databases_used_for_Visual_Localization_WACV_2025_paper.pdf"
  - label: "Code"
    detail: "GitHub"
    icon: /assets/icons/github.svg
    url: "https://github.com/hlzmnhnry/sc-vl"
  - label: "Poster"
    detail: "PDF · 33 MiB"
    icon: /assets/icons/poster.svg
    url: /assets/poster/scvl_poster.pdf
    download: true
---

In the paper *Semantic Clustering of Image Retrieval Databases used for Visual Localization* we explore how to partition databases for visual localization into smaller databases using semantic information.

<!-- more -->

<div class="themed_figure">
  <img class="themed_image themed_image--light" src="/assets/scvl_white.png" alt="Overview of semantic clustering for visual localization">
  <img class="themed_image themed_image--dark" src="/assets/scvl_black.png" alt="Overview of semantic clustering for visual localization">
</div>

## Abstract

Image-retrieval-based visual localization can become computationally expensive on small unmanned aerial systems as reference databases grow. This work organizes database images into smaller clusters using semantic land-cover information, assigns query images to relevant clusters, and restricts retrieval to semantically similar subsets. Experiments with a dedicated aerial semantic-segmentation dataset show that this divide-and-conquer strategy reduces the search space and retrieval time, making large-scale outdoor visual localization more practical for resource-constrained aerial platforms.

## Citation

<div class="citation_card">
  <p class="citation_card__entry"><strong>Henry Hölzemann and Torsten Fiolka.</strong> “Semantic Clustering of Image Retrieval Databases used for Visual Localization.” In <em>2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)</em>, pp. 6998–7007. IEEE, 2025.</p>
  <details class="citation_card__bibtex">
    <summary>Show BibTeX</summary>
    <div class="citation_card__code">
      <button class="citation_copy" type="button" data-copy-target="citation-scvl">Copy</button>
      <pre id="citation-scvl"><code>@inproceedings{holzemann2025semantic,
  title        = {Semantic Clustering of Image Retrieval Databases used for Visual Localization},
  author       = {H{\"o}lzemann, Henry and Fiolka, Torsten},
  booktitle    = {2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  pages        = {6998--7007},
  year         = {2025},
  organization = {IEEE}
}</code></pre>
    </div>
  </details>
</div>

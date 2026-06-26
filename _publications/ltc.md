---
title: "Leaving the City"
date: 2026-06-26
category: Paper
image: /assets/ltc_teaser.png
---

Leaving the City (LTC) is a large-scale aerial dataset for cross-season localization in unstructured environments.

<!-- more -->

<img src="/assets/ltc_teaser.png">

LTC provides aerial recordings captured across multiple seasons and environmental conditions, targeting robust localization beyond structured urban scenes. The dataset focuses on challenging unstructured environments such as forests, fields, rural areas, and repetitive natural landscapes, where visual localization is particularly difficult.

The dataset includes multiple flight sequences together with calibration data, sensor metadata, aerial imagery, semantic coverage information, and land-cover annotations.

<span class="conference_badge">Accepted at ECCV 2026</span>

## Resources

To understand and work with our dataset, we provide the following resources:

<ul class="resource_list">
  <li><img src="/assets/icons/github.svg" class="resource_icon"> <a href="https://github.com/hlzmnhnry/pygeon">github.com/hlzmnhnry/pygeon</a></li>
</ul>

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
For large downloads, we recommend using the AWS CLI.
But individual download links are provided on the bottom of the page.

### Download the complete dataset

```bash
aws s3 cp s3://ltc-downloads-394266643128/files/ ./ltc-dataset/ \
  --recursive \
  --no-sign-request \
  --region eu-central-1
```

### Download a single campaign

Replace the `<campaign>` in the command below with one of the campaign identifiers listed above:

```bash
aws s3 cp s3://ltc-downloads-394266643128/files/<campaign>/ ./<campaign>/ \
  --recursive \
  --no-sign-request \
  --region eu-central-1
```

For example, to download the campaign <code>2022-06-14-10-16-48</code>:

```bash
aws s3 cp s3://ltc-downloads-394266643128/files/2022-06-14-10-16-48/ ./2022-06-14-10-16-48/ \
  --recursive \
  --no-sign-request \
  --region eu-central-1
```

### Download global metadata

```bash
aws s3 cp s3://ltc-downloads-394266643128/files/meta/ ./meta/ \
  --recursive \
  --no-sign-request \
  --region eu-central-1
```

## Sequence Downloads

<details markdown="1" class="download_campaign">
<summary><strong>2022-02-23-11-45-35</strong> — 36 files, 187.6 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(296 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(686 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives and image metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00000.zip">images/2022-02-23-11-45-35_images_00000.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00001.zip">images/2022-02-23-11-45-35_images_00001.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00002.zip">images/2022-02-23-11-45-35_images_00002.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00003.zip">images/2022-02-23-11-45-35_images_00003.zip</a> <span class="file_size">(9.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00004.zip">images/2022-02-23-11-45-35_images_00004.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00005.zip">images/2022-02-23-11-45-35_images_00005.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00006.zip">images/2022-02-23-11-45-35_images_00006.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00007.zip">images/2022-02-23-11-45-35_images_00007.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00008.zip">images/2022-02-23-11-45-35_images_00008.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00009.zip">images/2022-02-23-11-45-35_images_00009.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00010.zip">images/2022-02-23-11-45-35_images_00010.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00011.zip">images/2022-02-23-11-45-35_images_00011.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00012.zip">images/2022-02-23-11-45-35_images_00012.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00013.zip">images/2022-02-23-11-45-35_images_00013.zip</a> <span class="file_size">(9.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00014.zip">images/2022-02-23-11-45-35_images_00014.zip</a> <span class="file_size">(9.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00015.zip">images/2022-02-23-11-45-35_images_00015.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00016.zip">images/2022-02-23-11-45-35_images_00016.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/2022-02-23-11-45-35_images_00017.zip">images/2022-02-23-11-45-35_images_00017.zip</a> <span class="file_size">(2.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/camera.csv">images/camera.csv</a> <span class="file_size">(5.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/image_files.csv">images/image_files.csv</a> <span class="file_size">(22.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/image_shards.csv">images/image_shards.csv</a> <span class="file_size">(3.2 KiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/manifest.json">images/manifest.json</a> <span class="file_size">(578 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/images/missing_images.csv">images/missing_images.csv</a> <span class="file_size">(323 B)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/landcover/2022-02-23-11-45-35_corine_land_cover.zip">landcover/2022-02-23-11-45-35_corine_land_cover.zip</a> <span class="file_size">(1.2 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(12.3 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(14.7 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/barometer.csv">barometer.csv</a> <span class="file_size">(9.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/camera.csv">camera.csv</a> <span class="file_size">(4.8 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(1.8 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(5.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/imu.csv">imu.csv</a> <span class="file_size">(265.4 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/ins.csv">ins.csv</a> <span class="file_size">(276.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-11-45-35/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(30.3 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-02-23-15-53-20</strong> — 36 files, 178.8 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(678 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives and image metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00000.zip">images/2022-02-23-15-53-20_images_00000.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00001.zip">images/2022-02-23-15-53-20_images_00001.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00002.zip">images/2022-02-23-15-53-20_images_00002.zip</a> <span class="file_size">(9.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00003.zip">images/2022-02-23-15-53-20_images_00003.zip</a> <span class="file_size">(9.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00004.zip">images/2022-02-23-15-53-20_images_00004.zip</a> <span class="file_size">(9.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00005.zip">images/2022-02-23-15-53-20_images_00005.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00006.zip">images/2022-02-23-15-53-20_images_00006.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00007.zip">images/2022-02-23-15-53-20_images_00007.zip</a> <span class="file_size">(9.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00008.zip">images/2022-02-23-15-53-20_images_00008.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00009.zip">images/2022-02-23-15-53-20_images_00009.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00010.zip">images/2022-02-23-15-53-20_images_00010.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00011.zip">images/2022-02-23-15-53-20_images_00011.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00012.zip">images/2022-02-23-15-53-20_images_00012.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00013.zip">images/2022-02-23-15-53-20_images_00013.zip</a> <span class="file_size">(9.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00014.zip">images/2022-02-23-15-53-20_images_00014.zip</a> <span class="file_size">(9.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00015.zip">images/2022-02-23-15-53-20_images_00015.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00016.zip">images/2022-02-23-15-53-20_images_00016.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/2022-02-23-15-53-20_images_00017.zip">images/2022-02-23-15-53-20_images_00017.zip</a> <span class="file_size">(2.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/camera.csv">images/camera.csv</a> <span class="file_size">(5.1 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/image_files.csv">images/image_files.csv</a> <span class="file_size">(22.1 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/image_shards.csv">images/image_shards.csv</a> <span class="file_size">(3.2 KiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/manifest.json">images/manifest.json</a> <span class="file_size">(579 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/images/missing_images.csv">images/missing_images.csv</a> <span class="file_size">(1.4 KiB)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/landcover/2022-02-23-15-53-20_corine_land_cover.zip">landcover/2022-02-23-15-53-20_corine_land_cover.zip</a> <span class="file_size">(1.2 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(12.1 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(14.6 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/barometer.csv">barometer.csv</a> <span class="file_size">(9.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/camera.csv">camera.csv</a> <span class="file_size">(4.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(1.8 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(5.8 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/imu.csv">imu.csv</a> <span class="file_size">(265.2 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/ins.csv">ins.csv</a> <span class="file_size">(276.5 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-02-23-15-53-20/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(30.4 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-06-10-10-42-22</strong> — 32 files, 155.4 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(684 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives and image metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00000.zip">images/2022-06-10-10-42-22_images_00000.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00001.zip">images/2022-06-10-10-42-22_images_00001.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00002.zip">images/2022-06-10-10-42-22_images_00002.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00003.zip">images/2022-06-10-10-42-22_images_00003.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00004.zip">images/2022-06-10-10-42-22_images_00004.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00005.zip">images/2022-06-10-10-42-22_images_00005.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00006.zip">images/2022-06-10-10-42-22_images_00006.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00007.zip">images/2022-06-10-10-42-22_images_00007.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00008.zip">images/2022-06-10-10-42-22_images_00008.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00009.zip">images/2022-06-10-10-42-22_images_00009.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00010.zip">images/2022-06-10-10-42-22_images_00010.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00011.zip">images/2022-06-10-10-42-22_images_00011.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00012.zip">images/2022-06-10-10-42-22_images_00012.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00013.zip">images/2022-06-10-10-42-22_images_00013.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/2022-06-10-10-42-22_images_00014.zip">images/2022-06-10-10-42-22_images_00014.zip</a> <span class="file_size">(5.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/camera.csv">images/camera.csv</a> <span class="file_size">(4.2 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/image_files.csv">images/image_files.csv</a> <span class="file_size">(18.6 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/image_shards.csv">images/image_shards.csv</a> <span class="file_size">(2.7 KiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/images/manifest.json">images/manifest.json</a> <span class="file_size">(534 B)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/landcover/2022-06-10-10-42-22_corine_land_cover.zip">landcover/2022-06-10-10-42-22_corine_land_cover.zip</a> <span class="file_size">(1.1 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(9.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(12.1 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/barometer.csv">barometer.csv</a> <span class="file_size">(7.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/camera.csv">camera.csv</a> <span class="file_size">(4.1 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(1.5 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(4.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/imu.csv">imu.csv</a> <span class="file_size">(224.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/ins.csv">ins.csv</a> <span class="file_size">(233.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-10-10-42-22/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(25.7 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-06-14-10-16-48</strong> — 57 files, 432.9 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(688 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives and image metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00000.zip">images/2022-06-14-10-16-48_images_00000.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00001.zip">images/2022-06-14-10-16-48_images_00001.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00002.zip">images/2022-06-14-10-16-48_images_00002.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00003.zip">images/2022-06-14-10-16-48_images_00003.zip</a> <span class="file_size">(11.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00004.zip">images/2022-06-14-10-16-48_images_00004.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00005.zip">images/2022-06-14-10-16-48_images_00005.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00006.zip">images/2022-06-14-10-16-48_images_00006.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00007.zip">images/2022-06-14-10-16-48_images_00007.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00008.zip">images/2022-06-14-10-16-48_images_00008.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00009.zip">images/2022-06-14-10-16-48_images_00009.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00010.zip">images/2022-06-14-10-16-48_images_00010.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00011.zip">images/2022-06-14-10-16-48_images_00011.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00012.zip">images/2022-06-14-10-16-48_images_00012.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00013.zip">images/2022-06-14-10-16-48_images_00013.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00014.zip">images/2022-06-14-10-16-48_images_00014.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00015.zip">images/2022-06-14-10-16-48_images_00015.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00016.zip">images/2022-06-14-10-16-48_images_00016.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00017.zip">images/2022-06-14-10-16-48_images_00017.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00018.zip">images/2022-06-14-10-16-48_images_00018.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00019.zip">images/2022-06-14-10-16-48_images_00019.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00020.zip">images/2022-06-14-10-16-48_images_00020.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00021.zip">images/2022-06-14-10-16-48_images_00021.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00022.zip">images/2022-06-14-10-16-48_images_00022.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00023.zip">images/2022-06-14-10-16-48_images_00023.zip</a> <span class="file_size">(12.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00024.zip">images/2022-06-14-10-16-48_images_00024.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00025.zip">images/2022-06-14-10-16-48_images_00025.zip</a> <span class="file_size">(12.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00026.zip">images/2022-06-14-10-16-48_images_00026.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00027.zip">images/2022-06-14-10-16-48_images_00027.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00028.zip">images/2022-06-14-10-16-48_images_00028.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00029.zip">images/2022-06-14-10-16-48_images_00029.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00030.zip">images/2022-06-14-10-16-48_images_00030.zip</a> <span class="file_size">(10.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00031.zip">images/2022-06-14-10-16-48_images_00031.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00032.zip">images/2022-06-14-10-16-48_images_00032.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00033.zip">images/2022-06-14-10-16-48_images_00033.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00034.zip">images/2022-06-14-10-16-48_images_00034.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00035.zip">images/2022-06-14-10-16-48_images_00035.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00036.zip">images/2022-06-14-10-16-48_images_00036.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00037.zip">images/2022-06-14-10-16-48_images_00037.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/2022-06-14-10-16-48_images_00038.zip">images/2022-06-14-10-16-48_images_00038.zip</a> <span class="file_size">(4.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/camera.csv">images/camera.csv</a> <span class="file_size">(11.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/image_files.csv">images/image_files.csv</a> <span class="file_size">(49.2 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/image_shards.csv">images/image_shards.csv</a> <span class="file_size">(6.8 KiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/manifest.json">images/manifest.json</a> <span class="file_size">(578 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/images/missing_images.csv">images/missing_images.csv</a> <span class="file_size">(189 B)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/landcover/2022-06-14-10-16-48_corine_land_cover.zip">landcover/2022-06-14-10-16-48_corine_land_cover.zip</a> <span class="file_size">(3.7 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(28.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(35.8 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/barometer.csv">barometer.csv</a> <span class="file_size">(20.4 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/camera.csv">camera.csv</a> <span class="file_size">(10.6 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(4.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(13.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/imu.csv">imu.csv</a> <span class="file_size">(589.5 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/ins.csv">ins.csv</a> <span class="file_size">(615.6 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-06-14-10-16-48/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(67.5 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2022-10-19-14-14-59</strong> — 61 files, 492.5 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(296 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(693 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives and image metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00000.zip">images/2022-10-19-14-14-59_images_00000.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00001.zip">images/2022-10-19-14-14-59_images_00001.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00002.zip">images/2022-10-19-14-14-59_images_00002.zip</a> <span class="file_size">(10.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00003.zip">images/2022-10-19-14-14-59_images_00003.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00004.zip">images/2022-10-19-14-14-59_images_00004.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00005.zip">images/2022-10-19-14-14-59_images_00005.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00006.zip">images/2022-10-19-14-14-59_images_00006.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00007.zip">images/2022-10-19-14-14-59_images_00007.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00008.zip">images/2022-10-19-14-14-59_images_00008.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00009.zip">images/2022-10-19-14-14-59_images_00009.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00010.zip">images/2022-10-19-14-14-59_images_00010.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00011.zip">images/2022-10-19-14-14-59_images_00011.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00012.zip">images/2022-10-19-14-14-59_images_00012.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00013.zip">images/2022-10-19-14-14-59_images_00013.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00014.zip">images/2022-10-19-14-14-59_images_00014.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00015.zip">images/2022-10-19-14-14-59_images_00015.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00016.zip">images/2022-10-19-14-14-59_images_00016.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00017.zip">images/2022-10-19-14-14-59_images_00017.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00018.zip">images/2022-10-19-14-14-59_images_00018.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00019.zip">images/2022-10-19-14-14-59_images_00019.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00020.zip">images/2022-10-19-14-14-59_images_00020.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00021.zip">images/2022-10-19-14-14-59_images_00021.zip</a> <span class="file_size">(12.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00022.zip">images/2022-10-19-14-14-59_images_00022.zip</a> <span class="file_size">(12.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00023.zip">images/2022-10-19-14-14-59_images_00023.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00024.zip">images/2022-10-19-14-14-59_images_00024.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00025.zip">images/2022-10-19-14-14-59_images_00025.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00026.zip">images/2022-10-19-14-14-59_images_00026.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00027.zip">images/2022-10-19-14-14-59_images_00027.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00028.zip">images/2022-10-19-14-14-59_images_00028.zip</a> <span class="file_size">(12.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00029.zip">images/2022-10-19-14-14-59_images_00029.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00030.zip">images/2022-10-19-14-14-59_images_00030.zip</a> <span class="file_size">(12.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00031.zip">images/2022-10-19-14-14-59_images_00031.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00032.zip">images/2022-10-19-14-14-59_images_00032.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00033.zip">images/2022-10-19-14-14-59_images_00033.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00034.zip">images/2022-10-19-14-14-59_images_00034.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00035.zip">images/2022-10-19-14-14-59_images_00035.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00036.zip">images/2022-10-19-14-14-59_images_00036.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00037.zip">images/2022-10-19-14-14-59_images_00037.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00038.zip">images/2022-10-19-14-14-59_images_00038.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00039.zip">images/2022-10-19-14-14-59_images_00039.zip</a> <span class="file_size">(9.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00040.zip">images/2022-10-19-14-14-59_images_00040.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00041.zip">images/2022-10-19-14-14-59_images_00041.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00042.zip">images/2022-10-19-14-14-59_images_00042.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/2022-10-19-14-14-59_images_00043.zip">images/2022-10-19-14-14-59_images_00043.zip</a> <span class="file_size">(4.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/camera.csv">images/camera.csv</a> <span class="file_size">(12.4 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/image_files.csv">images/image_files.csv</a> <span class="file_size">(55.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/image_shards.csv">images/image_shards.csv</a> <span class="file_size">(7.7 KiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/images/manifest.json">images/manifest.json</a> <span class="file_size">(534 B)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/landcover/2022-10-19-14-14-59_corine_land_cover.zip">landcover/2022-10-19-14-14-59_corine_land_cover.zip</a> <span class="file_size">(3.8 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(33.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(40.5 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/barometer.csv">barometer.csv</a> <span class="file_size">(23.1 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/camera.csv">camera.csv</a> <span class="file_size">(12.0 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(4.5 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(14.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/imu.csv">imu.csv</a> <span class="file_size">(667.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/ins.csv">ins.csv</a> <span class="file_size">(697.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2022-10-19-14-14-59/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(76.4 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>2024-01-29-12-31-01</strong> — 63 files, 496.7 GiB</summary>

### Calibration

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/calibration/camera.json">calibration/camera.json</a> <span class="file_size">(297 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/calibration/extrinsics.json">calibration/extrinsics.json</a> <span class="file_size">(681 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/calibration/imu_noise.json">calibration/imu_noise.json</a> <span class="file_size">(222 B)</span></li>
</ul>

### Image archives and image metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00000.zip">images/2024-01-29-12-31-01_images_00000.zip</a> <span class="file_size">(11.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00001.zip">images/2024-01-29-12-31-01_images_00001.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00002.zip">images/2024-01-29-12-31-01_images_00002.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00003.zip">images/2024-01-29-12-31-01_images_00003.zip</a> <span class="file_size">(11.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00004.zip">images/2024-01-29-12-31-01_images_00004.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00005.zip">images/2024-01-29-12-31-01_images_00005.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00006.zip">images/2024-01-29-12-31-01_images_00006.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00007.zip">images/2024-01-29-12-31-01_images_00007.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00008.zip">images/2024-01-29-12-31-01_images_00008.zip</a> <span class="file_size">(10.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00009.zip">images/2024-01-29-12-31-01_images_00009.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00010.zip">images/2024-01-29-12-31-01_images_00010.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00011.zip">images/2024-01-29-12-31-01_images_00011.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00012.zip">images/2024-01-29-12-31-01_images_00012.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00013.zip">images/2024-01-29-12-31-01_images_00013.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00014.zip">images/2024-01-29-12-31-01_images_00014.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00015.zip">images/2024-01-29-12-31-01_images_00015.zip</a> <span class="file_size">(10.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00016.zip">images/2024-01-29-12-31-01_images_00016.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00017.zip">images/2024-01-29-12-31-01_images_00017.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00018.zip">images/2024-01-29-12-31-01_images_00018.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00019.zip">images/2024-01-29-12-31-01_images_00019.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00020.zip">images/2024-01-29-12-31-01_images_00020.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00021.zip">images/2024-01-29-12-31-01_images_00021.zip</a> <span class="file_size">(12.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00022.zip">images/2024-01-29-12-31-01_images_00022.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00023.zip">images/2024-01-29-12-31-01_images_00023.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00024.zip">images/2024-01-29-12-31-01_images_00024.zip</a> <span class="file_size">(11.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00025.zip">images/2024-01-29-12-31-01_images_00025.zip</a> <span class="file_size">(11.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00026.zip">images/2024-01-29-12-31-01_images_00026.zip</a> <span class="file_size">(11.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00027.zip">images/2024-01-29-12-31-01_images_00027.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00028.zip">images/2024-01-29-12-31-01_images_00028.zip</a> <span class="file_size">(11.6 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00029.zip">images/2024-01-29-12-31-01_images_00029.zip</a> <span class="file_size">(11.4 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00030.zip">images/2024-01-29-12-31-01_images_00030.zip</a> <span class="file_size">(11.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00031.zip">images/2024-01-29-12-31-01_images_00031.zip</a> <span class="file_size">(10.9 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00032.zip">images/2024-01-29-12-31-01_images_00032.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00033.zip">images/2024-01-29-12-31-01_images_00033.zip</a> <span class="file_size">(11.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00034.zip">images/2024-01-29-12-31-01_images_00034.zip</a> <span class="file_size">(10.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00035.zip">images/2024-01-29-12-31-01_images_00035.zip</a> <span class="file_size">(10.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00036.zip">images/2024-01-29-12-31-01_images_00036.zip</a> <span class="file_size">(10.7 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00037.zip">images/2024-01-29-12-31-01_images_00037.zip</a> <span class="file_size">(11.3 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00038.zip">images/2024-01-29-12-31-01_images_00038.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00039.zip">images/2024-01-29-12-31-01_images_00039.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00040.zip">images/2024-01-29-12-31-01_images_00040.zip</a> <span class="file_size">(9.8 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00041.zip">images/2024-01-29-12-31-01_images_00041.zip</a> <span class="file_size">(10.0 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00042.zip">images/2024-01-29-12-31-01_images_00042.zip</a> <span class="file_size">(10.1 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00043.zip">images/2024-01-29-12-31-01_images_00043.zip</a> <span class="file_size">(10.2 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00044.zip">images/2024-01-29-12-31-01_images_00044.zip</a> <span class="file_size">(10.5 GiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/2024-01-29-12-31-01_images_00045.zip">images/2024-01-29-12-31-01_images_00045.zip</a> <span class="file_size">(987.8 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/camera.csv">images/camera.csv</a> <span class="file_size">(12.8 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/image_files.csv">images/image_files.csv</a> <span class="file_size">(57.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/image_shards.csv">images/image_shards.csv</a> <span class="file_size">(8.0 KiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/images/manifest.json">images/manifest.json</a> <span class="file_size">(534 B)</span></li>
</ul>

### Land-cover annotations

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/landcover/2024-01-29-12-31-01_corine_land_cover.zip">landcover/2024-01-29-12-31-01_corine_land_cover.zip</a> <span class="file_size">(4.3 GiB)</span></li>
</ul>

### Metadata

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/meta/image_bounding_boxes.csv">meta/image_bounding_boxes.csv</a> <span class="file_size">(34.1 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/meta/semantic_coverage.csv">meta/semantic_coverage.csv</a> <span class="file_size">(42.2 MiB)</span></li>
</ul>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/barometer.csv">barometer.csv</a> <span class="file_size">(23.9 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/camera.csv">camera.csv</a> <span class="file_size">(12.4 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/gps_hdt.csv">gps_hdt.csv</a> <span class="file_size">(4.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/gps_pos_vel.csv">gps_pos_vel.csv</a> <span class="file_size">(15.3 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/imu.csv">imu.csv</a> <span class="file_size">(691.3 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/ins.csv">ins.csv</a> <span class="file_size">(722.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/2024-01-29-12-31-01/magnetometer.csv">magnetometer.csv</a> <span class="file_size">(79.1 MiB)</span></li>
</ul>

</details>

<details markdown="1" class="download_campaign">
<summary><strong>Global metadata</strong> — 5 files, 0.0 GiB</summary>

### Core sensor files

<ul class="download_list">
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/meta/available_tiles_nrw.csv">available_tiles_nrw.csv</a> <span class="file_size">(315.2 KiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/meta/corine_landcover_superclasses.json">corine_landcover_superclasses.json</a> <span class="file_size">(647 B)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/meta/historic_tiles_rlp.json">historic_tiles_rlp.json</a> <span class="file_size">(7.6 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/meta/tile_acquisition_dates_nrw.csv">tile_acquisition_dates_nrw.csv</a> <span class="file_size">(6.7 MiB)</span></li>
  <li><a href="https://ltc-downloads-394266643128.s3.eu-central-1.amazonaws.com/files/meta/tile_acquisition_dates_rlp.csv">tile_acquisition_dates_rlp.csv</a> <span class="file_size">(1.6 MiB)</span></li>
</ul>

</details>

---
title: IMU Noise Modeling
category: Sensors
---

Inertial measurement units (IMUs) are used in many SLAM procedures. In most cases, noise parameters must be specified for the IMU used. But what exactly do these parameters actually refer to?

<!-- more -->

IMUs with six degrees of freedom (6-DoF) consist of an accelerometer and a gyroscope. These measure the acceleration (\(m/sec^2\)) and the angular velocity (\(rad/sec\)) along three Cartesian axes in the sensor frame. The earliest IMUs were mechanical gyroscopes and accelerometers, used primarily in aviation and marine navigation. In the 1950s and 1960s, the first strap-down IMUs for guided missile technology were introduced, with bulky and expensive components that relied on precision machining and analog electronics. In the 1970s and 1980s, the first solid-state gyroscopes and accelerometers using piezoelectric and vibrating structure technologies were developed. These were smaller, more reliable, and less expensive than mechanical predecessors. The emergence of Micro-Electro-Mechanical Systems (MEMS) revolutionized IMUs in the 1990s, enabling the miniaturization of sensors. MEMS IMUs became significantly cheaper, smaller, and more power-efficient, allowing for widespread commercial use. Today, MEMS-based IMUs are standard and are constantly being developed further.

## IMU measurement model

TODO.
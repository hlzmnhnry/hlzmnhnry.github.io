---
title: IMU Noise Modeling
category: Sensors
---

Inertial measurement units (IMUs) are used in many SLAM procedures. In most cases, noise parameters must be specified for the IMU used. But what exactly do these parameters actually refer to?

<!-- more -->

<p>IMUs with six degrees of freedom (6-DoF) consist of an accelerometer and a gyroscope. These measure the acceleration (\(m/sec^2\)) and the angular velocity (\(rad/sec\)) along three Cartesian axes in the sensor frame. The earliest IMUs were mechanical gyroscopes and accelerometers, used primarily in aviation and marine navigation. In the 1950s and 1960s, the first strap-down IMUs for guided missile technology were introduced, with bulky and expensive components that relied on precision machining and analog electronics. In the 1970s and 1980s, the first solid-state gyroscopes and accelerometers using piezoelectric and vibrating structure technologies were developed. These were smaller, more reliable, and less expensive than mechanical predecessors. The emergence of Micro-Electro-Mechanical Systems (MEMS) revolutionized IMUs in the 1990s, enabling the miniaturization of sensors. MEMS IMUs became significantly cheaper, smaller, and more power-efficient, allowing for widespread commercial use. Today, MEMS-based IMUs are standard and are constantly being developed further.</p>

## IMU measurement model

<p>If sensors were error-free, this would make many things in robotics (and beyond) easier. But as is also the case with other sensors, IMU measurements are subject to errors. A distinction can be made between systematic errors and random noise. The <b>bias</b> is a systematic error that leads to a constant or slowly changing offset of the measured values. <b>White noise</b>, on the other hand, has no systematic tendency and is mainly caused by thermal noise and other random electronic fluctuations within the sensor circuit. White noise leads to a spread of the measured values around the true value, resulting in unsharp or noisy signal output. Taking the bias and white noise into account, the accelerometer measurement at time \(t\) can be modeled as follows:</p>

<p>\[\tilde{a}(t)_a = a(t)_a - R_{aw}(t) \cdot g_w + b_a^a(t) + \eta_a^a(t) \]</p>

<p>Here, \(\tilde{a}(t)_a\) is the measured acceleration in the accelerometer frame, and \(a(t)_a\) is the true acceleration within the accelerometer frame without considering gravity. \(R_{aw}(t)\) is the rotation matrix that rotates the gravity vector \(g_w\) from the world frame to the acceleromter frame. \(b_a^a(t)\) and \eta_a^a(t) are the accelerometer bias and white noise in the acceleromter frame. The gyroscope measurements can be modeled similarly: </p>

<p>\[\tilde{\omega}(t)_g = \omega(t)_g + b_g^g(t) + \eta_g^g(t) \]</p>

<p>All quantities of the accelerometer can be found equally in the gyroscope, except for gravity. The question now arises as to how the quantities \(b_a^a(t)\), \(b_g^g(t)\) and \(\eta_a^a(t)\), \(\eta_g^g(t)\) are characterized.</p>

## Bias

<p>Starting with the bias, it might seem confusing to model the bias to be time-dependent, since it can be considered as a constant offset. Then the bias would be modeled by a constant \(b(t) = b_0\) (<b>constant bias error</b>). However, the bias also has a dynamic component: the random walk of the bias, described by the <b>rate random walk (RRW)</b> \(\sigma_b\). Then the bias becomes:</p>

<p>\[b(t + \Delta t) = b(t) + \eta_b(t)\] with \[\eta_b(t) \sim \mathcal{N}(0,\,\sigma_b^{2})\]</p>

<p>The RRW describes the small random changes (or the drift) of the bias. Considering the evolution of the bias, the value to be subtracted from the measurement can change over time. The RRW is specified in the unit \(\frac{rad}{sec^2} \cdot \frac{1}{\sqrt{Hz}} = \frac{rad}{sec^{1.5}}\) for gyroscopes and in \(\frac{m}{sec^3} \cdot \frac{1}{\sqrt{Hz}} = \frac{m}{sec^{2.5}}\) for accelerometers.</p>



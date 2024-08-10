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

<p>Here, \(\tilde{a}(t)_a\) is the measured acceleration in the accelerometer frame, and \(a(t)_a\) is the true acceleration within the accelerometer frame without considering gravity. \(R_{aw}(t)\) is the rotation matrix that rotates the gravity vector \(g_w\) from the world frame to the acceleromter frame. \(b_a^a(t)\) and \(\eta_a^a(t)\) are the accelerometer bias and white noise in the acceleromter frame. The gyroscope measurements can be modeled similarly: </p>

<p>\[\tilde{\omega}(t)_g = \omega(t)_g + b_g^g(t) + \eta_g^g(t) \]</p>

<p>All quantities of the accelerometer can be found equally in the gyroscope, except for gravity. The question now arises as to how the quantities \(b_a^a(t)\), \(b_g^g(t)\) and \(\eta_a^a(t)\), \(\eta_g^g(t)\) are characterized.</p>

## Bias

<p>Starting with the bias, it might seem confusing to model the bias to be time-dependent, since it can be considered as a constant offset. Then the bias would be modeled by a constant \(b(t) = b_0\) (<b>constant bias error</b>). However, the bias also has a dynamic component: the random walk of the bias, described by the <b>rate random walk (RRW)</b> \(\sigma_b\). Then the bias becomes:</p>

<p>\[b(t + \Delta t) = b(t) + \eta_b(t)\] with \[\eta_b(t) \sim \mathcal{N}(0,\,\sigma_b^{2})\]</p>

<p>The RRW describes the small random changes (or drift) of the bias and is often called <b>brown noise term</b> (more on that later). Considering the evolution of the bias, the value to be subtracted from the measurement can change over time. If this development is neglected, an offset is integrated over time and the integrated pose estimate drifts. The RRW is specified in the unit \(\frac{rad}{sec^2} \cdot \frac{1}{\sqrt{Hz}} = \frac{rad}{sec^{1.5}}\) for gyroscopes and in \(\frac{m}{sec^3} \cdot \frac{1}{\sqrt{Hz}} = \frac{m}{sec^{2.5}}\) for accelerometers. In tools like <a href="https://github.com/ethz-asl/kalibr/wiki/IMU-Noise-Model">kalibr</a> the RRW affecting the bias is called <i>gyroscope_random_walk</i> and <i>accelerometer_random_walk</i>, respectively.</p>

## White noise

<p>In addition to the bias, there the white noise (\(\eta_a^a(t)\), \(\eta_g^g(t)\)) to consider. This is not a systematic error but is assumed to be random noise. The sensor output signal is perturbed by a type of thermo-mechanical noise fluctuating in a bigger rate than the sample rate of the sensor, called <b>angle/velocity random walk (ARW/VRW)</b>. So, these are not (slowly changing) constants which need to be substracted from the measurements, but random quantities. They are modeled as Gaussian distributions with zero mean:</p> 

<p>\[\eta_a^a(t) \sim \mathcal{N}(0,\,\sigma_a^2), \qquad \eta_g^g(t) \sim \mathcal{N}(0,\,\sigma_g^2)\]</p>

<p>The ARW and VRW are specified in \(\frac{rad}{sec} \cdot \frac{1}{\sqrt{Hz}} = \frac{rad}{sec^{0.5}}\) for gyroscopes and in \(\frac{m}{sec^2} \cdot \frac{1}{\sqrt{Hz}} = \frac{m}{sec^{1.5}}\) for accelerometers. Derived from their naming conventions, these quantities cause random deviations in angle or velocity when they are integrated over time. In <a href="https://github.com/ethz-asl/kalibr/wiki/IMU-Noise-Model">kalibr</a> the ARW and VRW are called <i>gyroscope_noise_density</i> and <i>accelerometer_noise_density</i>.</p>
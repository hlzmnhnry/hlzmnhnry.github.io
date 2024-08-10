---
title: IMU Noise Modeling
category: Sensors
---

Inertial measurement units (IMUs) are used in many SLAM procedures. In most cases, noise parameters must be specified for the IMU used. But what exactly do these parameters actually refer to?

<!-- more -->

<p>IMUs with six degrees of freedom (6-DoF) consist of an accelerometer and a gyroscope. These measure the acceleration (\(m/sec^2\)) and the angular velocity (\(rad/sec\)) along three Cartesian axes in the sensor frame. The earliest IMUs were mechanical gyroscopes and accelerometers, used primarily in aviation and marine navigation. In the 1950s and 1960s, the first strap-down IMUs for guided missile technology were introduced, with bulky and expensive components that relied on precision machining and analog electronics. In the 1970s and 1980s, the first solid-state gyroscopes and accelerometers using piezoelectric and vibrating structure technologies were developed. These were smaller, more reliable, and less expensive than their mechanical predecessors. The emergence of Micro-Electro-Mechanical Systems (MEMS) revolutionized IMUs in the 1990s, enabling the miniaturization of sensors. MEMS IMUs became significantly cheaper, smaller, and more power-efficient, allowing for widespread commercial use. Today, MEMS-based IMUs are standard and are constantly being developed further.</p>

## IMU measurement model

<p>If sensors were error-free, this would make many things in robotics (and beyond) easier. But as is also the case with other sensors, IMU measurements are subject to errors. A distinction can be made between systematic errors and random noise. The <b>bias</b> is a systematic error that leads to a constant or slowly changing offset of the measured values. <b>White noise</b>, on the other hand, has no systematic tendency and is mainly caused by thermal noise and other random electronic fluctuations within the sensor circuit. White noise leads to a spread of the measured values around the true value, resulting in unsharp or noisy signal output. Taking the bias and white noise into account, the accelerometer measurement at time \(t\) can be modeled as follows:</p>

<p>\[\tilde{a}(t)_a = a(t)_a - R_{aw}(t) \cdot g_w + b_a^a(t) + \eta_a^a(t) \]</p>

<p>Here, \(\tilde{a}(t)_a\) is the measured acceleration in the accelerometer frame, and \(a(t)_a\) is the true acceleration within the accelerometer frame without considering gravity. \(R_{aw}(t)\) is the rotation matrix that rotates the gravity vector \(g_w\) from the world frame to the accelerometer frame. \(b_a^a(t)\) and \(\eta_a^a(t)\) are the accelerometer bias and white noise in the accelerometer frame. The gyroscope measurements can be modeled similarly: </p>

<p>\[\tilde{\omega}(t)_g = \omega(t)_g + b_g^g(t) + \eta_g^g(t) \]</p>

<p>All quantities of the accelerometer can be found equally in the gyroscope, except for gravity. The question now arises as to how the quantities \(b_a^a(t)\), \(b_g^g(t)\) and \(\eta_a^a(t)\), \(\eta_g^g(t)\) are characterized.</p>

## Bias

<p>Starting with the bias, it might seem confusing to model the bias as time-dependent, since it can be considered as a constant offset. Then the bias would be modeled by a constant \(b(t) = b_0\) (<b>constant bias error</b>). However, the bias also has a dynamic component: the random walk of the bias, described by the <b>rate random walk (RRW)</b>. Then the bias becomes:</p>

<p>\[b(t + \Delta t) = b(t) + \eta_b(t), \qquad \eta_b(t) \sim \mathcal{N}(\bm{0},\,\Sigma_b)\]</p>

<p>Here, \(\Sigma_b\) is a diagonal covariance matrix with \(\sigma_{b,x}^2, \sigma_{b,y}^2, \sigma_{b,z}^2\) on its diagonal. \(\sigma_{b,x}, \sigma_{b,y}, \sigma_{b,z}\) are the standard deviations of the bias random walk for all three Cartesian axes. The RRW describes the small random changes (or drift) of the bias and is often called <b>brown noise term</b>. Considering the evolution of the bias, the value to be subtracted from the measurement can change over time. If this development is neglected, an offset is integrated over time, and the integrated pose estimate drifts. The RRW is specified in the unit \(\frac{rad}{sec^2} \cdot \frac{1}{\sqrt{Hz}} = \frac{rad}{sec^{1.5}}\) for gyroscopes and in \(\frac{m}{sec^3} \cdot \frac{1}{\sqrt{Hz}} = \frac{m}{sec^{2.5}}\) for accelerometers. In tools like <a href="https://github.com/ethz-asl/kalibr/wiki/IMU-Noise-Model">kalibr</a> the RRW affecting the bias is called <i>gyroscope_random_walk</i> and <i>accelerometer_random_walk</i>, respectively. In kalibr and many SLAM applications, only one standard deviation is provided for the bias random walk (and other noise quantities). This is done to simplify the model further by assuming the noise to be similar along all axes. This can be achieved, for instance, by taking the mean value of all standard deviations. </p>

## White noise

<p>In addition to the bias, the white noise (\(\eta_a^a(t)\), \(\eta_g^g(t)\)) is to be considered. This is not a systematic error but is assumed to be random noise. The sensor output signal is perturbed by a type of thermo-mechanical noise fluctuating at a higher rate than the sample rate of the sensor, called <b>angle/velocity random walk (ARW/VRW)</b>. So, these are not (slowly changing) constants that need to be substracted from the measurements, but random quantities. They are modeled as Gaussian distributions with zero mean:</p> 

<p>\[\eta_a^a(t) \sim \mathcal{N}(\bm{0},\,\Sigma_a^2), \qquad \eta_g^g(t) \sim \mathcal{N}(\bm{0},\,\Sigma_g^2)\]</p>

<p>The ARW and VRW are specified in \(\frac{rad}{sec} \cdot \frac{1}{\sqrt{Hz}} = \frac{rad}{sec^{0.5}}\) for gyroscopes and in \(\frac{m}{sec^2} \cdot \frac{1}{\sqrt{Hz}} = \frac{m}{sec^{1.5}}\) for accelerometers. Derived from their naming conventions, these quantities cause random deviations in angle or velocity when they are integrated over time. In <a href="https://github.com/ethz-asl/kalibr/wiki/IMU-Noise-Model">kalibr</a> the ARW and VRW are called <i>gyroscope_noise_density</i> and <i>accelerometer_noise_density</i>.</p>

## Power Spectral Density of noise

<p>So, there is white noise and brown noise affecting IMU measurements. In addition to these two noise parameters, there is also pink noise: the so-called <b>bias instability</b> (or <b>in-run stability</b>). This <a href="https://en.wikipedia.org/wiki/Colors_of_noise">color of noise</a> is typically not considered in many SLAM methods because it is harder to predict and, in SLAM scenarios, usually has an effect that is small enough to be neglected. Nevertheless, for the sake of completeness, it is also of interest to have a short look at it.</p>

<p>The bias instability is given in \(\frac{rad}{sec}\) and \(\frac{m}{sec^2}\). It manifests as a slowly varying error in the sensor's output, which means that the sensor's reading might drift gradually away from the true value over time. This drift is not random in the short term but appears to be a wandering or random walk of the bias over longer periods. Modeling pink noise often requires more complex algorithms that are more difficult to implement and calculate for real-time applications. SLAM methods need to work in real time, so usually a simpler model is chosen.</p>

<p>All these colors of noise can be characterized by analyzing the power spectral density (PSD) of (IMU) noise. If \(\eta\) is the overall IMU noise, then \(S_\eta(f)\) describes the PSD of noise as a function of the frequency \(f\):</p>

<p>\[S_\eta(f) = N^2 + \frac{B^2}{2 \pi f} + \frac{K^2}{(2 \pi f)^2} \]</p>

<p>It can be assumed that these frequency components are statistically independent. Therefore, the noise signal \(\eta(t)\) can be modeled to consist of white (\(N\)), brown \(B\) and pink (\(K\)) noise:</p>

<p>\[ \eta(t) = \eta_N(t) + \eta_B(t) + \eta_K(t) \]</p>

<p>To determine all IMU noise parameters commonly used in SLAM methods (i.e., ARW, VRW and RRW) the <a href="https://en.wikipedia.org/wiki/Allan_variance">Allan variance</a> can be used. In order not to exceed the scope of this article, the Allan variance will be discussed in detail in a future article.</p>


## Further reading and sources

1. <a href="https://github.com/ethz-asl/kalibr/wiki/IMU-Noise-Model">https://github.com/ethz-asl/kalibr/wiki/IMU-Noise-Model</a>
2. <a href="https://stanford.edu/class/ee267/lectures/lecture9.pdf">https://stanford.edu/class/ee267/lectures/lecture9.pdf</a>
3. <a href="https://www.tangramvision.com/blog/stochastic-imu-error-modeling#angular-random-walk-and-velocity-random-walk">https://www.tangramvision.com/blog/stochastic-imu-error-modeling#angular-random-walk-and-velocity-random-walk</a>
4. <a href="https://github.com/ori-drs/allan_variance_ros">https://github.com/ori-drs/allan_variance_ros</a>
5. <a href="https://upcommons.upc.edu/bitstream/handle/2117/103849/MScLeslieB.pdf?sequence=1&isAllowed=y">https://upcommons.upc.edu/bitstream/handle/2117/103849/MScLeslieB.pdf?sequence=1&isAllowed=y</a>
6. <a href="https://nitinjsanket.github.io/tutorials/attitudeest/kf">https://nitinjsanket.github.io/tutorials/attitudeest/kf</a>
7. <a href="https://de.mathworks.com/help/nav/ug/inertial-sensor-noise-analysis-using-allan-variance.html">https://de.mathworks.com/help/nav/ug/inertial-sensor-noise-analysis-using-allan-variance.html</a>

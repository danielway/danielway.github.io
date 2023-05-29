---
layout: project.njk
tags: projects

title: NEXRAD Decoder
image: /images/nexrad_flat.png
description: Weather radar decoder to be used for
  volumetric rendering of reflectivity/velocity data.

eleventyNavigation:
  key: NEXRAD
  parent: Projects
---

Decoder for the WSR-88D's Radar Data Acquisition system's Level II weather data
written in Rust. This decoder will allow me to decompress and decode radar data
to be cached for fast access when generating volumetric renders.

[GitHub Repository](https://github.com/danielway/nexrad)

<img src="/images/nexrad_flat.png" alt="NEXRAD" width="500px" />

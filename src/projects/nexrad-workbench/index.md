---
layout: project.njk
createdDate: 2026-05-30
updatedDate: 2026-05-30
title: NEXRAD Workbench
image: /images/nexrad_workbench_2d.png
description: A browser-based workbench for visualizing and analyzing NEXRAD
  weather radar — built in Rust, compiled to WebAssembly, running entirely
  client-side.
githubRepo: danielway/nexrad-workbench
---

A browser-based workbench for visualizing and analyzing NEXRAD (WSR-88D) weather
radar data. It's written in Rust, compiled to WebAssembly, and runs **entirely
client-side** — every fetch and computation happens in your browser, with no
backend services. It's built on top of my [NEXRAD crate
suite](/projects/nexrad/).

<a href="https://danielway.github.io/nexrad-workbench/">▶ Open the live workbench</a>

<img src="/images/nexrad_workbench_2d.png" alt="NEXRAD Workbench 2D reflectivity view with storm cell detection" width="600px" />

You can **browse and download historical volumes from AWS S3** or **stream live
data as the radar produces it**. A zoomable timeline visualizes data
availability and supports scrubbing, range selection for batch downloads, and
variable-speed playback — in real-time mode, playback locks to the leading edge
of the incoming stream while still letting you scrub back through history.

All seven Level&nbsp;II products are available — reflectivity, velocity, spectrum
width, differential reflectivity, correlation coefficient, differential phase,
and clutter filter power — with an inspector for reading exact gate values, a
distance tool, and configurable **storm-cell detection** that outlines cells and
marks their centroids above a chosen dBZ threshold.

<img src="/images/nexrad_workbench_3d.png" alt="NEXRAD Workbench 3D globe view with volumetric rendering" width="600px" />

Beyond the 2D map, a **3D globe view** ray-marches the stacked sweeps into a
volumetric rendering of the storm. Under the hood it leans on egui for the UI
and WebGL2 for graphics, and uses a "fat worker" architecture: heavy decoding
and processing run on a dedicated Web Worker so the UI thread stays responsive,
with decoded sweeps cached in IndexedDB for instant timeline scrubbing.

[Live Demo](https://danielway.github.io/nexrad-workbench/) ·
[GitHub Repository](https://github.com/danielway/nexrad-workbench)

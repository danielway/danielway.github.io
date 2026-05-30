---
layout: project.njk
order: 5
createdDate: 2023-04-15
updatedDate: 2026-05-24
title: NEXRAD
image: /images/nexrad_composite.png
description: A Rust suite of crates for accessing, decoding, processing, and
  rendering WSR-88D (NEXRAD) weather radar data.
githubRepo: danielway/nexrad
---

A Rust toolkit for working with the United States' network of WSR-88D weather
radar sites. What began as a single Level&nbsp;II decoder has grown into a
workspace of focused crates that take raw NOAA Archive&nbsp;II volumes all the
way through to rendered reflectivity imagery, each published to
[crates.io](https://crates.io/crates/nexrad) and documented on
[docs.rs](https://docs.rs/nexrad).

<img src="/images/nexrad_composite.png" alt="Composite reflectivity render produced by nexrad-render" width="500px" />

The suite is split into composable crates so you can pull in only what you need:

- **`nexrad`**: the umbrella crate offering ergonomic APIs for accessing,
  decoding, and processing radar data, gated behind feature flags.
- **`nexrad-model`**: a common, well-documented data model for radar volumes,
  sweeps, radials, and gates, approachable without prior knowledge of the
  Archive&nbsp;II format.
- **`nexrad-decode`**: binary decoding that follows NOAA's WSR-88D Interface
  Control Document.
- **`nexrad-data`**: download and file I/O, including pulling archival and
  real-time volumes from AWS S3.
- **`nexrad-process`**: processing algorithms for cleaning and analyzing radar
  data.
- **`nexrad-render`**: turns decoded sweeps into visual images with
  configurable color scales.
- **`nexrad-inspector`**: an interactive terminal UI for inspecting Archive&nbsp;II
  volume files locally or from AWS.

Feature flags keep the dependency footprint small and make the core
`nexrad-model` and `nexrad-decode` crates **WASM-compatible**, and the same code
powers [NEXRAD Workbench](/projects/nexrad-workbench/), a browser-based viewer
built on top of this suite.

<img src="/images/nexrad_composite_zoom.png" alt="Zoomed composite reflectivity detail" width="500px" />

---
layout: project.njk
createdDate: 2023-04-16
updatedDate: 2025-06-19
title: NEXRAD
image: /images/nexrad_flat.png
description: Modern Rust toolkit for decoding, accessing, and visualizing NEXRAD weather radar data.
githubRepo: danielway/nexrad
---
The NEXRAD crate is a modern Rust toolkit designed to make working with weather radar data accessible, efficient, and reliable. By abstracting away the complexities of the NOAA Archive II format, this project aims to make it easier for developers, researchers, and enthusiasts to work with high-resolution atmospheric data.

<img src="/images/nexrad_flat.png" alt="NEXRAD" width="300" />

## Overview

The United States' NEXRAD network of Doppler weather radars generates detailed, real-time data on precipitation, wind, and storm structure. However, the raw data—encoded in the NOAA Archive II format—is notoriously difficult to work with due to its binary structure, compression layers, and domain-specific encoding.

The NEXRAD crates attempt to bridge this gap by providing:
- Robust decoding and validation of radar messages
- Decompression (bzip2) and binary parsing compliant with WSR-88D ICD specifications
- Support for key radar products (reflectivity, velocity, spectrum width, and more)
- Accurate coordinate transformations and data scaling
- Clean, ergonomic APIs for easy integration into Rust applications

## Architecture

The toolkit is organized as a monorepo, with each crate focused on a specific aspect of radar data processing:

- **nexrad-model**: Core data structures and shared representations
- **nexrad-decode**: Binary parsing and decompression logic
- **nexrad-data**: Data access, downloading, and caching
- **nexrad-render**: Visualization tools for transforming and rendering radar data

This modular approach ensures flexibility—use only what you need, or combine crates for a full-featured solution.

## Why this project?

This project began as a foundation for volumetric storm visualizations, but quickly evolved to address broader challenges in the Rust ecosystem: performance, usability, and extensibility. NEXRAD aims to serve a wide range of applications, from educational tools to advanced research and real-time visualization.

## Roadmap

Future enhancements may include:

- **Advanced Rendering**: Higher-performance, visually rich radar visualizations
- **NEXRAD Workbench**: An interactive, browser-based platform for real-time data exploration and analysis
- **Machine Learning Integration**: Foundational algorithms for tornado detection and radar signature analysis

The ultimate goal is to deliver a comprehensive platform where users can explore, analyze, and visualize live weather radar data—without wrestling with low-level details.

---

Interested in contributing or learning more? [Explore the code on GitHub](https://github.com/danielway/nexrad), open an issue, or reach out with your ideas and feedback!

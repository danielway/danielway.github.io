---
layout: project.njk
order: 7
createdDate: 2021-03-27
updatedDate: 2026-04-13
title: tty-interface
image: /images/tty-interface.png
description: A Rust library providing simple TTY-based user interface
  capabilities, including partial re-renders of multi-line terminal displays.
githubRepo: danielway/tty-interface
---

tty-interface is a small Rust library for building interactive terminal
interfaces. It manages a multi-line display and applies **partial re-renders**,
diffing the desired state against what's currently on screen and emitting only
the cursor movements and writes needed to update it, rather than clearing and
redrawing everything. It's [published on crates.io](https://crates.io/crates/tty-interface)
and documented on [docs.rs](https://docs.rs/tty-interface).

I extracted it while building [git-cc](/projects/git-cc/), where it powers the
step-by-step interactive prompts. Pulling the rendering concerns out into a
focused, reusable crate kept the TTY logic separate from the commit-authoring
flow and gave me a clean foundation I could reuse across other terminal tools.

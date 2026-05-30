---
layout: doodle.njk
createdDate: 2026-05-30
updatedDate: 2026-05-30
title: Particle Sandbox
description: "A falling-sand cellular automaton: paint a couple dozen materials and watch them flow, burn, freeze, dissolve, and explode into one another."
model: Claude Opus 4.8
tool: Claude Code
appFile: /assets/doodles/particle-sandbox.html
image: /images/doodles/particle-sandbox.png
height: 600px
prompts:
  - >-
    I want to add a doodle for a little particle sandbox game. The user can pick from a
    range of materials, and then they can paint those materials into the canvas. The canvas
    is a simulator playing forward in time, and the materials immediately begin being
    simulated as they're painted. The different kinds of particles interact with each other.
    Particles/materials might include wood, metal, sand, wind/fan, lava, stone, wall,
    gunpowder, and any other materials that might be fun in a sandbox environment like this.
    Particle interactions might include wood catching fire, lava and water combining to turn
    into stone, gunpowder encountering fire and exploding destroying nearby materials,
    wind/fan kicking-up sand in the air, etc. There should be a wide range of materials and
    interactions, so be creative!
---

Pick a material, then click and drag to paint it straight into a world that's always
simulating. Everything obeys a little cellular-automaton physics: powders pile, liquids
find their level (and layer by density, so oil floats on water), gases rise and fade.

The fun is in the **interactions**:

- **Fire** spreads to anything flammable (wood, oil, plant, coal, seeds) and is doused by water (with a puff of steam).
- **Lava** sets fire to its neighbours, melts metal, fuses sand into glass, and (the classic) hardens into **stone** the instant it touches water, which flashes to steam.
- **Gunpowder** detonates on contact with any flame or lava, carving a crater and chaining into nearby powder.
- **Acid** eats through most things (but not glass or walls, so build a container).
- **Water → steam → water:** boiled water rises, cools, and rains back down.
- **Fans** blow an updraft that kicks powders and lights into the air; drop a fan under a dune for a sand fountain.
- **Seeds** sprout into **plants** near water; plants creep along anything wet; **salt** dissolves in water and melts ice.
- **Cloner** learns the first material that touches it and emits an endless supply.

Tips: scroll on the canvas to resize the brush, `space` to pause, right-drag (or the
Eraser) to remove. The world starts with a small diorama, so try setting the trees alight,
or dropping lava into the pond.

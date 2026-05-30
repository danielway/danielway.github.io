---
layout: doodle.njk
createdDate: 2026-05-30
updatedDate: 2026-05-30
title: Orbital Ascent
description: "Fly a rocket from the pad to a stable orbit: pick a vehicle, run the gravity turn, drop spent stages, and trim your throttle against honest-to-goodness orbital mechanics and atmospheric drag. Overshoot and you escape into deep space; undershoot and you fall back to the surface."
model: Claude Opus 4.8
tool: Claude Code
appFile: /assets/doodles/orbital-ascent.html
image: /images/doodles/orbital-ascent.png
height: 680px
prompts:
  - >-
    Let's create a new doodle for a rocket launch orbit simulator. The user selects their
    rocket, they launch, and they command their rocket's movement, staging, and rocket
    throttle in an attempt to reach orbit. They may overshoot (leave orbit) or undershoot
    (crash back down). There should be several different rocket configurations with a mix of
    liquid and solid motors. We will want to support basic orbital mechanics, and also
    simulate basic atmospheric effects like drag against the rocket.
---

Pick a rocket, ride the countdown, and fly it to orbit. The whole game is the **gravity
turn**: climb straight up out of the thick lower air, then gradually pitch east and trade
vertical climb for the *sideways* speed that orbit is actually made of. Keep burning until
your **periapsis** (the low point of your projected path, drawn live in front of you)
rises clear of the atmosphere. Hold the burn too long and you'll fling yourself onto an
escape trajectory; cut it too early and the planet reels you back in.

**Controls** (keyboard, or the on-screen buttons for touch):

- **A / D** (or ← →): steer, pitching the nose left and right
- **W / S** (↑ ↓), **Z** full, **X** cut: throttle (liquid engines only)
- **Space**: stage, dropping the spent stage and lighting the next
- **T**: cycle attitude hold between **prograde** (point along your velocity), **retrograde** (point backward, to slow down), and off
- **,** and **.**: time warp, for the long coast up to apoapsis
- **P**: pause

### Four vehicles, two kinds of motor

The fleet is a deliberate spread of the liquid/solid trade-off:

- **Comet I**: a forgiving all-liquid trainer. Both stages throttle freely and can be shut
  down and relit, with delta-v to spare.
- **Ember**: a solid booster slings you off the pad at full thrust (no throttle, no
  shutdown, so *commit*), then a nimble liquid upper stage does the delicate circularization.
- **Titan Heavy**: three liquid stages and brute delta-v. Easy to reach orbit, and just as
  easy to blow right past it into a hyperbolic escape if you don't ease off.
- **Firecracker**: three solid motors and *zero* throttle. All you control is the steering
  and **when** to light each motor. The trick is to coast between stages and ignite the next
  one near apoapsis. Expert mode.

**Liquid** engines throttle from 0–100% and restart at will. **Solid** motors, once lit,
burn flat-out until they're empty and can't be shut off, so with solids your only real
levers are attitude and ignition timing.

### What's actually being simulated

It's a real little orbital sandbox, not a scripted animation:

- **Inverse-square gravity** around a planet (Kerbin-scale: 600 km radius, 9.81 m/s² at the
  surface), integrated with a symplectic step so orbits stay stable.
- **Live trajectory projection**: every frame it forward-integrates your ballistic coast
  and draws the conic ahead of you: a closed ellipse once you're orbital, an arc to a marked
  impact point when you're not, an open curve when you've gone hyperbolic. Apoapsis and
  periapsis are computed from the orbital elements (energy, eccentricity vector) and tagged
  on the path.
- **An exponential atmosphere** (density falling off with a 5.6 km scale height) and
  quadratic **drag** that opposes your velocity, so go too fast too low and you'll feel it
  bleed your speed and redden the nose with dynamic-pressure heating. The lesson real
  rockets teach: don't fight the thick air, climb above it first.
- **Staging and the rocket equation**: thrust comes only from the active stage, mass drops
  as propellant burns and as you jettison empty stages, so your acceleration climbs through
  each burn exactly as it should.

The camera follows you in close for the ascent and smoothly pulls back to frame the whole
planet and your orbit once you're up there. **Reaching a stable orbit is genuinely the
goal**, and missing it in both directions (a fiery re-entry, or sailing off into the dark)
is half the fun.

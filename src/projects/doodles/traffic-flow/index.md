---
layout: doodle.njk
createdDate: 2026-05-31
updatedDate: 2026-05-31
title: Traffic Flow
description: "A top-down city that generates its own road network — arterials and side streets, traffic lights, stop signs, and roundabouts — then fills it with cars that follow real car-following rules. Jams, shockwaves, and rush hours all emerge; drop an incident and watch a queue ripple backward."
model: Claude Opus 4.8
tool: Claude Code
appFile: /assets/doodles/traffic-flow.html
image: /images/doodles/traffic-flow.png
height: 680px
prompts:
  - >-
    Let's create a doodle of traffic flow. The simulator is a top-down view of a road network.
    The network includes procedurally-generated roads with various characteristics including
    speed, lane count, and numerous intersection types such as stop signs, traffic lights with
    and without turn lanes, round-abouts, etc. The simulator should show individual agents with
    acceleration/braking rules that lead to emergent behaviors like traffic jams. There can be
    macro-level details that fluctuate over time with the simulation, like a simulated day/night
    cycle and the corresponding rush hours that have higher levels of traffic impacting the
    system.
---

Nobody in this city is steering toward a jam, yet jams keep happening. That's the whole point.
Every car is running the **same myopic rule** — *keep a safe distance, don't exceed the limit,
ease off when the car ahead does* — and traffic jams, stop-and-go shockwaves, and gridlocked
intersections all fall out of that rule colliding with finite road space.

### The car-following rule

Each vehicle is an independent agent governed by the **Intelligent Driver Model**, the workhorse
of microscopic traffic simulation. On every frame a car computes its acceleration from just three
things it can "see": its own speed, the gap to the car ahead, and how fast that gap is closing.

- It wants to reach the road's speed limit, so on open road it accelerates toward it.
- It maintains a **desired gap** that grows with speed (a roughly constant *time* headway, plus a
  minimum standstill gap). Close that gap and it brakes; open it up and it accelerates.
- The braking term is asymmetric and sharp — exactly the ingredient that turns a single tap of the
  brakes into a wave that propagates *backward* through a line of cars long after the original
  disturbance is gone. Watch a queue at a red light discharge: the front moves, but the back stays
  frozen for a beat, then unsticks in a ripple. That delay is the model, not a scripted animation.

### A road network that builds itself

Hit **🗺️ New map** and the city is regenerated from scratch on a jittered grid, then pruned (while
staying connected) so it never looks like perfect graph paper. Roads come in a hierarchy:

- **Arterials** — multi-lane, higher speed limits, the routes everyone wants.
- **Local streets** — single lane, slower, the connective tissue.

Cars are born at the edges of the map, get a **shortest-time route** to a random exit (a tiny
Dijkstra search that *prefers* arterials and *penalizes* slow intersections — so the main roads
naturally carry more load), and change lanes to line up for their next turn. When they reach the
far edge, they leave.

### Five kinds of intersection, one set of rules

The hard part of any traffic sim is the intersection, and this one generates a realistic mix and
controls them all through a single "may I enter the conflict zone?" question:

- **Traffic lights** cycle through conflict-free phases. Big arterial junctions get **protected left
  turns** — a dedicated phase with its own arrow and turn lane — while simpler lights run
  **permissive lefts**, where a left-turner sits in the box waiting to steal a gap in oncoming
  traffic. (Hover a light with the inspector to see its phase count and which kind it is.)
- **All-way stops** run a first-come-first-served queue: everyone stops, and the intersection is
  handed out in arrival order.
- **Two-way stops** give the arterial the right of way; the side street has to *accept a gap* before
  creeping out, and even the major road's left-turners must yield to oncoming through traffic.
- **Roundabouts** are built as a real circulating ring: entering cars **yield to whoever's already
  on the ring**, then merge, circulate, and peel off at their exit.
- Gentle bends and through-roads just flow.

Don't like what the city did? Grab the **🚦 Junction** tool and click any intersection to cycle it
between a light, a stop, a two-way, and a roundabout — the geometry rebuilds live and you can watch
the same demand behave completely differently.

### The day has a rhythm

A clock runs overhead. Demand isn't constant — it follows a **commuter curve** with a morning peak
around 8am and a heavier evening peak around 5:30pm, a quiet midday lull, and a near-empty overnight.
Leave **rush hours** on and just watch: the arterials load up, the lights start backing up, the
congestion meter climbs, and then the city exhales. A **day/night cycle** dims the world and flips on
headlights and tail-lights after dark. (Prefer to drive the load yourself? Turn rush hours off and
take the **Demand** slider.)

### Things to try

- **🚧 Incident** — click a busy road to stall a car for a few seconds. One blocked lane is all it
  takes; watch the queue build behind it and the shockwave climb back toward the previous
  intersection. This is how a fender-bender becomes a mile of brake lights.
- **Crank Demand to 200%** during the evening peak and find the junction that fails first — usually
  the one trying to feed an arterial through a single-lane side street.
- **Turn a busy light into an all-way stop** and watch throughput collapse; turn it into a
  roundabout and watch it recover.
- The **congestion sparkline** in the corner is the city's pulse over the last few minutes —
  the twin humps of rush hour show up there before you notice them on the road.

Controls up top tune **Sim** speed, **Clock** speed, and **Demand**; `Space` pauses, `R` regenerates,
and keys `1–3` pick a tool. Everything is one self-contained file — no build, no dependencies, just a
canvas and the rules.

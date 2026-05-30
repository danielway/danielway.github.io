---
layout: doodle.njk
createdDate: 2026-05-30
updatedDate: 2026-05-30
title: Ant Colony
description: A living ant colony that forages by pheromone — trails reinforce, evaporate, and self-organize into the shortest path to food while the nest grows and starves with its harvest. Drop food, wall it off with rock, or pick up the whole colony and move it.
model: Claude Opus 4.8
tool: Claude Code
appFile: /assets/doodles/ant-colony.html
image: /images/doodles/ant-colony.svg
height: 640px
prompts:
  - >-
    I want to create a doodle of a simulated ant colony to observe emergent behavior and
    optimization. The ant colonies should use pheromone-based foraging to discovery shortest
    paths, and demonstrate other emergent behaviors of the colony. There will need to be
    diverse behaviors and some randomness to avoid the colony getting "stuck". The user
    should be able to see the colony physically changing, evolving, and growing over time.
    There should be some ability for the user to interact with the simulated world to
    influence the environment and thus the colony.
---

No ant in here knows where the food is. The shortest path is **not** programmed — it's an
illusion that falls out of thousands of tiny, local decisions. This is
[stigmergy](https://en.wikipedia.org/wiki/Stigmergy): ants coordinate by leaving marks in
the world rather than by talking to each other.

### How the foraging actually works

Every ant runs the same little loop, reading only the patch of ground right in front of it:

- **Two pheromones, laid in opposite directions.** A *searching* ant (pale) lays a
  **to‑home** trail behind it; a *laden* ant (gold, with a green crumb) lays a **to‑food**
  trail. Searchers follow the to‑food scent; carriers follow the to‑home scent — backed by a
  gentle sense of which way the nest lies (real ants do this too — it's called *path
  integration*) so a laden ant never gets hopelessly lost. Each ant smells three points
  ahead — left, centre, right — and steers toward the strongest.
- **Fresh trails are stronger.** The amount of scent an ant drops fades the longer it's been
  travelling, so a *short* round trip lays a *denser* trail than a long, meandering one.
- **Everything evaporates.** Scent decays every frame. A path only survives if ants keep
  re‑walking it — so the wandering dead‑ends quietly disappear and the efficient routes get
  reinforced into bright highways. There's a **boulder** parked between the nest and one
  food source by default: ants stream around both shoulders, and the shorter way past slowly
  out‑competes the longer one. Drop your own **🪨 rock** to re‑route them anywhere.

### Emergence to watch for

- **Shortest‑path optimisation** — give it a minute and two routes to the same food will
  compete; the shorter one wins and the longer fades.
- **A colony with a metabolism.** Delivered food is *stored*, and stored food does two
  things: it **hatches new ants**, and it's slowly **eaten** by the ants you already have.
  Forage well and the population (watch the sparkline) climbs and the nest mound visibly
  grows; wall the colony off from every food source and it will gently **starve back down**.
- **Diversity beats getting stuck.** Ants vary in how boldly they wander, and there's
  always a little noise in every step — so the colony keeps sending scouts into the dark
  instead of marching in a single doomed line. Crank **Wander** up and trails get fuzzy and
  exploratory; turn it down and they snap into thin, committed roads.

### Play with the world

- **🍬 Food** — click or drag to drop food (piles grow as you add). Sources *deplete* as
  they're carried away and shrink to nothing.
- **🪨 Rock** — paint impassable terrain. *Scroll* on the canvas to resize the brush.
- **🏰 Nest** — pick up the entire colony and drop it somewhere new; the old trails strand
  and the ants re‑route from scratch.
- **🧽 Erase** — clear rock, scent, and food.
- **Scatter** flings fresh food across the map; **Evap / Wander / Speed** retune the
  dynamics live; the trail‑layer toggles let you watch each pheromone on its own. `Space`
  pauses, `R` resets, keys `1–4` pick a tool.

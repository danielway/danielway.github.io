---
layout: project.njk
order: 6
createdDate: 2020-06-19
updatedDate: 2026-01-23
title: Task Timer
image: /images/task_timer.png
description: A simple client-side web app for tracking time spent on tasks.
githubRepo: danielway/task-timer
liveUrl: https://tasktimer.danieldway.com/
---

Task Timer is a simple client-side web app for tracking time spent on tasks. You
create tasks and log time against them in 15-minute increments, review the day in
a visually intuitive interface, and navigate between tasks and logged time across
multiple days. It runs entirely in the browser with all data stored in
`localStorage`, so there's no account and no backend.

It's a React and TypeScript app built with Vite, with end-to-end tests in
Playwright and a CI/CD pipeline that deploys it to GitHub Pages. I built it to
scratch a personal itch for low-friction time tracking: a simple record of what
I'd worked on, without the granularity or overhead of a heavier
project-management tool. It's the project I've kept coming back to over the
years, and it remains the one I actually use day to day.

<img src="/images/task_timer.png" alt="Task Timer" width="500px" />

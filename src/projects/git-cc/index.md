---
layout: project.njk
order: 4
createdDate: 2021-02-24
updatedDate: 2023-02-19
title: git-cc
image: /images/git-cc.png
description:
  A Rust CLI for authoring Git commit messages that follow the
  <a href="http://conventionalcommits.org">Conventional Commits</a> specification.
githubRepo: danielway/git-cc
---

git-cc is a small Rust CLI for authoring Git commit messages that follow the
<a href="http://conventionalcommits.org">Conventional Commits</a> specification.
You install the `git-cc` binary on your `PATH`, and because Git picks up
`git-`prefixed binaries as subcommands, it becomes invokable as `git cc`.

Running it presents a terminal interface that guides you through a commit in
three steps. The first step collects the summary line (type, optional scope, and
a description, constrained to 80 characters and lower-cased, with an optional `!`
breaking-change marker). The second accepts an optional multi-line body, capped
at 100 characters per line. The third handles footers: a breaking-change
description and arbitrary key/value trailers like a reviewer or task number. You
move forward with `ENTER`/`Tab`, back with `ESC`/`BackTab`, and quit with
`CTRL+C`. A quick mode (`git cc -q`) collects just the description line, and
`-a` stages all local changes first; the two combine as `-qa`.

I built it to learn Rust and to take the friction out of writing consistent,
structured commit messages. The most interesting part turned out to be the
terminal interface itself: along the way I factored the interactive prompts into
three small, reusable TTY libraries.

<video autoplay loop muted playsinline width="500px">
    <source src="https://user-images.githubusercontent.com/1724257/200127461-176898e8-1216-4c94-bc72-630a2fdb995e.mov" type="video/mp4">
</video>

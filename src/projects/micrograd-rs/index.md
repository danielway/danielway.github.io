---
layout: project.njk
order: 2
createdDate: 2023-02-11
updatedDate: 2023-02-11
title: micrograd-rs
image: /images/micrograd-rs.png
description: A Rust implementation of Andrej Karpathy's micrograd
  engine, a tiny scalar-valued autograd and neural-net library.
githubRepo: danielway/micrograd-rs
---

micrograd-rs is a Rust implementation of Andrej Karpathy's
[micrograd](https://github.com/karpathy/micrograd): a tiny scalar-valued autograd
engine with a small neural-network library on top of it, in the spirit of a
PyTorch-like API. It's [published on crates.io](https://crates.io/crates/micrograd-rs)
and built in CI with GitHub Actions.

I wrote it to understand how reverse-mode autodiff and backpropagation work at the
level of individual scalar operations: each value remembers the operations that
produced it, forming a computation graph that can be walked backwards to
accumulate gradients. On top of that engine sits a minimal library of neurons,
layers, and a multi-layer perceptron you can train with gradient descent. It was
a personal exploration into neural networks, feeding into follow-on experiments
like [nn-sim](https://github.com/danielway/nn-sim), and is meant as a learning
instrument rather than a production tool.

<img src="/images/micrograd-rs.png" alt="micrograd-rs" width="500px" />

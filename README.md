# Lattice

### The public site and binaries for [Lattice Runtime](https://github.com/latticeHQ/latticeRuntime)

**The open-source coordination layer for institutional AI.**

```
brew install latticehq/lattice/lattice
```

This repository contains the public website for [latticeruntime.com](https://latticeruntime.com) and binary releases (no source code).

## The Lattice Ecosystem

Lattice Runtime is the coordination layer that governs how AI agents authenticate, communicate, and operate across an organization — regardless of which models or tools each department uses.

| Component | Role | Repository |
|-----------|------|------------|
| [**Runtime**](https://github.com/latticeHQ/latticeRuntime) | Coordination layer — identity, authorization, audit, budget | [latticeRuntime](https://github.com/latticeHQ/latticeRuntime) |
| [**Workbench**](https://github.com/latticeHQ/latticeWorkbench) | Reference Engineering Stack — multi-model agent workspace | [latticeWorkbench](https://github.com/latticeHQ/latticeWorkbench) |
| [**Inference**](https://github.com/latticeHQ/latticeInference) | Local AI serving — MLX on Apple Silicon, zero-config clustering | [latticeInference](https://github.com/latticeHQ/latticeInference) |
| [**Registry**](https://github.com/latticeHQ/latticeRegistry) | Community ecosystem — Terraform modules, templates, stacks | [latticeRegistry](https://github.com/latticeHQ/latticeRegistry) |
| **Public** (this repo) | Website + binary releases | You are here |

## What Runtime Does

Every agent action passes through four enforcement gates:

1. **Identity** — Cryptographic verification of who or what is acting
2. **Authorization** — RBAC + ABAC policy evaluation
3. **Deployment Constraints** — Structural boundaries on where and how agents execute
4. **Audit** — Immutable, tamper-evident logging of every decision

## Who It's For

- **Developers**: `brew install latticehq/lattice/lattice` — identity, auth, audit for free. No cloud required.
- **Startups**: Enterprise-grade governance from day one.
- **Enterprises**: Unified coordination across every department's AI agents. Self-hosted. Auditable.

## Open Source

| Component | License |
|-----------|---------|
| Runtime (core) | Apache 2.0 |
| Runtime (enterprise) | Commercial |
| Workbench | MIT |
| Inference | Apache 2.0 |
| Registry | Apache 2.0 |

Everything that makes trust decisions is open source.

## Development (This Site)

```bash
cd site
npm install
npm run dev
```

## Links

- [Website](https://latticeruntime.com)
- [Vision](./VISION.md)
- [Contributing](./CONTRIBUTING.md)
- [Security](./SECURITY.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

---

<div align="center">

**[latticeruntime.com](https://latticeruntime.com)**

</div>

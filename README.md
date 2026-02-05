# Lattice — Agent Headquarters

### The open-source runtime for AI agents.

**Your agents. Your models. Your rules. Your infrastructure.**

```
brew install latticehq/lattice/lattice

```

This repository contains the public website for [latticeruntime.com](https://latticeruntime.com).

<div align="center">
  <img src="docs/img/lattice-headquarters.png" alt="Lattice: The Open-Source Headquarters for AI Agent Governance" width="100%" />
</div>

## See It in Action

<div align="center">

[▶️ Watch the full ecosystem preview](https://latticeruntime.com)

</div>

## The Lattice Ecosystem

Lattice is **Agent Headquarters** — the open-source runtime where AI agents get their identity, their permissions, their compute, and their orders. From a solo developer on a MacBook to a Fortune 500 across every cloud.

| Component | Role | Repository |
|-----------|------|------------|
| [**Runtime**](https://github.com/latticeHQ/lattice) | Enforcement kernel — identity, authorization, audit, deployment constraints | [latticeRuntime](https://github.com/latticeHQ/lattice) |
| [**Inference**](https://github.com/latticeHQ/lattice-inference) | Local LLM serving — MLX, CUDA, zero-config clustering, OpenAI-compatible API | [latticeInference](https://github.com/latticeHQ/lattice-inference) |
| [**Workbench**](https://github.com/latticeHQ/lattice-workbench) | Agent IDE & operations console — multi-model chat, monitoring, desktop/web/CLI | [latticeWorkbench](https://github.com/latticeHQ/lattice-workbench) |
| [**Registry**](https://github.com/latticeHQ/lattice-registry) | Community ecosystem — templates, modules, presets for Docker/K8s/AWS/GCP/Azure | [latticeRegistry](https://github.com/latticeHQ/lattice-registry) |
| **Public** (this repo) | Website — latticeruntime.com | You are here |

## What Lattice Does

Every agent action passes through four enforcement gates:

1. **Identity** — Cryptographic verification of who or what is acting
2. **Authorization** — Policy-as-code evaluation of whether the action is allowed
3. **Deployment Constraints** — Structural boundaries on where and how agents execute
4. **Audit** — Immutable, tamper-evident logging of every decision

If any gate fails, the action is blocked. Policy violations are structurally impossible.

## Who It's For

- **Developers**: `brew install latticehq/lattice/lattice` — identity, auth, audit, and local inference for free. No cloud. No API bill.
- **Startups**: Enterprise-grade governance from day one. Ship to Fortune 500 without a platform team.
- **Enterprises**: Unified governance across every agent, every cloud, every system. Self-hosted. Auditable.
- **Cloud Vendors**: The governance layer that makes your agent platforms sellable to enterprises that can't adopt them today.

## Open Source

- **Runtime**: Apache 2.0 — enforcement kernel
- **Inference**: Apache 2.0 — local model serving
- **Workbench**: MIT — agent IDE and operations console
- **Registry**: Apache 2.0 — community templates and modules

Everything that makes trust decisions is open source. If it decides allow or deny, you can read the code.

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

**[Lattice — Agent Headquarters](https://latticeruntime.com)**

Your agents. Your models. Your rules. Your infrastructure.

</div>

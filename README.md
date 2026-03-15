<div align="center">

# Lattice

### The open-source coordination layer for institutional AI

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square)](./LICENSE)

**Individual AI made everyone productive. Institutional AI makes organizations work.**

[Lattice Cloud](https://access.latticeruntime.com) · [Runtime](https://github.com/latticeHQ/latticeRuntime) · [Workbench](https://github.com/latticeHQ/latticeWorkbench) · [Discussions](https://github.com/latticeHQ/latticeRuntime/discussions)

</div>

---

This repository contains the public website for [latticeruntime.com](https://latticeruntime.com) and binary releases. For source code, see the individual repositories below.

## What Is Lattice

Lattice Runtime is a single deployment that provides every coordination primitive an AI-powered institution needs. It sits beneath every department, every agent, and every decision — enforcing identity, authorization, budget, audit, and networking as a unified layer.

```
brew install latticehq/lattice/lattice
lattice server
```

Your coordination layer is running. Agents anywhere on the internet can connect to it. Your data stays on your machine.

## The Problem

AI made every individual 10x more productive. It has not made institutions 10x more effective.

Individual AI tools optimize for the person using them. They have no concept of the organization around that person — its roles, its policies, its budgets, its departments, or its accountability requirements. When every employee and every agent operates with its own disconnected AI tooling, the result is a hundred autonomous actors pulling in a hundred directions.

This is the coordination problem. It cannot be solved by better individual tools. It requires infrastructure designed from the ground up for how institutions operate.

## How It Works

Every agent action passes through four enforcement gates:

```
Agent Action ──→ IDENTITY ──→ AUTHORIZATION ──→ CONSTRAINTS ──→ EXECUTE ──→ AUDIT
                    │              │                 │                         │
                 Verified?      Allowed?          In bounds?              Logged.
                 If no: DENY   If no: DENY      If no: DENY     (immutable, queryable)
```

1. **Identity** — Cryptographic verification of who or what is acting
2. **Authorization** — RBAC + ABAC policy evaluation against institutional rules
3. **Constraints** — Structural boundaries: budget caps, environment restrictions, temporal limits
4. **Audit** — Immutable, tamper-evident logging of every decision

Policy violations are structurally impossible because the runtime mediates every action. Enforcement is architectural, not procedural.

## Who It's For

- **Developers**: `brew install latticehq/lattice/lattice` — identity, auth, audit for free. No cloud required.
- **Startups**: Enterprise-grade governance from day one. Close enterprise deals without building a compliance team.
- **Enterprises**: Unified coordination across every department's AI agents. Self-hosted. Auditable. Vendor-neutral.
- **Stack builders**: Build domain-specific AI applications that inherit governance automatically. See the [Stack SDK](https://github.com/latticeHQ/latticeRuntime/blob/develop/docs/stacks/README.md).

## The Ecosystem

| Component | Role | Repository |
|-----------|------|------------|
| [**Enterprise**](https://github.com/latticeHQ/latticeEnterprise) | Enterprise administration and governance | Coming soon |
| [**Homebrew**](https://github.com/latticeHQ/latticeHomebrew) | One-line install on macOS and Linux | [latticeHomebrew](https://github.com/latticeHQ/latticeHomebrew) |
| [**Inference**](https://github.com/latticeHQ/latticeInference) | Local AI serving — MLX on Apple Silicon, zero-config clustering | [latticeInference](https://github.com/latticeHQ/latticeInference) |
| [**Operator**](https://github.com/latticeHQ/latticeOperator) | Self-hosted deployment management for Lattice infrastructure | [latticeOperator](https://github.com/latticeHQ/latticeOperator) |
| **Public** (this repo) | Website + binary releases | You are here |
| [**Registry**](https://github.com/latticeHQ/latticeRegistry) | Community ecosystem — Terraform modules, templates, stacks | [latticeRegistry](https://github.com/latticeHQ/latticeRegistry) |
| [**Runtime**](https://github.com/latticeHQ/latticeRuntime) | Coordination layer — identity, authorization, audit, budget | [latticeRuntime](https://github.com/latticeHQ/latticeRuntime) |
| [**SDK**](https://github.com/latticeHQ/latticeSDK) | Go SDK for building Department Stacks | [latticeSDK](https://github.com/latticeHQ/latticeSDK) |
| [**Terraform Provider**](https://github.com/latticeHQ/terraform-provider-lattice) | Infrastructure as code for Lattice deployments | [terraform-provider-lattice](https://github.com/latticeHQ/terraform-provider-lattice) |
| [**Toolbox**](https://github.com/latticeHQ/latticeToolbox) | macOS app manager for Lattice products | [latticeToolbox](https://github.com/latticeHQ/latticeToolbox) |
| [**Workbench**](https://github.com/latticeHQ/latticeWorkbench) | Reference Engineering Stack — multi-model agent workspace | [latticeWorkbench](https://github.com/latticeHQ/latticeWorkbench) |

## Open Source

| Component | License |
|-----------|---------|
| Runtime (core) | Apache 2.0 |
| Runtime (enterprise) | Enterprise License |
| Workbench | MIT |
| Inference | Apache 2.0 |
| Registry | Apache 2.0 |
| Terraform Provider | MPL 2.0 |

Everything that makes trust decisions is open source. Enforcement must be open to be trusted.

See [VISION.md](./VISION.md) for the complete rationale and open-core boundary definition.

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

**[latticeruntime.com](https://latticeruntime.com)** — The open-source coordination layer for institutional AI.

```
brew install latticehq/lattice/lattice
```

</div>

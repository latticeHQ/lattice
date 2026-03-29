<div align="center">

# Lattice

### Crash-proof governed runtime for AI agents.

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square)](./LICENSE)

**Your agents crash silently. You can't prove what happened. Lattice fixes both.**

[Lattice Cloud](https://access.latticeruntime.com) · [Runtime](https://github.com/latticeHQ/latticeRuntime) · [Workbench](https://github.com/latticeHQ/latticeWorkbench) · [Discussions](https://github.com/latticeHQ/latticeRuntime/discussions)

</div>

---

This repository contains the public website for [latticeruntime.com](https://latticeruntime.com) and binary releases. For source code, see the individual repositories below.

## What Is Lattice

Lattice is a single Go binary you install on any server. Deploy your AI agents on top of it. They get crash-proof execution, cryptographic audit, budget enforcement, and zero-trust networking — without changing your agent code.

```
brew install latticehq/lattice/lattice
lattice server
```

Your runtime is live. Agents connect to it. Your data stays on your machine.

## The Problem

AI agents crash silently and nobody knows. When something goes wrong, you can't prove what happened. The status quo is systemd plus prayer.

Every tool in this space is an agent *framework* — they help you write agents. None of them help you *run* agents safely. Lattice is agent *infrastructure*. The same shift from Docker (build containers) to Kubernetes (run containers safely).

## How It Works

Every agent action passes through five enforcement gates:

```
Agent Action ──→ IDENTITY ──→ AUTHORIZATION ──→ CONSTRAINTS ──→ EXECUTE ──→ AUDIT
                    │              │                 │              │          │
                 Verified?      Allowed?          In bounds?    Crash-     Logged.
                 If no: DENY   If no: DENY      If no: DENY   proof      (immutable,
                                                                          hash-chained)
```

1. **Identity** — Cryptographic verification of who or what is acting
2. **Authorization** — RBAC + ABAC policy evaluation via Rego, compiled to SQL
3. **Constraints** — Budget caps, temporal limits, environment restrictions
4. **Execute** — Embedded Temporal for durable execution. Crash-proof. State never lost.
5. **Audit** — SHA-256 hash-chained, tamper-evident, immutable. SOC2/HIPAA/FedRAMP without effort.

## Who It's For

- **Developers**: `brew install latticehq/lattice/lattice` — crash-proof execution, audit, and governance for free. No cloud required.
- **Startups**: Enterprise-grade governance from day one. Close enterprise deals without building a compliance team.
- **Enterprises**: Governed runtime for every department's AI agents. Self-hosted. Auditable. Vendor-neutral.

## The Ecosystem

| Component | Role | Repository |
|-----------|------|------------|
| [**Runtime**](https://github.com/latticeHQ/latticeRuntime) | Crash-proof runtime — identity, auth, audit, budget, mesh | [latticeRuntime](https://github.com/latticeHQ/latticeRuntime) |
| [**Workbench**](https://github.com/latticeHQ/latticeWorkbench) | 316K-line multi-model agent workspace | [latticeWorkbench](https://github.com/latticeHQ/latticeWorkbench) |
| [**Enterprise**](https://github.com/latticeHQ/latticeEnterprise) | Enterprise administration and governance | Coming soon |
| [**Homebrew**](https://github.com/latticeHQ/latticeHomebrew) | One-line install on macOS and Linux | [latticeHomebrew](https://github.com/latticeHQ/latticeHomebrew) |
| [**Inference**](https://github.com/latticeHQ/latticeInference) | Local AI serving — MLX on Apple Silicon, zero-config clustering | [latticeInference](https://github.com/latticeHQ/latticeInference) |
| [**Operator**](https://github.com/latticeHQ/latticeOperator) | Self-hosted deployment management | [latticeOperator](https://github.com/latticeHQ/latticeOperator) |
| **Public** (this repo) | Website + binary releases | You are here |
| [**Registry**](https://github.com/latticeHQ/latticeRegistry) | Community ecosystem — Terraform modules, templates, stacks | [latticeRegistry](https://github.com/latticeHQ/latticeRegistry) |
| [**SDK**](https://github.com/latticeHQ/latticeSDK) | Go SDK for building on Lattice | [latticeSDK](https://github.com/latticeHQ/latticeSDK) |
| [**Terraform Provider**](https://github.com/latticeHQ/terraform-provider-lattice) | Infrastructure as code for Lattice deployments | [terraform-provider-lattice](https://github.com/latticeHQ/terraform-provider-lattice) |
| [**Toolbox**](https://github.com/latticeHQ/latticeToolbox) | macOS app manager for Lattice products | [latticeToolbox](https://github.com/latticeHQ/latticeToolbox) |

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

**[latticeruntime.com](https://latticeruntime.com)** — Crash-proof governed runtime for AI agents.

```
brew install latticehq/lattice/lattice
```

</div>

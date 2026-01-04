# Lattice Runtime

**Runtime enforcement infrastructure for autonomous AI agents**

Lattice is a runtime enforcement layer that applies identity, authorization, audit, and deployment constraints to AI agents. It sits in the execution path, so violations are blocked by design, not by application code.

## Overview

As AI agents become autonomous—taking actions, accessing systems, and making decisions—enterprises require guarantees that are:

- **Enforced at runtime** - violations are blocked structurally, not by application discipline
- **Provable and auditable** - enforcement decisions are transparent and inspectable
- **Independent of application code** - trust is a property of the runtime, not the team

Lattice decouples enterprise enforcement from agent implementation, providing identity, authorization, audit, and deployment constraints as enforced runtime primitives.

**Lattice lets individuals ship software that enterprises can trust.**

## Why Lattice?

Traditional approach:
- Every AI company re-implements SSO, RBAC, audit logs, and compliance controls
- Enterprise readiness is coupled to organizational scale
- Trust depends on application code and team maturity

Lattice approach:
- Enforcement is moved into the runtime itself
- Developers declare constraints once, Lattice enforces them centrally
- Enterprise-grade enforcement becomes structural, not organizational

As developers grow and close enterprise deals, Lattice grows with them.

## What Lattice Enforces

### Identity
Verifies who or what is requesting an action across cloud, self-hosted, and air-gapped environments.

### Authorization
Evaluates whether an authenticated principal is allowed to perform a specific action.

### Audit
Generates tamper-evident records of all enforcement decisions and agent actions.

### Deployment Constraints
Ensures agents run only within approved boundaries and configurations.

## Architecture

Lattice operates as a control plane in the execution path:

```
Agent Request → Lattice Runtime → Enforcement Decision → Allow/Deny
                      ↓
                Audit Event Generated
```

Enforcement logic is evaluated before actions are executed, making violations impossible by construction.

## Open-Core Model

Lattice follows an open-core architecture:

**Open Source (this repository):**
- Runtime enforcement layer
- Identity and authorization evaluation
- Policy decision engine
- Audit event generation
- Self-hosted deployment primitives

**Commercial (Enterprise Edition):**
- Administrative control planes
- Policy lifecycle management (versioning, approvals, rollbacks)
- Organizational governance and tenancy
- Directory and identity provider integrations
- Compliance reporting and long-term support

See [VISION.md](./VISION.md) for the complete rationale.

## Getting Started

```bash
# Installation instructions coming soon
```

## Documentation

- [Vision and Philosophy](./VISION.md)
- [Architecture](./ARCHITECTURE.md) _(coming soon)_
- [Deployment Guide](./DEPLOYMENT.md) _(coming soon)_
- [API Reference](./API.md) _(coming soon)_

## Contributing

We welcome contributions to the runtime enforcement layer. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

The Lattice runtime enforcement layer is licensed under [Apache 2.0](./LICENSE).

Enterprise features are licensed separately under a commercial license.

## Security

Report security vulnerabilities to security@latticeruntime.com

See [SECURITY.md](./SECURITY.md) for details.

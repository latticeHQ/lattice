# Vision

AI enables individual developers and very small teams to build software that can reason, plan, and act. This dramatically increases leverage—but it also raises the bar for trust.

As software becomes autonomous, enterprises require guarantees that are:

- **Enforced at runtime**
- **Provable and auditable**
- **Independent of application code and team maturity**

Historically, meeting these requirements has required large organizations with dedicated platform, security, and compliance teams. This has tightly coupled enterprise readiness to organizational scale.

**Lattice's vision is to break that coupling—to let individuals ship software that enterprises can trust.**

## The Problem

AI agents are no longer passive software. They take actions, access systems, and make decisions. Enterprises will not deploy autonomous software unless these actions are provably constrained, auditable, and deployable within strict security boundaries.

Today, every AI company re-implements the same enforcement layers—SSO, RBAC, audit logs, self-hosting, and compliance controls—inside their application. This work is:

- **Expensive** - requires significant engineering resources
- **Slow** - diverts effort from core product development
- **Orthogonal** - not related to building better agents

More importantly, it couples enterprise trust to the size and maturity of the team building the software.

## The Solution

Lattice moves enforcement out of application code and into the runtime itself.

Agent developers declare constraints once. Lattice enforces them automatically across every action—identity, authorization, audit, deployment—without requiring application-level checks.

This means:
- Agent teams build capabilities, not enforcement infrastructure
- Trust and compliance are guaranteed by the runtime, not by code discipline
- The same enforcement works across cloud, self-hosted, and air-gapped environments

As a result:

- Enterprise-grade enforcement becomes **structural**, not organizational
- Enterprises get guarantees **enforced by the platform itself**, not by best practices
- Individual developers and small teams can operate with the same enforcement guarantees as large organizations, without diverting effort into platform engineering

## The Impact

The ability to deploy and sell autonomous software into enterprises no longer depends on the size of the team building it.

Solo developers and small teams build products with Lattice as infrastructure, then sell those products to enterprises with enforcement guarantees already built in.

As these users close enterprise deals, Lattice grows with them—not ahead of them.

**Lattice lets individuals ship software that enterprises can trust.**

---

## Open-Core Strategy

Lattice follows an open-core model by design.

This structure mirrors how trust and responsibility are actually divided in enforcement systems.

### What Is Open

**The runtime enforcement layer is open source and auditable.**

This includes the components that:

- Evaluate identity and authorization
- Enforce policy decisions
- Generate audit events
- Mediate execution in the runtime path

These components determine whether an action is allowed or blocked. They define the security and correctness guarantees of the system.

**They are open because:**

- Enterprises must be able to inspect and audit enforcement logic
- Enforcement decisions cannot rely on vendor trust
- Correctness and transparency are mandatory for regulated environments

In other words, **anything that decides "allow vs deny" must be auditable.**

### What Is Commercial

**Enterprise control, governance, and administration features are commercial and licensed for enterprise use.**

These include:

- Administrative control planes
- Policy lifecycle management (versioning, approvals, rollbacks)
- Organizational governance and tenancy management
- Directory and identity provider integrations
- Compliance reporting and exports
- Operational tooling and long-term support guarantees

These components **do not decide what is allowed**. They exist to standardize operation, governance, and long-term reliability across deployments.

### Why Not Fully Open?

Enforcement infrastructure has a different failure mode than developer tools.

If governance and administration are fully open and forked:

- Enforcement semantics drift between deployments
- Audit guarantees become incomparable
- Enterprises lose confidence in the system as a standard
- Long-term reliability and support degrade

**For enforcement systems, fragmentation is a security risk.**

Enterprises do not want:

- Fork-specific governance behavior
- Incompatible admin models
- Divergent compliance semantics

They want a single, stable enforcement substrate they can rely on over time.

### The Boundary

The boundary is therefore drawn where it naturally exists:

- **Enforcement logic is open and auditable**
- **Enterprise governance and operation are standardized and licensed**

This maximizes:

- Trust in enforcement decisions
- Consistency across deployments
- Long-term sustainability of the platform

### The Principle

**Enforcement must be open to be trusted.**  
**Governance must be controlled to remain reliable.**

This is not a business decision first. It is a systems decision.

---

## Summary

Lattice is open where correctness and trust matter most, and commercial where standardization, accountability, and long-term operation matter.

This structure allows Lattice to function as **shared enforcement infrastructure**, rather than a collection of incompatible implementations.

Lattice is the control plane required to run autonomous software inside enterprises.

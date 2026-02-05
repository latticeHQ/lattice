# Vision

## Lattice — Agent Headquarters

AI enables individual developers and very small teams to build software that can reason, plan, and act. This dramatically increases leverage — but it also raises the bar for trust.

As software becomes autonomous, enterprises require guarantees that are:

- **Enforced at runtime**
- **Provable and auditable**
- **Independent of application code and team maturity**

Historically, meeting these requirements has required large organizations with dedicated platform, security, and compliance teams. This has tightly coupled enterprise readiness to organizational scale.

**Lattice's vision is to break that coupling — to let individuals ship software that enterprises can trust.**

## The Problem

AI agents are no longer passive software. They take actions, access systems, and make decisions. Enterprises will not deploy autonomous software unless these actions are provably constrained, auditable, and deployable within strict security boundaries.

Today, every AI company re-implements the same enforcement layers — SSO, RBAC, audit logs, self-hosting, and compliance controls — inside their application. This work is:

- **Expensive** — requires significant engineering resources
- **Slow** — diverts effort from core product development
- **Orthogonal** — not related to building better agents

More importantly, it couples enterprise trust to the size and maturity of the team building the software.

Meanwhile, every major cloud provider — Google, AWS, Microsoft, Salesforce — is building agent platforms. But each can only govern agents inside their own ecosystem. Real enterprises operate across multiple clouds, on-prem systems, and third-party services. No single vendor can provide governance across a multi-vendor, hybrid environment.

## The Solution

Lattice moves enforcement out of application code and into the runtime itself.

Agent developers declare constraints once. Lattice enforces them automatically across every action — identity, authorization, audit, deployment — without requiring application-level checks.

This means:
- Agent teams build capabilities, not enforcement infrastructure
- Trust and compliance are guaranteed by the runtime, not by code discipline
- The same enforcement works across cloud, self-hosted, and air-gapped environments
- Governance is unified across all agent platforms, all clouds, all systems

As a result:

- Enterprise-grade enforcement becomes **structural**, not organizational
- Enterprises get guarantees **enforced by the platform itself**, not by best practices
- Individual developers and small teams can operate with the same enforcement guarantees as large organizations
- Cloud vendors gain a governance layer that makes their agent platforms enterprise-adoptable

**Lattice lets individuals ship software that enterprises can trust.**

## The Ecosystem

Lattice is not a single tool — it's an integrated platform:

| Component | Role | License |
|-----------|------|---------|
| **Lattice Runtime** | Enforcement kernel — identity, authorization, audit, deployment constraints | Apache 2.0 |
| **Lattice Inference** | Local LLM serving — MLX, CUDA, zero-config clustering, OpenAI-compatible API | Apache 2.0 |
| **Lattice Workbench** | Agent IDE & operations console — multi-model chat, monitoring, desktop/web/CLI | MIT |
| **Lattice Registry** | Community ecosystem — templates, modules, presets | Apache 2.0 |
| **Lattice Enterprise** | Governance at scale — admin, compliance, directory integration | Commercial |

Together, these components form **Agent Headquarters** — where AI agents get their identity, their permissions, their compute, and their orders.

## The Impact

The ability to deploy and sell autonomous software into enterprises no longer depends on the size of the team building it.

Solo developers and small teams build products with Lattice as infrastructure, then sell those products to enterprises with enforcement guarantees already built in.

Cloud vendors partner with Lattice because every enterprise that adopts Lattice becomes a customer that can say yes to their agent platform. Lattice doesn't compete with Google, AWS, or Salesforce — it makes their agent platforms enterprise-adoptable.

As these users close enterprise deals, Lattice grows with them — not ahead of them.

## The Kubernetes Parallel

Before Kubernetes, every team ran containers differently. Docker made packaging easy, but production orchestration was fragmented. Kubernetes became the open-source standard — not by competing with clouds, but by running on them. Google and AWS both adopted it because it expanded their market.

Lattice follows the same path. Agents are having their Kubernetes moment. Everyone's building them, but nobody has the operating system to run them in production. Lattice is the open-source, vendor-neutral runtime that works everywhere. The clouds embrace it because it expands their addressable market.

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
- Serve local LLM inference
- Provide the agent development interface

These components determine whether an action is allowed or blocked. They define the security and correctness guarantees of the system.

**They are open because:**

- Enterprises must be able to inspect and audit enforcement logic
- Enforcement decisions cannot rely on vendor trust
- Correctness and transparency are mandatory for regulated environments
- The governance standard should be owned by the community, not a vendor
- A solo developer deserves the same governance infrastructure as a Fortune 500

In other words, **anything that decides "allow vs deny" must be auditable.**

### What Is Commercial

**Enterprise control, governance, and administration features are commercial and licensed for enterprise use.**

These include:

- Administrative control planes
- Policy lifecycle management (versioning, approvals, rollbacks)
- Organizational governance and tenancy management
- Directory and identity provider integrations (Active Directory, Okta, Entra ID)
- Compliance reporting and exports (SOC2, HIPAA, FedRAMP, GDPR)
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

### The Boundary

The boundary is drawn where it naturally exists:

- **Enforcement logic is open and auditable**
- **Enterprise governance and operation are standardized and licensed**

### The Principle

**Enforcement must be open to be trusted.**
**Governance must be controlled to remain reliable.**

This is not a business decision first. It is a systems decision.

---

## Summary

Lattice is Agent Headquarters — the open-source runtime for AI agents.

It is open where correctness and trust matter most, and commercial where standardization, accountability, and long-term operation matter.

This structure allows Lattice to function as **shared enforcement infrastructure for the agent economy**, rather than a collection of incompatible implementations.

The agent economy needs a trust layer. Lattice is that layer — open, self-hosted, vendor-neutral, and inevitable.

**Your agents. Your models. Your rules. Your infrastructure.**

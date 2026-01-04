# Security Policy

## Reporting Security Vulnerabilities

**Do not report security vulnerabilities through public GitHub issues.**

Instead, please report them privately to:

**Email:** security@latticeruntime.com

Include the following information:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within 48 hours and work with you to understand and address the issue.

## Scope

This security policy covers the **Lattice Runtime** enforcement layer, including:

- Identity and authorization evaluation
- Policy decision engine
- Audit event generation
- Agent execution primitives

## What Qualifies as a Security Issue?

Issues that could compromise:

- **Authorization bypass** - actions executed without proper authorization
- **Audit evasion** - actions that don't generate audit events
- **Identity spoofing** - ability to impersonate another principal
- **Policy circumvention** - bypassing declared constraints
- **Privilege escalation** - gaining unauthorized access or permissions

## What Is Not a Security Issue?

- **Feature requests** - use GitHub Discussions
- **Configuration errors** - see documentation
- **Enterprise features** - contact enterprise support
- **Denial of service** in test/development environments

## Security Design Principles

Lattice Runtime is built on these security principles:

### 1. Enforcement by Construction
Violations are prevented structurally, not by application discipline. The runtime blocks unauthorized actions before they execute.

### 2. Audit Everything
Every enforcement decision generates an immutable audit event. Actions without audit trails are rejected.

### 3. Explicit Denial
The default is deny. Permissions must be explicitly granted.

### 4. Least Privilege
Agents run with the minimum permissions required for their declared function.

### 5. Defense in Depth
Multiple layers of enforcement protect against bypass attempts.

## Disclosure Policy

We follow **coordinated disclosure**:

1. **Report received** - we acknowledge within 48 hours
2. **Investigation** - we validate and assess severity
3. **Fix developed** - we create and test a patch
4. **Coordinated release** - we work with you on timing
5. **Public disclosure** - after fix is deployed

We aim to resolve critical issues within 30 days.

## Security Updates

Security patches are released as:

- **Patch releases** for the current stable version
- **Backports** for the previous major version (if applicable)
- **Security advisories** published on GitHub

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 2.x     | ✅ Active support  |
| 1.x     | ⚠️ Security fixes only |
| < 1.0   | ❌ Not supported   |

## Recognition

We recognize security researchers who responsibly disclose vulnerabilities:

- **Public acknowledgment** (with permission)
- **Credit in release notes** and security advisory
- **Swag** for significant findings _(optional)_

Thank you for helping keep Lattice Runtime secure.

## Contact

- **Security issues:** security@latticeruntime.com
- **General questions:** GitHub Discussions
- **Enterprise support:** enterprise@latticeruntime.com

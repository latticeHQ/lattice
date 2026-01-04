# Contributing to Lattice Runtime

Thank you for your interest in contributing to Lattice Runtime. This project provides the open-source runtime enforcement layer for autonomous AI agents.

## Scope of Contributions

This repository contains the **runtime enforcement layer**, which includes:

- Identity and authorization evaluation
- Policy decision engine
- Audit event generation
- Core execution primitives
- Self-hosted deployment support

**Enterprise features** (administrative control planes, governance, integrations) are developed separately and not part of this repository.

## Before Contributing

1. **Check existing issues** - see if your contribution is already being discussed
2. **Open an issue first** - for significant changes, discuss the approach before implementing
3. **Read the architecture docs** - understand how enforcement flows through the system

## Development Setup

```bash
# Clone the repository
git clone git@github.com:latticeHQ/lattice-runtime.git
cd lattice-runtime

# Install dependencies
make deps

# Build
make build

# Run tests
make test

# Run linter
make lint
```

## Code Standards

### General Guidelines

- Write clear, idiomatic code
- Add tests for new functionality
- Update documentation for user-facing changes
- Follow existing code style and patterns

### Enforcement Logic

Code that evaluates enforcement decisions requires special attention:

- **Be explicit** - enforcement logic must be obvious and auditable
- **Add comments** - explain why security decisions are made
- **Test thoroughly** - include positive and negative test cases
- **Consider edge cases** - unauthorized paths must be explicitly blocked

### Commit Messages

Follow conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `test`, `refactor`, `perf`, `chore`

Examples:
```
feat(authz): add support for dynamic policy evaluation
fix(audit): ensure events are written before action executes
docs(readme): update deployment instructions
```

## Pull Request Process

1. **Fork the repository** and create a branch from `main`
2. **Make your changes** following code standards
3. **Add tests** - ensure coverage doesn't decrease
4. **Run the full test suite** - `make test`
5. **Run the linter** - `make lint`
6. **Update documentation** if needed
7. **Submit a pull request** with a clear description

### PR Description Template

```markdown
## Summary
Brief description of the change

## Motivation
Why is this change needed?

## Changes
- List key changes made

## Testing
How was this tested?

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Linter passes
- [ ] No breaking changes (or documented if unavoidable)
```

## Testing

All contributions must include appropriate tests:

- **Unit tests** for individual components
- **Integration tests** for enforcement flows
- **Security tests** for authorization logic

Run tests with:
```bash
make test              # Run all tests
make test-unit         # Run unit tests only
make test-integration  # Run integration tests only
```

## Security

**Do not** open public issues for security vulnerabilities.

Instead, report them privately to: security@latticeruntime.com

See [SECURITY.md](./SECURITY.md) for details.

## Code Review

Maintainers will review your contribution for:

- **Correctness** - does it work as intended?
- **Security** - are enforcement guarantees maintained?
- **Test coverage** - are all paths tested?
- **Code quality** - is it maintainable and idiomatic?
- **Documentation** - is it clear how to use the change?

## Community

- Be respectful and professional
- Assume good intent
- Focus on technical merit
- Help others learn and contribute

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for details.

## License

By contributing, you agree that your contributions will be licensed under the Apache 2.0 License.

See [LICENSE](./LICENSE) for details.

## Questions?

- Open a discussion in GitHub Discussions
- Join our community chat _(add link if applicable)_
- Read the documentation at _(add link)_

---

Thank you for contributing to making autonomous AI deployable in enterprises.

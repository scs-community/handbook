# Contributing to the Supply Chain Security Handbook

Thank you for your interest in contributing to the Supply Chain Security Handbook. This project aims to make supply-chain-security assurance more practical, evidence-backed, lifecycle-aware, and standards-aware.

## What Contributions Help

We welcome contributions in areas such as:

- standard and threat translation;
- supply-chain-security practices and controls;
- lifecycle assurance;
- procurement and supplier assurance;
- product acceptance;
- evidence and assurance artifacts;
- technology options;
- glossary entries, supplier questions, templates, and checklists;
- source references and further reading.

## Editorial Principles

Before contributing, review:

- [Purpose & Positioning](purpose-and-positioning.md)
- [Navigation Structure](navigation-structure.md)
- [Style Guide](style-guide.md)

Key principles:

- Start from a reader requirement, decision, or risk.
- Keep the site neutral and standards-aware.
- Link practices to evidence and lifecycle stages.
- Distinguish assertions from verifiable artifacts.
- Treat technology options as mappings and options, not mandates.
- Cite public sources for factual claims about standards, frameworks, or guidance.

## Local Development

```bash
npm install
npm start
```

## Checks

Before submitting changes, run:

```bash
npm run typecheck
npm run build
```

The GitHub Actions workflow runs the same two commands on every pull request and on every push to `main`, and deploys only from `main` when both pass.

## Submission Checklist

- [ ] Content follows the style guide.
- [ ] Claims about standards or guidance are sourced where needed.
- [ ] Links resolve.
- [ ] Page starts from a requirement, decision, or risk.
- [ ] Page identifies relevant evidence and verification questions.
- [ ] Page avoids legal or compliance-authority claims.
- [ ] Page links to related standards and threats, practices and controls, technology options, or resources.

## Security

Report security vulnerabilities privately as described in [SECURITY.md](SECURITY.md), not in a public issue. Errors in the guidance itself, such as a superseded standard version or a misstated date, belong in a public issue with a link to the primary source.

## License

By contributing, you agree that your contributions are licensed under the same [CC BY-SA 4.0](LICENSE) license as the rest of the project.

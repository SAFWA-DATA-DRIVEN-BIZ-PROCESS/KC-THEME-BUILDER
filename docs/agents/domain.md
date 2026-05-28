# Domain Docs: Single-Context Layout

This repository has a **single-context** domain documentation structure.

## Layout

```
.
├── CONTEXT.md           # Project context & domain language
└── docs/adr/            # Architectural Decision Records
    ├── 0001-why-react.md
    ├── 0002-keycloakify-integration.md
    └── ...
```

## What goes in each file

### CONTEXT.md

- **Project mission** — what does this codebase do?
- **Domain language** — key terms specific to your project (e.g., "theme", "login page", "Keycloak adapter")
- **Architecture overview** — high-level layers (e.g., "React components → Keycloakify rendering → Keycloak theme output")
- **Key files** — pointers to critical modules
- **Conventions** — naming rules, file structure, code style not covered by linters

Skills like `improve-codebase-architecture`, `diagnose`, and `tdd` read this file to:
- Understand the domain before proposing changes
- Suggest architecturally sound solutions
- Apply domain-specific naming and patterns

### docs/adr/

Architectural Decision Records (ADRs) document *why* past decisions were made:

- **Format** — one file per decision (e.g., `0001-choose-vite-over-webpack.md`)
- **Template** — see ADR format below
- **Numbering** — start at `0001`, increment for each new decision

Example ADR (`docs/adr/0001-use-keycloakify.md`):

```markdown
# ADR 0001: Use Keycloakify for theme generation

## Status

Accepted

## Context

Keycloak requires theme files in a specific structure. Manually crafting this is error-prone.

## Decision

We adopted Keycloakify to programmatically generate Keycloak theme artifacts.

## Consequences

- ✅ Type-safe theme generation
- ✅ Reduced manual boilerplate
- ⚠️ Dependency on Keycloakify API stability
```

Skills use ADRs to understand architectural constraints before proposing changes.

## How to create or update

1. Run skills like `improve-codebase-architecture` or `diagnose` — they'll reference `CONTEXT.md` and `docs/adr/` automatically.
2. After significant architectural changes, add a new ADR to document the decision.
3. Edit `CONTEXT.md` if domain language or key files change.

## Multi-context projects

If this becomes a monorepo with separate frontend/backend contexts, rename this to `CONTEXT-MAP.md` and create per-context `CONTEXT.md` files:

```
.
├── CONTEXT-MAP.md
├── frontend/
│   ├── CONTEXT.md
│   └── docs/adr/
└── backend/
    ├── CONTEXT.md
    └── docs/adr/
```

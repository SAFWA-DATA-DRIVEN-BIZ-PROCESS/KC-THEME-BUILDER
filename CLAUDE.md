# Claude Configuration

## Agent skills

### Theme Implementations

Use `.agents/skills/add-theme-implementation/SKILL.md` when adding, scaffolding, previewing, or building a new Keycloak Theme Implementation for this repository.

### Storybook MCP

When working on UI components, Keycloak pages, or stories, use the `keycloak-theme-storybook` MCP server if Storybook is running. Start Storybook with `yarn storybook`; the MCP endpoint is configured in `.vscode/mcp.json` at `http://localhost:6006/mcp`.

### Issue tracker

Issues are tracked in GitHub Issues for this repository. Skills like `to-issues`, `triage`, and `to-prd` create and read from GitHub. See `docs/agents/issue-tracker.md`.

### Triage labels

This repo uses the canonical triage label vocabulary. Issues move through states using: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: one `CONTEXT.md` + `docs/adr/` at the repository root. See `docs/agents/domain.md`.

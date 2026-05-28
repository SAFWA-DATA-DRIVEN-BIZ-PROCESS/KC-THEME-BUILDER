# Claude Configuration

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues for this repository. Skills like `to-issues`, `triage`, and `to-prd` create and read from GitHub. See `docs/agents/issue-tracker.md`.

### Triage labels

This repo uses the canonical triage label vocabulary. Issues move through states using: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: one `CONTEXT.md` + `docs/adr/` at the repository root. See `docs/agents/domain.md`.

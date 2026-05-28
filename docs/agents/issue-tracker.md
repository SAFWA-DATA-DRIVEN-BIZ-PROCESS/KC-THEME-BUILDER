# Issue Tracker: GitHub Issues

This repository uses **GitHub Issues** as the canonical issue tracker.

## How skills interact with it

- `to-issues` — reads from issue tracker, breaks specs into issues, creates new issues
- `triage` — reads issues, applies labels (`needs-triage`, `needs-info`, etc.), moves issues through workflow
- `to-prd` — creates issues as PRD summary
- `qa` — creates issues for test cases and quality checkpoints

All skills use the `gh` CLI under the hood. Ensure `gh` is installed and authenticated:

```bash
gh auth login
```

## Workflow

1. Create an issue in GitHub Issues (or skills create them via `gh issue create`).
2. Apply a triage label (`needs-triage`, `needs-info`, etc.) to move it through the workflow.
3. Once labeled `ready-for-agent` or `ready-for-human`, an AFK agent or human can pick it up.

## Label vocabulary

See `triage-labels.md` for the complete label mapping.

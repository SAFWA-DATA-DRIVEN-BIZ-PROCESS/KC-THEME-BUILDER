# Triage Labels

This repository uses the **canonical triage label vocabulary**. These five labels move issues through a workflow state machine.

| Label | Meaning | Next step |
|-------|---------|-----------|
| `needs-triage` | Maintainer needs to evaluate the issue | Evaluate; label as `needs-info`, `ready-for-agent`, `ready-for-human`, or `wontfix` |
| `needs-info` | Waiting on issue reporter for clarification | Reporter responds; reassess and relabel |
| `ready-for-agent` | Fully specified; an AFK agent can pick it up independently | Assign to `Explore`, `file-analyzer`, etc. |
| `ready-for-human` | Needs human implementation or review | Assign to a human team member |
| `wontfix` | Will not be actioned | Close the issue |

## When to apply each label

- **`needs-triage`** — Issue arrives with unclear scope, impact, or reproduction steps.
- **`needs-info`** — Issue is valid but missing details (error logs, reproduction steps, OS/version info, etc.).
- **`ready-for-agent`** — Issue is fully specified: clear problem, acceptance criteria, no blockers. An AFK agent or Copilot skill can pick it up.
- **`ready-for-human`** — Issue needs domain expertise, architectural decision, or code review that only a human can provide.
- **`wontfix`** — Issue is a duplicate, out of scope, or intentionally not addressed.

## Label override

If your team uses different label names (e.g., `bug:triage` instead of `needs-triage`), you can override them. Edit this file to document the mapping, then tell the skill authors which label names to use.

Current mapping: **canonical defaults** (no overrides).

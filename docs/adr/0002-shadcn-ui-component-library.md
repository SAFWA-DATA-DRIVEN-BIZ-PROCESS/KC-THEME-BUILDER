# ADR 0002: Use Shadcn UI for component library

## Status

Accepted

## Context

The theme requires a consistent, modern UI across login, registration, password reset, and other authentication pages. Building components from scratch would require managing Tailwind classes, accessibility (a11y), and visual consistency across pages.

## Decision

We adopted **Shadcn UI**, a component library built on:
- **Radix UI** primitives for accessibility and unstyled behavior
- **Tailwind CSS** for styling
- **Class Variance Authority (CVA)** for component variants

This allows us to use pre-built, accessible, and themeable components while maintaining full control over styling.

## Consequences

✅ **Benefits:**
- Pre-built, accessible components (Button, Input, Card, etc.)
- Consistent design language across pages
- Tailwind integration (utility-first, easy customization)
- Can eject and customize components if needed
- Active community and documentation

⚠️ **Trade-offs:**
- Extra dependency (Radix UI primitives)
- Tailwind classes can create large CSS bundles if not optimized
- Component variants are opinionated; customization requires understanding CVA

## References

- [Shadcn UI documentation](https://ui.shadcn.com/)
- [Radix UI documentation](https://www.radix-ui.com/)

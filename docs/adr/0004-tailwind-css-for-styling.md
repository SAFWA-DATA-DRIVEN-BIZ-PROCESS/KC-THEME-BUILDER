# ADR 0004: Use Tailwind CSS for styling

## Status

Accepted

## Context

The theme needs a scalable, maintainable styling approach that:
- Works well with component libraries (shadcn UI uses Tailwind)
- Reduces CSS file size through utility-first approach
- Enables rapid prototyping and design consistency
- Supports dark mode and custom themes

Traditional CSS files and CSS-in-JS would create redundancy with shadcn.

## Decision

We adopted **Tailwind CSS** as the primary styling method:
- Utility-first classes for rapid styling
- Tailwind config at repo root for customization
- Dark mode support via Tailwind's class/media strategies
- Integrated with shadcn UI components

## Consequences

✅ **Benefits:**
- Rapid development with utility classes
- Small CSS output via PurgeCSS and tree-shaking
- Easy dark mode support
- Consistent design tokens via config
- No CSS file bloat

⚠️ **Trade-offs:**
- Large class names in JSX (mitigated by components)
- Learning curve for Tailwind's utility-first philosophy
- Custom styling still requires understanding Tailwind's cascade
- JIT compiler can increase build time

## References

- [Tailwind CSS documentation](https://tailwindcss.com/)
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode)

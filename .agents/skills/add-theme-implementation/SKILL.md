---
name: add-theme-implementation
description: 'Add a new Keycloak Theme Implementation to KC-THEME-BUILDER. Use when asked to add, scaffold, implement, preview, or build a branded Keycloak login theme in this repo; also use when users say new theme, structured theme, Keycloakify theme, theme implementation, or /grill-with-docs before theme work.'
---

# Add Theme Implementation

Use this skill to add one new **Theme Implementation** to this repository. In this codebase, avoid the phrase "structured theme"; the canonical domain term is **Theme Implementation**.

## First Reads

Before editing, inspect these files and form a local hypothesis about the theme-selection path:

1. `CONTEXT.md`
2. `docs/adr/0001-use-keycloakify.md`
3. `docs/adr/0002-shadcn-ui-component-library.md`
4. `docs/adr/0004-tailwind-css-for-styling.md`
5. `vite.config.ts`
6. `src/kc.gen.tsx`
7. `src/login/components/Template/Template.tsx`
8. Existing examples under `src/login/themes/ctui/` and `src/login/themes/flowcraft/`
9. `src/login/mocks/getKcContextMock.ts` and `src/main-kc.dev.tsx` for preview behavior

Current local hypothesis to verify in code: `kcContext.themeName` selects a Theme Implementation in `Template.tsx`; Keycloakify's `themeName` array in `vite.config.ts` is the source of generated theme names in `src/kc.gen.tsx`.

## Clarify Before Implementation

Before implementing a Theme Implementation, run the work with `/grill-with-docs` to resolve misunderstandings against the project's domain language and existing decisions.

Use that pass to:

- Challenge user wording against `CONTEXT.md`, especially **Theme Implementation**, **Theme Selection**, **Mock Theme**, and **Theme-Scoped Styling**.
- Inspect code instead of asking when the answer is discoverable from existing Theme Implementations or the theme-selection path.
- Ask one question at a time when requirements remain ambiguous.
- Provide a recommended answer with each question.
- Update `CONTEXT.md` inline when a term or boundary is resolved.
- Offer ADRs only when the decision is hard to reverse, surprising without context, and the result of a real trade-off.

Do not start implementation until the theme name, brand assets, layout boundary, copy changes, preview behavior, and validation target are clear enough to avoid rework. If `/grill-with-docs` is unavailable as a slash command, follow the same workflow manually before editing implementation files.

## Required Inputs

Collect or infer these before creating files:

- Keycloak theme name exactly as Keycloak should expose it, for example `flowcraft` or `CTUI`
- React component name, for example `FlowcraftTemplate`
- Theme folder slug, normally lowercase kebab-case under `src/login/themes/<slug>/`
- Brand assets and whether they can be committed to the repo
- Required shell layout, such as split hero, card-only, or single-column
- Any login-page copy changes, such as heading, username label, or placeholders

If an answer can be determined from assets, screenshots, or existing repo conventions, inspect those instead of asking.

## Implementation Workflow

1. Add a theme directory under `src/login/themes/<slug>/`.
2. Add `<Name>Template.tsx` that accepts `headerContent: ReactNode` and `mainContent: ReactNode`.
3. Add `<slug>.css` imported by the template.
4. Put committed assets under `src/login/themes/<slug>/assets/`.
5. Scope the template root with `data-theme-implementation="<themeName>"`.
6. Scope CSS with `[data-theme-implementation="<themeName>"]` selectors and theme-prefixed CSS variables.
7. Reuse shared auth hooks such as `data-auth-region="login-heading"` where possible.
8. Add theme-specific region hooks only when CSS needs stable selectors, using `data-<slug>-region="..."`.
9. Register the Keycloak theme name in `vite.config.ts` under `keycloakify({ themeName: [...] })`.
10. Wire the new template into `src/login/components/Template/Template.tsx` using `kcContext.themeName`.
11. Keep page components shared unless the user explicitly needs page-level copy or behavior changes.
12. If page-level changes are needed, keep styling out of page conditionals; prefer data attributes plus theme-scoped CSS.

## Generated Files

`src/kc.gen.tsx` is generated. Do not edit it manually unless the user explicitly asks for a temporary probe. Prefer commands that regenerate it through Keycloakify, such as the repo's existing build or sync flow.

## Previewing

For local preview, prefer `src/main-kc.dev.tsx` overrides:

```ts
const kcContext = getKcContextMock({
    pageId: "login.ftl",
    overrides: {
        themeName: "<themeName>"
    }
});
```

Do not describe this as runtime Theme Selection. In the domain language, this is choosing a **Mock Theme** for preview only.

## Validation

Run the narrowest useful check after the first substantive edit:

1. `yarn run build` for TypeScript and Vite validation.
2. `yarn run build-keycloak-theme:ci` when the Keycloak JAR output or generated theme names are affected.
3. Storybook or browser preview when layout, responsive behavior, or assets changed.

If Keycloakify sync changes generated or owned files unexpectedly, inspect those changes before continuing and never discard unrelated user edits.

## Documentation Rules

- Update `CONTEXT.md` only for resolved domain language, not implementation steps.
- Keep `CONTEXT.md` implementation-detail free.
- Create an ADR only when the decision is hard to reverse, surprising without context, and the result of a real trade-off.
- Do not create an ADR for routine addition of another Theme Implementation.

## Common Pitfalls

- Do not call Theme Implementations "skins", "theme folders", or "structured themes" in docs.
- Do not place theme-specific visual styling directly in shared page components when scoped CSS can express it.
- Do not use `themeName` mock overrides as evidence of runtime realm configuration.
- Do not add broad global CSS that can leak into other Keycloak pages or future Theme Implementations.
- Do not edit generated `src/kc.gen.tsx` as the durable source of truth.
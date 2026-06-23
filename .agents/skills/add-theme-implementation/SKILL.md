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

Before implementing a Theme Implementation, run a clarification pass to resolve misunderstandings against the project's domain language and existing decisions. Use `/grill-with-docs` when it is available; otherwise, follow the same workflow manually before editing implementation files.

Use that pass to:

- Challenge user wording against `CONTEXT.md`, especially **Theme Implementation**, **Theme Selection**, **Mock Theme**, and **Theme-Scoped Styling**.
- Inspect code instead of asking when the answer is discoverable from existing Theme Implementations or the theme-selection path.
- During the clarification pass only, ask one question at a time when a requirement cannot be resolved by inspecting existing Theme Implementations or the theme-selection path.
- Provide a recommended answer with each question.
- Update `CONTEXT.md` inline when a term or boundary is resolved.
- Follow the ADR criteria in Documentation Rules when deciding whether to propose an ADR.

Do not start implementation until the theme name, brand assets, layout boundary, copy changes, preview behavior, and validation target are clear enough to avoid rework.

## Required Inputs

Collect or infer these before creating files:

- Keycloak theme name exactly as Keycloak should expose it, for example `flowcraft` or `CTUI`
- React component name, for example `FlowcraftTemplate`
- Theme folder slug, normally lowercase kebab-case under `src/login/themes/<slug>/`
- Brand assets and whether they can be committed to the repo
- Required shell layout, such as split hero, card-only, or single-column
- Any login-page copy changes, such as heading, username label, or placeholders

If brand assets cannot be committed, document the expected asset paths and filenames as placeholders in `src/login/themes/<slug>/assets/README.md`, and note in `CONTEXT.md` that assets must be supplied externally before the theme is deployable.

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
11. Keep page components shared unless the user requires changes to JSX content, such as text strings, element structure, or conditional logic, that cannot be expressed through CSS or data attributes alone.
12. When a page component fork is required, keep all visual styling out of page conditionals; use data attributes plus theme-scoped CSS rather than inline conditional styling.

## Generated Files

`src/kc.gen.tsx` is generated. Do not edit it manually. Prefer commands that regenerate it through Keycloakify, such as the repo's existing build or sync flow.

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

If a validation command exits with a non-zero code, stop further implementation, report the full error output to the user, and do not proceed to the next implementation step until the build passes.

If Keycloakify sync changes generated or owned files unexpectedly, inspect those changes before continuing and never discard unrelated user edits.

If inspection reveals that Keycloakify sync has touched files containing unrelated user edits, halt the workflow, present the conflicting diff to the user, and ask explicitly whether to proceed with the sync output or restore the user edits before continuing.

## Documentation Rules

- Update `CONTEXT.md` only for resolved domain language, not implementation steps.
- Keep `CONTEXT.md` implementation-detail free.
- Create an ADR only when the decision involves a new external dependency, a departure from an existing ADR, or a structural change to the theme-selection path.
- Do not create an ADR for choosing a CSS variable naming convention or other routine implementation decisions.
- Do not create an ADR for routine addition of another Theme Implementation.

## Common Pitfalls

- Do not call Theme Implementations "skins", "theme folders", or "structured themes" in docs.
- Do not place theme-specific visual styling directly in shared page components when scoped CSS can express it.
- Do not use `themeName` mock overrides as evidence of runtime realm configuration.
- Do not add broad global CSS that can leak into other Keycloak pages or future Theme Implementations.
- Do not edit generated `src/kc.gen.tsx` as the durable source of truth.
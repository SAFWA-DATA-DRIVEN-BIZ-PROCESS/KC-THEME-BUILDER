# KC-THEME-BUILDER Context

## Project Mission

This is a **Keycloak authentication theme builder** using Keycloakify, React, and TypeScript. It generates customizable login and account management pages for Keycloak deployments, replacing the default Keycloak UI with a branded, modern React-based interface.

## Domain Language

**Keycloak** — Open-source identity and access management (IAM) platform.

**Theme** — A set of templates and static assets that Keycloak renders for authentication flows (login, registration, password reset, etc.). Keycloak themes are packaged as JAR files.

**Theme Implementation** — The React pages, layout, components, and assets for one named Keycloak theme.
_Avoid_: Theme folder, skin, structured theme

**CTUI** — The existing Theme Implementation selected by the Keycloak theme name `CTUI`.
_Avoid_: CCTUI

**Theme Selection** — The choice of active Theme Implementation from the Keycloak-provided theme name.
_Avoid_: Mock switch, Storybook switch

**Mock Theme** — The preview-only theme name used to render pages outside a running Keycloak server.
_Avoid_: Runtime theme, selected realm theme

**Theme-Scoped Styling** — Brand-specific visual styling that applies only inside one Theme Implementation while shared Pages keep authentication behavior and structure reusable.
_Avoid_: Global theme override, page-specific brand styling

**Keycloakify** — A TypeScript/React framework that compiles React components into Keycloak-compatible theme artifacts. It bridges React development (modern DX) with Keycloak's theme format (JAR output).

**KcContext** — React Context containing Keycloak-provided runtime data: user state, available authentication methods, form fields, internationalization data, etc. Components read KcContext to render page-specific content.

**Page** — A React component representing a Keycloak flow screen (login, registration, password reset, multi-factor authentication, etc.). Each page receives KcContext and renders Keycloak-compatible HTML/CSS.

**Eject** — A Keycloakify command that copies framework-provided components (KcContext, KcPage, etc.) into the repo for customization.

**Shadcn UI** — Component library built on Radix UI primitives and Tailwind CSS. This repo uses shadcn components (Button, Input, Card, etc.) in Keycloak pages for consistency.

**Tailwind CSS** — Utility-first CSS framework used for styling. Tailwind configuration is in `tailwind.config.js`.

**Storybook** — Component development and documentation tool. Run `yarn storybook` to develop pages in isolation. While Storybook is running, its MCP server is available at `http://localhost:6006/mcp`.

## Architecture Overview

```
React Components (src/login/)
    ↓ (Keycloakify compilation)
Keycloak Theme JAR (dist_keycloak/)
    ↓ (deployed to)
Keycloak Server
    ↓ (renders at login time)
Browser
```

### Layers

**1. Page Layer** (`src/login/pages/`)

- Individual page components (login, register, password-reset, etc.)
- Each receives `KcContext` and renders Keycloak-compatible markup
- Pages are ejected from Keycloakify or custom-built

**2. Context Layer** (`src/login/`)

- `KcContext.ts` — Keycloak runtime data type (user, available methods, form fields)
- `KcPage.tsx` — Root wrapper providing KcContext, I18nProvider, style customization
- `i18n.ts` — Internationalization provider

**3. Component Layer** (`src/components/`)

- Reusable UI components from shadcn (Button, Input, Card, etc.)
- `ThemeProvider.tsx` — Theming provider (dark/light mode, etc.)
- `lib/utils.ts` — Utility functions (class merging, etc.)

**4. Style Layer**

- `styleLevelCustomization.tsx` — Runtime CSS loading and customization hooks
- `index.css` — Global styles
- Tailwind config at root

### Theme relationships

- A **Theme Implementation** provides a shared shell and base form styling for every **Page** rendered under that theme.
- **Theme Selection** chooses exactly one **Theme Implementation** for a rendered Keycloak page.
- A **Mock Theme** previews one **Theme Implementation** without changing runtime Keycloak configuration.
- **Theme-Scoped Styling** belongs to a Theme Implementation; shared Pages should expose stable regions rather than contain branded visual rules.

### Key Files

- `src/login/KcPage.tsx` — Root component for all Keycloak pages
- `src/login/pages/PageIndex.tsx` — Router for page variants
- `src/kc.gen.tsx` — Generated types (run `keycloakify sync-extensions` to regenerate)
- `vite.config.ts` — Vite + Keycloakify build config
- `src/components/ui/` — shadcn UI components
- `src/login/mocks/getKcContextMock.ts` — Mock KcContext for Storybook development

## Development Workflow

1. **Dev mode** — `yarn dev` starts Vite dev server with HMR
   - Develop pages with live reload
    - Use Storybook for isolated component development: `yarn storybook`
    - Use the `keycloak-theme-storybook` MCP server from `.vscode/mcp.json` for Storybook-aware agent workflows

2. **Build** — `yarn build` compiles TypeScript and Vite, then `keycloakify build` generates JAR
   - Output: `dist_keycloak/` contains the compiled theme JAR

3. **Deploy** — Copy `dist_keycloak/*.jar` to Keycloak themes directory

4. **Local Keycloak testing** — `yarn start` runs a local Keycloak instance with the theme

## Conventions

### File naming

- Page components: `src/login/pages/<page-name>/index.tsx`
- UI components: `src/components/ui/<component-name>.tsx` (kebab-case)
- Utility files: `src/components/lib/<function-name>.ts`

### Component patterns

- Pages use `KcContext` to access Keycloak state
- Pages export a named export matching the page name: `export function LoginPage() { ... }`
- Reusable UI components are stateless and accept props
- Tailwind classes define shared structure; Theme Implementations use Theme-Scoped Styling for brand-specific visual rules

### TypeScript

- Generated types in `src/kc.gen.tsx` should not be edited manually; regenerate with `keycloakify sync-extensions`
- Type-safe forms using Keycloak-provided field definitions from KcContext
- Use `tsafe/assert` for runtime type checks

### Branch structure

- `main` — stable, deployed theme
- Feature branches — prefix with `feature/`, `fix/`, `docs/`, etc.

## External Dependencies & Constraints

- **Keycloakify** — Provides type definitions and build tooling. Theme generation depends on Keycloakify's compiler.
- **Keycloak server** — Runtime environment. Theme must comply with Keycloak's theme format and expectations.
- **Shadcn UI** — Component library locked to Radix UI and Tailwind. Adding new shadcn components requires the component CLI.
- **Vite** — Build tool. HMR and incremental builds depend on Vite's configuration.

## Known Constraints

- Pages must be compatible with Keycloak's rendering engine (server-side template rendering, not pure React in browser)
- KcContext shape is determined by Keycloakify and Keycloak; custom extensions require careful type management
- CSS is scoped to theme; global styles may conflict with Keycloak's admin theme
- JAR output is immutable once deployed to Keycloak; updates require JAR replacement and server restart

## Flagged ambiguities

- "Switch in the mocks" was used to mean **Theme Selection**; resolved: mocks choose the **Mock Theme** for previews only, while runtime selection comes from Keycloak's active theme name.

# ADR 0001: Use Keycloakify for theme generation

## Status

Accepted

## Context

Keycloak requires authentication UI themes in a specific JAR format with server-side template rendering. Manually creating Keycloak themes involves writing FreeMarker templates, which is error-prone and lacks modern web development tooling (hot reload, TypeScript, component libraries).

## Decision

We adopted **Keycloakify**, a TypeScript/React framework that:
- Allows us to write themes in React with modern DX (TypeScript, components, HMR)
- Compiles React to Keycloak-compatible FreeMarker templates
- Provides type-safe KcContext (runtime data from Keycloak)
- Reduces boilerplate and manual template writing

## Consequences

✅ **Benefits:**
- Type-safe theme development
- Fast development iteration with HMR
- Reusable React components (shadcn UI integration)
- Easier onboarding for React developers
- Version control and CI/CD friendly

⚠️ **Trade-offs:**
- Dependency on Keycloakify's stability and updates
- Learning curve for Keycloakify-specific concepts (KcContext, page ejection, etc.)
- Build complexity (Vite + Keycloakify two-stage build)
- Theme output is a JAR; updates require server restart

## References

- [Keycloakify documentation](https://docs.keycloakify.dev/)
- [Keycloakify GitHub](https://github.com/keycloakify/keycloakify)

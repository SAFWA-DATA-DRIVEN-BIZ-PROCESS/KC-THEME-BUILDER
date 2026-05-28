# ADR 0003: Use Vite for bundling

## Status

Accepted

## Context

The project requires a modern build tool that:
- Supports TypeScript and JSX
- Provides fast HMR for development
- Integrates with Keycloakify's build pipeline
- Minimizes bundle size for theme JAR output

Webpack was the traditional choice but is complex to configure. Vite offers better DX with faster builds and native ES modules.

## Decision

We adopted **Vite** as the primary bundler, configured to work alongside Keycloakify's build step:
1. Vite compiles React/TypeScript to JavaScript
2. Keycloakify's compiler transforms JavaScript to Keycloak theme JAR

## Consequences

✅ **Benefits:**
- Fast dev server with HMR (near-instant feedback)
- Native ES module support in development
- Fast cold startup
- Minimal configuration
- Active ecosystem and community

⚠️ **Trade-offs:**
- Two-stage build (Vite → Keycloakify); debugging can be complex
- Some older plugins may not be compatible
- Requires Node.js 18+

## References

- [Vite documentation](https://vitejs.dev/)
- [Vite + React setup](https://vitejs.dev/guide/)

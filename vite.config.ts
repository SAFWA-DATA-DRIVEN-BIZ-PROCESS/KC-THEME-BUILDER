import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            themeName: ["custom-theme-1", "custom-theme-2", "ContractorLogin-06062025-1"],
            accountThemeImplementation: "none"
        })
    ]
});

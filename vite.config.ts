import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            themeName: ["custom-email", "swifto"],
            accountThemeImplementation: "none",
            keycloakVersionTargets: {
                "22-to-25": false,
                "all-other-versions": `${new Date()
                    .toISOString()
                    .replace(/[-:T.Z]/g, "")
                    .slice(0, 14)}.jar`
            }
        })
    ]
});

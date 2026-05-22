/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "login/styleLevelCustomization.tsx"
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import { ThemeProvider } from "@/components/ThemeProvider";
import type { ClassKey } from "@keycloakify/login-ui/useKcClsx";
import type { ReactNode } from "react";
import "./index.css";

type Classes = { [key in ClassKey]?: string };

type StyleLevelCustomization = {
    doUseDefaultCss: boolean;
    classes?: Classes;
    loadCustomStylesheet?: () => void;
    Provider?: (props: { children: ReactNode }) => ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
function Provider(props: { children: ReactNode }) {
    const { children } = props;

    return (
        <ThemeProvider defaultTheme="light">
            {children}
        </ThemeProvider>
    );
}

export function useStyleLevelCustomization(): StyleLevelCustomization {
    return {
        doUseDefaultCss: false,
        Provider
    };
}

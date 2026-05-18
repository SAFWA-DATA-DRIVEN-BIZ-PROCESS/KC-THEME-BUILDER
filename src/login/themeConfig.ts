import type { KcContext } from "./KcContext";
import swiftoHeroImage from "./assets/img/swifto-hero.jpg";

export type LoginThemeConfig = {
    appName: string;
    appTagline: string;
    heroTitle: string;
    heroDescription: string;
    heroImageSrc: string;
    heroImageAlt: string;
    homeUrl?: string;
};

type StoredLoginThemeConfig = Omit<LoginThemeConfig, "homeUrl">;

const themeConfigs: Record<string, StoredLoginThemeConfig> = {
    swifto: {
        appName: "Swifto",
        appTagline: "Civil works access portal",
        heroTitle: "Sign in to the Swifto workspace.",
        heroDescription:
            "A focused Keycloak experience for teams coordinating road works, permits, and field operations.",
        heroImageSrc: swiftoHeroImage,
        heroImageAlt: "Civil road works site"
    }
};

const defaultThemeConfig = themeConfigs.swifto;

export function getLoginThemeConfig(kcContext: KcContext): LoginThemeConfig {
    const themeConfig = themeConfigs[kcContext.themeName] ?? defaultThemeConfig;

    return {
        ...themeConfig,
        homeUrl: kcContext.client?.baseUrl
    };
}
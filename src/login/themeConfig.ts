import type { KcContext } from "./KcContext";

export type AppMode = "normal" | "maintenance" | "restricted" | "readonly";

export interface ThemeConfig {
    appName: string;
    logo: string;
    primaryColor: string;
    secondaryColor: string;
    mode: AppMode;
    showLoginForm: boolean;
    bannerMessage?: string;
    bannerType?: "info" | "warning" | "error";
    // Styling properties
    backgroundImage?: string;  // e.g., "./assets/img/background.jpg"
    backgroundColor?: string;  // e.g., "#f0f0f0" or "orange-50"
    bodyClasses?: string;      // Additional Tailwind classes
}

// Configuration per theme variant (kcContext.themeName)
const themeConfigs: Record<string, Partial<ThemeConfig>> = {
    "e-tender-basic": {
        appName: "E-Tender Portal",
        logo: "/logo-etender.svg",
        primaryColor: "#0066cc",
        secondaryColor: "#004499",
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/background.jpg"
    },
    "e-tender-maintenance": {
        appName: "E-Tender Portal",
        logo: "/logo-etender.svg",
        primaryColor: "#ff6b00",
        secondaryColor: "#cc5500",
        mode: "maintenance",
        showLoginForm: false,
        bannerMessage: "System is currently under maintenance. We'll be back soon!",
        bannerType: "warning",
        backgroundColor: "orange-50"
    },
    "procurement-basic": {
        appName: "Procurement System",
        logo: "/logo-procurement.svg",
        primaryColor: "#00aa44",
        secondaryColor: "#008833",
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/background.jpg"
    },
    "procurement-restricted": {
        appName: "Procurement System",
        logo: "/logo-procurement.svg",
        primaryColor: "#cc0000",
        secondaryColor: "#990000",
        mode: "restricted",
        showLoginForm: true,
        bannerMessage: "Restricted access mode. Additional authentication may be required.",
        bannerType: "error",
        backgroundColor: "red-50"
    },
    // Example: Add more apps here - just add to themeConfigs and vite.config.ts
    // No need to modify KcPage.tsx or other component files!
    /*
    "hr-portal-basic": {
        appName: "HR Portal",
        logo: "/logo-hr.svg",
        primaryColor: "#8b5cf6",
        secondaryColor: "#7c3aed",
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/hr-background.jpg"
    },
    "finance-basic": {
        appName: "Finance System",
        logo: "/logo-finance.svg",
        primaryColor: "#059669",
        secondaryColor: "#047857",
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/finance-background.jpg"
    },
    "inventory-basic": {
        appName: "Inventory Management",
        logo: "/logo-inventory.svg",
        primaryColor: "#dc2626",
        secondaryColor: "#b91c1c",
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/inventory-background.jpg"
    },
    "inventory-readonly": {
        appName: "Inventory Management",
        logo: "/logo-inventory.svg",
        primaryColor: "#64748b",
        secondaryColor: "#475569",
        mode: "readonly",
        showLoginForm: true,
        bannerMessage: "Read-only mode. You can view but not modify data.",
        bannerType: "info",
        backgroundColor: "slate-100"
    }
    */
};

// Default configuration
const defaultConfig: ThemeConfig = {
    appName: "Portal",
    logo: "/logo-default.svg",
    primaryColor: "#333333",
    secondaryColor: "#666666",
    mode: "normal",
    showLoginForm: true,
    backgroundImage: "./assets/img/background.jpg",
    bodyClasses: "bg-no-repeat bg-center bg-fixed font-geist"
};

export function getThemeConfig(kcContext: KcContext): ThemeConfig {
    const themeName = kcContext.themeName;
    
    if (!themeName) {
        return defaultConfig;
    }

    // Get theme-specific config or default
    const themeConfig = themeConfigs[themeName] || {};

    // Merge with defaults
    return {
        ...defaultConfig,
        ...themeConfig
    };
}

// Helper to build body classes dynamically from theme config
export function getBodyClasses(kcContext: KcContext): string {
    const config = getThemeConfig(kcContext);
    const classes: string[] = [];
    
    // Add background image or color
    if (config.backgroundImage) {
        classes.push(`!bg-[url(${config.backgroundImage})]`);
    } else if (config.backgroundColor) {
        classes.push(`!bg-${config.backgroundColor}`);
    }
    
    // Add default body classes
    if (config.bodyClasses) {
        classes.push(config.bodyClasses);
    } else {
        classes.push("bg-no-repeat bg-center bg-fixed font-geist");
    }
    
    return classes.join(" ");
}

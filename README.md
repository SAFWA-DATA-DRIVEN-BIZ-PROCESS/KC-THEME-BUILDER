<p align="center">
    <i>🚀 <a href="https://keycloakify.dev">Keycloakify</a> v11 Multi-Theme Starter 🚀</i>
    <br/>
    <br/>
</p>

# Keycloak Multi-Theme Builder

A scalable, dynamic multi-theme builder for Keycloak using Keycloakify v11. Build unlimited themes from a single codebase with the **Theme Variants** approach.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Multi-Theme Architecture](#multi-theme-architecture)
- [Adding New Apps (2 Steps)](#adding-new-apps-2-steps)
- [Configuration Options](#configuration-options)
- [Build and Deploy](#build-and-deploy)
- [Keycloak Setup](#keycloak-setup)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Advanced Features](#advanced-features)

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/keycloakify/keycloakify-starter
cd keycloakify-starter
pnpm install

# Development
pnpm dev

# Build themes
pnpm build-keycloak-theme

# Start Keycloak dev server
pnpm start
```

### Prerequisites

- [Maven](https://maven.apache.org/) >= 3.1.1, Java >= 7
  - macOS: `brew install maven`
  - Debian/Ubuntu: `sudo apt-get install maven`
  - Windows: `choco install openjdk` and `choco install maven`

---

## 🏗️ Multi-Theme Architecture

### Theme Variants Approach

This setup uses **Keycloakify's Theme Variants** to generate multiple theme JARs from a single codebase. Each app scenario (basic, maintenance, restricted) gets its own theme variant.

### How It Works

**1. Define Theme Names** (`vite.config.ts`):
```typescript
keycloakify({
    themeName: [
        "e-tender-basic",
        "e-tender-maintenance",
        "procurement-basic",
        "procurement-restricted",
        "custom-email"
    ]
})
```

**2. Configure Each Theme** (`src/login/themeConfig.ts`):
```typescript
const themeConfigs: Record<string, Partial<ThemeConfig>> = {
    "e-tender-basic": {
        appName: "E-Tender Portal",
        primaryColor: "#0066cc",
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/background.jpg"
    },
    "e-tender-maintenance": {
        appName: "E-Tender Portal",
        primaryColor: "#ff6b00",
        mode: "maintenance",
        showLoginForm: false,
        bannerMessage: "System under maintenance",
        bannerType: "warning",
        backgroundColor: "orange-50"
    }
};
```

**3. Dynamic Runtime Detection**:
```typescript
// Automatically detects active theme
const themeConfig = getThemeConfig(kcContext);
const bodyClasses = getBodyClasses(kcContext);
```

### Generated Output

Build generates separate JAR files:
- `e-tender-basic.jar`
- `e-tender-maintenance.jar`
- `procurement-basic.jar`
- `procurement-restricted.jar`
- `custom-email.jar`

---

## ➕ Adding New Apps (2 Steps)

### Step 1: Update `vite.config.ts`

Add theme names to the array:

```typescript
keycloakify({
    themeName: [
        "e-tender-basic",
        "e-tender-maintenance",
        "procurement-basic",
        "procurement-restricted",
        "custom-email",
        // Add new themes:
        "hr-portal-basic",           // ← New
        "finance-basic",             // ← New
        "inventory-readonly"         // ← New
    ]
})
```

### Step 2: Update `src/login/themeConfig.ts`

Add configuration for each theme:

```typescript
const themeConfigs: Record<string, Partial<ThemeConfig>> = {
    // ... existing configs ...
    
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
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/finance-background.jpg"
    }
};
```

**That's it!** No need to modify component files. The system handles styling and logic automatically.

---

## 🎨 Configuration Options

### Basic Configuration

```typescript
"app-name-basic": {
    appName: "My App",                     // Display name
    logo: "/logo.svg",                     // Logo path
    primaryColor: "#0066cc",               // Primary color
    secondaryColor: "#004499",             // Secondary color
    mode: "normal",                        // normal | maintenance | restricted | readonly
    showLoginForm: true,                   // Show/hide login form
    backgroundImage: "./assets/img/bg.jpg" // Background image
}
```

### Maintenance Mode

```typescript
"app-name-maintenance": {
    appName: "My App",
    primaryColor: "#ff6b00",
    mode: "maintenance",
    showLoginForm: false,                  // Hide login form
    bannerMessage: "Under maintenance",    // Banner text
    bannerType: "warning",                 // warning | error | info
    backgroundColor: "orange-50"           // Tailwind color
}
```

### Restricted Access

```typescript
"app-name-restricted": {
    appName: "My App",
    primaryColor: "#cc0000",
    mode: "restricted",
    showLoginForm: true,
    bannerMessage: "Restricted access mode",
    bannerType: "error",
    backgroundColor: "red-50"
}
```

### Read-Only Mode

```typescript
"app-name-readonly": {
    appName: "My App",
    primaryColor: "#64748b",
    mode: "readonly",
    showLoginForm: true,
    bannerMessage: "Read-only mode - viewing only",
    bannerType: "info",
    backgroundColor: "slate-100"
}
```

### Custom Styling

```typescript
"app-name-custom": {
    appName: "My App",
    primaryColor: "#0066cc",
    mode: "normal",
    showLoginForm: true,
    backgroundImage: "./assets/img/custom-bg.jpg",
    bodyClasses: "bg-no-repeat bg-cover bg-top custom-font"
}
```

---

## 📦 Build and Deploy

### 1. Build Themes

```bash
pnpm build-keycloak-theme
```

Generates JAR files in `dist_keycloak/`:
- `hr-portal-basic.jar`
- `finance-basic.jar`
- `inventory-basic.jar`
- etc.

### 2. Deploy to Keycloak

```bash
# Copy JARs to Keycloak
cp dist_keycloak/*.jar /path/to/keycloak/providers/

# Restart Keycloak
cd /path/to/keycloak
./bin/kc.sh start-dev
```

---

## 🔐 Keycloak Setup

### Step 1: Create Clients

For each app, create a Keycloak client:

#### E-Tender Basic
- **Client ID:** `e-tender`
- **Login Theme:** `e-tender-basic`

#### E-Tender Maintenance
- **Client ID:** `e-tender-maintenance`
- **Login Theme:** `e-tender-maintenance`

#### Procurement Basic
- **Client ID:** `procurement`
- **Login Theme:** `procurement-basic`

#### Procurement Restricted
- **Client ID:** `procurement-restricted`
- **Login Theme:** `procurement-restricted`

### Step 2: Configure in Admin Console

1. Go to **Clients** → Select client
2. Scroll to **Login Settings**
3. Set **Login Theme** to corresponding variant
4. Save

### Step 3: Frontend Integration

Switch clients based on app mode:

```typescript
// Check system status
const systemStatus = checkSystemStatus(); // 'normal' | 'maintenance'

const keycloak = new Keycloak({
    clientId: systemStatus === 'maintenance'
        ? 'e-tender-maintenance' 
        : 'e-tender',
    realm: 'your-realm',
    url: 'https://your-keycloak-server'
});
```

### Step 4: Backend Integration

Return different client IDs based on system status:

```javascript
// Express.js example
app.get('/auth/config', (req, res) => {
    const systemStatus = checkSystemStatus();
    res.json({
        clientId: systemStatus === 'maintenance' 
            ? 'e-tender-maintenance' 
            : 'e-tender'
    });
});
```

---

## 🧪 Testing

### Local Development Server

```bash
pnpm dev
```

Edit `src/main.tsx` to test different scenarios:

```typescript
const kcContext = {
    ...mockKcContext,
    themeName: "procurement-restricted"
};
```

### Storybook Testing

```bash
pnpm storybook
```

Modify `src/login/KcPageStory.tsx` to test variants:

```typescript
export function getKcContextMock(params: { pageId: PageId }): KcContext {
    return {
        ...mockKcContext,
        themeName: "e-tender-maintenance",
        ...params.overrides
    };
}
```

### Testing with Keycloak

```bash
pnpm start
```

Opens Keycloak dev server at http://localhost:8080

**Documentation:**
- [Testing your theme](https://docs.keycloakify.dev/testing-your-theme)
- [Customization strategies](https://docs.keycloakify.dev/customization-strategies)

---

## 🔧 Troubleshooting

### Theme Not Showing
- ✅ Verify JAR is in `providers/` directory
- ✅ Check Keycloak logs for deployment errors
- ✅ Ensure client's Login Theme matches JAR name
- ✅ Clear browser cache

### Wrong Theme Loading
- ✅ Check client configuration in Keycloak Admin
- ✅ Verify `kcContext.themeName` in browser console
- ✅ Ensure your app is using correct client ID

### Build Errors
- ✅ Run `pnpm clean` then rebuild
- ✅ Check `vite.config.ts` theme names are valid
- ✅ Ensure no duplicate theme names
- ✅ Verify Maven is installed: `mvn --version`

### TypeScript Errors
- ✅ Run `pnpm postinstall` to regenerate types
- ✅ Restart TypeScript server in VS Code
- ✅ Check `src/kc.gen.tsx` for updated types

### Styling Not Working
- ✅ Check `backgroundImage` path is correct
- ✅ Verify Tailwind classes are valid
- ✅ Use browser DevTools to inspect applied classes
- ✅ Ensure images exist in `src/login/assets/img/`

---

## 💡 Real-World Example: Adding 5 Apps

### Update `vite.config.ts`
```typescript
themeName: [
    // E-Tender
    "e-tender-basic",
    "e-tender-maintenance",
    
    // Procurement
    "procurement-basic",
    "procurement-restricted",
    
    // HR Portal
    "hr-portal-basic",
    "hr-portal-maintenance",
    
    // Finance
    "finance-basic",
    "finance-readonly",
    
    // Inventory
    "inventory-basic",
    "inventory-maintenance",
    
    // Claims
    "claims-basic",
    "claims-restricted",
    
    // Contractor
    "contractor-basic",
    "contractor-restricted",
    
    // Email
    "custom-email"
]
```

### Update `themeConfig.ts`
```typescript
const themeConfigs: Record<string, Partial<ThemeConfig>> = {
    // HR Portal
    "hr-portal-basic": {
        appName: "HR Portal",
        primaryColor: "#8b5cf6",
        mode: "normal",
        showLoginForm: true,
        backgroundImage: "./assets/img/hr-bg.jpg"
    },
    "hr-portal-maintenance": {
        appName: "HR Portal",
        primaryColor: "#ff6b00",
        mode: "maintenance",
        showLoginForm: false,
        bannerMessage: "HR system under maintenance",
        backgroundColor: "orange-50"
    },
    
    // Finance, Inventory, Claims, Contractor...
    // Add remaining configurations
};
```

**Result:** Generates 15+ theme JARs from one codebase!

---

## 🎯 Advanced Features

### Initialize Account Theme

```bash
npx keycloakify initialize-account-theme
```

### Initialize Email Theme

```bash
npx keycloakify initialize-email-theme
```

### Custom Keycloak Versions

Customize target versions in `vite.config.ts`:

```typescript
keycloakVersionTargets: {
    "22-to-25": false,
    "all-other-versions": `${new Date()
        .toISOString()
        .replace(/[-:T.Z]/g, "")
        .slice(0, 14)}.jar`
}
```

[Documentation](https://docs.keycloakify.dev/features/compiler-options/keycloakversiontargets)

### GitHub Actions

The starter includes a GitHub Actions workflow that builds and publishes JARs as release artifacts.

**To enable:**
1. Go to your repository on GitHub
2. Navigate to: `Settings` > `Actions` > `Workflow permissions`
3. Select `Read and write permissions`
4. Update `package.json` version and push to trigger release

---

## ✅ Benefits of This Approach

✅ **Unlimited apps** - scale to 5, 10, 50+ apps easily  
✅ **Single codebase** - all themes from one source  
✅ **Zero component changes** - just update config  
✅ **Type-safe** - TypeScript validates everything  
✅ **DRY principle** - configuration in one place  
✅ **Separate deployments** - each variant is a JAR  
✅ **Easy switching** - change client in your app  
✅ **Keycloakify native** - uses built-in features

---

## 📚 Resources

- [Keycloakify Documentation](https://docs.keycloakify.dev)
- [Theme Variants Feature](https://docs.keycloakify.dev/features/theme-variants)
- [Customization Strategies](https://docs.keycloakify.dev/customization-strategies)
- [Testing Guide](https://docs.keycloakify.dev/testing-your-theme)
- [GitHub Repository](https://github.com/keycloakify/keycloakify)

---

## 📄 License

MIT

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

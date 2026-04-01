# Keycloak Default Themes Reference

Official Keycloak themes from GitHub: `https://github.com/keycloak/keycloak/tree/main/themes/src/main/resources/theme`

This folder contains the complete source code of Keycloak's default themes for reference during custom theme development.

---

## 📁 Theme Structure

### `/base` - Foundation Theme
**The core theme that all others extend**

- **`login/`** - 45 FreeMarker templates (.ftl)
  - `template.ftl` - Master page layout
  - `login.ftl` - Main login form
  - `register.ftl` - User registration
  - `login-otp.ftl` - One-time password
  - `webauthn-authenticate.ftl` - Passkey authentication
  - And 40+ more login/auth flow templates
  
- **`email/`** - 18 email templates
  - `html/` - HTML email templates
  - `text/` - Plain text versions
  - Password resets, verification, notifications
  
- **`admin/`** - Admin console templates
  
- **`account/`** - Account management templates

**Key features:**
- Pure template logic without styling
- Contains all available Keycloak variables
- Shows required form fields and structure
- Demonstrates conditional logic for auth flows

### `/keycloak` - Default Styled Theme
**Keycloak's branded theme with styling**

- **`login/`**
  - `resources/css/login.css` - Default login page styles
  - `resources/img/` - Keycloak branding images
    - `keycloak-logo.png`
    - `keycloak-bg.png`
    - Feedback icons (error, success, warning)
  - `template.ftl` - Extends base with styling
  
- **`welcome/`** - Welcome page
  - `resources/css/welcome.css`
  - `resources/background.svg`
  
- **`common/`** - Shared resources
  - `resources/lib/pficon/` - PatternFly icons
  
- **`email/`** - Styled email templates

**Key features:**
- Extends `/base` theme
- Adds Keycloak visual identity
- Includes PatternFly CSS framework
- Production-ready styling

### `/keycloak.v2` - Modern Theme
**Next-generation Keycloak UI**

- **`login/`** - Updated login page design
- Represents the future direction of Keycloak themes
- Modern, clean interface

---

## 🎯 How to Use This Reference

### For Keycloakify Development

1. **Study Template Structure**
   - Look at `base/login/template.ftl` to understand page layout
   - Check `base/login/*.ftl` for available variables like:
     - `${url.loginAction}` - Form submission URL
     - `${realm.name}` - Current realm name
     - `${login.username}` - User input values
     - `${message.summary}` - Error/info messages

2. **Reference Default Styling**
   - Study `keycloak/login/resources/css/login.css` for CSS classes
   - Compare it with your Tailwind approach
   - See which HTML structure Keycloak expects

3. **Check Required Form Fields**
   - Every auth flow has specific required fields
   - Base templates show mandatory attributes
   - Ensures your React components work with Keycloak

4. **Understand Theme Inheritance**
   ```
   base/login/login.ftl
       ↓ extends with <#import>
   keycloak/login/template.ftl
       ↓ your custom theme
   Your Keycloakify React components
   ```

### Key Files to Study

| File | Purpose |
|------|---------|
| `base/login/template.ftl` | Master page layout |
| `base/login/login.ftl` | Main login form structure |
| `base/login/register.ftl` | Registration form |
| `base/login/login-password.ftl` | Password entry page |
| `base/login/login-otp.ftl` | OTP/2FA page |
| `keycloak/login/resources/css/login.css` | Default CSS styles |
| `base/email/html/password-reset.ftl` | Password reset email |

### Example: Understanding Variables

Open `base/login/login.ftl` to see:
```ftl
<form id="kc-form-login" action="${url.loginAction}" method="post">
    <#if realm.password>
        <input id="password" name="password" type="password" />
    </#if>
</form>
```

This shows:
- Form must post to `${url.loginAction}`
- Password field is conditionally rendered
- Input names must match Keycloak expectations

---

## 📊 Template Counts

- **Base Login**: 45 templates
- **Base Email**: 18 templates  
- **Total**: 63+ FreeMarker templates

---

## 🔗 Related Resources

- **Your Keycloakify project**: `/src/login/pages/`
- **Built output**: `/dist_keycloak/theme/swifto/`
- **Keycloak docs**: https://www.keycloak.org/docs/latest/server_development/#_themes
- **Keycloakify docs**: https://docs.keycloakify.dev/

---

## ⚠️ Important Notes

1. **Do not modify these files** - They are reference only
2. Make changes in your `/src` folder using React components
3. These templates use FreeMarker syntax, your theme uses React/TSX
4. Keycloakify converts your React to FreeMarker during build
5. Always test with `pnpm dev` or `pnpm build-keycloak-theme`

---

**Source**: https://github.com/keycloak/keycloak/tree/main/themes  
**Last Updated**: March 31, 2026  
**Version**: Latest from main branch

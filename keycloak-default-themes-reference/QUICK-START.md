# Quick Reference - Most Important Files

Start here when studying the default Keycloak themes:

## 🎯 Essential Templates

### Master Layout
```
📄 base/login/template.ftl
```
The main page structure that wraps all login pages. Study this first!

### Core Login Pages
```
📄 base/login/login.ftl          - Main login form
📄 base/login/register.ftl       - User registration
📄 base/login/login-password.ftl - Password entry
📄 base/login/login-otp.ftl      - Two-factor authentication
📄 base/login/error.ftl          - Error messages
📄 base/login/info.ftl           - Information messages
```

### Password Management
```
📄 base/login/login-reset-password.ftl        - Request password reset
📄 base/login/login-update-password.ftl       - Set new password
📄 base/email/html/password-reset.ftl         - Password reset email
📄 base/email/html/email-verification.ftl     - Email verification
```

### Modern Authentication
```
📄 base/login/webauthn-authenticate.ftl       - Passkey login
📄 base/login/webauthn-register.ftl           - Passkey registration
📄 base/login/login-passkeys-conditional-authenticate.ftl
```

## 🎨 Styling & Assets

### CSS Files
```
📄 keycloak/login/resources/css/login.css     - 11KB of default styles
📄 keycloak/welcome/resources/css/welcome.css - Welcome page styles
📄 keycloak/common/resources/lib/pficon/pficon.css - Icon fonts
```

### Images
```
🖼️ keycloak/login/resources/img/
   ├── keycloak-logo.png
   ├── keycloak-logo-text.png
   ├── keycloak-bg.png
   ├── feedback-error-sign.png
   ├── feedback-success-sign.png
   └── feedback-warning-sign.png
```

## 🔍 How to Study

1. **Start with**: `base/login/template.ftl` 
   - Understand the HTML structure
   - See how stylesheets are included
   - Find where content is inserted

2. **Then check**: `base/login/login.ftl`
   - See form structure
   - Note input field names
   - Understand conditional rendering

3. **Compare with**: `keycloak/login/resources/css/login.css`
   - CSS class names
   - Layout approach
   - Visual styling

4. **Apply to your React**: In `/src/login/pages/Login.tsx`
   - Use similar structure
   - Keep required form attributes
   - Style with Tailwind instead

## 💡 Pro Tips

- Search for `${url.` to find all URL variables
- Search for `${message.` to find message variables
- Search for `<#if` to see conditional logic
- Search for `<@layout.` to see macro usage
- Check `messages/messages_en.properties` for all text strings

## 🚀 Quick Commands

View a template:
```bash
cat keycloak-default-themes-reference/base/login/login.ftl
```

Search for a variable:
```bash
grep -r "url.loginAction" keycloak-default-themes-reference/base/
```

List all login templates:
```bash
ls keycloak-default-themes-reference/base/login/*.ftl
```

---

📖 **Full documentation**: See README.md in this folder

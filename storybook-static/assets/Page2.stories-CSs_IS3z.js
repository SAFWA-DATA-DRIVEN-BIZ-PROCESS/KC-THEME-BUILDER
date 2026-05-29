import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`select-authenticator.ftl`}),n={title:`login/select-authenticator.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{auth:{authenticationSelections:[{authExecId:`25697c4e-0c80-4f2c-8eb7-2c16347e8e8d`,displayName:`auth-username-password-form-display-name`,helpText:`auth-username-password-form-help-text`,iconCssClass:`kcAuthenticatorPasswordClass`},{authExecId:`4cb60872-ce0d-4c8f-a806-e651ed77994b`,displayName:`webauthn-passwordless-display-name`,helpText:`webauthn-passwordless-help-text`,iconCssClass:`kcAuthenticatorWebAuthnPasswordlessClass`}]}}}},s={args:{kcContext:{auth:{authenticationSelections:[{authExecId:`f0c22855-eda7-4092-8565-0c22f77d2ffb`,displayName:`home-idp-discovery-display-name`,helpText:`home-idp-discovery-help-text`,iconCssClass:`kcAuthenticatorDefaultClass`},{authExecId:`20456f5a-8b2b-45f3-98e0-551dcb27e3e1`,displayName:`identity-provider-redirctor-display-name`,helpText:`identity-provider-redirctor-help-text`,iconCssClass:`kcAuthenticatorDefaultClass`},{authExecId:`eb435db9-474e-473a-8da7-c184fa510b96`,displayName:`auth-username-password-form-display-name`,helpText:`auth-username-password-help-text`,iconCssClass:`kcAuthenticatorDefaultClass`}]},"x-keycloakify":{messages:{"home-idp-discovery-display-name":`Home identity provider`,"home-idp-discovery-help-text":`Sign in via your home identity provider which will be automatically determined based on your provided email address.`,"identity-provider-redirctor-display-name":`Identity Provider Redirector`,"identity-provider-redirctor-help-text":`Sign in via your identity provider.`,"auth-username-password-help-text":`Sign in via your username and password.`}}}}},c={args:{kcContext:{url:{loginAction:`/mock-login-action`},auth:{authenticationSelections:[]}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "ar",
        rtl: true
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "fr"
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      auth: {
        authenticationSelections: [{
          authExecId: "25697c4e-0c80-4f2c-8eb7-2c16347e8e8d",
          displayName: "auth-username-password-form-display-name",
          helpText: "auth-username-password-form-help-text",
          iconCssClass: "kcAuthenticatorPasswordClass"
        }, {
          authExecId: "4cb60872-ce0d-4c8f-a806-e651ed77994b",
          displayName: "webauthn-passwordless-display-name",
          helpText: "webauthn-passwordless-help-text",
          iconCssClass: "kcAuthenticatorWebAuthnPasswordlessClass"
        }]
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      auth: {
        authenticationSelections: [{
          authExecId: "f0c22855-eda7-4092-8565-0c22f77d2ffb",
          displayName: "home-idp-discovery-display-name",
          helpText: "home-idp-discovery-help-text",
          iconCssClass: "kcAuthenticatorDefaultClass"
        }, {
          authExecId: "20456f5a-8b2b-45f3-98e0-551dcb27e3e1",
          displayName: "identity-provider-redirctor-display-name",
          helpText: "identity-provider-redirctor-help-text",
          iconCssClass: "kcAuthenticatorDefaultClass"
        }, {
          authExecId: "eb435db9-474e-473a-8da7-c184fa510b96",
          displayName: "auth-username-password-form-display-name",
          helpText: "auth-username-password-help-text",
          iconCssClass: "kcAuthenticatorDefaultClass"
        }]
      },
      "x-keycloakify": {
        messages: {
          "home-idp-discovery-display-name": "Home identity provider",
          "home-idp-discovery-help-text": "Sign in via your home identity provider which will be automatically determined based on your provided email address.",
          "identity-provider-redirctor-display-name": "Identity Provider Redirector",
          "identity-provider-redirctor-help-text": "Sign in via your identity provider.",
          "auth-username-password-help-text": "Sign in via your username and password."
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      auth: {
        authenticationSelections: [] // No authentication methods available
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithoutAuthenticationSelections:\r
- Purpose: Tests when no authentication methods are available for selection.\r
- Scenario: The component renders without any authentication options, providing a default message or fallback.\r
- Key Aspect: Ensures that the component gracefully handles the absence of available authentication methods.`,...c.parameters?.docs?.description}}};var l=[`Default`,`Arabic`,`French`,`WithDifferentAuthenticationMethods`,`WithRealmTranslations`,`WithoutAuthenticationSelections`];export{i as Arabic,r as Default,a as French,o as WithDifferentAuthenticationMethods,s as WithRealmTranslations,c as WithoutAuthenticationSelections,l as __namedExportsOrder,n as default};
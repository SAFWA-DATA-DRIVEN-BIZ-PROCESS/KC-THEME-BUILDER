import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`webauthn-authenticate.ftl`}),n={title:`login/webauthn-authenticate.ftl`,component:t},r={},i={args:{kcContext:{auth:{showTryAnotherWayLink:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},o={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},s={args:{kcContext:{url:{loginAction:`/mock-login-action`},authenticators:{authenticators:[{credentialId:`authenticator-1`,label:`Security Key 1`,transports:{iconClass:`kcAuthenticatorUsbIcon`,displayNameProperties:[`USB`]},createdAt:`2023-01-01`},{credentialId:`authenticator-2`,label:`Security Key 2`,transports:{iconClass:`kcAuthenticatorNfcIcon`,displayNameProperties:[`NFC`]},createdAt:`2023-02-01`}]},shouldDisplayAuthenticators:!0}}},c={args:{kcContext:{url:{loginAction:`/mock-login-action`},authenticators:{authenticators:[{credentialId:`authenticator-1`,label:`My Security Key`,transports:{iconClass:`kcAuthenticatorUsbIcon`,displayNameProperties:[`USB`]},createdAt:`2023-01-01`}]},shouldDisplayAuthenticators:!0}}},l={args:{kcContext:{url:{loginAction:`/mock-login-action`},authenticators:{authenticators:[{credentialId:`authenticator-1`,label:`My Security Key`,transports:{iconClass:`kcAuthenticatorUsbIcon`,displayNameProperties:[`USB`]},createdAt:`2023-01-01`}]},shouldDisplayAuthenticators:!0,message:{summary:`An error occurred during WebAuthn authentication.`,type:`error`}}}},u={args:{kcContext:{url:{loginAction:`/mock-login-action`},authenticators:{authenticators:[{credentialId:`authenticator-1`,label:`My Security Key`,transports:{iconClass:`kcAuthenticatorUsbIcon`,displayNameProperties:[`USB`]},createdAt:`2023-01-01`}]},shouldDisplayAuthenticators:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      auth: {
        showTryAnotherWayLink: true
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "ar",
        rtl: true
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "fr"
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      authenticators: {
        authenticators: [{
          credentialId: "authenticator-1",
          label: "Security Key 1",
          transports: {
            iconClass: "kcAuthenticatorUsbIcon",
            displayNameProperties: ["USB"]
          },
          createdAt: "2023-01-01"
        }, {
          credentialId: "authenticator-2",
          label: "Security Key 2",
          transports: {
            iconClass: "kcAuthenticatorNfcIcon",
            displayNameProperties: ["NFC"]
          },
          createdAt: "2023-02-01"
        }]
      },
      shouldDisplayAuthenticators: true
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithMultipleAuthenticators:\r
- Purpose: Tests when multiple WebAuthn authenticators are available for selection.\r
- Scenario: The component renders multiple authenticators, allowing the user to choose between them.\r
- Key Aspect: Ensures that the available authenticators are displayed, and the user can select one.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      authenticators: {
        authenticators: [{
          credentialId: "authenticator-1",
          label: "My Security Key",
          transports: {
            iconClass: "kcAuthenticatorUsbIcon",
            displayNameProperties: ["USB"]
          },
          createdAt: "2023-01-01"
        }]
      },
      shouldDisplayAuthenticators: true
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithSingleAuthenticator:\r
- Purpose: Tests when only one WebAuthn authenticator is available.\r
- Scenario: The component renders the WebAuthn form with a single available authenticator.\r
- Key Aspect: Ensures the form renders correctly when there is only one authenticator available.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      authenticators: {
        authenticators: [{
          credentialId: "authenticator-1",
          label: "My Security Key",
          transports: {
            iconClass: "kcAuthenticatorUsbIcon",
            displayNameProperties: ["USB"]
          },
          createdAt: "2023-01-01"
        }]
      },
      shouldDisplayAuthenticators: true,
      message: {
        summary: "An error occurred during WebAuthn authentication.",
        type: "error"
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`WithErrorDuringAuthentication:\r
- Purpose: Tests the behavior when an error occurs during WebAuthn authentication.\r
- Scenario: The component renders with an error message displayed to the user.\r
- Key Aspect: Ensures the form handles authentication errors and displays a relevant message.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      authenticators: {
        authenticators: [{
          credentialId: "authenticator-1",
          label: "My Security Key",
          transports: {
            iconClass: "kcAuthenticatorUsbIcon",
            displayNameProperties: ["USB"]
          },
          createdAt: "2023-01-01"
        }]
      },
      shouldDisplayAuthenticators: true
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`WithJavaScriptDisabled:\r
- Purpose: Tests the behavior when JavaScript is disabled or not functioning.\r
- Scenario: The component renders a fallback message prompting the user to enable JavaScript for WebAuthn authentication.\r
- Key Aspect: Ensures the form provides a clear message when JavaScript is required but unavailable.`,...u.parameters?.docs?.description}}};var d=[`Default`,`WithTryAnotherWay`,`Arabic`,`French`,`WithMultipleAuthenticators`,`WithSingleAuthenticator`,`WithErrorDuringAuthentication`,`WithJavaScriptDisabled`];export{a as Arabic,r as Default,o as French,l as WithErrorDuringAuthentication,u as WithJavaScriptDisabled,s as WithMultipleAuthenticators,c as WithSingleAuthenticator,i as WithTryAnotherWay,d as __namedExportsOrder,n as default};
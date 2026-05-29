import{t as e}from"./KcPageStory-BtlMbT4_.js";var{KcPageStory:t}=e({pageId:`webauthn-error.ftl`}),n={title:`login/webauthn-error.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},isAppInitiatedAction:!1,message:{summary:`WebAuthn authentication failed. Please try again.`,type:`error`}}}},s={args:{kcContext:{url:{loginAction:`/mock-login-action`},isAppInitiatedAction:!0,message:{summary:`WebAuthn authentication failed. You can try again or cancel.`,type:`error`}}}},c={args:{kcContext:{url:{loginAction:`/mock-login-action`},isAppInitiatedAction:!1,message:{summary:`JavaScript is disabled or not working. Please retry manually.`,type:`warning`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      url: {
        loginAction: "/mock-login-action"
      },
      isAppInitiatedAction: false,
      message: {
        summary: "WebAuthn authentication failed. Please try again.",
        type: "error"
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithRetryAvailable:\r
- Purpose: Tests when the user can retry the WebAuthn authentication after an error.\r
- Scenario: The component renders with a "Try Again" button to allow retrying the authentication process.\r
- Key Aspect: Ensures the retry button functionality is visible and the user can retry authentication.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      isAppInitiatedAction: true,
      message: {
        summary: "WebAuthn authentication failed. You can try again or cancel.",
        type: "error"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithAppInitiatedAction:\r
- Purpose: Tests when the WebAuthn error form is part of an application-initiated action.\r
- Scenario: The component renders with both a "Try Again" button and a "Cancel" button for app-initiated actions.\r
- Key Aspect: Ensures the form renders correctly with both "Try Again" and "Cancel" options.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      isAppInitiatedAction: false,
      message: {
        summary: "JavaScript is disabled or not working. Please retry manually.",
        type: "warning"
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithJavaScriptDisabled:\r
- Purpose: Tests the behavior when JavaScript is disabled or not functioning.\r
- Scenario: The component renders with a message prompting the user to retry manually without JavaScript.\r
- Key Aspect: Ensures the retry mechanism works properly when JavaScript is disabled or unavailable.`,...c.parameters?.docs?.description}}};var l=[`Default`,`Arabic`,`French`,`WithRetryAvailable`,`WithAppInitiatedAction`,`WithJavaScriptDisabled`];export{i as Arabic,r as Default,a as French,s as WithAppInitiatedAction,c as WithJavaScriptDisabled,o as WithRetryAvailable,l as __namedExportsOrder,n as default};
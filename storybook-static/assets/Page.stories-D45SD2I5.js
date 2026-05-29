import{t as e}from"./KcPageStory-BtlMbT4_.js";var{KcPageStory:t}=e({pageId:`login-update-password.ftl`}),n={title:`login/login-update-password.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},messagesPerField:{existsError:e=>e===`password`,get:()=>`Password must be at least 8 characters long.`},isAppInitiatedAction:!1}}},s={args:{kcContext:{url:{loginAction:`/mock-login-action`},messagesPerField:{existsError:e=>e===`password-confirm`,get:()=>`Passwords do not match.`},isAppInitiatedAction:!1}}},c={args:{kcContext:{url:{loginAction:`/mock-login-action`},isAppInitiatedAction:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      messagesPerField: {
        existsError: (field: string) => field === "password",
        get: () => "Password must be at least 8 characters long."
      },
      isAppInitiatedAction: false
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithPasswordError:\r
- Purpose: Tests when there is an error in the password input (e.g., invalid password).\r
- Scenario: Simulates the case where the user enters an invalid password, and an error message is displayed.\r
- Key Aspect: Ensures the password input field shows an error message when validation fails.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      messagesPerField: {
        existsError: (field: string) => field === "password-confirm",
        get: () => "Passwords do not match."
      },
      isAppInitiatedAction: false
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithPasswordConfirmError:\r
- Purpose: Tests when there is an error in the password confirmation input (e.g., passwords do not match).\r
- Scenario: Simulates the case where the user enters mismatching passwords, and an error message is displayed in the confirmation field.\r
- Key Aspect: Ensures that the password confirmation field shows an error when passwords do not match.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      isAppInitiatedAction: true
    }
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Arabic`,`French`,`WithPasswordError`,`WithPasswordConfirmError`,`WithAppInitiatedAction`];export{i as Arabic,r as Default,a as French,c as WithAppInitiatedAction,s as WithPasswordConfirmError,o as WithPasswordError,l as __namedExportsOrder,n as default};
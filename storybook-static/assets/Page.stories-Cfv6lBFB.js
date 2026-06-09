import{t as e}from"./KcPageStory-DC1KBcrm.js";var{KcPageStory:t}=e({pageId:`login-reset-password.ftl`}),n={title:`login/login-reset-password.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{realm:{loginWithEmailAllowed:!0,registrationEmailAsUsername:!0}}}},s={args:{kcContext:{realm:{loginWithEmailAllowed:!1,registrationEmailAsUsername:!1,duplicateEmailsAllowed:!1},url:{loginAction:`/mock-login-action`,loginUrl:`/mock-login-url`},messagesPerField:{existsError:e=>e===`username`,get:()=>`Invalid username`},auth:{attemptedUsername:`invalid_user`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      realm: {
        loginWithEmailAllowed: true,
        registrationEmailAsUsername: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        loginWithEmailAllowed: false,
        registrationEmailAsUsername: false,
        duplicateEmailsAllowed: false
      },
      url: {
        loginAction: "/mock-login-action",
        loginUrl: "/mock-login-url"
      },
      messagesPerField: {
        existsError: (field: string) => field === "username",
        get: () => "Invalid username"
      },
      auth: {
        attemptedUsername: "invalid_user"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithUsernameError:\r
- Purpose: Tests behavior when an error occurs with the username input (e.g., invalid username).\r
- Scenario: The component displays an error message next to the username input field.\r
- Key Aspect: Ensures the username input shows error messages when validation fails.`,...s.parameters?.docs?.description}}};var c=[`Default`,`Arabic`,`French`,`WithEmailAsUsername`,`WithUsernameError`];export{i as Arabic,r as Default,a as French,o as WithEmailAsUsername,s as WithUsernameError,c as __namedExportsOrder,n as default};
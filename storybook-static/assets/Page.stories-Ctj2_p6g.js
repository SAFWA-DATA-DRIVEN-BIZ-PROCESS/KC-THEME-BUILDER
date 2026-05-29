import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`login-password.ftl`}),n={title:`login/login-password.ftl`,component:t},r={},i={args:{kcContext:{auth:{showUsername:!0,attemptedUsername:`MyUsername`}}}},a={args:{kcContext:{realm:{resetPasswordAllowed:!0},url:{loginAction:`/mock-login`,loginResetCredentialsUrl:`/mock-reset-password`},messagesPerField:{existsError:e=>e===`password`,get:()=>`Invalid password`}}}},o={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},s={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},c={args:{kcContext:{url:{loginAction:`/mock-login-action`},enableWebAuthnConditionalUI:!0}}},l={args:{kcContext:{realm:{resetPasswordAllowed:!1},url:{loginAction:`/mock-login`,loginResetCredentialsUrl:`/mock-reset-password`},messagesPerField:{existsError:()=>!1}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      auth: {
        showUsername: true,
        attemptedUsername: "MyUsername"
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        resetPasswordAllowed: true
      },
      url: {
        loginAction: "/mock-login",
        loginResetCredentialsUrl: "/mock-reset-password"
      },
      messagesPerField: {
        existsError: (field: string) => field === "password",
        get: () => "Invalid password"
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "ar",
        rtl: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "fr"
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      enableWebAuthnConditionalUI: true
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        resetPasswordAllowed: false
      },
      url: {
        loginAction: "/mock-login",
        loginResetCredentialsUrl: "/mock-reset-password"
      },
      messagesPerField: {
        existsError: () => false
      }
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`WithAttemptedUsername`,`WithPasswordError`,`Arabic`,`French`,`WithWebauthn`,`WithoutResetPasswordOption`];export{o as Arabic,r as Default,s as French,i as WithAttemptedUsername,a as WithPasswordError,c as WithWebauthn,l as WithoutResetPasswordOption,u as __namedExportsOrder,n as default};
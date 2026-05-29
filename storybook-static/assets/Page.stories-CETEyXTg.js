import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`login-update-profile.ftl`}),n={title:`login/login-update-profile.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},messagesPerField:{existsError:e=>e===`email`,get:()=>`Invalid email format`},isAppInitiatedAction:!1}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        existsError: (field: string) => field === "email",
        get: () => "Invalid email format"
      },
      isAppInitiatedAction: false
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithProfileError:\r
- Purpose: Tests when an error occurs in one or more profile fields (e.g., invalid email format).\r
- Scenario: The component displays error messages next to the affected fields.\r
- Key Aspect: Ensures the profile fields show error messages when validation fails.`,...o.parameters?.docs?.description}}};var s=[`Default`,`Arabic`,`French`,`WithProfileError`];export{i as Arabic,r as Default,a as French,o as WithProfileError,s as __namedExportsOrder,n as default};
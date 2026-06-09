import{t as e}from"./KcPageStory-DC1KBcrm.js";var{KcPageStory:t}=e({pageId:`update-email.ftl`}),n={title:`login/update-email.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},messagesPerField:{exists:()=>!1},isAppInitiatedAction:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        exists: () => false
      },
      isAppInitiatedAction: true
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithAppInitiatedAction:\r
- Purpose: Tests when the form is displayed as part of an application-initiated action.\r
- Scenario: The component renders the form with additional buttons like "Cancel."\r
- Key Aspect: Ensures the "Cancel" button is visible and functional during app-initiated actions.`,...o.parameters?.docs?.description}}};var s=[`Default`,`Arabic`,`French`,`WithAppInitiatedAction`];export{i as Arabic,r as Default,a as French,o as WithAppInitiatedAction,s as __namedExportsOrder,n as default};
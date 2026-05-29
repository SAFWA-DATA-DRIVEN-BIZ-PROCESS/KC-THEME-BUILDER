import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`login-page-expired.ftl`}),n={title:`login/login-page-expired.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginRestartFlowUrl:`/mock-restart-flow`,loginAction:`/mock-continue-login`},message:{type:`error`,summary:`An error occurred while processing your session.`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        loginRestartFlowUrl: "/mock-restart-flow",
        loginAction: "/mock-continue-login"
      },
      message: {
        type: "error",
        summary: "An error occurred while processing your session."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithErrorMessage:\r
- Purpose: Tests behavior when an error message is displayed along with the page expiration message.\r
- Scenario: Simulates a case where the session expired due to an error, and an error message is displayed alongside the expiration message.\r
- Key Aspect: Ensures that error messages are displayed correctly in addition to the page expiration notice.`,...o.parameters?.docs?.description}}};var s=[`Default`,`Arabic`,`French`,`WithErrorMessage`];export{i as Arabic,r as Default,a as French,o as WithErrorMessage,s as __namedExportsOrder,n as default};
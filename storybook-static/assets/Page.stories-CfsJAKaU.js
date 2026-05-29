import{t as e}from"./KcPageStory-BtlMbT4_.js";var{KcPageStory:t}=e({pageId:`login-recovery-authn-code-config.ftl`}),n={title:`login/login-recovery-authn-code-config.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},message:{summary:`An error occurred during recovery code generation. Please try again.`,type:`error`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      message: {
        summary: "An error occurred during recovery code generation. Please try again.",
        type: "error"
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithErrorDuringCodeGeneration:\r
- Purpose: Tests when an error occurs while generating recovery authentication codes.\r
- Scenario: The component renders an error message to inform the user of the failure during code generation.\r
- Key Aspect: Ensures that error messages are properly displayed when recovery code generation fails.`,...o.parameters?.docs?.description}}};var s=[`Default`,`Arabic`,`French`,`WithErrorDuringCodeGeneration`];export{i as Arabic,r as Default,a as French,o as WithErrorDuringCodeGeneration,s as __namedExportsOrder,n as default};
import{t as e}from"./KcPageStory-DC1KBcrm.js";var t={url:{loginAction:`/login-action`},idpAlias:`mockIdpAlias`},{KcPageStory:n}=e({pageId:`login-idp-link-confirm.ftl`}),r={title:`login/login-idp-link-confirm.ftl`,component:n},i={args:{kcContext:t}},a={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},o={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},s={args:{kcContext:{...t,url:{loginAction:`/error`},message:{type:`error`,summary:`An error occurred during form submission.`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: mockKcContext
  }
}`,...i.parameters?.docs?.source},description:{story:"Default:\r\n- Purpose: Tests standard behavior with mock data.\r\n- Scenario: The component renders with a mocked identity provider alias (`mockIdpAlias`) and a login action URL (`/login-action`).\r\n- Key Aspect: Ensures the default behavior of the component with standard values for kcContext.",...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      ...mockKcContext,
      url: {
        loginAction: "/error"
      },
      message: {
        type: "error",
        summary: "An error occurred during form submission."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithFormSubmissionError:\r
- Purpose: Tests how the component handles form submission errors.\r
- Scenario: Simulates a form submission error by setting the login action URL to \`/error\` and displays an error message.\r
- Key Aspect: Verifies that the component can display error messages during form submission failure, ensuring proper error handling.`,...s.parameters?.docs?.description}}};var c=[`Default`,`Arabic`,`French`,`WithFormSubmissionError`];export{a as Arabic,i as Default,o as French,s as WithFormSubmissionError,c as __namedExportsOrder,r as default};
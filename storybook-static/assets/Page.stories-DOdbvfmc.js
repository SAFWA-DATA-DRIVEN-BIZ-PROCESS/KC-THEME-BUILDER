import{t as e}from"./KcPageStory-DdNCeL0d.js";var t={url:{loginAction:`/login-action`},idpAlias:`mockIdpAlias`,brokerContext:{username:`mockUser`},realm:{displayName:`MockRealm`}},{KcPageStory:n}=e({pageId:`login-idp-link-email.ftl`}),r={title:`login/login-idp-link-email.ftl`,component:n},i={args:{kcContext:t}},a={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},o={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},s={args:{kcContext:{...t,idpAlias:`Google`,brokerContext:{username:`john.doe`},realm:{displayName:`MyRealm`}}}},c={args:{kcContext:{...t,idpAlias:`Facebook`,brokerContext:{username:`jane.doe`},realm:{displayName:`CUSTOM REALM DISPLAY NAME`}}}},l={args:{kcContext:{...t,url:{loginAction:`/error`},message:{type:`error`,summary:`An error occurred during form submission.`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: mockKcContext
  }
}`,...i.parameters?.docs?.source},description:{story:"Default:\r\n- Purpose: Tests the default behavior with mock data.\r\n- Scenario: The component renders with a mocked identity provider alias (`mockIdpAlias`), a default broker username (`mockUser`), and a default realm name (`MockRealm`).\r\n- Key Aspect: Ensures the default behavior of the component with typical kcContext values.",...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      idpAlias: "Google",
      brokerContext: {
        username: "john.doe"
      },
      realm: {
        displayName: "MyRealm"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithIdpAlias:\r
- Purpose: Tests behavior when the idpAlias is set to "Google".\r
- Scenario: Simulates the component being used with a Google identity provider, showing the username "john.doe" and realm "MyRealm".\r
- Key Aspect: Ensures the correct identity provider alias ("Google") and broker context (user info) are displayed in the email linking instructions.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      ...mockKcContext,
      idpAlias: "Facebook",
      brokerContext: {
        username: "jane.doe"
      },
      realm: {
        displayName: "CUSTOM REALM DISPLAY NAME"
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithCustomRealmDisplayName:\r
- Purpose: Tests behavior when the realm display name is customized.\r
- Scenario: Simulates the component with a Facebook identity provider, a broker username "jane.doe", and a custom realm name "CustomRealm".\r
- Key Aspect: Ensures that custom realm display names are rendered correctly alongside the idpAlias and broker context.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`WithFormSubmissionError:\r
- Purpose: Tests how the component handles form submission errors.\r
- Scenario: Simulates a form submission error by setting the login action URL to \`/error\` and displays an error message.\r
- Key Aspect: Verifies that the component can display error messages during form submission failure, ensuring proper error handling.`,...l.parameters?.docs?.description}}};var u=[`Default`,`Arabic`,`French`,`WithIdpAlias`,`WithCustomRealmDisplayName`,`WithFormSubmissionError`];export{a as Arabic,i as Default,o as French,c as WithCustomRealmDisplayName,l as WithFormSubmissionError,s as WithIdpAlias,u as __namedExportsOrder,r as default};
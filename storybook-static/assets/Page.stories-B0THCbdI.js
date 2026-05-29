import{t as e}from"./KcPageStory-dvKJBaLv.js";var{KcPageStory:t}=e({pageId:`login-x509-info.ftl`}),n={title:`login/login-x509-info.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},x509:{formData:{subjectDN:`CN=John Doe, OU=Example Org, O=Example Inc, C=US`,username:`johndoe`,isUserEnabled:!1}}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      x509: {
        formData: {
          subjectDN: "CN=John Doe, OU=Example Org, O=Example Inc, C=US",
          username: "johndoe",
          isUserEnabled: false // User not enabled for login
        }
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithoutUserEnabled:\r
- Purpose: Tests when the user is not enabled to log in via x509.\r
- Scenario: The component renders the certificate details but does not provide the option to log in or cancel.\r
- Key Aspect: Ensures that the login buttons are not displayed when the user is not enabled.`,...o.parameters?.docs?.description}}};var s=[`Default`,`Arabic`,`French`,`WithoutUserEnabled`];export{i as Arabic,r as Default,a as French,o as WithoutUserEnabled,s as __namedExportsOrder,n as default};
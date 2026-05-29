import{t as e}from"./KcPageStory-BtlMbT4_.js";var{KcPageStory:t}=e({pageId:`login-verify-email.ftl`}),n={title:`login/login-verify-email.ftl`,component:t},r={args:{kcContext:{message:{summary:`You need to verify your email to activate your account.`,type:`warning`},user:{email:`john.doe@gmail.com`}}}},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{message:{summary:`Your email has been successfully verified.`,type:`success`},user:{email:`john.doe@gmail.com`},url:{loginAction:`/mock-login-action`}}}},s={args:{kcContext:{message:{summary:`There was an error verifying your email. Please try again.`,type:`error`},user:{email:`john.doe@gmail.com`},url:{loginAction:`/mock-login-action`}}}},c={args:{kcContext:{message:{summary:`Please verify your email to continue using our services.`,type:`info`},user:{email:`john.doe@gmail.com`},url:{loginAction:`/mock-login-action`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      message: {
        summary: "You need to verify your email to activate your account.",
        type: "warning"
      },
      user: {
        email: "john.doe@gmail.com"
      }
    }
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      message: {
        summary: "Your email has been successfully verified.",
        type: "success"
      },
      user: {
        email: "john.doe@gmail.com"
      },
      url: {
        loginAction: "/mock-login-action"
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithSuccessMessage:\r
- Purpose: Tests when the email verification is successful, and the user receives a confirmation message.\r
- Scenario: The component renders a success message instead of a warning or error.\r
- Key Aspect: Ensures the success message is displayed correctly when the email is successfully verified.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      message: {
        summary: "There was an error verifying your email. Please try again.",
        type: "error"
      },
      user: {
        email: "john.doe@gmail.com"
      },
      url: {
        loginAction: "/mock-login-action"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithErrorMessage:\r
- Purpose: Tests when there is an error during the email verification process.\r
- Scenario: The component renders an error message indicating the email verification failed.\r
- Key Aspect: Ensures the error message is shown correctly when the verification process encounters an issue.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      message: {
        summary: "Please verify your email to continue using our services.",
        type: "info"
      },
      user: {
        email: "john.doe@gmail.com"
      },
      url: {
        loginAction: "/mock-login-action"
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithInfoMessage:\r
- Purpose: Tests when the user is prompted to verify their email without any urgency.\r
- Scenario: The component renders with an informational message for email verification.\r
- Key Aspect: Ensures the informational message is displayed properly.`,...c.parameters?.docs?.description}}};var l=[`Default`,`Arabic`,`French`,`WithSuccessMessage`,`WithErrorMessage`,`WithInfoMessage`];export{i as Arabic,r as Default,a as French,s as WithErrorMessage,c as WithInfoMessage,o as WithSuccessMessage,l as __namedExportsOrder,n as default};
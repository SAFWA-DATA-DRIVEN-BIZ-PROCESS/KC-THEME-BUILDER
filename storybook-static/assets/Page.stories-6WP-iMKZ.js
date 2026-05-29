import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`login-oauth2-device-verify-user-code.ftl`}),n={title:`login/login-oauth2-device-verify-user-code.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{oauth2DeviceVerificationAction:`/mock-oauth2-device-verification`},message:{summary:`The user code you entered is invalid. Please try again.`,type:`error`}}}},s={args:{kcContext:{url:{oauth2DeviceVerificationAction:`/mock-oauth2-device-verification`},message:{summary:`User code cannot be empty. Please enter a valid code.`,type:`error`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        oauth2DeviceVerificationAction: "/mock-oauth2-device-verification"
      },
      message: {
        summary: "The user code you entered is invalid. Please try again.",
        type: "error"
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithErrorMessage:\r
- Purpose: Tests when there is an error with the OAuth2 device user code entry.\r
- Scenario: The component renders with an error message displayed to the user.\r
- Key Aspect: Ensures the error message is properly shown when the user enters an invalid code.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        oauth2DeviceVerificationAction: "/mock-oauth2-device-verification"
      },
      message: {
        summary: "User code cannot be empty. Please enter a valid code.",
        type: "error"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithEmptyInputField:\r
- Purpose: Tests when the user code field is left empty.\r
- Scenario: The component renders the form, and the user tries to submit without entering any code.\r
- Key Aspect: Ensures the form displays validation errors when the field is left empty.`,...s.parameters?.docs?.description}}};var c=[`Default`,`Arabic`,`French`,`WithErrorMessage`,`WithEmptyInputField`];export{i as Arabic,r as Default,a as French,s as WithEmptyInputField,o as WithErrorMessage,c as __namedExportsOrder,n as default};
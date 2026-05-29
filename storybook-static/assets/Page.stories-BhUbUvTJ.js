import{t as e}from"./KcPageStory-BtlMbT4_.js";var{KcPageStory:t}=e({pageId:`webauthn-register.ftl`}),n={title:`login/webauthn-register.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},isSetRetry:!0,isAppInitiatedAction:!1}}},s={args:{kcContext:{url:{loginAction:`/mock-login-action`},isSetRetry:!1,isAppInitiatedAction:!1,message:{summary:`An error occurred during WebAuthn registration. Please try again.`,type:`error`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      isSetRetry: true,
      isAppInitiatedAction: false
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithRetryAvailable:\r
- Purpose: Tests when the user is allowed to retry WebAuthn registration after a failure.\r
- Scenario: The component renders the form with a retry option.\r
- Key Aspect: Ensures the retry functionality is available and the form allows the user to retry.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      isSetRetry: false,
      isAppInitiatedAction: false,
      message: {
        summary: "An error occurred during WebAuthn registration. Please try again.",
        type: "error"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithErrorDuringRegistration:\r
- Purpose: Tests when an error occurs during WebAuthn registration.\r
- Scenario: The component displays an error message related to WebAuthn registration failure.\r
- Key Aspect: Ensures the error message is displayed correctly, informing the user of the registration failure.`,...s.parameters?.docs?.description}}};var c=[`Default`,`Arabic`,`French`,`WithRetryAvailable`,`WithErrorDuringRegistration`];export{i as Arabic,r as Default,a as French,s as WithErrorDuringRegistration,o as WithRetryAvailable,c as __namedExportsOrder,n as default};
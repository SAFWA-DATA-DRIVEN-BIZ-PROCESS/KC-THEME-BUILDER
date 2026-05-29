import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`login-reset-otp.ftl`}),n={title:`login/login-reset-otp.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{loginAction:`/mock-login`},configuredOtpCredentials:{userOtpCredentials:[],selectedCredentialId:void 0},messagesPerField:{existsError:()=>!1}}}},s={args:{kcContext:{url:{loginAction:`/mock-login`},configuredOtpCredentials:{userOtpCredentials:[{id:`otp1`,userLabel:`Device 1`},{id:`otp2`,userLabel:`Device 2`}],selectedCredentialId:`otp1`},messagesPerField:{existsError:e=>e===`totp`,get:()=>`Invalid OTP selection`}}}},c={args:{kcContext:{url:{loginAction:`/mock-login`},configuredOtpCredentials:{userOtpCredentials:[{id:`otp1`,userLabel:`Device 1`}],selectedCredentialId:`otp1`},messagesPerField:{existsError:()=>!1}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        loginAction: "/mock-login"
      },
      configuredOtpCredentials: {
        userOtpCredentials: [],
        selectedCredentialId: undefined
      },
      messagesPerField: {
        existsError: () => false
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithoutOtpCredentials:\r
- Purpose: Tests the behavior when no OTP credentials are available.\r
- Scenario: The component renders without any OTP credentials, showing only the submit button.\r
- Key Aspect: Ensures that the component handles the absence of OTP credentials correctly.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login"
      },
      configuredOtpCredentials: {
        userOtpCredentials: [{
          id: "otp1",
          userLabel: "Device 1"
        }, {
          id: "otp2",
          userLabel: "Device 2"
        }],
        selectedCredentialId: "otp1"
      },
      messagesPerField: {
        existsError: (field: string) => field === "totp",
        get: () => "Invalid OTP selection"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithOtpError:\r
- Purpose: Tests the behavior when an error occurs with the OTP selection.\r
- Scenario: Simulates a scenario where an error occurs (e.g., no OTP selected), and an error message is displayed.\r
- Key Aspect: Ensures that error messages are displayed correctly for OTP-related errors.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login"
      },
      configuredOtpCredentials: {
        userOtpCredentials: [{
          id: "otp1",
          userLabel: "Device 1"
        }],
        selectedCredentialId: "otp1"
      },
      messagesPerField: {
        existsError: () => false
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithOnlyOneOtpCredential:\r
- Purpose: Tests the behavior when there is only one OTP credential available.\r
- Scenario: Simulates the case where the user has only one OTP credential, and it is pre-selected by default.\r
- Key Aspect: Ensures that the component renders correctly with only one OTP credential pre-selected.`,...c.parameters?.docs?.description}}};var l=[`Default`,`Arabic`,`French`,`WithoutOtpCredentials`,`WithOtpError`,`WithOnlyOneOtpCredential`];export{i as Arabic,r as Default,a as French,c as WithOnlyOneOtpCredential,s as WithOtpError,o as WithoutOtpCredentials,l as __namedExportsOrder,n as default};
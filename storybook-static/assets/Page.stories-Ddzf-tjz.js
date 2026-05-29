import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`login-otp.ftl`}),n={title:`login/login-otp.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{otpLogin:{userOtpCredentials:[{id:`credential1`,userLabel:`Device 1`},{id:`credential2`,userLabel:`Device 2`},{id:`credential3`,userLabel:`Device 3`},{id:`credential4`,userLabel:`Device 4`},{id:`credential5`,userLabel:`Device 5`},{id:`credential6`,userLabel:`Device 6`}],selectedCredentialId:`credential1`},url:{loginAction:`/login-action`},messagesPerField:{existsError:()=>!1}}}},s={args:{kcContext:{otpLogin:{userOtpCredentials:[]},url:{loginAction:`/login-action`},messagesPerField:{existsError:e=>e===`totp`,get:()=>`Invalid OTP code`}}}},c={args:{kcContext:{otpLogin:{userOtpCredentials:[]},url:{loginAction:`/login-action`},messagesPerField:{existsError:()=>!1}}}},l={args:{kcContext:{otpLogin:{userOtpCredentials:[{id:`credential1`,userLabel:`Device 1`},{id:`credential2`,userLabel:`Device 2`}],selectedCredentialId:`credential1`},url:{loginAction:`/login-action`},messagesPerField:{existsError:e=>e===`totp`,get:()=>`Invalid OTP code`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      otpLogin: {
        userOtpCredentials: [{
          id: "credential1",
          userLabel: "Device 1"
        }, {
          id: "credential2",
          userLabel: "Device 2"
        }, {
          id: "credential3",
          userLabel: "Device 3"
        }, {
          id: "credential4",
          userLabel: "Device 4"
        }, {
          id: "credential5",
          userLabel: "Device 5"
        }, {
          id: "credential6",
          userLabel: "Device 6"
        }],
        selectedCredentialId: "credential1"
      },
      url: {
        loginAction: "/login-action"
      },
      messagesPerField: {
        existsError: () => false
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`MultipleOtpCredentials:\r
- Purpose: Tests the behavior when the user has multiple OTP credentials to choose from.\r
- Scenario: Simulates the scenario where the user is presented with multiple OTP credentials and must select one to proceed.\r
- Key Aspect: Ensures that multiple OTP credentials are listed and selectable, and the correct credential is selected by default.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      otpLogin: {
        userOtpCredentials: []
      },
      url: {
        loginAction: "/login-action"
      },
      messagesPerField: {
        existsError: (field: string) => field === "totp",
        get: () => "Invalid OTP code"
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithOtpError:\r
- Purpose: Tests the behavior when an error occurs with the OTP field (e.g., invalid OTP code).\r
- Scenario: Simulates an invalid OTP code scenario where an error message is displayed.\r
- Key Aspect: Ensures that the OTP input displays error messages correctly and the error is visible.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      otpLogin: {
        userOtpCredentials: []
      },
      url: {
        loginAction: "/login-action"
      },
      messagesPerField: {
        existsError: () => false
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`NoOtpCredentials:\r
- Purpose: Tests the behavior when no OTP credentials are provided for the user.\r
- Scenario: Simulates the scenario where the user is not presented with any OTP credentials, and only the OTP input is displayed.\r
- Key Aspect: Ensures that the component handles cases where there are no user OTP credentials, and the user is only prompted for the OTP code.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      otpLogin: {
        userOtpCredentials: [{
          id: "credential1",
          userLabel: "Device 1"
        }, {
          id: "credential2",
          userLabel: "Device 2"
        }],
        selectedCredentialId: "credential1"
      },
      url: {
        loginAction: "/login-action"
      },
      messagesPerField: {
        existsError: (field: string) => field === "totp",
        get: () => "Invalid OTP code"
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`WithErrorAndMultipleOtpCredentials:\r
- Purpose: Tests behavior when there is both an error in the OTP field and multiple OTP credentials.\r
- Scenario: Simulates the case where the user has multiple OTP credentials and encounters an error with the OTP input.\r
- Key Aspect: Ensures that the component can handle both multiple OTP credentials and display an error message simultaneously.`,...l.parameters?.docs?.description}}};var u=[`Default`,`Arabic`,`French`,`MultipleOtpCredentials`,`WithOtpError`,`NoOtpCredentials`,`WithErrorAndMultipleOtpCredentials`];export{i as Arabic,r as Default,a as French,o as MultipleOtpCredentials,c as NoOtpCredentials,l as WithErrorAndMultipleOtpCredentials,s as WithOtpError,u as __namedExportsOrder,n as default};
import{t as e}from"./KcPageStory-DC1KBcrm.js";var{KcPageStory:t}=e({pageId:`login-config-totp.ftl`}),n={title:`login/login-config-totp.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{mode:`manual`}}},s={args:{kcContext:{messagesPerField:{get:e=>e===`totp`?`Invalid TOTP`:void 0,exists:e=>e===`totp`,existsError:e=>e===`totp`,printIfExists:(e,t)=>e===`totp`?t:void 0}}}},c={args:{kcContext:{isAppInitiatedAction:!0}}},l={args:{kcContext:{totp:{otpCredentials:[{userLabel:`MyDevice`}]}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      mode: "manual"
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      messagesPerField: {
        get: (fieldName: string) => fieldName === "totp" ? "Invalid TOTP" : undefined,
        exists: (fieldName: string) => fieldName === "totp",
        existsError: (fieldName: string) => fieldName === "totp",
        printIfExists: <T,>(fieldName: string, x: T) => fieldName === "totp" ? x : undefined
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      isAppInitiatedAction: true
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      totp: {
        otpCredentials: [{
          userLabel: "MyDevice"
        }]
      }
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Arabic`,`French`,`WithManualSetUp`,`WithError`,`WithAppInitiatedAction`,`WithPreFilledUserLabel`];export{i as Arabic,r as Default,a as French,c as WithAppInitiatedAction,s as WithError,o as WithManualSetUp,l as WithPreFilledUserLabel,u as __namedExportsOrder,n as default};
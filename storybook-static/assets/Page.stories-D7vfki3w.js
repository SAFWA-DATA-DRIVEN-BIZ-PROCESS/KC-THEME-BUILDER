import{t as e}from"./KcPageStory-BtlMbT4_.js";var{KcPageStory:t}=e({pageId:`info.ftl`}),n={title:`login/info.ftl`,component:t},r={args:{kcContext:{messageHeader:`Message header`,message:{summary:`Server info message`}}}},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{messageHeader:`Message header`,message:{summary:`Server message`},actionUri:void 0}}},s={args:{kcContext:{messageHeader:`Message header`,message:{summary:`Required actions: `},requiredActions:[`CONFIGURE_TOTP`,`UPDATE_PROFILE`,`VERIFY_EMAIL`,`CUSTOM_ACTION`],"x-keycloakify":{messages:{"requiredAction.CUSTOM_ACTION":`Custom action`}}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      messageHeader: "Message header",
      message: {
        summary: "Server info message"
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
      messageHeader: "Message header",
      message: {
        summary: "Server message"
      },
      actionUri: undefined
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      messageHeader: "Message header",
      message: {
        summary: "Required actions: "
      },
      requiredActions: ["CONFIGURE_TOTP", "UPDATE_PROFILE", "VERIFY_EMAIL", "CUSTOM_ACTION"],
      "x-keycloakify": {
        messages: {
          "requiredAction.CUSTOM_ACTION": "Custom action"
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`Arabic`,`French`,`WithLinkBack`,`WithRequiredActions`];export{i as Arabic,r as Default,a as French,o as WithLinkBack,s as WithRequiredActions,c as __namedExportsOrder,n as default};
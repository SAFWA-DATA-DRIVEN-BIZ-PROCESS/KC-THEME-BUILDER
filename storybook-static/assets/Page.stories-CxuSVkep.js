import{t as e}from"./KcPageStory-DC1KBcrm.js";var{KcPageStory:t}=e({pageId:`idp-review-user-profile.ftl`}),n={title:`login/idp-review-user-profile.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{messagesPerField:{existsError:e=>[`email`,`firstName`].includes(e),get:e=>{if(e===`email`)return`Invalid email format.`;if(e===`firstName`)return`First name is required.`}}}}},s={args:{kcContext:{profile:{attributesByName:{email:{value:`jane.doe@example.com`,readOnly:!0},firstName:{value:`Jane`,readOnly:!1}}}}}},c={args:{kcContext:{profile:{attributesByName:{firstName:{value:`Jane`},lastName:{value:`Doe`},email:{value:`jane.doe@example.com`}}}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      messagesPerField: {
        existsError: (fieldName: string) => ["email", "firstName"].includes(fieldName),
        get: (fieldName: string) => {
          if (fieldName === "email") return "Invalid email format.";
          if (fieldName === "firstName") return "First name is required.";
        }
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      profile: {
        attributesByName: {
          email: {
            value: "jane.doe@example.com",
            readOnly: true
          },
          firstName: {
            value: "Jane",
            readOnly: false
          }
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      profile: {
        attributesByName: {
          firstName: {
            value: "Jane"
          },
          lastName: {
            value: "Doe"
          },
          email: {
            value: "jane.doe@example.com"
          }
        }
      }
    }
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Arabic`,`French`,`WithFormValidationErrors`,`WithReadOnlyFields`,`WithPrefilledFormFields`];export{i as Arabic,r as Default,a as French,o as WithFormValidationErrors,c as WithPrefilledFormFields,s as WithReadOnlyFields,l as __namedExportsOrder,n as default};
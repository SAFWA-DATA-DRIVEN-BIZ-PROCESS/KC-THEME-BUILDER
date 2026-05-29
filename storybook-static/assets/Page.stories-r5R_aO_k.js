import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`code.ftl`}),n={title:`login/code.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`,rtl:!1}}}},o={args:{kcContext:{darkMode:!1}}},s={args:{kcContext:{code:{success:!1,error:`Failed to generate code`}}}},c={args:{kcContext:{locale:{currentLanguageTag:`fr`},code:{success:!0,code:`XYZ789`}}}},l={args:{kcContext:{code:{success:!1,error:`Something went wrong. <a href='https://example.com'>Try again</a>`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        currentLanguageTag: "fr",
        rtl: false
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      darkMode: false
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`This reflects the state when "Dark Theme" is set to "Disabled" in the realm settings\r
(Theme configuration tab of the Keycloak Admin UI).\r

You should enable this configuration if you want to hide the "dark mode switch"\r
and ensure that the theme always renders in light mode, even if the user's system\r
preference is set to dark.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      code: {
        success: false,
        error: "Failed to generate code"
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "fr"
      },
      code: {
        success: true,
        code: "XYZ789"
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      code: {
        success: false,
        error: "Something went wrong. <a href='https://example.com'>Try again</a>"
      }
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Arabic`,`French`,`WithDarkModeForbidden`,`WithErrorCode`,`WithFrenchLanguage`,`WithHtmlErrorMessage`];export{i as Arabic,r as Default,a as French,o as WithDarkModeForbidden,s as WithErrorCode,c as WithFrenchLanguage,l as WithHtmlErrorMessage,u as __namedExportsOrder,n as default};
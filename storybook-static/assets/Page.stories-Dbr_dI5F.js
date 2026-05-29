import{t as e}from"./KcPageStory-BtlMbT4_.js";var{KcPageStory:t}=e({pageId:`logout-confirm.ftl`}),n={title:`login/logout-confirm.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},o={args:{kcContext:{url:{logoutConfirmAction:`/mock-logout-action`},client:{baseUrl:`/mock-client-url`},logoutConfirm:{code:`mock-session-code`,skipLink:!1},message:{summary:`Are you sure you want to log out from all sessions?`,type:`warning`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        logoutConfirmAction: "/mock-logout-action"
      },
      client: {
        baseUrl: "/mock-client-url"
      },
      logoutConfirm: {
        code: "mock-session-code",
        skipLink: false
      },
      message: {
        summary: "Are you sure you want to log out from all sessions?",
        type: "warning"
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithCustomLogoutMessage:\r
- Purpose: Tests when a custom message is displayed for the logout confirmation.\r
- Scenario: The component renders with a custom logout confirmation message instead of the default one.\r
- Key Aspect: Ensures the custom logout message is displayed correctly.`,...o.parameters?.docs?.description}}};var s=[`Default`,`Arabic`,`French`,`WithCustomLogoutMessage`];export{i as Arabic,r as Default,a as French,o as WithCustomLogoutMessage,s as __namedExportsOrder,n as default};
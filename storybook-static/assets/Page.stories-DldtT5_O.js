import{t as e}from"./KcPageStory-dvKJBaLv.js";var t={url:{oauthAction:`/oauth-action`},oauth:{clientScopesRequested:[{consentScreenText:`Scope1`,dynamicScopeParameter:`dynamicScope1`},{consentScreenText:`Scope2`}],code:`mockCode`},client:{attributes:{policyUri:`https://twitter.com/en/tos`,tosUri:`https://twitter.com/en/privacy`},name:`Twitter`,clientId:`twitter-client-id`}},{KcPageStory:n}=e({pageId:`login-oauth-grant.ftl`}),r={title:`login/login-oauth-grant.ftl`,component:n},i={args:{kcContext:t}},a={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},o={args:{kcContext:{locale:{currentLanguageTag:`fr`}}}},s={args:{kcContext:{...t,oauth:{...t.oauth,clientScopesRequested:[]}}}},c={args:{kcContext:{...t,url:{oauthAction:`/error`},message:{type:`error`,summary:`An error occurred during form submission.`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: mockKcContext
  }
}`,...i.parameters?.docs?.source},description:{story:`Default:\r
- Purpose: Tests the default behavior with meaningful logo (Twitter).\r
- Scenario: The component renders with Twitter as the client, displaying its logo, policy, and terms of service links.\r
- Key Aspect: Ensures the component works with a realistic \`logoUri\` and client name.`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "ar",
        rtl: true
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      locale: {
        currentLanguageTag: "fr"
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      ...mockKcContext,
      oauth: {
        ...mockKcContext.oauth,
        clientScopesRequested: []
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithoutScopes:\r
- Purpose: Tests the component when no OAuth scopes are requested.\r
- Scenario: The component renders with no scopes listed under the consent screen.\r
- Key Aspect: Ensures the component renders correctly when there are no requested scopes.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      ...mockKcContext,
      url: {
        oauthAction: "/error"
      },
      message: {
        type: "error",
        summary: "An error occurred during form submission."
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithFormSubmissionError:\r
- Purpose: Tests how the component handles form submission errors.\r
- Scenario: The \`oauthAction\` URL is set to an error route and an error message is displayed.\r
- Key Aspect: Ensures that the component can display error messages when form submission fails.`,...c.parameters?.docs?.description}}};var l=[`Default`,`Arabic`,`French`,`WithoutScopes`,`WithFormSubmissionError`];export{a as Arabic,i as Default,o as French,c as WithFormSubmissionError,s as WithoutScopes,l as __namedExportsOrder,r as default};
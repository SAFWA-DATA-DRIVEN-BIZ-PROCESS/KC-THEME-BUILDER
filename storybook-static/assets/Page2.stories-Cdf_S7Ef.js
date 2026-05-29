import{t as e}from"./KcPageStory-DdNCeL0d.js";var{KcPageStory:t}=e({pageId:`select-organization.ftl`}),n={title:`login/select-organization.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`,rtl:!1}}}},o={args:{kcContext:{url:{loginAction:`/mock-login-action`},user:{organizations:[{alias:`org1`,name:`Organization 1`},{alias:`org2`,name:`Organization 2`},{alias:`org3`,name:`Organization 3`},{alias:`org4`,name:`Organization 4`},{alias:`org5`,name:`Organization 5`},{alias:`org6`,name:`Organization 6`}]}}}},s={args:{kcContext:{url:{loginAction:`/mock-login-action`},user:{organizations:[{alias:`org1`,name:`Organization 1`},{alias:`org2`,name:`Organization 2`},{alias:`org3`,name:`Organization 3`}]}}}},c={args:{kcContext:{url:{loginAction:`/mock-login-action`},user:{organizations:[{alias:`org1`,name:`My Organization`}]}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      url: {
        loginAction: "/mock-login-action"
      },
      user: {
        organizations: [{
          alias: "org1",
          name: "Organization 1"
        }, {
          alias: "org2",
          name: "Organization 2"
        }, {
          alias: "org3",
          name: "Organization 3"
        }, {
          alias: "org4",
          name: "Organization 4"
        }, {
          alias: "org5",
          name: "Organization 5"
        }, {
          alias: "org6",
          name: "Organization 6"
        }]
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`WithManyOrganizations:\r
- Purpose: Tests when there are many organizations (more than 3), which triggers grid layout.\r
- Scenario: The component renders organizations in a grid layout.\r
- Key Aspect: Ensures that when there are more than 3 organizations, they are displayed in a grid.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      user: {
        organizations: [{
          alias: "org1",
          name: "Organization 1"
        }, {
          alias: "org2",
          name: "Organization 2"
        }, {
          alias: "org3",
          name: "Organization 3"
        }]
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`WithFewOrganizations:\r
- Purpose: Tests when there are few organizations (3 or less), which uses list layout.\r
- Scenario: The component renders organizations in a list layout.\r
- Key Aspect: Ensures that when there are 3 or fewer organizations, they are displayed in a list.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      user: {
        organizations: [{
          alias: "org1",
          name: "My Organization"
        }]
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WithSingleOrganization:\r
- Purpose: Tests when there is only one organization available.\r
- Scenario: The component renders a single organization button.\r
- Key Aspect: Ensures that a single organization is displayed correctly.`,...c.parameters?.docs?.description}}};var l=[`Default`,`Arabic`,`French`,`WithManyOrganizations`,`WithFewOrganizations`,`WithSingleOrganization`];export{i as Arabic,r as Default,a as French,s as WithFewOrganizations,o as WithManyOrganizations,c as WithSingleOrganization,l as __namedExportsOrder,n as default};
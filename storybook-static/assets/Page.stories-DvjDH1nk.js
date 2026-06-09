import{t as e}from"./KcPageStory-DC1KBcrm.js";var{KcPageStory:t}=e({pageId:`login.ftl`}),n={title:`login/login.ftl`,component:t},r={},i={args:{kcContext:{locale:{currentLanguageTag:`ar`,rtl:!0}}}},a={args:{kcContext:{locale:{currentLanguageTag:`fr`,rtl:!1}}}},o={args:{kcContext:{login:{username:`johndoe`},messagesPerField:{existsError:(e,...t)=>{let n=[e,...t];return n.includes(`username`)||n.includes(`password`)},get:e=>e===`username`||e===`password`?`Invalid username or password.`:``}}}},s={args:{kcContext:{url:{loginAction:`/mock-login-action`},enableWebAuthnConditionalUI:!0}}},c={args:{kcContext:{realm:{registrationAllowed:!1}}}},l={args:{kcContext:{realm:{rememberMe:!1}}}},u={args:{kcContext:{realm:{resetPasswordAllowed:!1}}}},d={args:{kcContext:{realm:{loginWithEmailAllowed:!1}}}},f={args:{kcContext:{login:{username:`max.mustermann@mail.com`}}}},p={args:{kcContext:{auth:{attemptedUsername:`max.mustermann@mail.com`,showUsername:!0},usernameHidden:!0,message:{type:`info`,summary:`Please re-authenticate to continue`}}}},m={args:{kcContext:{social:{displayInfo:!0,providers:[{loginUrl:`google`,alias:`google`,providerId:`google`,displayName:`Google`,iconClasses:`fa fa-google`},{loginUrl:`microsoft`,alias:`microsoft`,providerId:`microsoft`,displayName:`Microsoft`,iconClasses:`fa fa-windows`},{loginUrl:`facebook`,alias:`facebook`,providerId:`facebook`,displayName:`Facebook`,iconClasses:`fa fa-facebook`},{loginUrl:`instagram`,alias:`instagram`,providerId:`instagram`,displayName:`Instagram`,iconClasses:`fa fa-instagram`},{loginUrl:`twitter`,alias:`twitter`,providerId:`twitter`,displayName:`Twitter`,iconClasses:`fa fa-twitter`},{loginUrl:`linkedin`,alias:`linkedin`,providerId:`linkedin`,displayName:`LinkedIn`,iconClasses:`fa fa-linkedin`},{loginUrl:`stackoverflow`,alias:`stackoverflow`,providerId:`stackoverflow`,displayName:`Stackoverflow`,iconClasses:`fa fa-stack-overflow`},{loginUrl:`github`,alias:`github`,providerId:`github`,displayName:`Github`,iconClasses:`fa fa-github`},{loginUrl:`gitlab`,alias:`gitlab`,providerId:`gitlab`,displayName:`Gitlab`,iconClasses:`fa fa-gitlab`},{loginUrl:`bitbucket`,alias:`bitbucket`,providerId:`bitbucket`,displayName:`Bitbucket`,iconClasses:`fa fa-bitbucket`},{loginUrl:`paypal`,alias:`paypal`,providerId:`paypal`,displayName:`PayPal`,iconClasses:`fa fa-paypal`},{loginUrl:`openshift`,alias:`openshift`,providerId:`openshift`,displayName:`OpenShift`,iconClasses:`fa fa-cloud`}]}}}},h={args:{kcContext:{realm:{password:!1}}}},g={args:{kcContext:{message:{summary:`The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.`,type:`error`}}}},_={args:{kcContext:{social:{displayInfo:!0,providers:[{loginUrl:`google`,alias:`google`,providerId:`google`,displayName:`Google`,iconClasses:`fa fa-google`}]}}}},v={args:{kcContext:{social:{displayInfo:!0,providers:[{loginUrl:`google`,alias:`google`,providerId:`google`,displayName:`Google`,iconClasses:`fa fa-google`},{loginUrl:`microsoft`,alias:`microsoft`,providerId:`microsoft`,displayName:`Microsoft`,iconClasses:`fa fa-windows`}]}}}},y={args:{kcContext:{social:{displayInfo:!0,providers:[]}}}},b={args:{kcContext:{social:{displayInfo:!0,providers:[{loginUrl:`google`,alias:`google`,providerId:`google`,displayName:`Google`,iconClasses:`fa fa-google`},{loginUrl:`microsoft`,alias:`microsoft`,providerId:`microsoft`,displayName:`Microsoft`,iconClasses:`fa fa-windows`},{loginUrl:`facebook`,alias:`facebook`,providerId:`facebook`,displayName:`Facebook`,iconClasses:`fa fa-facebook`},{loginUrl:`twitter`,alias:`twitter`,providerId:`twitter`,displayName:`Twitter`,iconClasses:`fa fa-twitter`}]}}}},x={args:{kcContext:{social:{displayInfo:!0,providers:[{loginUrl:`google`,alias:`google`,providerId:`google`,displayName:`Google`,iconClasses:`fa fa-google`}]},realm:{rememberMe:!1}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      login: {
        username: "johndoe"
      },
      messagesPerField: {
        // NOTE: The other functions of messagesPerField are derived from get() and
        // existsError() so they are the only ones that need to mock.
        existsError: (fieldName: string, ...otherFieldNames: string[]) => {
          const fieldNames = [fieldName, ...otherFieldNames];
          return fieldNames.includes("username") || fieldNames.includes("password");
        },
        get: (fieldName: string) => {
          if (fieldName === "username" || fieldName === "password") {
            return "Invalid username or password.";
          }
          return "";
        }
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      url: {
        loginAction: "/mock-login-action"
      },
      enableWebAuthnConditionalUI: true
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        registrationAllowed: false
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        rememberMe: false
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        resetPasswordAllowed: false
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        loginWithEmailAllowed: false
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      login: {
        username: "max.mustermann@mail.com"
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      auth: {
        attemptedUsername: "max.mustermann@mail.com",
        showUsername: true
      },
      usernameHidden: true,
      message: {
        type: "info",
        summary: "Please re-authenticate to continue"
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      social: {
        displayInfo: true,
        providers: [{
          loginUrl: "google",
          alias: "google",
          providerId: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        }, {
          loginUrl: "microsoft",
          alias: "microsoft",
          providerId: "microsoft",
          displayName: "Microsoft",
          iconClasses: "fa fa-windows"
        }, {
          loginUrl: "facebook",
          alias: "facebook",
          providerId: "facebook",
          displayName: "Facebook",
          iconClasses: "fa fa-facebook"
        }, {
          loginUrl: "instagram",
          alias: "instagram",
          providerId: "instagram",
          displayName: "Instagram",
          iconClasses: "fa fa-instagram"
        }, {
          loginUrl: "twitter",
          alias: "twitter",
          providerId: "twitter",
          displayName: "Twitter",
          iconClasses: "fa fa-twitter"
        }, {
          loginUrl: "linkedin",
          alias: "linkedin",
          providerId: "linkedin",
          displayName: "LinkedIn",
          iconClasses: "fa fa-linkedin"
        }, {
          loginUrl: "stackoverflow",
          alias: "stackoverflow",
          providerId: "stackoverflow",
          displayName: "Stackoverflow",
          iconClasses: "fa fa-stack-overflow"
        }, {
          loginUrl: "github",
          alias: "github",
          providerId: "github",
          displayName: "Github",
          iconClasses: "fa fa-github"
        }, {
          loginUrl: "gitlab",
          alias: "gitlab",
          providerId: "gitlab",
          displayName: "Gitlab",
          iconClasses: "fa fa-gitlab"
        }, {
          loginUrl: "bitbucket",
          alias: "bitbucket",
          providerId: "bitbucket",
          displayName: "Bitbucket",
          iconClasses: "fa fa-bitbucket"
        }, {
          loginUrl: "paypal",
          alias: "paypal",
          providerId: "paypal",
          displayName: "PayPal",
          iconClasses: "fa fa-paypal"
        }, {
          loginUrl: "openshift",
          alias: "openshift",
          providerId: "openshift",
          displayName: "OpenShift",
          iconClasses: "fa fa-cloud"
        }]
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      realm: {
        password: false
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      message: {
        summary: "The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.",
        type: "error"
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      social: {
        displayInfo: true,
        providers: [{
          loginUrl: "google",
          alias: "google",
          providerId: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        }]
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      social: {
        displayInfo: true,
        providers: [{
          loginUrl: "google",
          alias: "google",
          providerId: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        }, {
          loginUrl: "microsoft",
          alias: "microsoft",
          providerId: "microsoft",
          displayName: "Microsoft",
          iconClasses: "fa fa-windows"
        }]
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      social: {
        displayInfo: true,
        providers: []
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      social: {
        displayInfo: true,
        providers: [{
          loginUrl: "google",
          alias: "google",
          providerId: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        }, {
          loginUrl: "microsoft",
          alias: "microsoft",
          providerId: "microsoft",
          displayName: "Microsoft",
          iconClasses: "fa fa-windows"
        }, {
          loginUrl: "facebook",
          alias: "facebook",
          providerId: "facebook",
          displayName: "Facebook",
          iconClasses: "fa fa-facebook"
        }, {
          loginUrl: "twitter",
          alias: "twitter",
          providerId: "twitter",
          displayName: "Twitter",
          iconClasses: "fa fa-twitter"
        }]
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    kcContext: {
      social: {
        displayInfo: true,
        providers: [{
          loginUrl: "google",
          alias: "google",
          providerId: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        }]
      },
      realm: {
        rememberMe: false
      }
    }
  }
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`Arabic`,`French`,`WithInvalidCredential`,`WithWebauthn`,`WithoutRegistration`,`WithoutRememberMe`,`WithoutPasswordReset`,`WithEmailAsUsername`,`WithPresetUsername`,`WithImmutablePresetUsername`,`WithSocialProviders`,`WithoutPasswordField`,`WithErrorMessage`,`WithOneSocialProvider`,`WithTwoSocialProviders`,`WithNoSocialProviders`,`WithMoreThanTwoSocialProviders`,`WithSocialProvidersAndWithoutRememberMe`];export{i as Arabic,r as Default,a as French,d as WithEmailAsUsername,g as WithErrorMessage,p as WithImmutablePresetUsername,o as WithInvalidCredential,b as WithMoreThanTwoSocialProviders,y as WithNoSocialProviders,_ as WithOneSocialProvider,f as WithPresetUsername,m as WithSocialProviders,x as WithSocialProvidersAndWithoutRememberMe,v as WithTwoSocialProviders,s as WithWebauthn,h as WithoutPasswordField,u as WithoutPasswordReset,c as WithoutRegistration,l as WithoutRememberMe,S as __namedExportsOrder,n as default};
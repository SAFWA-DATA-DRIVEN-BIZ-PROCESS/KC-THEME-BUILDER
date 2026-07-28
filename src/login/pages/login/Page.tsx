/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/login/Page.tsx" --revert
 */

import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import { Form } from "./Form";
import { Info } from "./Info";
import { SocialProviders } from "./SocialProviders";

export function Page() {
  const { kcContext } = useKcContext();
  assert(kcContext.pageId === "login.ftl");

  const { msg } = useI18n();
  const isFlowcraft = kcContext.themeName === "flowcraft";
  const isUserManagement = kcContext.themeName === "user-management";
  const isInfracivic = kcContext.themeName === "infracivic";
  const shouldUsePasswordStepLayout =
    kcContext.usernameHidden &&
    kcContext.auth?.showUsername === true &&
    kcContext.auth.attemptedUsername !== undefined;

  return (
    <Template
      displayAttemptedUsernameHeader={!shouldUsePasswordStepLayout}
      displayMessage={
        !kcContext.messagesPerField.existsError("username", "password")
      }
      headerNode={
        shouldUsePasswordStepLayout ? (
          msg("doLogIn")
        ) :
        isFlowcraft ? (
          <div data-auth-region="login-heading">Nice to see you again</div>
        ) : isUserManagement ? (
          <div data-auth-region="login-heading">Welcome!</div>
        ) : isInfracivic ? (
          <div>
            <div className="text-xl font-semibold">Welcome back</div>
            <div className="text-sm text-muted-foreground font-light">
              Sign in to continue.
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xl font-semibold">Welcome!</div>
            <div className="text-sm text-muted-foreground font-light">
              Sign in to continue.
            </div>
          </div>
        )
      }
      displayInfo={
        !shouldUsePasswordStepLayout &&
        kcContext.realm.password &&
        kcContext.realm.registrationAllowed &&
        !kcContext.registrationDisabled
      }
      infoNode={<Info />}
      socialProvidersNode={
        !shouldUsePasswordStepLayout &&
        kcContext.realm.password &&
        kcContext.social !== undefined && <SocialProviders />
      }
    >
      <Form />
    </Template>
  );
}

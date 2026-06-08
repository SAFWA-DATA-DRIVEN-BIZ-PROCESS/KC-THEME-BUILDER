/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/login/Form.tsx" --revert
 */

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { WebAuthnConditionalUI } from "@/login/components/WebAuthnConditionalUi";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { assert } from "tsafe/assert";
import { PasswordVisibilityButton } from "../../components/PasswordVisibilityButton";
import { useI18n } from "../../i18n";

export function Form() {
  const { kcContext } = useKcContext();

  assert(kcContext.pageId === "login.ftl");

  const { msg, msgStr } = useI18n();

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  const { kcClsx } = useKcClsx();
  const isFlowcraft = kcContext.themeName === "flowcraft";
  const isSwifto = kcContext.themeName === "swifto";
  const isUserManagement = kcContext.themeName === "user-management";
  const shouldUsePasswordStepLayout =
    kcContext.usernameHidden &&
    kcContext.auth?.showUsername === true &&
    kcContext.auth.attemptedUsername !== undefined;
  const shouldShowUsernameInput =
    !kcContext.usernameHidden || shouldUsePasswordStepLayout;
  const usernameDefaultValue = shouldUsePasswordStepLayout
    ? kcContext.auth?.attemptedUsername ?? ""
    : kcContext.login.username ?? "";

  return (
    <>
      <div id="kc-form">
        <div id="kc-form-wrapper">
          {kcContext.realm.password && (
            <form
              id="kc-form-login"
              onSubmit={() => {
                setIsLoginButtonDisabled(true);
                return true;
              }}
              action={kcContext.url.loginAction}
              method="post"
              className={
                shouldUsePasswordStepLayout ? "flex flex-col gap-4" : "space-y-4"
              }
            >
              {shouldShowUsernameInput && (
                <Field>
                  <FieldLabel htmlFor="username">
                    {shouldUsePasswordStepLayout
                      ? isSwifto
                        ? "Email/Username"
                        : isUserManagement
                          ? "Userid"
                        : isFlowcraft
                          ? "Login"
                          : !kcContext.realm.registrationEmailAsUsername
                            ? msg("usernameOrEmail")
                            : msg("username")
                      : isSwifto
                        ? "Email/Username"
                        : isUserManagement
                          ? "Userid"
                        : isFlowcraft
                          ? "Login"
                          : !kcContext.realm.loginWithEmailAllowed
                            ? msg("email")
                            : !kcContext.realm.registrationEmailAsUsername
                              ? msg("usernameOrEmail")
                              : msg("username")}
                  </FieldLabel>
                  {shouldUsePasswordStepLayout ? (
                    <InputGroup data-flowcraft-region="username-input">
                      <InputGroupInput
                        tabIndex={1}
                        type="text"
                        id="username"
                        defaultValue={usernameDefaultValue}
                        placeholder={
                          isUserManagement
                            ? "Please enter your userid"
                            : isFlowcraft || isSwifto
                            ? "Email or phone number"
                            : undefined
                        }
                        name="username"
                        autoFocus
                        autoComplete={
                          kcContext.enableWebAuthnConditionalUI
                            ? "username webauthn"
                            : "username"
                        }
                        aria-invalid={kcContext.messagesPerField.existsError(
                          "username",
                          "password",
                        )}
                      />
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton
                          asChild
                          size="icon-xs"
                          variant="ghost"
                          aria-label={msgStr("restartLoginTooltip")}
                        >
                          <a
                            id="reset-login"
                            href={kcContext.url.loginRestartFlowUrl}
                            tabIndex={2}
                          >
                            <RotateCcw className="size-3.5" />
                          </a>
                        </InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                  ) : (
                    <Input
                      data-flowcraft-region="username-input"
                      tabIndex={2}
                      type="text"
                      id="username"
                      defaultValue={usernameDefaultValue}
                      placeholder={
                        isUserManagement
                          ? "Please enter your userid"
                          : isFlowcraft || isSwifto
                          ? "Email or phone number"
                          : undefined
                      }
                      name="username"
                      autoFocus
                      autoComplete={
                        kcContext.enableWebAuthnConditionalUI
                          ? "username webauthn"
                          : "username"
                      }
                      aria-invalid={kcContext.messagesPerField.existsError(
                        "username",
                        "password",
                      )}
                    />
                  )}
                  {kcContext.messagesPerField.existsError(
                    "username",
                    "password",
                  ) && (
                    <FieldError>
                      <span
                        id="input-error"
                        aria-live="polite"
                        dangerouslySetInnerHTML={{
                          __html: kcSanitize(
                            kcContext.messagesPerField.getFirstError(
                              "username",
                              "password",
                            ),
                          ),
                        }}
                      />
                    </FieldError>
                  )}
                </Field>
              )}

              <Field>
                <FieldLabel htmlFor="password">{msg("password")}</FieldLabel>
                <InputGroup data-flowcraft-region="password-input-group">
                  <InputGroupInput
                    tabIndex={3}
                    type="password"
                    id="password"
                    name="password"
                    placeholder={
                      shouldUsePasswordStepLayout
                        ? undefined
                        : isUserManagement
                          ? "Password"
                        : isFlowcraft || isSwifto
                          ? "Enter password"
                          : undefined
                    }
                    autoComplete="current-password"
                    aria-invalid={kcContext.messagesPerField.existsError(
                      "username",
                      "password",
                    )}
                  />
                  <InputGroupAddon align="inline-end">
                    <PasswordVisibilityButton
                      passwordInputId="password"
                      tabIndex={4}
                    />
                  </InputGroupAddon>
                </InputGroup>
                {kcContext.messagesPerField.existsError(
                  "username",
                  "password",
                ) && (
                  <FieldError>
                    <span
                      id="input-error"
                      aria-live="polite"
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(
                          kcContext.messagesPerField.getFirstError(
                            "username",
                            "password",
                          ),
                        ),
                      }}
                    />
                  </FieldError>
                )}
              </Field>

              <div
                data-flowcraft-region={
                  shouldUsePasswordStepLayout ? undefined : "login-options"
                }
                className={
                  shouldUsePasswordStepLayout
                    ? "flex justify-end"
                    : "flex justify-between gap-2"
                }
              >
                {kcContext.realm.rememberMe && !kcContext.usernameHidden && (
                  <div className="flex items-center space-x-2 ">
                    <Switch
                      data-flowcraft-region="remember-me-switch"
                      tabIndex={5}
                      id="rememberMe"
                      name="rememberMe"
                      defaultChecked={!!kcContext.login.rememberMe}
                    />

                    <Label
                      htmlFor="rememberMe"
                      className="cursor-pointer"
                      data-flowcraft-region="remember-me-label"
                    >
                      {msg("rememberMe")}
                    </Label>
                  </div>
                )}
                <div className="link-style" data-flowcraft-region="forgot-password-link">
                  {kcContext.realm.resetPasswordAllowed && (
                    <span className="hover:underline">
                      <a
                        tabIndex={6}
                        href={kcContext.url.loginResetCredentialsUrl}
                      >
                        <Label className="cursor-pointer">
                          {isSwifto ? "Forgot password?" : msg("doForgotPassword")}
                        </Label>
                      </a>
                    </span>
                  )}
                </div>
              </div>

              <div className={kcClsx("kcFormGroupClass")}>
                <input
                  type="hidden"
                  id="id-hidden-input"
                  name="credentialId"
                  value={kcContext.auth.selectedCredential}
                />

                <Button
                  className={shouldUsePasswordStepLayout ? "w-full" : "mt-3 w-full"}
                  data-flowcraft-region="login-button"
                  disabled={isLoginButtonDisabled}
                  tabIndex={shouldUsePasswordStepLayout ? 4 : 7}
                  name="login"
                  id="kc-login"
                  type="submit"
                  value={msgStr("doLogIn")}
                >
                  {isSwifto ? "Sign in" : msgStr("doLogIn")}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      {kcContext.enableWebAuthnConditionalUI && (
        <WebAuthnConditionalUI
          isUserIdentified={kcContext.isUserIdentified}
          challenge={kcContext.challenge}
          rpId={kcContext.rpId}
          userVerification={kcContext.userVerification}
          createTimeout={kcContext.createTimeout}
          authenticators={kcContext.authenticators?.authenticators}
          loginAction={kcContext.url.loginAction}
        />
      )}
    </>
  );
}

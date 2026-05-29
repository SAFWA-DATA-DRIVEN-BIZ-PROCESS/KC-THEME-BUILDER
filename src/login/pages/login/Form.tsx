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
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { WebAuthnConditionalUI } from "@/login/components/WebAuthnConditionalUi";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
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
              className={isFlowcraft ? "space-y-4" : "space-y-4"}
            >
              {!kcContext.usernameHidden && (
                <Field>
                  <FieldLabel
                    htmlFor="username"
                    className={
                      isFlowcraft
                        ? "text-xs font-bold text-[#242424]"
                        : undefined
                    }
                  >
                    {isFlowcraft
                      ? "Login"
                      : !kcContext.realm.loginWithEmailAllowed
                        ? msg("email")
                        : !kcContext.realm.registrationEmailAsUsername
                          ? msg("usernameOrEmail")
                          : msg("username")}
                  </FieldLabel>
                  <Input
                    className={
                      isFlowcraft
                        ? "h-10 border-0 bg-[#efefef]! px-3 text-sm text-[#1f1f1f] shadow-none placeholder:text-[#a9b6c7] focus-visible:!ring-2 focus-visible:!ring-[#8756f0]/50 focus-visible:!border-transparent focus:!ring-2 focus:!ring-[#8756f0]/50 focus:!border-transparent focus-within:!ring-2 focus-within:!ring-[#8756f0]/50 focus-within:!border-transparent"
                        : "bg-white!"
                    }
                    tabIndex={2}
                    type="text"
                    id="username"
                    defaultValue={kcContext.login.username ?? ""}
                    placeholder={
                      isFlowcraft ? "Email or phone number" : undefined
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
                <FieldLabel
                  htmlFor="password"
                  className={
                    isFlowcraft ? "text-xs font-bold text-[#242424]" : undefined
                  }
                >
                  {msg("password")}
                </FieldLabel>
                <InputGroup
                  className={
                    isFlowcraft
                      ? "h-10 border-0 bg-[#efefef]! shadow-none focus-within:!ring-2 focus-within:!ring-[#8756f0]/50 focus-within:!border-transparent has-[[data-slot=input-group-control]:focus-visible]:!ring-2 has-[[data-slot=input-group-control]:focus-visible]:!ring-[#8756f0]/50 has-[[data-slot=input-group-control]:focus-visible]:!border-transparent"
                      : "bg-white!"
                  }
                >
                  <InputGroupInput
                    className={
                      isFlowcraft
                        ? "text-sm placeholder:text-[#a9b6c7]"
                        : undefined
                    }
                    tabIndex={3}
                    type="password"
                    id="password"
                    name="password"
                    placeholder={isFlowcraft ? "Enter password" : undefined}
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
                className={
                  isFlowcraft
                    ? "flex justify-between gap-2 text-[10px] text-[#444444]"
                    : "space-y-1 flex justify-between text-xs"
                }
              >
                {kcContext.realm.rememberMe && !kcContext.usernameHidden && (
                  <div className="flex items-center space-x-2 ">
                    <Switch
                      className={
                        isFlowcraft
                          ? "data-[state=unchecked]:bg-[#ededed] data-[state=checked]:bg-[#8756f0]"
                          : "data-[state=checked]:bg-primary"
                      }
                      tabIndex={5}
                      id="rememberMe"
                      name="rememberMe"
                      defaultChecked={!!kcContext.login.rememberMe}
                    />

                    <Label
                      htmlFor="rememberMe"
                      className={
                        isFlowcraft
                          ? "cursor-pointer text-[10px] font-medium text-[#444444]"
                          : "text-sm font-medium cursor-pointer"
                      }
                    >
                      {msg("rememberMe")}
                    </Label>
                  </div>
                )}
                <div className="link-style ">
                  {kcContext.realm.resetPasswordAllowed && (
                    <span
                      className={
                        isFlowcraft
                          ? "text-[#168cff] hover:underline"
                          : " underline-offset-4 hover:underline text-red-500 underline"
                      }
                    >
                      <a
                        tabIndex={6}
                        href={kcContext.url.loginResetCredentialsUrl}
                      >
                        <Label
                          className={
                            isFlowcraft
                              ? "cursor-pointer text-[10px] font-medium"
                              : "text-sm font-medium cursor-pointer"
                          }
                        >
                          {msg("doForgotPassword")}
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
                  className={
                    isFlowcraft
                      ? "mt-3 h-[38px] w-full rounded-sm bg-[#8756f0] text-sm font-bold text-white shadow-none hover:bg-[#7b4de6]"
                      : "bg-[#62929E] hover:bg-[#62929E]/90 text-white font-medium w-full"
                  }
                  disabled={isLoginButtonDisabled}
                  tabIndex={7}
                  name="login"
                  id="kc-login"
                  type="submit"
                  value={msgStr("doLogIn")}
                >
                  {msgStr("doLogIn")}
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

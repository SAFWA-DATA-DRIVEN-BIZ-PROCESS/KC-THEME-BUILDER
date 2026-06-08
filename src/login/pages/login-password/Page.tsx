/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login-password/Page.tsx" --revert
 */

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Label } from "@/components/ui/label";
import { PasswordVisibilityButton } from "@/login/components/PasswordVisibilityButton";
import { WebAuthnConditionalUI } from '@/login/components/WebAuthnConditionalUi';
import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-password.ftl");

    const { msg, msgStr } = useI18n();

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);
    const isFlowcraft = kcContext.themeName === "flowcraft";
    const isSwifto = kcContext.themeName === "swifto";
    const isUserManagement = kcContext.themeName === "user-management";
    const shouldShowUsername = kcContext.auth?.showUsername === true;
    const attemptedUsername = kcContext.auth?.attemptedUsername ?? "";

    return (
        <Template
            headerNode={msg("doLogIn")}
            displayMessage={!kcContext.messagesPerField.existsError("password")}
            displayAttemptedUsernameHeader={!shouldShowUsername}
        >
            <form
                id="kc-form-login"
                onSubmit={() => {
                    setIsLoginButtonDisabled(true);
                    return true;
                }}
                action={kcContext.url.loginAction}
                className="flex flex-col gap-4"
                method="post"
            >
                {shouldShowUsername && (
                    <Field>
                        <FieldLabel htmlFor="username">
                            {isSwifto
                                ? "Email/Username"
                                                                : isUserManagement
                                                                    ? "Userid"
                                : isFlowcraft
                                  ? "Login"
                                  : !kcContext.realm.registrationEmailAsUsername
                                    ? msg("usernameOrEmail")
                                    : msg("username")}
                        </FieldLabel>
                        <InputGroup data-flowcraft-region="username-input">
                            <InputGroupInput
                                tabIndex={1}
                                type="text"
                                id="username"
                                name="username"
                                defaultValue={attemptedUsername}
                                placeholder={
                                    isUserManagement
                                        ? "Please enter your userid"
                                        : isFlowcraft || isSwifto
                                          ? "Email or phone number"
                                          : undefined
                                }
                                autoFocus
                                autoComplete={
                                    kcContext.enableWebAuthnConditionalUI
                                        ? "username webauthn"
                                        : "username"
                                }
                                aria-invalid={kcContext.messagesPerField.existsError(
                                    "username",
                                    "password"
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
                    </Field>
                )}

                <Field>
                    <FieldLabel htmlFor="password">{msg("password")}</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            tabIndex={shouldShowUsername ? 3 : 2}
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            aria-invalid={kcContext.messagesPerField.existsError(
                                "password"
                            )}
                        />
                        <InputGroupAddon align="inline-end">
                            <PasswordVisibilityButton passwordInputId="password" />
                        </InputGroupAddon>
                    </InputGroup>
                    {kcContext.messagesPerField.existsError("password") && (
                        <FieldError>
                            <span
                                id="input-error"
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: kcSanitize(
                                        kcContext.messagesPerField.getFirstError(
                                            "password"
                                        )
                                    )
                                }}
                            />
                        </FieldError>
                    )}
                </Field>

                <div className="flex justify-end" data-flowcraft-region="forgot-password-link">
                    {kcContext.realm.resetPasswordAllowed && (
                        <span className=" underline-offset-4 hover:underline">
                            <a tabIndex={5} href={kcContext.url.loginResetCredentialsUrl}>
                                <Label className="cursor-pointer">
                                    {msg("doForgotPassword")}
                                </Label>
                            </a>
                        </span>
                    )}
                </div>

                <div className="flex justify-end ">
                    <Button
                        disabled={isLoginButtonDisabled}
                        className="w-full"
                        name="login"
                        type="submit"
                        tabIndex={4}
                    >
                        {msgStr("doLogIn")}
                    </Button>
                </div>
            </form>
            {kcContext.enableWebAuthnConditionalUI && <WebAuthnConditionalUI
                isUserIdentified={kcContext.isUserIdentified}
                challenge={kcContext.challenge}
                rpId={kcContext.rpId}
                userVerification={kcContext.userVerification}
                createTimeout={kcContext.createTimeout}
                authenticators={kcContext.authenticators?.authenticators}
                loginAction={kcContext.url.loginAction} />}
        </Template>
    );
}

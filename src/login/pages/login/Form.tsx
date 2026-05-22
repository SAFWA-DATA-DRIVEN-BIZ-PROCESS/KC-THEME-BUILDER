/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login/Form.tsx" --revert
 */

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { WebAuthnConditionalUI } from '@/login/components/WebAuthnConditionalUi';
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
                            className="space-y-4"
                        >
                            {!kcContext.usernameHidden && (
                                <Field>
                                    <FieldLabel htmlFor="username">
                                        {!kcContext.realm.loginWithEmailAllowed
                                            ? msg("email")
                                            : !kcContext.realm.registrationEmailAsUsername
                                                ? msg("usernameOrEmail")
                                                : msg("username")}
                                    </FieldLabel>
                                    <Input
                                    className="bg-white! text-gray-900! border-gray-300! focus:ring-primary-500! focus:border-primary-500!"
                                        tabIndex={2}
                                        type="text"
                                        id="username"
                                        defaultValue={kcContext.login.username ?? ""}
                                        name="username"
                                        autoFocus
                                        autoComplete={kcContext.enableWebAuthnConditionalUI ? "username webauthn" : "username"}
                                        aria-invalid={kcContext.messagesPerField.existsError(
                                            "username",
                                            "password"
                                        )}
                                    />
                                    {kcContext.messagesPerField.existsError(
                                        "username",
                                        "password"
                                    ) && (
                                            <FieldError>
                                                <span
                                                    id="input-error"
                                                    aria-live="polite"
                                                    dangerouslySetInnerHTML={{
                                                        __html: kcSanitize(
                                                            kcContext.messagesPerField.getFirstError(
                                                                "username",
                                                                "password"
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FieldError>
                                        )}
                                </Field>
                            )}

                            <Field>
                                <FieldLabel htmlFor="password">
                                    {msg("password")}
                                </FieldLabel>
                                <InputGroup className="bg-white! text-gray-900! border-gray-300! focus-within:ring-primary-500! focus-within:border-primary-500!">
                                    <InputGroupInput
                                        tabIndex={3}
                                        type="password"
                                        id="password"
                                        name="password"
                                        autoComplete="current-password"
                                        aria-invalid={kcContext.messagesPerField.existsError(
                                            "username",
                                            "password"
                                        )}
                                    />
                                    <InputGroupAddon align="inline-end" >
                                        <PasswordVisibilityButton
                                            passwordInputId="password" tabIndex={4} />
                                    </InputGroupAddon>
                                </InputGroup>
                                {kcContext.messagesPerField.existsError(
                                    "username",
                                    "password"
                                ) && (
                                        <FieldError>
                                            <span
                                                id="input-error"
                                                aria-live="polite"
                                                dangerouslySetInnerHTML={{
                                                    __html: kcSanitize(
                                                        kcContext.messagesPerField.getFirstError(
                                                            "username",
                                                            "password"
                                                        )
                                                    )
                                                }}
                                            />
                                        </FieldError>
                                    )}
                            </Field>

                            {kcContext.realm.resetPasswordAllowed && (
                                <div>
                                    <a
                                        tabIndex={6}
                                        href={kcContext.url.loginResetCredentialsUrl}
                                        className="text-sm font-medium hover:underline underline-offset-4"
                                    >
                                        {msg("doForgotPassword")}
                                    </a>
                                </div>
                            )}

                            <div className={kcClsx("kcFormGroupClass")}>
                                <input
                                    type="hidden"
                                    id="id-hidden-input"
                                    name="credentialId"
                                    value={kcContext.auth.selectedCredential}
                                />

                                <Button
                                    disabled={isLoginButtonDisabled}
                                    className="w-full"
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

            {kcContext.enableWebAuthnConditionalUI && <WebAuthnConditionalUI
                isUserIdentified={kcContext.isUserIdentified}
                challenge={kcContext.challenge}
                rpId={kcContext.rpId}
                userVerification={kcContext.userVerification}
                createTimeout={kcContext.createTimeout}
                authenticators={kcContext.authenticators?.authenticators}
                loginAction={kcContext.url.loginAction}
            />}
        </>
    );
}

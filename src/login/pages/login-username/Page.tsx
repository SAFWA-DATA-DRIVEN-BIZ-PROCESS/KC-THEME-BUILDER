/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login-username/Page.tsx" --revert
 */

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { WebAuthnConditionalUI } from '@/login/components/WebAuthnConditionalUi';
import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { SocialProviders } from "../login/SocialProviders";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-username.ftl");

    const {
        social,
        realm,
        url,
        usernameHidden,
        login,
        messagesPerField,
        enableWebAuthnConditionalUI,
    } = kcContext;

    const { msg, msgStr } = useI18n();

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);


    return (
        <Template
            displayMessage={!messagesPerField.existsError("username")}
            displayInfo={false}
            headerNode={msg("doLogIn")}
            socialProvidersNode={realm.password && social !== undefined && <SocialProviders />}
        >
            <div>
                {realm.password && (
                    <form
                        id="kc-form-login"
                        className="space-y-4"
                        onSubmit={() => {
                            setIsLoginButtonDisabled(true);
                            return true;
                        }}
                        action={url.loginAction}
                        method="post"
                    >
                        {!usernameHidden && (
                            <Field>
                                <FieldLabel htmlFor="username">
                                    {!realm.loginWithEmailAllowed
                                        ? msg("email")
                                        : !realm.registrationEmailAsUsername
                                            ? msg("usernameOrEmail")
                                            : msg("username")}
                                </FieldLabel>
                                <Input
                                    tabIndex={2}
                                    type="text"
                                    id="username"
                                    defaultValue={login.username ?? ""}
                                    name="username"
                                    autoFocus
                                    className="bg-white! text-gray-900! placeholder:text-gray-400 autofill:bg-white!"
                                    autoComplete={enableWebAuthnConditionalUI ? "username webauthn" : "username"}
                                    aria-invalid={messagesPerField.existsError(
                                        "username"
                                    )}
                                />
                                {messagesPerField.existsError("username") && (
                                    <FieldError>
                                        <span
                                            id="input-error"
                                            aria-live="polite"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(
                                                    messagesPerField.getFirstError(
                                                        "username"
                                                    )
                                                )
                                            }}
                                        />
                                    </FieldError>
                                )}
                            </Field>
                        )}

                        {realm.rememberMe && !usernameHidden && (
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    tabIndex={3}
                                    id="rememberMe"
                                    name="rememberMe"
                                    value="on"
                                    defaultChecked={!!login.rememberMe}
                                    className="  border-gray-900"
                                />
                                <Label
                                    htmlFor="rememberMe"
                                    className="text-sm font-medium cursor-pointer"
                                >
                                    {msg("rememberMe")}
                                </Label>
                            </div>
                        )}

                        <Button
                            disabled={isLoginButtonDisabled}
                            className="w-full"
                            name="login"
                            type="submit"
                            tabIndex={4}
                        >
                            {msgStr("doLogIn")}
                        </Button>
                    </form>
                )}

                {kcContext.enableWebAuthnConditionalUI && <WebAuthnConditionalUI
                    isUserIdentified={kcContext.isUserIdentified}
                    challenge={kcContext.challenge}
                    rpId={kcContext.rpId}
                    userVerification={kcContext.userVerification}
                    createTimeout={kcContext.createTimeout}
                    authenticators={kcContext.authenticators?.authenticators}
                    loginAction={kcContext.url.loginAction} />}
            </div>
        </Template>
    );
}

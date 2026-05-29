/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login-update-password/Page.tsx" --revert
 */

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { LogoutOtherSessions } from "@/login/components/LogoutOtherSessions";
import { PasswordVisibilityButton } from "@/login/components/PasswordVisibilityButton";
import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useState } from "react";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-update-password.ftl");

    const { msg, msgStr } = useI18n();

    const { url, messagesPerField, isAppInitiatedAction } = kcContext;

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const validatePassword = (pwd: string) => {
        const hasUppercase = /[A-Z]/.test(pwd);
        const hasLowercase = /[a-z]/.test(pwd);
        const hasNumber = /[0-9]/.test(pwd);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd);
        const isValidLength = pwd.length >= 8 && pwd.length <= 15;

        return hasUppercase && hasLowercase && hasNumber && hasSpecialChar && isValidLength;
    };

    const isSubmitDisabled = !password || !passwordConfirm || password !== passwordConfirm || !validatePassword(password);

    return (
        <Template
            displayMessage={!messagesPerField.existsError("password", "password-confirm")}
            headerNode={msg("updatePasswordTitle")}
        >
            <form
                id="kc-passwd-update-form"
                className="space-y-6"
                action={url.loginAction}
                method="post"
            >
                <Field>
                    <FieldLabel htmlFor="password-new">{msg("passwordNew")}</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            type="password"
                            id="password-new"
                            name="password-new"
                            autoFocus
                            autoComplete="new-password"
                            aria-invalid={messagesPerField.existsError("password")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputGroupAddon align="inline-end">
                            <PasswordVisibilityButton passwordInputId="password-new" />
                        </InputGroupAddon>
                    </InputGroup>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                        <p className="font-semibold">Password requirements:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li className={password.length >= 8 && password.length <= 15 ? "text-black" : "text-red-600"}>
                                <b>Length</b>: 8-15 characters
                            </li>
                            <li className={/[A-Z]/.test(password) ? "text-black" : "text-red-600"}>
                                An uppercase letter (e.g., "A")
                            </li>
                            <li className={/[a-z]/.test(password) ? "text-black" : "text-red-600"}>
                                A lowercase letter (e.g., "a")
                            </li>
                            <li className={/[0-9]/.test(password) ? "text-black" : "text-red-600"}>
                                A number (e.g., "123")
                            </li>
                            <li className={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? "text-black" : "text-red-600"}>
                                A special character (e.g., "@#$")
                            </li>
                            <li>
                                <b>Avoid</b>: <span className="text-red-600">Cannot be the same as your first name, last name, old password or email.</span>
                            </li>
                        </ul>
                    </div>
                    {messagesPerField.existsError("password") && (
                        <FieldError>
                            <span
                                id="input-error"
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: kcSanitize(
                                        messagesPerField.getFirstError("password")
                                    )
                                }}
                            />
                        </FieldError>
                    )}
                </Field>

                <Field>
                    <FieldLabel htmlFor="password-confirm">
                        {msg("passwordConfirm")}
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            type="password"
                            id="password-confirm"
                            name="password-confirm"
                            autoComplete="new-password"
                            aria-invalid={messagesPerField.existsError(
                                "password-confirm"
                            )}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        <InputGroupAddon align="inline-end">
                            <PasswordVisibilityButton passwordInputId="password-confirm" />
                        </InputGroupAddon>
                    </InputGroup>
                    {messagesPerField.existsError("password-confirm") && (
                        <FieldError>
                            <span
                                id="input-error"
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: kcSanitize(
                                        messagesPerField.getFirstError("password-confirm")
                                    )
                                }}
                            />
                        </FieldError>
                    )}
                     {passwordConfirm && password !== passwordConfirm && (
                        <FieldError>
                            <span className="text-red-600">Password don't match. Please double-check and try again.</span>
                        </FieldError>
                    )}
                </Field>

                <LogoutOtherSessions />

                <div className="space-y-3">
                    <Button className="w-full bg-[#62929E]" type="submit" disabled={isSubmitDisabled}>
                        {msgStr("doSubmit")}
                    </Button>
                    {isAppInitiatedAction && (
                        <Button
                            variant="outline"
                            className="w-full"
                            type="submit"
                            name="cancel-aia"
                            value="true"
                        >
                            {msg("doCancel")}
                        </Button>
                    )}
                </div>
            </form>
        </Template>
    );
}

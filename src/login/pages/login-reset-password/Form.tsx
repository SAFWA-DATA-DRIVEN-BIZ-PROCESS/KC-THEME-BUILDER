/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login-reset-password/Form.tsx" --revert
 */

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";

import { useState } from "react";

interface FormProps {
    view: "form" | "success" | "resend";
    onSubmitted: () => void;
    onRetry: () => void;
    onResent: () => void;
}

export function Form({ view, onSubmitted, onRetry, onResent }: FormProps) {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-reset-password.ftl");

    const { msg } = useI18n();

    const [storedUsername, setStoredUsername] = useState(kcContext.auth.attemptedUsername ?? "");

    const submitToKeycloak = async (username: string) => {
        const formData = new FormData();
        formData.append("username", username);
        try {
            await fetch(kcContext.url.loginAction, { method: "POST", body: formData });
        } catch {
            // ignore redirect/network errors — email was still triggered
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const username = (form.elements.namedItem("username") as HTMLInputElement).value;
        setStoredUsername(username);
        await submitToKeycloak(username);
        onSubmitted();
    };

    const handleResend = async () => {
        await submitToKeycloak(storedUsername);
        onResent();
    };

    if (view === "success") {
        return (
            <div className="space-y-4 text-center py-4">
                <h2 className="text-xl font-bold text-gray-800">
                    We've Sent you an email with a link to reset your password.
                </h2>
                <p className="text-sm text-gray-600">
                    Check your spam and promotion folder if it doesn't appear in your main mailbox.
                </p>
                <button
                    type="button"
                    className="text-sm text-[#62929E] underline hover:opacity-80"
                    onClick={onRetry}
                >
                    Didn't receive the email?
                </button>
            </div>
        );
    }

    if (view === "resend") {
        return (
            <div className="space-y-6 py-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Do you need us to resend the link?
                    </h2>
                    <p className="text-sm text-gray-600">
                        Please, allow 60 seconds for the email to arrive before requesting another link.
                    </p>
                </div>
                <Button className="w-full" variant="outline" onClick={handleResend}>
                    Resend link
                </Button>
            </div>
        );
    }

    return (
        <form
            id="kc-reset-password-form"
            className="space-y-4"
            action={kcContext.url.loginAction}
            method="post"
            onSubmit={handleSubmit}
        >
            <Field>
                <FieldLabel htmlFor="username">
                    {" "}
                    {!kcContext.realm.loginWithEmailAllowed
                        ? msg("username")
                        : !kcContext.realm.registrationEmailAsUsername
                            ? msg("usernameOrEmail")
                            : msg("email")}
                </FieldLabel>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    autoFocus
                    defaultValue={kcContext.auth.attemptedUsername ?? ""}
                    aria-invalid={kcContext.messagesPerField.existsError("username")}
                />
                {kcContext.messagesPerField.existsError("username") && (
                    <FieldError>
                        <span
                            id="input-error"
                            aria-live="polite"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(
                                    kcContext.messagesPerField.getFirstError("username")
                                )
                            }}
                        />
                    </FieldError>
                )}
            </Field>

            <Button className="w-full bg-[#62929E]" type="submit">
                Send Link
            </Button>

            <div className="flex justify-end">
                <Button variant="link" type="button">
                    <a id="backToApplication" href={kcContext.url.loginUrl}>
                        {msg("backToApplication")}
                    </a>
                </Button>
            </div>
        </form>
    );
}

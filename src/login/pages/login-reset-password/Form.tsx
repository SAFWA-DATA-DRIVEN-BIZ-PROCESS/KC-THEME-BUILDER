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

export function Form() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-reset-password.ftl");

    const { msg, msgStr } = useI18n();

    return (
        <form
            id="kc-reset-password-form"
            className="space-y-4"
            action={kcContext.url.loginAction}
            method="post"
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
                    className="bg-white! text-gray-900! border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md sm:text-sm focus:ring-1"
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

            <Button className="w-full" type="submit">
                {msgStr("doSubmit")}
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

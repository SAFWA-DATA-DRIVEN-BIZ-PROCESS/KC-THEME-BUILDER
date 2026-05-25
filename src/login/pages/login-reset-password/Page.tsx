/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login-reset-password/Page.tsx" --revert
 */

import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { useState } from "react";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { Form } from "./Form";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-reset-password.ftl");

    const { msg } = useI18n();

    const [view, setView] = useState<"form" | "success" | "resend">("form");

    return (
        <Template
            displayInfo={view === "form"}
            displayMessage={view === "form" && !kcContext.messagesPerField.existsError("username")}
            infoNode={
                kcContext.realm.duplicateEmailsAllowed
                    ? msg("emailInstructionUsername")
                    : msg("emailInstruction")
            }
            headerNode={view === "form" ? <><h1 className="text-2xl font-bold">{msg("emailForgotTitle")}</h1><div className="mt-2 font-light text-sm"><b className="font-bold">Enter the email</b> that you used when register to recover your password. You will receive <b className="font-bold">a password reset link.</b></div></> : null}
        >
            <Form
                view={view}
                onSubmitted={() => setView("success")}
                onRetry={() => setView("resend")}
                onResent={() => setView("success")}
            />
        </Template>
    );
}

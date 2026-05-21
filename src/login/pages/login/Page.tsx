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
import { SocialProviders } from "./SocialProviders";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login.ftl");

    const { msg } = useI18n();

    return (
        <Template
            displayMessage={
                !kcContext.messagesPerField.existsError("username", "password")
            }
            headerNode={msg("loginAccountTitle")}
            displayInfo={false}
            socialProvidersNode={
                kcContext.realm.password &&
                kcContext.social !== undefined && <SocialProviders />
            }
        >
            <Form />
        </Template>
    );
}

/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.24.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login/Page.tsx" --revert
 */

import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useKcContext } from "../../KcContext";
import { Form } from "./Form";
import { Info } from "./Info";
import { SocialProviders } from "./SocialProviders";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login.ftl");

    return (
        <Template
            displayMessage={
                !kcContext.messagesPerField.existsError("username", "password")
            }
            headerNode={<><div>Welcome!</div><div className="font-light text-sm">Sign in to continue.</div></>}
            infoNode={<Info />}
            socialProvidersNode={
                kcContext.realm.password &&
                kcContext.social !== undefined && <SocialProviders />
            }
        >
            <Form />
        </Template>
    );
}

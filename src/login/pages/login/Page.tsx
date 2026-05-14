/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login/Page.tsx" --revert
 */

/* eslint-disable */

import { Alert, AlertDescription } from "@/components/ui/alert";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
// import type { CSSProperties } from "react";
import { useEffect } from "react";
import { assert } from "tsafe/assert";
import { useInitializeTemplate } from "../../components/Template/useInitializeTemplate";
import backgroundLogin from "../../assets/img/background-login.png";
import companyLogo from "../../assets/img/Athenaeum-logo.png";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import { Form } from "./Form";
import { SocialProviders } from "./SocialProviders";

// Force light-mode CSS variables on the card so inputs always appear light
// const lightVars = {
//     "--background": "oklch(1 0 0)",
//     "--foreground": "oklch(0.145 0 0)",
//     "--card": "oklch(1 0 0)",
//     "--card-foreground": "oklch(0.145 0 0)",
//     "--popover": "oklch(1 0 0)",
//     "--popover-foreground": "oklch(0.145 0 0)",
//     "--primary": "oklch(0.205 0 0)",
//     "--primary-foreground": "oklch(0.985 0 0)",
//     "--secondary": "oklch(0.97 0 0)",
//     "--secondary-foreground": "oklch(0.205 0 0)",
//     "--muted": "oklch(0.97 0 0)",
//     "--muted-foreground": "oklch(0.556 0 0)",
//     "--accent": "oklch(0.97 0 0)",
//     "--accent-foreground": "oklch(0.205 0 0)",
//     "--destructive": "oklch(0.577 0.245 27.325)",
//     "--border": "oklch(0.922 0 0)",
//     "--input": "oklch(0.922 0 0)",
//     "--ring": "oklch(0.708 0 0)",
// } as CSSProperties;

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login.ftl");

    const { msg, msgStr } = useI18n();
    const { kcClsx } = useKcClsx();
    const { message, isAppInitiatedAction, messagesPerField } = kcContext;

    useEffect(() => {
        document.title = msgStr(
            "loginTitle",
            kcContext.realm.displayName || kcContext.realm.name
        );
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: "m-0 p-0"
    });

    useInitializeTemplate();

    const showMessage =
        message !== undefined &&
        (message.type !== "warning" || !isAppInitiatedAction) &&
        !messagesPerField.existsError("username", "password");

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundLogin})` }}
        >
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}

            {/* Centered frosted-glass card */}
            <div className="relative z-10 w-full max-w-sm mx-4">
                <div
                    className="rounded-2xl shadow-2xl overflow-hidden bg-white/40 backdrop-blur-lg"
                    // style={lightVars}
                >
                    <div className="px-8 pt-8 pb-8 space-y-5">
                        {/* Logo + realm name + title */}
                        <div className="flex flex-col items-start gap-1 mb-2">
                            <div className="rounded flex items-center justify-center">
                                <img
                                    src={companyLogo}
                                    alt="Logo"
                                    className="w-20 h-20"
                                />
                            </div>
                            {kcContext.realm.displayName && (
                                <span className="text-sm capitalize font-bold mt-1">
                                    {kcContext.realm.displayName}
                                </span>
                            )}
                            <h1 className="text-xl font-semibold text-gray-900 my-3">
                                {msg("loginAccountTitle")}
                            </h1>
                        </div>

                        {/* Alert messages */}
                        {showMessage && (
                            <Alert variant={message!.type}>
                                <AlertDescription>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(message!.summary)
                                        }}
                                    />
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Social providers */}
                        {kcContext.realm.password &&
                            kcContext.social !== undefined && <SocialProviders />}

                        {/* Login form */}
                        <Form />
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-4 mt-3 mb-2">
                        <p className="text-center text-sm text-gray-900">
                            Powered By Schinkels Technik
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


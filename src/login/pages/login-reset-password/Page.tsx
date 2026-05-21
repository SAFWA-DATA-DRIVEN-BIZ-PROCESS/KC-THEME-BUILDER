/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/login-reset-password/Page.tsx" --revert
 */

import { Alert, AlertDescription } from "@/components/ui/alert";
import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useEffect } from "react";
import { assert } from "tsafe/assert";
import { useInitializeTemplate } from "../../components/Template/useInitializeTemplate";
import companyLogo from "../../assets/img/Athenaeum-logo.png";
import ScreenAthenaeumBackground from "../../assets/img/Screen_athenaeum_background.png";
import ChangePasswordArtwork from "../../assets/img/Change_password_artwork.png";
import { Form } from "./Form";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-reset-password.ftl");

    const { msg, msgStr } = useI18n();
    const { kcClsx } = useKcClsx();
    const { message, messagesPerField } = kcContext;

    useEffect(() => {
        document.title = msgStr("loginTitle", kcContext.realm.displayName || kcContext.realm.name);
    }, [kcContext.realm.displayName, kcContext.realm.name, msgStr]);

    useSetClassName({ qualifiedName: "html", className: kcClsx("kcHtmlClass") });
    useSetClassName({ qualifiedName: "body", className: "m-0 p-0" });

    useInitializeTemplate();

    return (
        <div className="min-h-screen flex justify-center items-center"
                style={{
                    backgroundImage: `url(${ScreenAthenaeumBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
        >
            {/* Left panel */}
            <div className="">
                <h1 className="text-3xl font-bold text-gray-900 max-w-md text-center">
                    Changing your password is required
                    to access <span className="uppercase">
                        {kcContext.realm.displayName || kcContext.realm.name}
                    </span>!!
                </h1>
                <img src={ChangePasswordArtwork} alt="Background" className="mt-8 w-full max-w-md" />
            </div>
            {/* Right panel — card */}
            <div className="w-full lg:w-auto lg:min-w-120 p-6">
                <div className="bg-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden">
                    <div className="px-8 pt-8 pb-6 space-y-5">
                        {/* Logo + title */}
                        <div className="flex flex-col items-start gap-3 mb-2">
                            <img src={companyLogo} alt="Logo" className="w-16 h-16" />
                            <h2 className="text-xl font-semibold text-gray-900">
                                {msg("emailForgotTitle")}
                            </h2>
                        </div>

                        {/* Info */}
                        <p className="text-sm text-gray-500">
                            {kcContext.realm.duplicateEmailsAllowed
                                ? msg("emailInstructionUsername")
                                : msg("emailInstruction")}
                        </p>

                        {/* Alert */}
                        {!messagesPerField.existsError("username") &&
                            message !== undefined && (
                                <Alert variant={message.type}>
                                    <AlertDescription>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(message.summary)
                                            }}
                                        />
                                    </AlertDescription>
                                </Alert>
                            )}

                        {/* Form */}
                        <Form />
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-4">
                        <p className="text-center text-sm text-gray-500">
                            Powered By Schinkels Technik
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/Template/Template.tsx" --revert
 */

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { RotateCcw, User } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import companyLogo from "./../../assets/img/Athenaeum-logo.png";
import backgroundLogin from "./../../assets/img/background-login.png";
import { useInitializeTemplate } from "./useInitializeTemplate";

export function Template(props: {
    displayInfo?: boolean;
    displayMessage?: boolean;
    displayRequiredFields?: boolean;
    headerNode: ReactNode;
    socialProvidersNode?: ReactNode;
    infoNode?: ReactNode;
    documentTitle?: string;
    bodyClassName?: string;
    children: ReactNode;
}) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        children
    } = props;

    const { kcContext } = useKcContext();

    const { auth, url, message, isAppInitiatedAction } = kcContext;

    const { msg, msgStr } = useI18n();

    const { kcClsx } = useKcClsx();

    useEffect(() => {
        document.title =
            documentTitle ??
            msgStr("loginTitle", kcContext.realm.displayName || kcContext.realm.name);
    }, [documentTitle, kcContext.realm.displayName, kcContext.realm.name, msgStr]);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    useInitializeTemplate();

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundLogin})` }}
        >




            {/* Frosted-glass card */}
            <div className="relative z-10 w-full max-w-sm mx-4">
                <div className="rounded-2xl shadow-2xl overflow-hidden bg-white/40 backdrop-blur-lg text-gray-900">
                    <div className="px-8 pt-8 pb-8 space-y-5">

                        {/* Logo + header */}
                        <div className="flex flex-col items-start gap-1 mb-2">
                            <div className="rounded flex items-center justify-center">
                                <img src={companyLogo} alt="Logo" className="w-20 h-20" />
                            </div>
                            <div className="text-sm font-medium text-white mt-1">
                                {kcContext.realm.displayName || kcContext.realm.name}
                            </div>

                            {(() => {
                                const node = !(
                                    auth !== undefined &&
                                    auth.showUsername &&
                                    !auth.showResetCredentials
                                ) ? (
                                    <h1 className="text-xl font-semibold text-gray-900 my-3">
                                        {headerNode}
                                    </h1>
                                ) : (
                                    <div
                                        id="kc-username"
                                        className="flex items-center justify-between gap-2 w-full my-3"
                                    >
                                        <div className="flex gap-3 items-center">
                                            <User className="text-gray-500 size-5" />
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-xs font-normal text-gray-500">
                                                    {msgStr("attemptedUsernameLoggingInAs")}
                                                </span>
                                                <label
                                                    className="font-semibold text-base text-gray-900"
                                                    id="kc-attempted-username"
                                                >
                                                    {auth.attemptedUsername}
                                                </label>
                                            </div>
                                        </div>

                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="outline" size="icon" asChild>
                                                        <a
                                                            id="reset-login"
                                                            href={url.loginRestartFlowUrl}
                                                            aria-label={msgStr("restartLoginTooltip")}
                                                        >
                                                            <RotateCcw className="size-4" />
                                                        </a>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{msg("restartLoginTooltip")}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                );

                                if (displayRequiredFields) {
                                    return (
                                        <div className="flex items-center justify-between gap-2 w-full">
                                            <div>{node}</div>
                                            <span className="text-sm text-gray-600">
                                                <span className="text-red-500">*</span>
                                                {msg("requiredFields")}
                                            </span>
                                        </div>
                                    );
                                }

                                return node;
                            })()}
                        </div>

                        {/* Alert messages */}
                        {displayMessage &&
                            message !== undefined &&
                            (message.type !== "warning" || !isAppInitiatedAction) && (
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

                        {/* Social providers */}
                        {socialProvidersNode}

                        {/* Page content */}
                        <div id="kc-content" className="space-y-4">
                            {children}

                            {auth !== undefined && auth.showTryAnotherWayLink && (
                                <form
                                    id="kc-select-try-another-way-form"
                                    action={url.loginAction}
                                    method="post"
                                >
                                    <div className={kcClsx("kcFormGroupClass")}>
                                        <input
                                            type="hidden"
                                            name="tryAnotherWay"
                                            value="on"
                                        />
                                        <Button
                                            type="button"
                                            className="w-full"
                                            variant="outline"
                                            asChild
                                        >
                                            <a
                                                href="#"
                                                id="try-another-way"
                                                onClick={event => {
                                                    document.forms[
                                                        "kc-select-try-another-way-form" as never
                                                    ].submit();
                                                    event.preventDefault();
                                                    return false;
                                                }}
                                            >
                                                {msg("doTryAnotherWay")}
                                            </a>
                                        </Button>
                                    </div>
                                </form>
                            )}

                            {displayInfo && (
                                <div className="text-center text-sm text-gray-700">
                                    {infoNode}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-4">
                        <p className="text-center text-sm text-gray-900">
                            Powered By Schinkels Technik
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

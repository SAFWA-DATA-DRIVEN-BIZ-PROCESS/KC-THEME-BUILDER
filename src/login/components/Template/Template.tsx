/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/Template/Template.tsx" --revert
 */

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { RotateCcw, User } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import companylogo from "./../../assets/img/auth-logo.png";
import shape from "./../../assets/img/shape.svg";
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
            msgStr("loginTitle", "Majlis Agama Islam Johor");
    }, [documentTitle, msgStr]);

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
        <div className="min-h-screen bg-[#0d0d1a] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 opacity-10">
                    <img alt="" className="w-full h-full object-cover" src={shape} />
                </div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rotate-180 opacity-10">
                    <img alt="" className="w-full h-full object-cover" src={shape} />
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(at 60% 20%, rgba(30, 40, 80, 0.4) 0%, transparent 60%), radial-gradient(at 20% 80%, rgba(20, 30, 60, 0.3) 0%, transparent 50%)"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-md px-4">
                {/* Logo + title */}
                <div className="flex flex-col items-center mb-8 gap-3">
                    <img src={companylogo} alt="Logo" className="size-12" />
                    <span className="text-white text-2xl tracking-[0.25em] font-light uppercase text-center">{kcContext.realm.displayName || kcContext.realm.name}</span>
                </div>

                <Card className="border-0 rounded-lg overflow-hidden shadow-2xl bg-[#141424]">

                    <CardHeader className="pb-2">
                                <CardTitle>
                                    {(() => {
                                        const node = !(
                                            auth !== undefined &&
                                            auth.showUsername &&
                                            !auth.showResetCredentials
                                        ) ? (
                                            <h1 className="text-xl">{headerNode}</h1>
                                        ) : (
                                            <div
                                                id="kc-username"
                                                className="flex items-center justify-between gap-2"
                                            >
                                                <div className="flex gap-4 items-center">
                                                    <User className="text-muted-foreground size-6" />

                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="text-xs font-normal text-muted-foreground">
                                                            {msgStr("attemptedUsernameLoggingInAs")}
                                                        </span>
                                                        <label
                                                            className="font-semibold text-lg"
                                                            id="kc-attempted-username"
                                                        >
                                                            {auth.attemptedUsername}
                                                        </label>
                                                    </div>
                                                </div>

                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                asChild
                                                            >
                                                                <a
                                                                    id="reset-login"
                                                                    href={
                                                                        url.loginRestartFlowUrl
                                                                    }
                                                                    aria-label={msgStr(
                                                                        "restartLoginTooltip"
                                                                    )}
                                                                >
                                                                    <RotateCcw className="size-4" />
                                                                </a>
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>
                                                                {msg(
                                                                    "restartLoginTooltip"
                                                                )}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        );

                                        if (displayRequiredFields) {
                                            return (
                                                <div className="flex items-center justify-between gap-2">
                                                    <div>{node}</div>
                                                    <div>
                                                        <span className="subtitle">
                                                            <span className="text-red-500">
                                                                *
                                                            </span>
                                                            {msg("requiredFields")}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return node;
                                    })()}
                                </CardTitle>

                            </CardHeader>
                            <CardContent>
                                <div id="kc-content" className="space-y-4">
                                    {displayMessage &&
                                        message !== undefined &&
                                        (message.type !== "warning" ||
                                            !isAppInitiatedAction) && (
                                            <Alert variant={message.type}>
                                                <AlertDescription>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: kcSanitize(
                                                                message.summary
                                                            )
                                                        }}
                                                    />
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    {socialProvidersNode}
                                    {children}
                                    {auth !== undefined &&
                                        auth.showTryAnotherWayLink && (
                                            <form
                                                id="kc-select-try-another-way-form"
                                                action={url.loginAction}
                                                method="post"
                                            >
                                                <div
                                                    className={kcClsx(
                                                        "kcFormGroupClass"
                                                    )}
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="tryAnotherWay"
                                                        value="on"
                                                    />

                                                    <Button type="button" className='w-full' variant="outline" asChild>
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
                                        <div className="text-center text-sm">
                                            {infoNode}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
            </div>
        </div>
    );
}

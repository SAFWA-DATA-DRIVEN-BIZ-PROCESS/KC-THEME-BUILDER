/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/Template/Template.tsx"
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

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
import logo from "./../../assets/img/Logo.png";
import Pavion_CT from "./../../assets/img/Pavion_CT.png";
import flowcraft from "./../../assets/img/flowcraft.jpg";
import flowcraftLogo from "./../../assets/img/flowcraft_logo_min.svg";
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
        displayMessage = true,
        displayRequiredFields = false,
        socialProvidersNode = null,
        documentTitle,
        bodyClassName,
        children,
        headerNode
    } = props;

    const { kcContext } = useKcContext();

    const { auth, url, message, isAppInitiatedAction } = kcContext;
    const isFlowcraft = kcContext.themeName === "flowcraft";

    const { msg, msgStr } = useI18n();

    const { kcClsx } = useKcClsx();

    useEffect(() => {
        document.title =
            documentTitle ??
            msgStr("loginTitle", "Pavion Admin");
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    useInitializeTemplate();

    const headerContent = (() => {
        const node = !(
            auth !== undefined &&
            auth.showUsername &&
            !auth.showResetCredentials
        ) ? (
            <h1 className={isFlowcraft ? "" : "text-xl"}>{headerNode}</h1>
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
    })();

    const mainContent = (
        <div id="kc-content" className={isFlowcraft ? "space-y-4" : "space-y-4"}>
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
            {!isFlowcraft && (
                <div className="text-center text-sm mt-12">
                    <div className="mb-4">
                        <div> For more information visit our website <a href="https://schinkelstechnik.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#62929E] text-[#62929E]">SCHINKELS TECHNIK</a></div>
                    </div>
                    <div>Powered By Schinkels Technik</div>
                </div>
            )}
        </div>
    );

    if (isFlowcraft) {
        return (
            <div className="min-h-svh bg-white p-1 font-geist">
                <div className="grid min-h-[calc(100svh-0.5rem)] overflow-hidden rounded-2xl bg-white lg:grid-cols-[1fr_456px]">
                    <div
                        className="hidden min-h-[calc(100svh-0.5rem)] bg-cover bg-center lg:block"
                        style={{ backgroundImage: `url(${flowcraft})` }}
                    />
                    <main className="flex min-h-[calc(100svh-0.5rem)] flex-col items-center justify-center bg-white px-7 py-11 sm:px-10 lg:px-10">
                        <div className="w-full">
                            <div className="mb-11 flex items-center justify-start gap-3">
                                <img src={flowcraftLogo} alt="Flowcraft Logo" className="h-8" />
                                <span className="text-base font-bold text-[#000000]">Flowcraft</span>
                            </div>
                            <Card className="border-0 bg-transparent p-0 shadow-none">
                                <CardHeader className="p-0 pb-5">
                                    <CardTitle>{headerContent}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    {mainContent}
                                </CardContent>
                            </Card>
                        </div>
                        <div className="mt-auto w-full pt-12 text-center text-[10px] leading-4 text-[#3f4a5a]">
                            <div>©2026 All Rights Reserved. Copyrighted and</div>
                            <div>Powered by <a href="https://schinkelstechnik.com/" target="_blank" rel="noopener noreferrer" className="text-[#8756f0] underline">Schinkels Technik Sdn Bhd.</a></div>
                            <div className="mt-3">v2.0.0-1 | 30 July 2024</div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

    return (
        <div className="grid min-h-svh lg:grid-cols-[2fr_3fr]">
            {/* Main content */}
            <div className="flex flex-col gap-4 px-0 py-0 pb-6 lg:p-6 lg:md:p-10 lg:pt-10 min-h-screen lg:min-h-0 bg-white">
                <div className="flex flex-1 items-start lg:items-center justify-center flex-col ">
                    <div className="w-full max-w-xl">

                        <Card className="shadow-none bg-transparent lg:bg-card border-0 lg:rounded-lg lg:border lg:shadow-sm rounded-t-2xl" style={{ background: "#DFE9EC" }}>
                            <CardHeader>
                                <CardTitle>
                                    {/* Logo visible on all screen sizes */}
                                    <div className="flex flex-col items-start justify-start gap-3 mt-4 my-4">
                                        <div className="flex items-center gap-3">
                                            <img src={logo} alt="Logo" />
                                        </div>
                                    </div>
                                    {headerContent}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {mainContent}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex items-center pt-20 h-full justify-center z-1"
                style={{
                    backgroundImage: `url(${Pavion_CT})`,
                    backgroundSize: 'cover',
                }} />
        </div>
    );
}

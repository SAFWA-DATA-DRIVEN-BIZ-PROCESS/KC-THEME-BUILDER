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
import { ModeToggle } from "@/login/components/ui/ThemeToggle";
import { redirectUrlOrigin } from "@/login/shared/redirectUrlOrigin";
import { getLoginThemeConfig, type LoginThemeConfig } from "@/login/themeConfig";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { RotateCcw, User } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import { Languages } from '../ui/Langauges';
import { useInitializeTemplate } from "./useInitializeTemplate";

function BrandLockup(props: { config: LoginThemeConfig; inverted?: boolean }) {
    const { config, inverted = false } = props;

    return (
        <div className="flex items-center gap-3">
            <div className="swifto-mark" aria-hidden="true">
                S
            </div>
            <div className="min-w-0">
                <p
                    className={`truncate text-base font-semibold ${
                        inverted ? "text-white" : "text-foreground"
                    }`}
                >
                    {config.appName}
                </p>
                <p
                    className={`truncate text-xs ${
                        inverted ? "text-white/70" : "text-muted-foreground"
                    }`}
                >
                    {config.appTagline}
                </p>
            </div>
        </div>
    );
}

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

    const themeConfig = getLoginThemeConfig(kcContext);

    const homeUrl = themeConfig.homeUrl ?? redirectUrlOrigin;

    const { msg, msgStr, enabledLanguages } = useI18n();

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
        <div className="kc-swifto-shell grid min-h-svh lg:max-h-svh lg:overflow-hidden lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="kc-swifto-form-panel flex min-h-svh flex-col px-4 py-3 sm:px-8 lg:px-10 lg:py-6 xl:px-12">
                <div className="relative z-20 flex items-center justify-between gap-4">
                    <div className="lg:hidden">
                        <BrandLockup config={themeConfig} />
                    </div>

                    <div className="ms-auto flex gap-2">
                    <Button type="button" variant="outline" size="icon" asChild>
                        <a href={homeUrl} aria-label="Go to application home">
                            <FiHome />
                        </a>
                    </Button>

                    {kcContext.darkMode !== false && <ModeToggle />}

                    {enabledLanguages.length > 1 && <Languages />}
                    </div>
                </div>



                <div className="flex flex-1 items-center justify-center py-6 lg:py-4">
                    <div className="w-full max-w-md">
                        <div className="kc-swifto-intro mb-6 hidden lg:block">
                            <BrandLockup config={themeConfig} />
                            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                                {themeConfig.heroDescription}
                            </p>
                        </div>

                        <Card className="kc-swifto-card gap-5 border bg-card/95 py-5 shadow-xl shadow-black/5 backdrop-blur">
                            <CardHeader>
                                <CardTitle>
                                    {(() => {
                                        const node = !(
                                            auth !== undefined &&
                                            auth.showUsername &&
                                            !auth.showResetCredentials
                                        ) ? (
                                            <h1 className="text-2xl leading-tight">{headerNode}</h1>
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
            </div>

            <aside className="kc-swifto-hero relative hidden min-h-svh overflow-hidden lg:block">
                <img
                    src={themeConfig.heroImageSrc}
                    alt={themeConfig.heroImageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,20,0.28),rgba(20,24,20,0.78))]" />
                <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white xl:p-12">
                    <BrandLockup config={themeConfig} inverted />

                    <div className="kc-swifto-hero-copy max-w-lg pb-3">
                        <p className="mb-4 text-sm font-medium uppercase text-white/70">
                            {themeConfig.appName}
                        </p>
                        <h2 className="text-3xl font-semibold leading-tight text-white xl:text-4xl">
                            {themeConfig.heroTitle}
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-white/78 xl:text-base xl:leading-7">
                            {themeConfig.heroDescription}
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    );
}

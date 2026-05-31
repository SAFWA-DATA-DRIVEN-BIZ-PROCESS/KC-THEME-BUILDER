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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { RotateCcw, User } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import ctuiFaviconUrl from "../../themes/ctui/assets/Logo.png";
import { CtuiTemplate } from "../../themes/ctui/CtuiTemplate";
import flowcraftFaviconUrl from "../../themes/flowcraft/assets/flowcraft_logo_min.svg";
import { FlowcraftTemplate } from "../../themes/flowcraft/FlowcraftTemplate";
import swiftoFaviconUrl from "../../themes/swifto/assets/Swifto_logo.png";
import { SwiftoTemplate } from "../../themes/swifto/SwiftoTemplate";
import { useInitializeTemplate } from "./useInitializeTemplate";

const metadataByThemeName = {
  CTUI: {
    appName: "Pavion Admin",
    faviconHref: ctuiFaviconUrl,
    faviconType: "image/png",
  },
  flowcraft: {
    appName: "Flowcraft",
    faviconHref: flowcraftFaviconUrl,
    faviconType: "image/svg+xml",
  },
  swifto: {
    appName: "Swifto",
    faviconHref: swiftoFaviconUrl,
    faviconType: "image/svg+xml",
  },
} as const;

function getMetadataForTheme(themeName: string) {
  return (
    metadataByThemeName[themeName as keyof typeof metadataByThemeName] ??
    metadataByThemeName.CTUI
  );
}

function setNamedMetaContent(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (element === null) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
}

function setFavicon(href: string, type: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

  if (element === null) {
    element = document.createElement("link");
    element.rel = "icon";
    document.head.appendChild(element);
  }

  element.href = href;
  element.type = type;
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
  displayAttemptedUsernameHeader?: boolean;
  children: ReactNode;
}) {
  const {
    displayInfo = false,
    displayMessage = true,
    displayRequiredFields = false,
    socialProvidersNode = null,
    infoNode = null,
    documentTitle,
    bodyClassName,
    displayAttemptedUsernameHeader = true,
    children,
    headerNode,
  } = props;

  const { kcContext } = useKcContext();

  const { auth, url, message, isAppInitiatedAction } = kcContext;
  const themeName = String(kcContext.themeName);
  const isCtui = themeName === "CTUI";
  const isFlowcraft = themeName === "flowcraft";
  const isSwifto = themeName === "swifto";
  const themeMetadata = getMetadataForTheme(themeName);

  const { msg, msgStr } = useI18n();

  const { kcClsx } = useKcClsx();

  useEffect(() => {
    const appName = themeMetadata.appName;

    document.title = documentTitle ?? msgStr("loginTitle", appName);
    setNamedMetaContent("application-name", appName);
    setNamedMetaContent("apple-mobile-web-app-title", appName);
    setFavicon(themeMetadata.faviconHref, themeMetadata.faviconType);
  }, [documentTitle, msgStr, themeMetadata]);

  useSetClassName({
    qualifiedName: "html",
    className: kcClsx("kcHtmlClass"),
  });

  useSetClassName({
    qualifiedName: "body",
    className: bodyClassName ?? kcClsx("kcBodyClass"),
  });

  useInitializeTemplate();

  if (import.meta.env.DEV && !isCtui && !isFlowcraft && !isSwifto) {
    throw new Error(`Unsupported Theme Implementation: ${themeName}`);
  }

  const headerContent = (() => {
    const node = !(
      displayAttemptedUsernameHeader &&
      auth !== undefined &&
      auth.showUsername &&
      !auth.showResetCredentials
    ) ? (
      <h1 data-auth-region="login-heading">{headerNode}</h1>
    ) : (
      <div id="kc-username" className="flex items-center justify-between gap-2">
        <div className="flex gap-4 items-center">
          <User className="text-muted-foreground size-6" />

          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-normal text-muted-foreground">
              {msgStr("attemptedUsernameLoggingInAs")}
            </span>
            <label className="font-semibold text-lg" id="kc-attempted-username">
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
        <div className="flex items-center justify-between gap-2">
          <div>{node}</div>
          <div>
            <span className="subtitle">
              <span className="text-red-500">*</span>
              {msg("requiredFields")}
            </span>
          </div>
        </div>
      );
    }

    return node;
  })();

  const mainContent = (
    <div id="kc-content" className="space-y-4">
      {displayMessage &&
        message !== undefined &&
        (message.type !== "warning" || !isAppInitiatedAction) && (
          <Alert variant={message.type}>
            <AlertDescription>
              <span
                dangerouslySetInnerHTML={{
                  __html: kcSanitize(message.summary),
                }}
              />
            </AlertDescription>
          </Alert>
        )}
      {socialProvidersNode}
      {children}
      {auth !== undefined && auth.showTryAnotherWayLink && (
        <form
          id="kc-select-try-another-way-form"
          action={url.loginAction}
          method="post"
        >
          <div className={kcClsx("kcFormGroupClass")}>
            <input type="hidden" name="tryAnotherWay" value="on" />

            <Button type="button" className="w-full" variant="outline" asChild>
              <a
                href="#"
                id="try-another-way"
                onClick={(event) => {
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
        <div
          className="text-center text-sm"
          data-auth-region="registration"
          data-swifto-region={isSwifto ? "registration" : undefined}
        >
          {infoNode}
        </div>
      )}
    </div>
  );

  if (isFlowcraft) {
    return (
      <FlowcraftTemplate
        headerContent={headerContent}
        mainContent={mainContent}
      />
    );
  }

  if (isSwifto) {
    return (
      <SwiftoTemplate headerContent={headerContent} mainContent={mainContent} />
    );
  }

  return <CtuiTemplate headerContent={headerContent} mainContent={mainContent} />;
}

/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.24.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/Template/Template.tsx" --revert
 */

import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { TwoColumnLayout } from "./layouts/TwoColumnLayout";
import { TemplateContent } from "./TemplateContent";
import { useApplyThemePreset } from "./theme/useApplyThemePreset";
import { useInitializeTemplate } from "./useInitializeTemplate";

export type TemplateProps = {
    displayInfo?: boolean;
    displayMessage?: boolean;
    displayRequiredFields?: boolean;
    headerNode: ReactNode;
    socialProvidersNode?: ReactNode;
    infoNode?: ReactNode;
    documentTitle?: string;
    bodyClassName?: string;
    children: ReactNode;
};

export function Template(props: TemplateProps) {
    const { bodyClassName } = props;

    const { kcClsx } = useKcClsx();

    useEffect(() => {
        document.title =
            "Civision";
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
    useApplyThemePreset();

    return (
                <TwoColumnLayout
                    content={
                        <TemplateContent
                            {...props}
                            brandingVisibilityClassName="lg:hidden"
                            cardClassName="bg-[#F9E6B8]"
                        />
                    }
                />
            );
}

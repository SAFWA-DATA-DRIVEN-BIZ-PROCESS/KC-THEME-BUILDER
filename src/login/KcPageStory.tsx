import type { DeepPartial } from "keycloakify/tools/DeepPartial";
import type { KcContext } from "./KcContext";
import KcPage from "./KcPage";
import { createGetKcContextMock } from "keycloakify/login/KcContext";
import type { KcContextExtension, KcContextExtensionPerPage } from "./KcContext";
import { themeNames, kcEnvDefaults } from "../kc.gen";

const kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
        ...kcEnvDefaults
    }
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {};

export const { getKcContextMock } = createGetKcContextMock({
    kcContextExtension,
    kcContextExtensionPerPage,
    overrides: {},
    overridesPerPage: {}
});

export function createKcPageStory<PageId extends KcContext["pageId"]>(params: {
    pageId: PageId;
}) {
    const { pageId } = params;

    function KcPageStory(props: {
        kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>> & {
            // Allow organization and realm extensions for organizations feature
            realm?: DeepPartial<Extract<KcContext, { pageId: PageId }>["realm"]> & {
                organizationsEnabled?: boolean;
                [key: string]: unknown;
            };
            organization?: {
                name: string;
                [key: string]: unknown;
            };
        };
    }) {
        const { kcContext: overrides } = props;

        const kcContextMock = getKcContextMock({
            pageId,
            overrides: overrides as any
        });

        return <KcPage kcContext={kcContextMock} />;
    }

    return { KcPageStory };
}

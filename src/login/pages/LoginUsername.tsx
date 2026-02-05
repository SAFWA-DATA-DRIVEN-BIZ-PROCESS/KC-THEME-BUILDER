import { useState } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function LoginUsername(props: PageProps<Extract<KcContext, { pageId: "login-username.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameHidden, login, registrationDisabled, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username")}
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            infoNode={
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center w-full gap-3">
                        <div className="flex-grow border-t border-[#E2E8F0]"></div>
                        <span className="text-[#E2E8F0] text-sm">Or</span>
                        <div className="flex-grow border-t border-[#E2E8F0]"></div>
                    </div>
                    <div id="kc-registration">
                        <a tabIndex={6} className="kc-registration-link" href={url.registrationUrl}>
                            {msg("doRegister")}
                        </a>
                    </div>
                </div>
            }
            headerNode={
                <div className="text-center bg-[url(./assets/img/logo.svg)] bg-no-repeat bg-center pt-20 pb-10">
                    {/* Logo centered via background image */}
                </div>
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            displayFooter={true}
            footerNode={
                <span className="text-xs text-gray-500">
                    Powered by Schinkels Technik
                </span>
            }
            socialProvidersNode={
                <>
                    {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
                        <div id="kc-social-providers" className={kcClsx("kcFormSocialAccountSectionClass")}>
                            <hr />
                            <h2>{msg("identity-provider-login-label")}</h2>
                            <ul className={kcClsx("kcFormSocialAccountListClass", social.providers.length > 3 && "kcFormSocialAccountListGridClass")}>
                                {social.providers.map((...[p, , providers]) => (
                                    <li key={p.alias}>
                                        <a
                                            id={`social-${p.alias}`}
                                            className={kcClsx(
                                                "kcFormSocialAccountListButtonClass",
                                                providers.length > 3 && "kcFormSocialAccountGridItem"
                                            )}
                                            type="button"
                                            href={p.loginUrl}
                                        >
                                            {p.iconClasses && <i className={clsx(kcClsx("kcCommonLogoIdP"), p.iconClasses)} aria-hidden="true"></i>}
                                            <span className={clsx(kcClsx("kcFormSocialAccountNameClass"), p.iconClasses && "kc-social-icon-text")}>
                                                {p.displayName}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            }
        >
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    {realm.password && (
                        <form
                            id="kc-form-login"
                            onSubmit={() => {
                                setIsLoginButtonDisabled(true);
                                return true;
                            }}
                            action={url.loginAction}
                            method="post"
                        >
                            {!usernameHidden && (
                                <div className={kcClsx("kcFormGroupClass")}>
                                    <label htmlFor="username" className={kcClsx("kcLabelClass")}>
                                        {!realm.loginWithEmailAllowed
                                            ? msg("username")
                                            : !realm.registrationEmailAsUsername
                                                ? msg("usernameOrEmail")
                                                : msg("email")}
                                    </label>
                                    <input
                                        tabIndex={2}
                                        id="username"
                                        className={kcClsx("kcInputClass")}
                                        name="username"
                                        defaultValue={login.username ?? ""}
                                        type="text"
                                        autoFocus
                                        autoComplete="username"
                                        aria-invalid={messagesPerField.existsError("username")}
                                    />
                                    {messagesPerField.existsError("username") && (
                                        <span
                                            id="input-error"
                                            className={kcClsx("kcInputErrorMessageClass")}
                                            aria-live="polite"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(messagesPerField.getFirstError("username"))
                                            }}
                                        />
                                    )}
                                </div>
                            )}

                            <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                                <div id="kc-form-options">
                                    {realm.rememberMe && !usernameHidden && (
                                        <div className="flex items-center space-x-3">
                                            <label htmlFor="rememberMe" className="flex items-center cursor-pointer">
                                                <div className="relative w-10 h-6">
                                                    <input
                                                        tabIndex={3}
                                                        id="rememberMe"
                                                        name="rememberMe"
                                                        type="checkbox"
                                                        defaultChecked={!!login.rememberMe}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-10 h-6 border border-[#E5E5E5] bg-[#F2F2F2] rounded-full transition-colors duration-300 ease-in-out peer-checked:bg-[#F6D68D]"></div>
                                                    <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform duration-300 ease-in-out peer-checked:translate-x-4"></div>
                                                </div>
                                            </label>
                                            <span className="text-xs text-gray-700">{msg("rememberMe")}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div id="kc-form-buttons" className={kcClsx("kcFormGroupClass")}>
                                <input
                                    tabIndex={4}
                                    disabled={isLoginButtonDisabled}
                                    className={clsx(
                                        kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass"),
                                        "rounded-lg"
                                    )}
                                    name="login"
                                    id="kc-login"
                                    type="submit"
                                    value={msgStr("doLogIn")}
                                />
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </Template>
    );
}

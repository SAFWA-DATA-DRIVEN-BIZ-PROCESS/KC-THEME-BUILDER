import { useState, useEffect, useReducer, useId } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { assert } from "keycloakify/tools/assert";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Icon } from '@iconify-icon/react';

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode={
                <div className="text-center bg-[url(./assets/img/logo.svg)] bg-no-repeat bg-center pt-20 pb-10">
                    {/* <img
                        className="mx-auto mb-4 h-16"
                        src={"/logo.svg"}
                    /> */}

                    {/* {msg("loginAccountTitle")} */}
                </div>
            }
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            infoNode={
                <>
                    <div id="kc-registration-container">
                        <OrSeparator />
                        <div id="kc-registration">
                            <a tabIndex={8} className="kc-registration-link" href={url.registrationUrl}>
                                {"Sign Up"/* msg("doRegister") */}
                            </a>
                        </div>
                    </div>
                </>
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
                                            <span
                                                className={clsx(kcClsx("kcFormSocialAccountNameClass"), p.iconClasses && "kc-social-icon-text")}
                                                dangerouslySetInnerHTML={{ __html: kcSanitize(p.displayName) }}
                                            ></span>
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
                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                    />
                                    {messagesPerField.existsError("username", "password") && (
                                        <span
                                            id="input-error"
                                            className={kcClsx("kcInputErrorMessageClass")}
                                            aria-live="polite"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                            }}
                                        />
                                    )}
                                </div>
                            )}

                            <div className={kcClsx("kcFormGroupClass")}>
                                <label htmlFor="password" className={kcClsx("kcLabelClass")}>
                                    {msg("password")}
                                </label>
                                <PasswordWrapper kcClsx={kcClsx} i18n={i18n} passwordInputId="password">
                                    <input
                                        tabIndex={3}
                                        id="password"
                                        className={kcClsx("kcInputClass")}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                    />
                                </PasswordWrapper>
                                {usernameHidden && messagesPerField.existsError("username", "password") && (
                                    <span
                                        id="input-error"
                                        className={kcClsx("kcInputErrorMessageClass")}
                                        aria-live="polite"
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                        }}
                                    />
                                )}
                            </div>

                            <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                                <RememberMeSwitch realm={realm} usernameHidden={!!usernameHidden} login={login} msg={msg as never} />
                                <div className={kcClsx("kcFormOptionsWrapperClass")}>
                                    {realm.resetPasswordAllowed && (
                                        <span>
                                            <a tabIndex={6} href={url.loginResetCredentialsUrl}>
                                                {msg("doForgotPassword")}
                                            </a>
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div id="kc-form-buttons" className={kcClsx("kcFormGroupClass")}>
                                <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                                <input
                                    tabIndex={7}
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

function PasswordWrapper(props: { kcClsx: KcClsx; i18n: I18n; passwordInputId: string; children: JSX.Element }) {
    const { kcClsx, i18n, passwordInputId, children } = props;

    const { msgStr } = i18n;

    const [isPasswordRevealed, toggleIsPasswordRevealed] = useReducer((isPasswordRevealed: boolean) => !isPasswordRevealed, false);

    useEffect(() => {
        const passwordInputElement = document.getElementById(passwordInputId);

        assert(passwordInputElement instanceof HTMLInputElement);

        passwordInputElement.type = isPasswordRevealed ? "text" : "password";
    }, [isPasswordRevealed]);

    return (
        <div className={kcClsx("kcInputGroup")}>
            {children}
            <Icon
                icon={isPasswordRevealed ? "heroicons-solid:eye-off" : "heroicons-solid:eye"}
                width={16}
                height={16}
                className="kcFormPasswordVisibilityIcon"
                aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                aria-controls={passwordInputId}
                onClick={toggleIsPasswordRevealed}
                aria-hidden
            />
        </div>
    );
};

const RememberMeSwitch = ({ realm, usernameHidden, login, msg }: {
    realm: KcContext["realm"];
    usernameHidden: boolean;
    login: Extract<KcContext, { pageId: "login.ftl" }>["login"];
    msg: (key: string) => string;
}) => {
    const inputId = useId(); // Generate unique ID for accessibility

    return (
        <div id="kc-form-options" className="">
            {"rememberMe" in realm && realm.rememberMe && !usernameHidden && (
                <div className="flex items-center space-x-3">
                    <label htmlFor={inputId} className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                id={inputId}
                                name="rememberMe"
                                type="checkbox"
                                tabIndex={5}
                                defaultChecked={!!login.rememberMe}
                                className="sr-only peer" // Add peer class for Tailwind toggle
                            />
                            <div className="w-10 h-6 border border-[#E5E5E5] bg-[#F2F2F2] rounded-full transition-colors duration-300 ease-in-out peer-checked:bg-[#F6D68D]"></div>
                            <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform duration-300 ease-in-out peer-checked:translate-x-4"></div>
                        </div>
                    </label>
                    <span className="text-xs text-gray-700">{msg("rememberMe")}</span>
                </div>
            )}
        </div>
    );
};

const OrSeparator = () => {
    return (
        <div className="flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-[#E2E8F0]"></div>
            <span className="flex-shrink-0 px-4 text-[#E2E8F0] text-sm">Or</span>
            <div className="flex-grow border-t border-[#E2E8F0]"></div>
        </div>
    );
};
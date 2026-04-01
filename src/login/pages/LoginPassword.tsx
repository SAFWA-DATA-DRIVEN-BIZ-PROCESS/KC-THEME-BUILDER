import { useState, useEffect,useReducer } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { assert } from "keycloakify/tools/assert";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Icon } from '@iconify-icon/react';

export default function LoginPassword(props: PageProps<Extract<KcContext, { pageId: "login-password.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { realm, url, auth, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("password")}
            headerNode={
                <div className="text-center bg-[url(./assets/img/logo.svg)] bg-no-repeat bg-center pt-20 pb-10">
                    {/* Logo via background image */}
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
        >
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    <form
                        id="kc-form-login"
                        onSubmit={() => {
                            setIsLoginButtonDisabled(true);
                            return true;
                        }}
                        action={url.loginAction}
                        method="post"
                    >
                        {/* Show username field (editable) */}
                        <div className={kcClsx("kcFormGroupClass")}>
                            <label htmlFor="username" className={kcClsx("kcLabelClass")}>
                                {msg("username")}
                            </label>
                            <input
                                tabIndex={2}
                                id="username"
                                className={kcClsx("kcInputClass")}
                                name="username"
                                defaultValue={auth?.attemptedUsername ?? ""}
                                type="text"
                                autoComplete="username"
                                aria-invalid={messagesPerField.existsError("username", "password")}
                            />
                            {messagesPerField.existsError("username") && (
                                <span
                                    id="input-error-username"
                                    className={kcClsx("kcInputErrorMessageClass")}
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(messagesPerField.getFirstError("username"))
                                    }}
                                />
                            )}
                        </div>

                        {/* Password field */}
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
                                    autoFocus
                                    autoComplete="current-password"
                                    aria-invalid={messagesPerField.existsError("password")}
                                />
                            </PasswordWrapper>
                            {messagesPerField.existsError("password") && (
                                <span
                                    id="input-error-password"
                                    className={kcClsx("kcInputErrorMessageClass")}
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(messagesPerField.getFirstError("password"))
                                    }}
                                />
                            )}
                        </div>

                        <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                            <div></div>
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
}

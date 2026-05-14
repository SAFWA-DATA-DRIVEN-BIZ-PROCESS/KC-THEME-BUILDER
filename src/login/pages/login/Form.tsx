/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.20.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/login/Form.tsx" --revert
 */

/* eslint-disable */

import { WebAuthnConditionalUI } from '@/login/components/WebAuthnConditionalUi';
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { assert } from "tsafe/assert";
import { useI18n } from "../../i18n";

export function Form() {
    const { kcContext } = useKcContext();

    assert(kcContext.pageId === "login.ftl");

    const { msg, msgStr } = useI18n();

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({
        passwordInputId: "password"
    });

    const hasError = kcContext.messagesPerField.existsError("username", "password");

    const inputCls = (invalid: boolean) =>
        `w-full rounded-xl border px-4 py-3 text-sm text-gray-800 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition shadow-sm ${
            invalid ? "border-red-400 focus:ring-red-300" : "border-white/80"
        }`;

    return (
        <>
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    {kcContext.realm.password && (
                        <form
                            id="kc-form-login"
                            onSubmit={() => { setIsLoginButtonDisabled(true); return true; }}
                            action={kcContext.url.loginAction}
                            method="post"
                            className="space-y-4"
                        >
                            {/* Username */}
                            {!kcContext.usernameHidden && (
                                <div className="space-y-1">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {!kcContext.realm.loginWithEmailAllowed
                                            ? msg("email")
                                            : !kcContext.realm.registrationEmailAsUsername
                                                ? msg("usernameOrEmail")
                                                : msg("username")}
                                    </label>
                                    <input
                                        tabIndex={2}
                                        type="text"
                                        id="username"
                                        defaultValue={kcContext.login.username ?? ""}
                                        name="username"
                                        autoFocus
                                        autoComplete={kcContext.enableWebAuthnConditionalUI ? "username webauthn" : "username"}
                                        aria-invalid={hasError}
                                        placeholder={
                                            !kcContext.realm.loginWithEmailAllowed
                                                ? msgStr("email")
                                                : !kcContext.realm.registrationEmailAsUsername
                                                    ? msgStr("usernameOrEmail")
                                                    : msgStr("username")
                                        }
                                        className={inputCls(hasError)}
                                    />
                                    {hasError && (
                                        <p
                                            id="input-error"
                                            aria-live="polite"
                                            className="text-xs text-red-500"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(
                                                    kcContext.messagesPerField.getFirstError("username", "password")
                                                )
                                            }}
                                        />
                                    )}
                                </div>
                            )}

                            {/* Password */}
                            <div className="space-y-1">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {msg("password")}
                                </label>
                                <div className="relative">
                                    <input
                                        tabIndex={3}
                                        type={isPasswordRevealed ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        autoComplete="current-password"
                                        aria-invalid={hasError}
                                        placeholder={msgStr("password")}
                                        className={`${inputCls(hasError)} pr-10`}
                                    />
                                    <button
                                        type="button"
                                        tabIndex={4}
                                        onClick={toggleIsPasswordRevealed}
                                        aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                                        aria-controls="password"
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {isPasswordRevealed
                                            ? <FiEye className="w-4 h-4" />
                                            : <FiEyeOff className="w-4 h-4" />}
                                    </button>
                                </div>
                                {hasError && (
                                    <p
                                        aria-live="polite"
                                        className="text-xs text-red-500"
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(
                                                kcContext.messagesPerField.getFirstError("username", "password")
                                            )
                                        }}
                                    />
                                )}
                            </div>

                            {/* Remember me + Forgot password */}
                            <div className="flex items-center justify-between">
                                {kcContext.realm.rememberMe && !kcContext.usernameHidden && (
                                    <label className="flex items-center gap-2 cursor-pointer select-none">
                                        <input
                                            tabIndex={5}
                                            type="checkbox"
                                            id="rememberMe"
                                            name="rememberMe"
                                            defaultChecked={!!kcContext.login.rememberMe}
                                            className="h-4 w-4 rounded border-gray-300 accent-gray-900 focus:ring-gray-400"
                                        />
                                        <span className="text-sm font-medium text-gray-700">
                                            {msg("rememberMe")}
                                        </span>
                                    </label>
                                )}
                                {kcContext.realm.resetPasswordAllowed && (
                                    <a
                                        tabIndex={6}
                                        href={kcContext.url.loginResetCredentialsUrl}
                                        className="ml-auto text-sm font-medium text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline"
                                    >
                                        {msg("doForgotPassword")}
                                    </a>
                                )}
                            </div>

                            {/* Submit */}
                            <div>
                                <input
                                    type="hidden"
                                    id="id-hidden-input"
                                    name="credentialId"
                                    value={kcContext.auth.selectedCredential}
                                />
                                <button
                                    disabled={isLoginButtonDisabled}
                                    tabIndex={7}
                                    name="login"
                                    id="kc-login"
                                    type="submit"
                                    className="w-full rounded-xl bg-gray-900 py-3 text-sm font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {msgStr("doLogIn")}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {kcContext.enableWebAuthnConditionalUI && (
                <WebAuthnConditionalUI
                    isUserIdentified={kcContext.isUserIdentified}
                    challenge={kcContext.challenge}
                    rpId={kcContext.rpId}
                    userVerification={kcContext.userVerification}
                    createTimeout={kcContext.createTimeout}
                    authenticators={kcContext.authenticators?.authenticators}
                    loginAction={kcContext.url.loginAction}
                />
            )}
        </>
    );
}

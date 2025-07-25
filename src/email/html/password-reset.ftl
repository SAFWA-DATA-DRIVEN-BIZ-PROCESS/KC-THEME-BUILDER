<#--
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
  To relinquish ownership and restore this file to its original content, run the following command:
  
  $ npx keycloakify own --path "email/html/password-reset.ftl" --revert
-->

<#import "template.ftl" as layout>
<@layout.emailLayout>
<#-- Debug: Log available variables -->
${firstName! "No firstName"} - ${lastName! "No lastName"} - ${linkExpiration! "No linkExpiration"}

<#if firstName?? && lastName??>
${kcSanitize(msg("passwordResetBodyPersonalizedHtml", link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration), firstName, lastName))?no_esc}
<#else>
${kcSanitize(msg("passwordResetBodyHtml", link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
</#if>
</@layout.emailLayout>

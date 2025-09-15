<#ftl output_format="plainText">
<#--
  WARNING: Before modifying this file, run the following command:
  
  $ npx keycloakify own --path "email/text/org-invite.ftl"
  
  This file is provided by @keycloakify/email-native version 260007.0.0.
  It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
-->


<#if firstName?? && lastName??>
    ${kcSanitize(msg("orgInviteBodyPersonalized", link, linkExpiration, realmName, organization.name, linkExpirationFormatter(linkExpiration), firstName, lastName))}
<#else>
    ${kcSanitize(msg("orgInviteBody", link, linkExpiration, realmName, organization.name, linkExpirationFormatter(linkExpiration)))}
</#if>


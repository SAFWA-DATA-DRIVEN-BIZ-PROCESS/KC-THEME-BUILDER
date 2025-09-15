<#ftl output_format="plainText">
<#--
  WARNING: Before modifying this file, run the following command:
  
  $ npx keycloakify own --path "email/text/identity-provider-link.ftl"
  
  This file is provided by @keycloakify/email-native version 260007.0.0.
  It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
-->

${msg("identityProviderLinkBody", identityProviderDisplayName, realmName, identityProviderContext.username, link, linkExpiration, linkExpirationFormatter(linkExpiration))}
<#ftl output_format="plainText">
<#--
  WARNING: Before modifying this file, run the following command:
  
  $ npx keycloakify own --path "email/text/event-remove_totp.ftl"
  
  This file is provided by @keycloakify/email-native version 260007.0.0.
  It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
-->

${msg("eventRemoveTotpBody",event.date, event.ipAddress)}
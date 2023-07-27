## [Reference link](https://willwill96.github.io/the-ui-dawg-static-site/en/keycloakify/)

# setup keycloak dev on docker

to spin up the thang

```
docker build -t keycloak-app .
docker run --name keycloak-app -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -p 8080:8080 keycloak-app
```

to stop the thang

```
docker stop keycloak-app
```

to start the thang

```
docker start keycloak-app
```


# setup keycloakify app to create theme

```bash
yarn # install dependencies (it's like npm install)

yarn storybook # Start Storybook
               # This is by far the best way to develop your theme
               # This enable to quickly see your pages in isolation and in different states.  
               # You can create stories even for pages that you haven't explicitly overloaded. See src/keycloak-theme/login/pages/LoginResetPassword.stories.tsx
               # See Keycloakify's storybook for if you need a starting point for your stories: https://github.com/keycloakify/keycloakify/tree/main/stories

yarn start # See the Hello World app
           # Uncomment line 97 of src/keycloak-theme/login/kcContext where it reads: `mockPageId: "login.ftl"`, reload https://localhost:3000
           # You can now develop your Login pages. (Don't forget to comment it back when you're done)

yarn build-keycloak-theme # Actually build the theme
                          # Read the instruction printed on the console to see how to test
                          # your theme on a real Keycloak instance.

npx eject-keycloak-page # Prompt that let you select the pages you want to customize
                        # This CLI tools is not guaranty to work, you can always copy pase pages 
                        # from the Keycloakify repo.

npx initialize-email-theme # For initializing your email theme
                           # Note that Keycloakify does not feature React integration for email yet.

npx download-builtin-keycloak-theme # For downloading the default theme (as a reference)
                                    # Look for the files in build_keycloak/src/main/resources/theme/{base,keycloak}
```
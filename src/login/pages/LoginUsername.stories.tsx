import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-username.ftl" });

const meta = {
    title: "login/login-username.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithPresetUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                login: {
                    username: "john.doe@example.com"
                }
            }}
        />
    )
};

export const WithInvalidUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                login: {
                    username: "invalid@example.com"
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "username",
                    get: (fieldName: string) => {
                        if (fieldName === "username") {
                            return "Invalid username or email.";
                        }
                        return "";
                    }
                }
            }}
        />
    )
};

export const WithoutRegistration: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { registrationAllowed: false }
            }}
        />
    )
};

// ============================================================================
// Organization-enabled Flow: Step 1 - Username/Email Entry
// ============================================================================

/**
 * Step 1 of Organization Login Flow
 * User enters their username or email
 * System will then check which organizations they belong to
 */
export const OrganizationsEnabledStep1: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true
                }
            }}
        />
    )
};

/**
 * Step 1 of Organization Login Flow - With Pre-filled Email
 * User came from an organization-specific link
 * Email/username is pre-populated for convenience
 */
export const OrganizationsEnabledWithPrefilledEmail: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true
                },
                login: {
                    username: "user@company.com"
                }
            }}
        />
    )
};

/**
 * Step 1 of Organization Login Flow - Invalid Username
 * User entered invalid credentials
 * They need to try again
 */
export const OrganizationsEnabledInvalidUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true
                },
                login: {
                    username: "invalid@example.com"
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "username",
                    get: (fieldName: string) => {
                        if (fieldName === "username") {
                            return "Invalid username or email. Please try again.";
                        }
                        return "";
                    }
                }
            }}
        />
    )
};

/**
 * Step 1 of Organization Login Flow - With Social Providers
 * Users can sign in via username OR social providers
 * System will determine organization based on the email domain
 */
export const OrganizationsEnabledWithSocialProviders: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true
                },
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Sign in with Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "microsoft",
                            alias: "microsoft",
                            providerId: "microsoft",
                            displayName: "Sign in with Microsoft",
                            iconClasses: "fa fa-windows"
                        }
                    ]
                }
            }}
        />
    )
};

/**
 * Step 1 of Organization Login Flow - User in Single Organization
 * User's email belongs to exactly one organization
 * After this screen, they go directly to password entry with org context
 */
export const OrganizationsEnabledUserWithSingleOrg: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true
                },
                login: {
                    username: "john.doe@acmecorp.com"
                },
                message: {
                    type: "info",
                    summary: "Sign in to your organization account"
                }
            }}
        />
    )
};

/**
 * Step 1 of Organization Login Flow - User in Multiple Organizations (About to Select)
 * User's email belongs to multiple organizations
 * After submitting this form, they see org selection screen
 */
export const OrganizationsEnabledUserWithMultipleOrgs: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true
                },
                login: {
                    username: "user@example.com"
                },
                message: {
                    type: "info",
                    summary: "You belong to multiple organizations. You'll be asked to select one."
                }
            }}
        />
    )
};

/**
 * Step 1 of Organization Login Flow - SSO Required
 * Only organization-based SSO allowed
 * No password field - must use SSO
 */
export const OrganizationsEnabledSSOOnly: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true,
                    password: false
                },
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "okta",
                            alias: "okta",
                            providerId: "okta",
                            displayName: "Sign in with Organization SSO",
                            iconClasses: "fa fa-building"
                        }
                    ]
                }
            }}
        />
    )
};

/**
 * Step 1 of Organization Login Flow - Username Lookup Failed
 * System couldn't find user or determine organization
 * Shows helpful error message
 */
export const OrganizationsEnabledUserNotFound: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    organizationsEnabled: true
                },
                login: {
                    username: "nonexistent@example.com"
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "username",
                    get: (fieldName: string) => {
                        if (fieldName === "username") {
                            return "We couldn't find this email in any of our organizations. Check your spelling or sign up for a new account.";
                        }
                        return "";
                    }
                }
            }}
        />
    )
};

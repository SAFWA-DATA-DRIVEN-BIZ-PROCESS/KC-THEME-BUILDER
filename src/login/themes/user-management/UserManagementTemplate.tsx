import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import heroArtwork from "./assets/user-management-hero.png";
import "./user-management.css";

export function UserManagementTemplate(props: {
  headerContent: ReactNode;
  mainContent: ReactNode;
}) {
  const { headerContent, mainContent } = props;

  return (
    <div
      data-theme-implementation="user-management"
      className="grid min-h-svh bg-white lg:grid-cols-[1.02fr_1fr]"
    >
      <aside
        data-user-management-region="hero"
        className="relative hidden min-h-svh overflow-hidden bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${heroArtwork})` }}
        aria-hidden="true"
      />

      <main
        data-user-management-region="form-panel"
        className="flex min-h-svh items-center justify-center px-6 py-10 sm:px-10"
      >
        <Card
          data-user-management-region="auth-card"
          className="w-full max-w-92 border-0 shadow-none"
        >
          <CardHeader data-user-management-region="card-header">
            <CardTitle>{headerContent}</CardTitle>
          </CardHeader>
          <CardContent data-user-management-region="card-content">
            {mainContent}
            <div data-user-management-region="supporting-info">
              <div>
                For more information visit our website{" "}
                <a
                  href="https://schinkelstechnik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SCHINKELS TECHNIK
                </a>
              </div>
              <div data-user-management-region="powered-by">
                Powered By Schinkels Technik
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
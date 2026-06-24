import type { ReactNode } from "react";
import civionHero from "./assets/civion-hero.png";
import civionLogo from "./assets/civion-logo.svg";
import "./civion.css";

function CivionBrand() {
  return (
    <div data-civion-region="brand-lockup" aria-label="Civion">
      <img src={civionLogo} alt="" data-civion-region="logo-mark" />
      <div data-civion-region="brand-text">
        <div data-civion-region="brand-name">C I V I O N</div>
        <div data-civion-region="brand-tagline">
          For Better Claim Management
        </div>
      </div>
    </div>
  );
}

export function CivionTemplate(props: {
  headerContent: ReactNode;
  mainContent: ReactNode;
}) {
  const { headerContent, mainContent } = props;

  return (
    <div
      data-theme-implementation="civion"
      className="grid min-h-svh w-full grid-cols-[minmax(0,1fr)] bg-white lg:grid-cols-[39.8%_1fr]"
    >
      <main
        data-civion-region="form-panel"
        className="flex min-h-svh min-w-0 items-center justify-center px-6 py-10"
      >
        <section data-civion-region="auth-card" aria-label="Civion sign in">
          <CivionBrand />

          <div data-civion-region="header">{headerContent}</div>

          <div data-civion-region="form-wrap">{mainContent}</div>

          <div data-civion-region="supporting-info">
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
            <div data-civion-region="powered-by">
              Powered By Schinkels Technik
            </div>
          </div>
        </section>
      </main>

      <aside
        data-civion-region="hero"
        className="relative hidden min-h-svh overflow-hidden lg:block"
        aria-hidden="true"
      >
        <img
          src={civionHero}
          alt=""
          data-civion-region="hero-image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </aside>
    </div>
  );
}

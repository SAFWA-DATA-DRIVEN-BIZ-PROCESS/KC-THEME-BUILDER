import type { ReactNode } from "react";
import swiftoHero from "./assets/swifto-hero.jpg";
import swiftoLogo from "./assets/SWIFTO_logo.svg";
import "./swifto.css";

function SwiftoLogo() {
  return (
    <div data-swifto-region="brand-lockup" aria-label="Swifto">
      <img src={swiftoLogo} alt="Swifto" data-swifto-region="logo-img" />
    </div>
  );
}

export function SwiftoTemplate(props: {
  headerContent: ReactNode;
  mainContent: ReactNode;
}) {
  const { headerContent, mainContent } = props;

  return (
    <div
      data-theme-implementation="swifto"
      className="flex min-h-svh justify-center bg-white"
    >
      <div className="mx-auto grid min-h-[calc(100svh-0.5rem)] w-full overflow-hidden rounded-2xl bg-white lg:grid-cols-[456px_1fr]">
      <div
        data-swifto-region="form-panel"
        className="flex min-h-[calc(100svh-0.5rem)] flex-col items-center justify-start bg-white px-7 pb-11 sm:px-10 lg:px-10"
      >
        <div className="w-full">
        <div data-swifto-region="logo-row">
          <SwiftoLogo />
        </div>

        <div data-swifto-region="header" className="sr-only">
          {headerContent}
        </div>

        <div data-swifto-region="form-wrap">
          {mainContent}
        </div>
        </div>

        <footer data-swifto-region="footer">
          <div>&copy;2026 All Rights Reserved. Copyrighted and</div>
          <div>
            Powered by{" "}
            <a
              href="https://schinkelstechnik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schinkels Technik Sdn Bhd.
            </a>
          </div>
          <div data-swifto-region="version">v2.0.0-1 | 30 July 2024</div>
        </footer>
      </div>

        <aside
          data-swifto-region="hero"
          className="relative hidden min-h-[calc(100svh-0.5rem)] overflow-hidden lg:block"
        >
          <img
            src={swiftoHero}
            alt="Civil road works site"
            data-swifto-region="hero-image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>
      </div>
    </div>
  );
}
import type { ReactNode } from "react";
import infracivicLogo from "./assets/infracivic-logo.svg";
import infracivicStrip from "./assets/infracivic-bg-strip.jpg";
import "./infracivic.css";

function InfracivicBrand() {
  return (
    <div data-infracivic-region="brand-lockup" aria-label="InfraCivic">
      <img
        src={infracivicLogo}
        alt="InfraCivic — Your road maintenance solution."
        data-infracivic-region="logo-mark"
      />
    </div>
  );
}

export function InfracivicTemplate(props: {
  headerContent: ReactNode;
  mainContent: ReactNode;
}) {
  const { headerContent, mainContent } = props;

  return (
    <div data-theme-implementation="infracivic">
      <img
        src={infracivicStrip}
        alt=""
        aria-hidden="true"
        data-infracivic-region="strip"
        data-infracivic-position="top"
      />
      <img
        src={infracivicStrip}
        alt=""
        aria-hidden="true"
        data-infracivic-region="strip"
        data-infracivic-position="bottom"
      />

      <main data-infracivic-region="form-panel">
        <section
          data-infracivic-region="auth-card"
          aria-label="InfraCivic sign in"
        >
          <InfracivicBrand />

          <div data-infracivic-region="header">{headerContent}</div>

          <div data-infracivic-region="form-wrap">{mainContent}</div>

          <div data-infracivic-region="supporting-info">
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
            <div data-infracivic-region="powered-by">
              Powered By Schinkels Technik
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

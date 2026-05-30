import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import logo from "./assets/Logo.png";
import Pavion_CT from "./assets/Pavion_CT.webp";
import "./ctui.css";

export function CtuiTemplate(props: {
  headerContent: ReactNode;
  mainContent: ReactNode;
}) {
  const { headerContent, mainContent } = props;

  return (
    <div
      data-theme-implementation="ctui"
      className="grid min-h-svh lg:grid-cols-[2fr_3fr]"
    >
      <div
        data-ctui-region="shell-panel"
        className="flex flex-col gap-4 px-0 py-0 pb-6 lg:p-6 lg:md:p-10 lg:pt-10 min-h-screen lg:min-h-0"
      >
        <div className="flex flex-1 items-start lg:items-center justify-center flex-col ">
          <div className="w-full max-w-xl">
            <Card
              data-ctui-region="auth-card"
              className="shadow-none bg-transparent lg:bg-card border-0 lg:rounded-lg lg:border lg:shadow-sm rounded-t-2xl"
            >
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-col items-start justify-start gap-3 mt-4 my-4">
                    <div className="flex items-center gap-3">
                      <img src={logo} alt="Logo" />
                    </div>
                  </div>
                  {headerContent}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {mainContent}
                <div
                  data-ctui-region="supporting-info"
                  className="text-center text-sm mt-12"
                >
                  <div className="mb-4">
                    <div>
                      {" "}
                      For more information visit our website{" "}
                      <a
                        href="https://schinkelstechnik.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SCHINKELS TECHNIK
                      </a>
                    </div>
                  </div>
                  <div>Powered By Schinkels Technik</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div
        data-ctui-region="hero"
        className="flex items-center pt-20 h-full justify-center z-1"
        style={{ backgroundImage: `url(${Pavion_CT})` }}
      />
    </div>
  );
}

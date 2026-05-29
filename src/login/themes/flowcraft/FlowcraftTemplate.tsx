import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import flowcraftHero from "./assets/flowcraft.jpg";
import flowcraftLogo from "./assets/flowcraft_logo_min.svg";
import "./flowcraft.css";

export function FlowcraftTemplate(props: {
  headerContent: ReactNode;
  mainContent: ReactNode;
}) {
  const { headerContent, mainContent } = props;

  return (
    <div
      data-theme-implementation="flowcraft"
      className="flex min-h-svh justify-center bg-white font-geist"
    >
      <div className="mx-auto grid min-h-[calc(100svh-0.5rem)] w-full overflow-hidden rounded-2xl bg-white lg:grid-cols-[1fr_456px]">
        <div
          className="hidden min-h-[calc(100svh-0.5rem)] bg-cover bg-top lg:block"
          style={{ backgroundImage: `url(${flowcraftHero})` }}
        />
        <main className="flex min-h-[calc(100svh-0.5rem)] flex-col items-center justify-center bg-white px-7 py-11 sm:px-10 lg:px-10">
          <div className="w-full">
            <div className="mb-11 flex items-center justify-start gap-3">
              <img src={flowcraftLogo} alt="Flowcraft Logo" className="h-8" />
              <span className="text-base font-bold text-[#000000]">
                Flowcraft
              </span>
            </div>
            <Card className="border-0 bg-transparent p-0 shadow-none">
              <CardHeader className="p-0 pb-5">
                <CardTitle>{headerContent}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">{mainContent}</CardContent>
            </Card>
          </div>
          <div
            data-flowcraft-region="footer"
            className="mt-auto w-full pt-12 text-center text-[10px] leading-4 text-[#3f4a5a]"
          >
            <div>©2026 All Rights Reserved. Copyrighted and</div>
            <div>
              Powered by{" "}
              <a
                href="https://schinkelstechnik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Schinkels Technik Sdn Bhd.
              </a>
            </div>
            <div className="mt-3">v2.0.0-1 | 30 July 2024</div>
          </div>
        </main>
      </div>
    </div>
  );
}

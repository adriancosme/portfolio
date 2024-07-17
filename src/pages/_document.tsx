import Header from "@/components/header";
import { Head, Html, Main, NextScript } from "next/document";
import HeaderPagesData from "../data/header-pages.json";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="Unami"
          strategy="beforeInteractive"
          src="https://us.umami.is/script.js"
          data-website-id="2b36c498-86c2-4b60-98dc-6b614ccca5e8"
        />
      </Head>
      <body className="bg-[#1f2028] scroll-smooth">
        <Header pages={HeaderPagesData} />
        <Main />
        <NextScript />
        <footer className="bg-[#20222C] w-full flex justify-center">
          <h2 className="sr-only">Footer</h2>
          <div className="relative flex items-center pb-2">
            <span className="text-[#CECECE] text-xs">
              © 2023 Edwin Cosme. Built with Next.js 13.3.0
            </span>
          </div>
        </footer>
      </body>
    </Html>
  );
}

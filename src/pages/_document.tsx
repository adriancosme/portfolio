import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";
import HeaderPagesData from "../data/header-pages.json";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LX2JC2FZX1"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-LX2JC2FZX1');
                  `,
          }}
        />
      </Head>
      <body className="bg-[#20222C] scroll-smooth">
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

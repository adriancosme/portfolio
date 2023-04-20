import Header from "@/components/header";
import { Head, Html, Main, NextScript } from "next/document";
import HeaderPagesData from "../data/header-pages.json";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="beforeInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
        />
        {/* Google analytics script */}
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GTM_ID}');`,
          }}
        />
        {/* Google Tag Manager script */}
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMGFKC7');`,
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
        {/*<!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMGFKC7"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        {/*<!-- End Google Tag Manager (noscript) -->*/}
      </body>
    </Html>
  );
}

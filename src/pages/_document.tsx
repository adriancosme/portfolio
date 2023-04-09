import { Html, Head, Main, NextScript } from 'next/document'
import Header from "@/components/header";
import HeaderPagesData from "../data/header-pages.json";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#20222C]'>
        <Header pages={HeaderPagesData} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

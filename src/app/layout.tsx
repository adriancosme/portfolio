import Header from "@/components/header";
import { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import HeaderPagesData from "../data/header-pages.json";
import '../styles/globals.css';
import Script from "next/script";
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    fallback: ['sans-serif']
})

export const metadata: Metadata = {
    title: 'Edwin Cosme - Portfolio',
    openGraph: {
        title: 'Edwin Cosme - Portfolio',
        description: 'Edwin Adrian Cosme Nolasco Portfolio'
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <Script
                    id="Unami"
                    strategy="beforeInteractive"
                    src="https://us.umami.is/script.js"
                    data-website-id="2b36c498-86c2-4b60-98dc-6b614ccca5e8"
                />
            </head>
            <body className={`${montserrat.className} bg-[#1f2028] scroll-smooth`}>
                <Header pages={HeaderPagesData} />
                {children}
                <footer className="bg-[#20222C] w-full flex justify-center">
                    <h2 className="sr-only">Footer</h2>
                    <div className="relative flex items-center pb-2">
                        <span className="text-[#CECECE] text-xs">
                            © 2023 Edwin Cosme. Built with Next.js 13.3.0
                        </span>
                    </div>
                </footer>
            </body>
        </html>
    )
}
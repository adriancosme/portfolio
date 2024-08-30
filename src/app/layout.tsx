import Navbar from "@/components/navbar";
import { Metadata } from "next";
import HeaderPagesData from "../data/header-pages.json";
import '../styles/globals.css';
import '../styles/tailwind.css';
import Script from "next/script";

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
        <html lang="en" className="dark">
            <head>
                <Script
                    id="Unami"
                    strategy="beforeInteractive"
                    src="https://us.umami.is/script.js"
                    data-website-id="2b36c498-86c2-4b60-98dc-6b614ccca5e8"
                />
            </head>
            <body className={`bg-white transition duration-500 dark:bg-gray-900`}>
                <Navbar pages={HeaderPagesData} />
                {children}
                <footer className="mt-4 bg-primary w-full flex justify-center">
                    <h2 className="sr-only">Footer</h2>
                    <div className="relative flex items-center pb-2">
                        <span className="text-[#CECECE] text-xs">
                            © 2023 Edwin Cosme. Built with Next.js 14
                        </span>
                    </div>
                </footer>
            </body>
        </html>
    )
}
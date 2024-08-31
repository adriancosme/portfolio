"use client";
import { MOBILE_MENU_CONTENT_ID } from "@/constants/mobile-menu";
import useMenuToggle from "@/hooks/useMenuToggle";
import Image from "next/image";
import Link from "next/link";
import '../styles/navbar.css';
import HamburgerButton from "./hamburger-button";


type NavbarPropsType = {
  pages: {
    name: string;
    to: string;
  }[];
};

export const NavbarComponent = ({ pages }: NavbarPropsType): JSX.Element => {
  const { isOpen, toggle } = useMenuToggle();
  // const pathname = usePathname();  

  return (
    <div className={`px-5vw py-9 lg:py-12`}>
      <nav className={`mx-auto text-primary flex max-w-8xl items-center justify-between ${isOpen ? "open" : ""}`}>
        <Link href="/" className="flex items-center justify-center">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <Image alt='Profile picture' src="/photo.jpg" height={40} width={40} priority style={{ objectFit: 'cover' }} />
          </div>
        </Link>
        <ul className="hidden lg:flex items-center gap-4">
          {
            pages.map((page, key) => {
              return (
                <li className="px-5 py-2" key={key}>
                  <Link
                    className="underlined block whitespace-nowrap text-lg font-medium hover:text-white focus:outline-none text-secondary"
                    href={`${page.to}`}
                    id={`nav-link-${key}`}
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <HamburgerButton className="lg:hidden" id="menuButton" isOpen={isOpen} toggle={toggle} />
        <div
          className={`fixed inset-0 z-[888] flex w-screen flex-col items-center overflow-x-auto bg-[var(--background-color)] px-10 lg:hidden ${isOpen ? "open" : ""}`}
          id={MOBILE_MENU_CONTENT_ID}
        >
          <aside className="flex min-h-16 w-full items-center justify-between">
            <span className="text-xl font-semibold uppercase text-white" >Menu</span>
            <HamburgerButton id="innerMenuButton" isOpen={isOpen} toggle={toggle} />
          </aside>
          <div className="flex min-h-2 w-full items-center justify-center">
            <nav className={`text-accent navContent flex w-full flex-col items-center gap-5 ${isOpen ? "animate-bounce-fade-in" : ""}`}>
              {
                pages.map(({ name, to }, key) => {
                  return (
                    <Link
                      className="relative flex flex-col items-center justify-center gap-2 text-xl capitalize"
                      key={name}
                      href={`${to}`}
                      id={`navmob-link-${key}`}
                      onClick={toggle}
                    >
                      {name}
                    </Link>
                  );
                })
              }
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;

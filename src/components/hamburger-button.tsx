"use client";
import { MOBILE_MENU_CONTENT_ID } from "@/constants/mobile-menu";
import useMenuToggle from "@/hooks/useMenuToggle";
import { useEffect } from "react";

export default function HamburgerButton({ className = "", id, isOpen, toggle }: { className?: string, id?: string, isOpen?: boolean, toggle: () => void }) {
    const width = "w-6";
    const genericHambugerLineClass = `h-[2px] ${width} bg-gray-300 transition ease transform duration-300`;

    const classesForEvents = {
        hamburgerMenuClass: ".hamburgerButton",
        open: "open",
        hamburgerButtonClicked: "hamburgerButtonClicked"
    } as const;


    return (
        <button
            id={id}
            type="button"
            aria-expanded={isOpen}
            aria-controls={MOBILE_MENU_CONTENT_ID}
            className={`hamburgerButton group relative flex flex-col h-[20px] items-center justify-between ${className} ${isOpen ? classesForEvents.open : ""}`}
            onClick={() => toggle()}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <span className="sr-only">Open main menu</span>
            <span className={`group-[.open]:translate-y-2 group-[.open]:rotate-45 ${genericHambugerLineClass}`}></span>
            <span className={`group-[.open]:opacity-0 ${genericHambugerLineClass}`}></span>
            <span className={`group-[.open]:opacity-0 ${genericHambugerLineClass}`}></span>
            <span className={`group-[.open]:-translate-y-[0.6rem] group-[.open]:-rotate-45" ${genericHambugerLineClass}`}></span>
        </button>
    );
}
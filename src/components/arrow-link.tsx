"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ArrowLink({ text, href }: { text: string; href: string }) {
    const [offset, setOffset] = useState(175.929); // Valor inicial del strokeDashoffset
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    const startAnimation = (direction: string) => {
        const animationDuration = 300;
        const start = performance.now();
        const initialOffset = offset;
        const targetOffset = direction === "forward" ? 0 : 175.929;
        const difference = targetOffset - initialOffset;

        const animate = (time: number) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / animationDuration, 1);
            const newOffset = initialOffset + difference * progress;
            setOffset(newOffset);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    const arrowAnimation = () => {
        if (isHovered) {
            startAnimation("forward");
        } else {
            startAnimation("backward");
        }
    };

    useEffect(() => {
        if (isHovered) {
            startAnimation("forward");
        } else {
            startAnimation("backward");
        }
    }, [isHovered]);



    return (
        <Link className="text-gray-100 inline-flex cursor-pointer items-center text-left font-medium transition focus:outline-none text-lg" href={href} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
                <div className="absolute text-gray-200 dark:text-gray-600">
                    <svg width="60" height="60">
                        <circle stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30"></circle>
                        <circle className="text-white" stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30"
                            style={{ strokeDasharray: "175.929px, 175.929px", transform: "rotate(-90deg)", transformOrigin: "30px 30px 0px" }} transform-origin="30px 30px" strokeDashoffset={offset} >
                        </circle>
                    </svg>
                </div>
                <span
                    style={{
                        transform: isHovered ? "translateY(4px)" : "none",
                        transition: "transform 0.3s ease",
                    }}
                >
                    <svg className="transform rotate-0" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z" fill="currentColor"></path></svg>
                </span>
            </div>
            <span className="ml-8 text-xl font-medium">{text}</span>
        </Link>
    );



}
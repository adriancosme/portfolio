"use client";

import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="col-span-full mb-12 lg:mb-0 px-10 lg:col-span-5 lg:col-start-7">
            <Image
                className="h-auto w-full object-cover max-h-[50vh] motion-safe:animate-hero-image-reveal"
                src="/astronaut-2.png"
                alt="Astronaut"
                width={400}
                height={400}
                priority
                style={{
                    aspectRatio: "1.2"
                }}
            />
        </div>
    );
}
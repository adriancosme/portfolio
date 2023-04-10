import { ReactNode } from "react";

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode
}
export const SectionComponent = ({id, title, children}: SectionProps) => {
    return (
        <section id={id} className="max-w-md mx-auto container lg:max-w-5xl mt-8">
            <h2 className="text-[#CECECE] text-3xl font-bold">{title}</h2>
            {children}
        </section>
    )
}
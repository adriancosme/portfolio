import { ReactNode } from "react";

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode | ReactNode[]
}
export const SectionComponent = ({ id, title, children }: SectionProps) => {
    return (
        <section id={id} className="relative max-w-7xl mx-auto mb-12">
            <h2 className="text-3xl font-bold pb-6">{title}</h2>
            {children}
        </section>
    )
}
"use client";

type SectionProps = {
    children: React.ReactNode;
    bg?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function Section({ children, bg = "bg-white", ...props }: SectionProps) {
    return (
        <section
            {...props}
            className={`py-24 ${bg ?? ""} ${props.className ?? ""}`}
        >
            {children}
        </section>
    );
}

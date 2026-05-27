interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
}: SectionHeaderProps) {
    const alignment = align === "center" ? "mx-auto text-center" : "";

    return (
        <section className={`mb-10 max-w-3xl ${alignment}`}>
            {eyebrow && (
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-accent">
                    {eyebrow}
                </p>
            )}
            <h1 className="text-heading text-4xl font-black tracking-tight md:text-6xl">
                {title}
            </h1>
            {description && (
                <p className="text-muted mt-5 text-lg leading-8">
                    {description}
                </p>
            )}
        </section>
    );
}

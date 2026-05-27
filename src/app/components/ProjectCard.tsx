interface ProjectCardProps {
    title: string;
    intro: string;
    techStack: string[];
    repoUrl: string;
}

export default function ProjectCard(
    { title, intro, techStack, repoUrl }: ProjectCardProps,
) {
    return (
        <article className="card-hover bg-card rounded-[2rem] border border-accent-soft p-7 shadow-sm">
            <h2 className="text-heading text-2xl font-black">{title}</h2>
            <p className="text-muted mt-4 leading-7">{intro}</p>

            <div className="mt-6">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-accent">
                    Tech stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-soft-pink px-3 py-1 text-sm font-semibold text-accent"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-stone-900 px-5 py-3 font-bold text-white transition hover:bg-[var(--portfolio-pink-dark)]"
            >
                View GitHub repo
            </a>
        </article>
    );
}

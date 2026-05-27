import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/projects";

export default function ProjectsPage() {
    return (
        <PageShell>
            <SectionHeader
                eyebrow="Projects"
                title="Software projects and experiments."
                description="A selection of projects that show my technical growth, problem-solving process, and experience with different tools."
            />

            <section className="mx-auto max-w-6xl">
                <div className="mb-8 rounded-[2rem] bg-stone-900 p-7 text-white shadow-sm">
                    <h2 className="text-2xl font-black">GitHub profile</h2>
                    <p className="mt-3 text-stone-200">
                        You can find more of my code and experiments on GitHub.
                    </p>
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex rounded-full bg-white px-5 py-3 font-bold text-stone-900 transition hover:bg-[var(--portfolio-pink-light)]"
                    >
                        Visit my GitHub
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>
        </PageShell>
    );
}

import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { githubProfileUrl, projects } from "../data/projects";

export default function ProjectsPage() {
  const softwareProjects = projects.filter(
    (project) => project.category === "Software Engineering",
  );

  const graphicProjects = projects.filter(
    (project) => project.category === "Graphic and Digital Media",
  );

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Projects"
        title="Projects and creative work."
        description="A selection of projects from software engineering and graphic and digital media."
      />

      <section className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-4xl bg-stone-900 p-7 text-white shadow-sm">
          <h2 className="text-2xl font-black">GitHub profile</h2>

          <p className="mt-3 max-w-2xl text-stone-200">
            You can find more of my code, experiments, and software engineering
            projects on GitHub.
          </p>

          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-3 font-bold text-stone-900 transition hover:bg-[var(--portfolio-pink-light)]"
          >
            Visit my GitHub
          </a>
        </div>

        <div className="space-y-14">
          <section>
            <div className="mb-5">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-accent">
                Code
              </p>

              <h2 className="text-heading text-3xl font-black">
                Software Engineering Projects
              </h2>
            </div>

            {softwareProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {softwareProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            ) : (
              <p className="text-muted">
                Software engineering projects will be added soon.
              </p>
            )}
          </section>

          <section>
            <div className="mb-5">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-accent">
                Design
              </p>

              <h2 className="text-heading text-3xl font-black">
                Graphic and Digital Media Projects
              </h2>
            </div>

            {graphicProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {graphicProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            ) : (
              <p className="text-muted">
                Graphic and digital media projects will be added soon.
              </p>
            )}
          </section>
        </div>
      </section>
    </PageShell>
  );
}
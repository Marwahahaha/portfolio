import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";

const skills = [
    "Java",
    ".NET",
    "JS/TS",
    "React/Vue",
    "Symfony",
    "System design",
    "Problem solving",
    "Software architecture",
];

export default function AboutPage() {
    return (
        <PageShell>
            <SectionHeader
                eyebrow="About me"
                title="A developer with a creative maker mindset."
                description="I enjoy learning deeply, building useful things, and combining technical thinking with creativity."
            />

            <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.8fr]">
                <article className="bg-card rounded-4xl p-8 leading-8 shadow-sm">
                    <p>
                        Hi! My name is Marwah and I am a software engineering
                        student at HOWEST in Bruges. I am passionate about
                        programming, sewing, fashion, gaming, and learning new
                        skills. I enjoy the feeling of creating something
                        independently, whether that is a software project or a
                        handmade garment.
                    </p>
                    <p className="mt-5">
                        As a software engineering student, I am building a
                        strong foundation in problem solving, programming,
                        software development, system design, and architecture. I
                        have experience with several languages and frameworks,
                        including Java, .NET, JS/TS, React/Vue, and Symfony.
                    </p>
                    <p className="mt-5">
                        Outside of programming, I love gaming, sewing clothes,
                        making cosplay costumes, and going to conventions. I am
                        also learning crochet and embroidery, and I use my
                        commute time for kumihimo because it helps me relax and
                        unwind.
                    </p>
                </article>
                <aside className="space-y-6">
                    <div className="rounded-4xl bg-soft-pink p-7 shadow-sm">
                        <h2 className="text-heading text-2xl font-black">
                            Tech stack
                        </h2>
                        <div className="mt-5 flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full bg-white px-4 py-2 text-sm font-bold text-accent shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-4xl bg-soft-green p-7 shadow-sm">
                        <h2 className="text-heading text-2xl font-black">
                            What I value
                        </h2>
                        <ul className="text-body mt-4 space-y-3">
                            <li>🌱 Continuous learning</li>
                            <li>🤝 Sharing knowledge</li>
                            <li>🧠 Clear problem solving</li>
                            <li>🎨 Creativity in technical work</li>
                        </ul>
                    </div>
                </aside>
            </section>
        </PageShell>
    );
}

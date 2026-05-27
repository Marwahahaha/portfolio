import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";
import HobbyCard from "../components/HobbyCard";
import { favouriteGames, sewingProjects } from "../data/hobbies";

export default function HobbiesPage() {
    return (
        <PageShell>
            <SectionHeader
                eyebrow="Hobbies"
                title="What I create, play, and explore outside of code."
                description="My hobbies show the creative side of who I am: gaming, sewing, cosplay, crafts, and hands-on learning."
            />

            <section className="mx-auto max-w-6xl space-y-12">
                <div>
                    <h2 className="text-heading mb-5 text-3xl font-black">
                        Favourite games
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {favouriteGames.map((game) => (
                            <HobbyCard key={game.title} icon="🎮" {...game} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-heading mb-5 text-3xl font-black">
                        Sewing and handmade projects
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {sewingProjects.map((project) => (
                            <HobbyCard
                                key={project.title}
                                icon="🧵"
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}

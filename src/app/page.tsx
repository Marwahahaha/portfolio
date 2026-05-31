import Image from "next/image";
import Link from "next/link";
import PageShell from "./components/PageShell";

const highlights = [
  "Software engineering student",
  "Java, Symfony, .NET, React/Vue and JS/TS",
  "Creative maker: sewing, cosplay & crafts",
];

export default function Home() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent">
            Portfolio
          </p>
          <h1 className="text-heading text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Marwah Al-Shakhli
          </h1>
          <p className="text-body mt-6 max-w-2xl text-xl leading-9">
            A software engineering student who blends structured problem-solving
            with creativity, curiosity, and a love for building things by hand
            and with code.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-accent-soft bg-white/80 px-4 py-2 text-sm font-semibold text-body shadow-sm"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              View my projects
            </Link>
            <Link href="/about" className="btn-secondary">
              More about me
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-4/5 max-w-sm overflow-hidden rounded-4xl border-8 border-white bg-soft-pink shadow-2xl">
            <Image
              src="/profile_image.png"
              alt="Portrait of Marwah Al-Shakhli"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "57% center" }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
        <Link
          href="/blogposts"
          className="card-hover bg-card rounded-3xl p-6 shadow-sm"
        >
          <h2 className="text-heading mt-4 text-xl font-bold">Tech & meets</h2>
          <p className="text-muted mt-2">
            Reflections from events, workshops, and technical talks.
          </p>
        </Link>
        <Link
          href="/hobbies"
          className="card-hover bg-card rounded-3xl p-6 shadow-sm"
        >
          <h2 className="text-heading mt-4 text-xl font-bold">
            Creative hobbies
          </h2>
          <p className="text-muted mt-2">
            Gaming, sewing, cosplay, embroidery, and kumihimo.
          </p>
        </Link>
        <Link
          href="/contact"
          className="card-hover bg-card rounded-3xl p-6 shadow-sm"
        >
          <h2 className="text-heading mt-4 text-xl font-bold">Contact</h2>
          <p className="text-muted mt-2">
            Reach out for opportunities, projects, or a friendly chat.
          </p>
        </Link>
      </section>
    </PageShell>
  );
}

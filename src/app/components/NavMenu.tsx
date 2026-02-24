import Link from "next/link";

export default function NavMenu() {
    return (
        <nav className="mb-8">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-lg border border-primary-light rounded-lg bg-white shadow-sm p-4">
                <li>
                    <Link
                        href="/"
                        className="text-primary-base hover:text-white-smoke transition-colors font-semibold"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="text-primary-base hover:text-white-smoke transition-colors font-semibold"
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        href="/blogposts"
                        className="text-primary-base hover:text-white-smoke transition-colors font-semibold"
                    >
                        Blog Posts
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className="text-primary-base hover:text-white-smoke transition-colors font-semibold"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className="text-primary-base hover:text-white-smoke transition-colors font-semibold"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

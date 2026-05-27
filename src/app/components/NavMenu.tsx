import Link from "next/link";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/blogposts", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function NavMenu() {
    return (
        <header className="sticky top-4 z-50 mx-auto mb-10 max-w-6xl px-4">
            <nav className="rounded-full border border-accent-soft bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md">
                <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-body md:gap-6">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="rounded-full px-3 py-2 transition hover:bg-soft-pink hover:text-accent"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

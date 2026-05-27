import NavMenu from "./NavMenu";

interface PageShellProps {
    children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
    return (
        <main className="bg-portfolio min-h-screen px-5 py-6 font-sans md:px-10 lg:px-16">
            <NavMenu />
            {children}
        </main>
    );
}

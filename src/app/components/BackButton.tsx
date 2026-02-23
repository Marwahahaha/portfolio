import Link from "next/link";

export default function BackButton() {
    return (
        <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
        >
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
            Back to Home
        </Link>
    );
}
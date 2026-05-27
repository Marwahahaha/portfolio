"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogCardProps {
    title: string;
    content: string;
    images?: string[];
    tags?: string[];
}

export default function BlogCard({
    title,
    content,
    images = [],
    tags = [],
}: BlogCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="card-hover bg-card w-full rounded-[2rem] border border-accent-soft p-7 text-left shadow-sm"
            >
                <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-soft-pink px-4 py-2 text-sm font-bold text-accent">
                        Tech & meet
                    </span>

                    {images.length > 0 && (
                        <span className="text-sm font-semibold text-muted">
                            {images.length}{" "}
                            photo{images.length === 1 ? "" : "s"}
                        </span>
                    )}
                </div>

                <h2 className="text-heading text-2xl font-black">{title}</h2>

                <p className="text-muted mt-4 line-clamp-4 leading-7">
                    {content || "Reflection coming soon."}
                </p>

                {tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-soft-green px-3 py-1 text-sm font-semibold text-body"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <p className="mt-6 text-sm font-bold text-accent">
                    Read more →
                </p>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/60 px-4 py-8 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`blog-modal-${title}`}
                    onClick={() => setIsOpen(false)}
                >
                    <article
                        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl md:p-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-accent">
                                    Blog reflection
                                </p>
                                <h2
                                    id={`blog-modal-${title}`}
                                    className="text-heading text-3xl font-black md:text-4xl"
                                >
                                    {title}
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="rounded-full bg-soft-pink px-4 py-2 font-black text-accent transition hover:bg-[var(--portfolio-border)]"
                                aria-label="Close blog post"
                            >
                                ×
                            </button>
                        </div>

                        <p className="text-body whitespace-pre-line leading-8">
                            {content || "Reflection coming soon."}
                        </p>

                        {tags.length > 0 && (
                            <div className="mt-7 flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-soft-green px-3 py-1 text-sm font-semibold text-body"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {images.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-heading mb-4 text-xl font-black">
                                    Pictures
                                </h3>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {images.map((image, index) => (
                                        <div
                                            key={image}
                                            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-soft-pink"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${title} image ${
                                                    index + 1
                                                }`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            )}
        </>
    );
}

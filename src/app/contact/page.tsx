"use client";

import { useForm } from "@formspree/react";
import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";

export default function ContactPage() {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";
    const [state, handleSubmit] = useForm(formId);

    return (
        <PageShell>
            <SectionHeader
                eyebrow="Contact"
                title="Let’s connect."
                description="Send me a message about opportunities, projects, collaborations, or anything you would like to discuss."
            />
            <section className="bg-card mx-auto grid max-w-6xl gap-8 rounded-[2rem] p-7 shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
                <aside className="rounded-[1.5rem] bg-soft-pink p-7">
                    <h2 className="text-heading text-2xl font-black">
                        Contact details
                    </h2>
                    <p className="text-muted mt-4 leading-7">
                        I am always happy to connect, especially about software
                        development, learning opportunities, and creative
                        projects.
                    </p>

                    <div className="text-body mt-6 space-y-4">
                        <p>
                            <span className="font-bold">Email:</span>{" "}
                            <a
                                className="text-accent underline"
                                href="mailto:marwah.al-shakhli@student.howest.be"
                            >
                                Marwah Al-Shakhli
                            </a>
                        </p>
                        <p>
                            <span className="font-bold">LinkedIn:</span>{" "}
                            <a
                                className="text-accent underline"
                                href="https://www.linkedin.com/in/marwah-al-shakhli-094566360/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Marwah Al-Shakhli
                            </a>
                        </p>
                    </div>
                </aside>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="firstName"
                                className="text-heading mb-2 block font-bold"
                            >
                                First name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                required
                                className="form-field"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="text-heading mb-2 block font-bold"
                            >
                                Last name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                required
                                className="form-field"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="text-heading mb-2 block font-bold"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="form-field"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="text-heading mb-2 block font-bold"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            className="form-field resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {state.submitting ? "Sending..." : "Send message"}
                    </button>

                    {state.succeeded && (
                        <p className="font-semibold text-emerald-700">
                            Your message has been sent.
                        </p>
                    )}
                    {state.errors && (
                        <p className="font-semibold text-red-600">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </form>
            </section>
        </PageShell>
    );
}

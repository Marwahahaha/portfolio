"use client";

import { useState } from "react";
import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import { blogPosts, type BlogCategory } from "../data/blogPosts";

type BlogFilter = "All" | BlogCategory;

const filters: BlogFilter[] = ["All", "Tech & meets", "Workshops", "More"];

export default function BlogPostsPage() {
  const [activeFilter, setActiveFilter] = useState<BlogFilter>("All");

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Blog posts"
        title="Reflections, events, and learning notes."
        description="A collection of reflections from tech events, workshops, and personal learning moments."
      />

      <section className="mx-auto mb-8 flex max-w-6xl flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-(--portfolio-pink) text-white shadow-md"
                  : "border border-accent-soft bg-white/80 text-body hover:bg-soft-pink hover:text-accent"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </section>
    </PageShell>
  );
}
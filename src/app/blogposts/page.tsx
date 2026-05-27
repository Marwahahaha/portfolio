import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blogPosts";

export default function BlogPostsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Blog posts"
        title="Tech events, workshops, and reflections."
        description="Short reflections from tech talks, workshops, and meetups I attended during the previous months."
      />

      <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </section>
    </PageShell>
  );
}
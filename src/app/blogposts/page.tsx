import BlogPost from "./blogpost";
import BlogPostPage from "./blogpost";

export default function BlogPostsPage() {
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 dark:text-zinc-50">
                Blog posts
            </h1>
            <BlogPost
                title="My first blog post"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                images={[
                    "https://via.placeholder.com/400x300",
                    "https://via.placeholder.com/400x300",
                    "https://via.placeholder.com/400x300",
                ]}
            />
        </div>
    );
}

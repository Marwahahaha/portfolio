import Image from "next/image";

interface BlogPost {
    title: string;
    content: string;
    images?: string[];
}

export default function BlogPost({ title, content, images }: BlogPost) {
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 dark:text-primary-dark">
                {title}
            </h1>
            <p className="text-xl text-center text-zinc-600 dark:text-zinc-400 mb-8">
                {content}
            </p>
            {images && images.length > 0 && (
                <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-64 h-48 bg-gray-200 rounded-lg overflow-hidden relative"
                        >
                            <Image
                                src={image}
                                alt={`Blog post image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

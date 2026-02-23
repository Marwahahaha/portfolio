import Image from "next/image";

interface BlogPost {
    title: string;
    content: string;
    images?: string[];
}

export default function BlogPost({ title, content, images }: BlogPost) {
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 dark:text-zinc-50">
                {title}
            </h1>
            <p className="text-xl text-center text-zinc-600 dark:text-zinc-400 mb-8">
                {content}
            </p>
            {images && images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
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
            <div className="prose dark:prose-invert max-w-3xl mx-auto">
                <div dangerouslySetInnerHTML={{__html: content}} />

            </div>
        </div>
    );

}
"use client";

import { useState } from "react";
import BlogPost from "./blogpost";

export default function BlogPostsPage() {
    const [expandedPost, setExpandedPost] = useState<number | null>(null);

    const blogPosts = [
        {
            title: "Van Plato tot Vibe Coding",
            content: "",
            images: []
        },
        {
            title: "DeepSeek Uncovered",
            content: "",
            images: []
        },
        {
            title: "Transitioning to IPv6",
            content: "",
            images: []
        },
        {
            title: "Hack The Future",
            content:
                "Hack The Future was an absolute blast! The day was a perfect mix of socializing, coding, and exploring the Antwerp ZOO. I participated in Challenge 104, organized by Collide. The goal was to build a backend that could generate coding challenges and a front-end app that would fetch those challenges and solve them. It was a fun and engaging project to work on.On top of the hackathon itself, we also had free access to the zoo! I couldn’t pass up that opportunity, so I spent some time wandering around and visiting my favorite part of any zoo, the aquarium! All in all, it was an amazing day filled with new knowledge and great memories. Thank you, De Cronos Groep, for organizing this fantastic event!",
            images: [
                "/media/htf-entrance.jpg",
                "/media/tea.jpg",
                "/media/challenges.jpg",
                "/media/aquarium.jpg",
                "/media/penguins.jpg",
            ],
        },
        {
            title: "Flutter: the future of cross-platform developemnt",
            content: "",
            images: []
        },
        {
            title: "Mob programming session",
            content: "",
            images: []
        },
        {
            title: "CTI, From threats to intelligence",
            content: "",
            images: []
        },
        {
            title: "Event Storming Workshop + OT security talk",
            content: "We had and eventful day at Howest. In the morning, we had an event storming workshop led by our teachers from the course Domain Driven Design. It's a collaborative technique for modelling complex domains. It brings business and IT people together, helping both sides gain a shared, in-depth understanding of processes.",
            images: [
                
            ]
        },
        {
            title: "The Road to a Defensible IT/OT Architecture",
            content: "",
            images: []
        },
    ];

    const togglePost = (index: number) => {
        setExpandedPost(expandedPost === index ? null : index);
    };
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 dark:text-zinc-50">
                Blog posts
            </h1>
            <ul className="max-w-4xl mx-auto space-y-4">
                {blogPosts.map((post, index) => (
                    <li
                        key={index}
                        className="border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden bg-white dark:bg-zinc-800 shadow-sm"
                    >
                        <button
                            onClick={() => togglePost(index)}
                            className="w-full flex items-center justify-between p-6 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                        >
                            <h2 className="text-2xl font-semibold dark:text-zinc-50 text-left">
                                {post.title}
                            </h2>
                            <svg
                                className={`w-6 h-6 transition-transform duration-300 ${
                                    expandedPost === index ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {expandedPost === index && (
                            <div className="p-6 pt-0 border-t border-zinc-200 dark:border-zinc-700">
                                <BlogPost
                                    title={post.title}
                                    content={post.content}
                                    images={post.images}
                                />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

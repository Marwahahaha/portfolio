"use client";

import { useState } from "react";
import BlogPost from "./blogpost";
import BackButton from "../components/BackButton";
import NavMenu from "../components/NavMenu";

export default function BlogPostsPage() {
    const [expandedPost, setExpandedPost] = useState<number | null>(null);

    const blogPosts = [
        {
            title: "Van Plato tot Vibe Coding",
            content: "",
            images: [],
        },
        {
            title: "DeepSeek Uncovered",
            content: "",
            images: [
                "/media/deepseek.jpeg",
                "/media/deepseek-2.jpeg",
                "/media/deepseek-3.jpeg",
            ],
        },
        {
            title: "Transitioning to IPv6",
            content: "",
            images: [
                "/media/ipv6-transitioning.jpeg",
                "/media/ipv6-transitioning-2.jpeg",
                "/media/ipv6-transitioning-3.jpeg",
            ],
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
            images: [
                "/media/flutter.jpeg",
                "/media/flutter-2.jpeg",
                "/media/flutter-3.jpeg",
            ],
        },
        {
            title: "Mob programming session",
            content: "Another great DDD session! We had a mob programming session, which was a lot of fun. We worked together on a coding challenge, and it was great to see how everyone contributed and learned from each other. It isn't exactly something I'd like to do, but I see the value and benefits of it. It was a great way to learn and collaborate with my classmates. Mob programming is a collaborative software development approach in which the entire team works together on the same task, at the same time, on a single workstation. Instead of dividing work among individuals, the group collectively analyzes, designs, and implements code in real time. Typically, one person acts as the “driver” (typing), while the rest of the team (“navigators”) review, guide, and think strategically. Roles rotate frequently to maintain engagement and shared ownership. The concept emphasizes continuous knowledge sharing, collective code ownership, and immediate feedback. By bringing diverse perspectives into every decision, mob programming reduces knowledge silos, improves code quality, and accelerates learning within the team. It is particularly effective for complex problems, onboarding new team members, and situations where alignment and shared understanding are more valuable than individual speed.",
            images: [
                "/media/mob-programming.jpg",
            ],
        },
        {
            title: "CTI, From threats to intelligence",
            content: "The session on CTI – From Threats to Intelligence illustrated how something seemingly simple can trigger a much broader intelligence process. It started with a familiar scenario: suspicious messages being forwarded to a national coordination body such as the Centre for Cybersecurity Belgium for analysis. In the example discussed, the incident involved smishing (phishing via SMS). At first glance, identifying and blocking a single malicious domain linked to that message may appear sufficient. In reality, that approach barely scratches the surface. Modern threat actors operate campaigns, not single domains. Blocking one indicator without deeper analysis is reactive and ineffective, comparable to treating symptoms rather than the underlying cause. This is where Cyber Threat Intelligence (CTI) adds value. By pivoting on technical artifacts → leveraging tools such as urlscan.io and Censys, analysts can uncover related infrastructure, identify patterns across domains, and map out the broader phishing ecosystem behind a campaign. Carefully constructed queries help reduce false positives while expanding visibility, enabling coordinated mitigation measures at scale, such as DNS-level blocking across providers. An important nuance is that much of this intelligence operates under controlled sharing protocols, often labeled TLP:AMBER+STRICT, meaning it is restricted to specific communities. CTI is not about broadcasting every finding publicly; it is about transforming isolated threats into actionable, contextualized intelligence and sharing it responsibly with those who need to act. The transition from “a malicious link” to “campaign-level disruption” is what truly defines the move from threats to intelligence.",
            images: [
                "/media/cti.jpeg",
                "/media/cti-2.jpeg",
            ],
        },
        {
            title: "The Road to a Defensible IT/OT Architecture",
            content: "I recently attended a talk titled “The Road to a Defensible IT/OT Architecture”, which centered on a fundamental question: why do we need architecture in the first place? In OT environments especially, architecture is what ensures new systems are deployed correctly and securely from the outset, rather than retrofitted after incidents occur. Architecture is not just a network diagram, it is a structured way to consistently solve recurring security problems while enabling the business. A well-designed IT/OT architecture is integrated and holistic, accounting for users and systems (including extended operations, cloud services, vendors, and external connections), the protection of critical resources (control systems, configurations, monitoring capabilities), and the relationships between them. One key insight was that technical controls alone are insufficient → engineers will naturally seek workarounds unless the architecture and governance model align security objectives with operational realities. The talk referenced established industry guidance such as IEC 62443 and broader ICS security control frameworks, highlighting common gaps in OT environments, particularly the historical lack of physical and logical segmentation. A defensible architecture was defined as one that does not merely rely on perimeter defenses, but assumes threats will attempt lateral movement and is therefore designed to detect, contain, and withstand misuse. This includes clearly defined zones and conduits, strict control over remote access, and comprehensive visibility into traffic flows. Governance also plays a critical role, with alignment between information security standards like ISO/IEC 27001 and OT-specific requirements to ensure consistency across the enterprise.Achieving a defensible IT/OT architecture is not a one-time exercise but a lifecycle process: scoping, design, implementation, and continuous maintenance. It starts with building an accurate network inventory, followed by structured zoning and segmentation, secure remote access design, and the deployment of firewalls and monitoring solutions. Finally, organizations must continuously evaluate their architecture against evolving threats and operational changes. The key takeaway was that defensibility is not about perfect prevention → it is about resilience, visibility, and controlled risk in complex industrial environments.",
            images: [
                "/media/ot-security.jpg",
                "/media/ot-security-2.jpeg",
                "/media/ot-security-3.jpeg",
            ],
        },
        {
            title: "Event Storming Workshop",
            content:
                "We had and eventful DDD class. Our teachers introduced us to the concept of event storming, and we got to experience it ourselves in a workshop. It's a collaborative technique for modelling complex domains. It brings business and IT people together, helping both sides gain a shared, in-depth understanding of processes.",
            images: [
                "/media/event-storming.jpg",
                "/media/event-storming-2.jpg",
                "/media/event-storming-3.jpg",
            ],
        },
    ];

    const togglePost = (index: number) => {
        setExpandedPost(expandedPost === index ? null : index);
    };
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <NavMenu />
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 text-primary-darker">
                Blog posts
            </h1>
            <ul className="max-w-4xl mx-auto space-y-4">
                {blogPosts.map((post, index) => (
                    <li
                        key={index}
                        className="border border-primary-light rounded-lg overflow-hidden bg-white shadow-sm"
                    >
                        <button
                            onClick={() => togglePost(index)}
                            className="w-full flex items-center justify-between p-6 hover:bg-primary-light transition-colors"
                        >
                            <h2 className="text-2xl font-semibold text-primary-darker text-left">
                                {post.title}
                            </h2>
                            <svg
                                className={`w-6 h-6 text-primary-base transition-transform duration-300 ${
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
                            <div className="p-6 pt-0 border-t border-primary-light">
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

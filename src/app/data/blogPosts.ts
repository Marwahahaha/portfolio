export type BlogCategory = "Tech & meets" | "Workshops" | "Activities" | "More";

export const blogPosts = [
    {
        title: "Building my portfolio",
        category: "More" as BlogCategory,
        content:
            "In this blog post, I will share the process and decisions behind building my e-portfolio website. I chose to use Next.js, React, TypeScript, and Tailwind CSS to create a platform that not only showcases my technical projects but also reflects my personality and interests.\n\nThe structure of the website is organized into separate pages for different sections such as home, about me, projects, hobbies, blog posts, and contact. This clear separation allows for easy navigation and scalability as I can add new sections in the future without disrupting the existing layout.\n\nFor styling, I opted for Tailwind CSS combined with a custom globals.css file. This approach allows me to maintain a consistent visual identity across the site while also enabling me to reuse common styles like card designs, buttons, and form elements. It keeps the codebase clean and efficient without having to write repetitive classes on every page.\n\nOne of the key features of my portfolio is how I handle blog posts. Instead of creating individual pages for each post, I store all blog data in a separate file. Each post includes a title, content, tags, and optional images. The blog page dynamically reads this data and generates cards for each post. When a user clicks on a card, a pop-up displays the full content and images. This design keeps the main blog page uncluttered while still allowing for detailed reflections on each topic.\n\nThis method also makes it easy to add new blog posts in the future. I simply need to add a new object to the blogPosts array with the relevant information, and it will automatically appear on the blog page with the correct functionality.\n\nFor the contact form, I integrated Formspree to handle submissions without needing a backend server. This allows me to deploy the website as static files while still providing visitors with a way to reach out to me.\n\nOverall, building this portfolio has taught me the importance of good structure and separation of concerns. By keeping data separate from layout and reusing components where possible, I have created a website that is not only visually appealing but also easy to maintain and expand in the future.",
        tags: ["Next.js", "React", "Tailwind CSS", "Portfolio"],
        images: [],
    },
    {
        title: "The 5 levels of Infrastructure as Code",
        category: "Tech & meets" as BlogCategory,
        content:
            "Add your reflection here. Describe the main idea of the talk, what you learned, and how it connects to your growth as a developer.",
        tags: ["Infrastructure as Code", "DevOps", "Reflection"],
        images: [],
    },
    {
        title: "How to Prepare for the Quantum Future",
        category: "Tech & meets" as BlogCategory,
        content:
            "Add your reflection here. Explain what the talk was about, what you learned, and how it connects to your growth as a developer.",
        tags: ["Quantum computing", "Future tech", "Reflection"],
        images: [],
    },
    {
        title: "Van Plato tot Vibe Coding",
        category: "Tech & meets" as BlogCategory,
        content:
            "Add your reflection here. Explain what the talk was about, what you learned, and how it connects to your growth as a developer.",
        tags: ["AI", "Software development", "Reflection"],
        images: [],
    },
    {
        title: "DeepSeek Uncovered",
        category: "Tech & meets" as BlogCategory,
        content:
            "Add your reflection here. Focus on the main ideas, your personal takeaway, and what made this session relevant to you.",
        tags: ["AI", "LLMs", "Tech talk"],
        images: [
            "/media/deepseek.jpeg",
            "/media/deepseek-2.jpeg",
            "/media/deepseek-3.jpeg",
        ],
    },
    {
        title: "Transitioning to IPv6",
        category: "Tech & meets" as BlogCategory,
        content:
            "Add your reflection here. Mention what IPv6 changes, why the transition matters, and what you found interesting.",
        tags: ["Networking", "IPv6", "Infrastructure"],
        images: [
            "/media/ipv6-transitioning.jpeg",
            "/media/ipv6-transitioning-2.jpeg",
            "/media/ipv6-transitioning-3.jpeg",
        ],
    },
    {
        title: "Hack The Future",
        category: "Activities" as BlogCategory,
        content:
            "Hack The Future was an absolute blast! The day was a perfect mix of socializing, coding, and exploring the Antwerp ZOO. I participated in Challenge 104, organized by Collide. The goal was to build a backend that could generate coding challenges and a front-end app that would fetch those challenges and solve them. It was a fun and engaging project to work on.On top of the hackathon itself, we also had free access to the zoo! I couldn’t pass up that opportunity, so I spent some time wandering around and visiting my favorite part of any zoo, the aquarium! All in all, it was an amazing day filled with new knowledge and great memories. Thank you, De Cronos Groep, for organizing this fantastic event!",
        tags: ["Hackathon", "Frontend", "Backend"],
        images: [
            "/media/htf-entrance.jpg",
            "/media/tea.jpg",
            "/media/challenges.jpg",
            "/media/aquarium.jpg",
            "/media/penguins.jpg",
        ],
    },
    {
        title: "Flutter: the future of cross-platform development",
        category: "Tech & meets" as BlogCategory,
        content:
            "Add your reflection here. Describe what you learned about Flutter and cross-platform development.",
        tags: ["Flutter", "Mobile", "Cross-platform"],
        images: [
            "/media/flutter.jpeg",
            "/media/flutter-2.jpeg",
            "/media/flutter-3.jpeg",
        ],
    },
    {
        title: "Mob programming session",
        category: "Workshops" as BlogCategory,
        content:
            "Another great DDD session! We had a mob programming session, which was a lot of fun. We worked together on a coding challenge, and it was great to see how everyone contributed and learned from each other. It isn't exactly something I'd like to do, but I see the value and benefits of it. It was a great way to learn and collaborate with my classmates. Mob programming is a collaborative software development approach in which the entire team works together on the same task, at the same time, on a single workstation. Instead of dividing work among individuals, the group collectively analyzes, designs, and implements code in real time. Typically, one person acts as the “driver” (typing), while the rest of the team (“navigators”) review, guide, and think strategically. Roles rotate frequently to maintain engagement and shared ownership. The concept emphasizes continuous knowledge sharing, collective code ownership, and immediate feedback. By bringing diverse perspectives into every decision, mob programming reduces knowledge silos, improves code quality, and accelerates learning within the team. It is particularly effective for complex problems, onboarding new team members, and situations where alignment and shared understanding are more valuable than individual speed.",
        tags: ["Collaboration", "DDD", "Teamwork"],
        images: ["/media/mob-programming.jpg"],
    },
    {
        title: "CTI, From threats to intelligence",
        category: "Tech & meets" as BlogCategory,
        content:
            "The session on CTI - From Threats to Intelligence illustrated how something seemingly simple can trigger a much broader intelligence process. It started with a familiar scenario: suspicious messages being forwarded to a national coordination body such as the Centre for Cybersecurity Belgium for analysis. In the example discussed, the incident involved smishing (phishing via SMS). At first glance, identifying and blocking a single malicious domain linked to that message may appear sufficient. In reality, that approach barely scratches the surface. Modern threat actors operate campaigns, not single domains. Blocking one indicator without deeper analysis is reactive and ineffective, comparable to treating symptoms rather than the underlying cause. This is where Cyber Threat Intelligence (CTI) adds value. By pivoting on technical artifacts → leveraging tools such as urlscan.io and Censys, analysts can uncover related infrastructure, identify patterns across domains, and map out the broader phishing ecosystem behind a campaign. Carefully constructed queries help reduce false positives while expanding visibility, enabling coordinated mitigation measures at scale, such as DNS-level blocking across providers. An important nuance is that much of this intelligence operates under controlled sharing protocols, often labeled TLP:AMBER+STRICT, meaning it is restricted to specific communities. CTI is not about broadcasting every finding publicly; it is about transforming isolated threats into actionable, contextualized intelligence and sharing it responsibly with those who need to act. The transition from “a malicious link” to “campaign-level disruption” is what truly defines the move from threats to intelligence.",
        tags: ["Cybersecurity", "CTI", "Threat intelligence"],
        images: ["/media/cti.jpeg", "/media/cti-2.jpeg"],
    },
    {
        title: "The Road to a Defensible IT/OT Architecture",
        category: "Tech & meets" as BlogCategory,
        content:
            "I recently attended a talk titled “The Road to a Defensible IT/OT Architecture”, which centered on a fundamental question: why do we need architecture in the first place? In OT environments especially, architecture is what ensures new systems are deployed correctly and securely from the outset, rather than retrofitted after incidents occur. Architecture is not just a network diagram, it is a structured way to consistently solve recurring security problems while enabling the business. A well-designed IT/OT architecture is integrated and holistic, accounting for users and systems (including extended operations, cloud services, vendors, and external connections), the protection of critical resources (control systems, configurations, monitoring capabilities), and the relationships between them. One key insight was that technical controls alone are insufficient → engineers will naturally seek workarounds unless the architecture and governance model align security objectives with operational realities. The talk referenced established industry guidance such as IEC 62443 and broader ICS security control frameworks, highlighting common gaps in OT environments, particularly the historical lack of physical and logical segmentation. A defensible architecture was defined as one that does not merely rely on perimeter defenses, but assumes threats will attempt lateral movement and is therefore designed to detect, contain, and withstand misuse. This includes clearly defined zones and conduits, strict control over remote access, and comprehensive visibility into traffic flows. Governance also plays a critical role, with alignment between information security standards like ISO/IEC 27001 and OT-specific requirements to ensure consistency across the enterprise.Achieving a defensible IT/OT architecture is not a one-time exercise but a lifecycle process: scoping, design, implementation, and continuous maintenance. It starts with building an accurate network inventory, followed by structured zoning and segmentation, secure remote access design, and the deployment of firewalls and monitoring solutions. Finally, organizations must continuously evaluate their architecture against evolving threats and operational changes. The key takeaway was that defensibility is not about perfect prevention → it is about resilience, visibility, and controlled risk in complex industrial environments.",
        tags: ["IT/OT", "Architecture", "Security"],
        images: [
            "/media/ot-security.jpg",
            "/media/ot-security-2.jpeg",
            "/media/ot-security-3.jpeg",
        ],
    },
    {
        title: "Event Storming Workshop",
        category: "Workshops" as BlogCategory,
        content:
            "We had an eventful DDD class. Our teachers introduced us to the concept of event storming, and we got to experience it ourselves in a workshop. It's a collaborative technique for modelling complex domains. It brings business and IT people together, helping both sides gain a shared, in-depth understanding of processes.",
        tags: ["DDD", "Workshop", "Modelling"],
        images: [
            "/media/event-storming.jpg",
            "/media/event-storming-2.jpg",
            "/media/event-storming-3.jpg",
        ],
    },
];

export type BlogCategory = "Tech & meet" | "Workshops" | "Activities" | "More";

export const blogPosts = [
    {
        title: "Building my portfolio",
        category: "More" as BlogCategory,
        content:
            "For my e-portfolio, I built a website with Next.js, React, TypeScript, and Tailwind CSS. The goal was to create a portfolio that feels professional, but still shows my personality, interests, projects, and learning process.\n\nThe website is divided into clear pages: home, about me, projects, hobbies, blog posts, and contact. This makes the structure easy to understand and easier to expand later. For styling, I use Tailwind CSS together with a custom globals.css file. This allows me to reuse colors, card styles, buttons, and form styles across the website without repeating the same long class names everywhere.\n\nThe blog system is data-driven. Instead of creating a separate page for every blogpost, I add each post as an object in the blogPosts array. The page automatically creates a card for it, and when the card is clicked, the full text and images appear in a pop-up. This makes adding a new blogpost very easy. I only need to add a title, category, content, tags, and optional images. The layout and modal functionality are reused automatically.\n\nFor the contact form, I use Formspree, which lets me keep the website static without needing my own backend server.\n\nBuilding this portfolio taught me that structure matters a lot. By separating data from layout and reusing components, the website became easier to maintain and nicer to work on.",
        tags: ["Next.js", "React", "Tailwind CSS", "Portfolio"],
        images: [],
    },
    {
        title: "Maintenance Programming with Hans Yperman",
        category: "Activities" as BlogCategory,
        content:
            "For this podcast episode, I spoke with Hans Yperman, a software developer at VLIZ, about maintenance programming. We discussed what it means to work on existing systems that are already live, already used, and often more complex than they first appear.\n\nThe episode is mainly useful for software development students and developers who want a realistic view of professional programming. In school, we often build new projects from scratch, but in real organisations, a lot of work happens in brownfield systems with existing users, data, bugs, and business rules. One important idea was that the workflow still sounds familiar: analyse, implement, deploy, and explain. The difference is the context. In maintenance programming, the system is already in production, so it must stay live and data cannot be lost. Hans compared maintenance work to being a surgeon: go in, make the smallest safe change, and get out. I found that comparison very strong because it shows that maintenance programming is about understanding risk, not showing off clever code. We also talked about how important it is to understand what is actually deployed. Documentation can be outdated, and source code alone does not always tell the full story. The real system also includes scheduled jobs, reports, APIs, integrations, data models, and human workflows.\n\nAnother useful point was the role of monitoring, logging, and tests. Logs help understand normal behaviour and investigate incidents. Tests should capture current behaviour, even if that behaviour is not perfect, because users may depend on it.\n\nThe episode also covered major incidents. During an incident, the first step is to stay calm, gather facts, check logs, reproduce the problem if possible, and choose reversible actions. A temporary fix can be acceptable if it safely restores service and buys time.\n\nWhat I learned most is that maintenance programming requires patience, humility, and discipline. It may sound less exciting than building something new, but it has real impact because existing systems support real users and organisations.\n\nI would recommend this episode to other software development students. It shows that being a good developer is not only about writing new code, but also about understanding existing systems and improving them safely.",
        tags: [
            "Maintenance programming",
            "Software development",
            "Podcast",
            "Brownfield",
        ],
        spotifyEmbedUrl:
            "https://open.spotify.com/embed/episode/5oH1Jec2yFmi2SRvHC4qBh",
        images: [],
    },
    {
        title: "The 5 Levels of Infrastructure as Code",
        category: "Tech & meet" as BlogCategory,
        content:
            "The Tech & Meet session “The 5 Levels of Infrastructure as Code” gave a clear overview of how organisations can grow in the way they manage infrastructure. Dimitri and Tim from Orbit explained the path from manual cloud work to automated, reusable, and governed infrastructure.\n\nThe talk was aimed at students, developers, DevOps engineers, and anyone interested in cloud infrastructure. It was technical, but very practical because it showed how infrastructure evolves in real organisations.\n\nThe first level was manual infrastructure, also called ClickOps. This means creating resources through a cloud portal, such as the Azure Portal. It can be useful for learning, but it becomes risky because mistakes are easy to make and hard to track.\n\nThe second level was scripted infrastructure, for example using PowerShell. Scripts are faster and more reusable than manual work, but they are usually imperative. They describe the steps, not the final desired result, which can make them difficult to maintain over time.\n\nThe third level was declarative Infrastructure as Code. This was the most important part for me. Instead of describing every step, you describe the desired outcome. Tools such as Azure Bicep, Ansible, and Terraform can then create or update the infrastructure.\n\nThe fourth level was modular and reusable IaC: build once, deploy everywhere. This reminded me of reusable components in software development. If something is needed often, it should be defined once and reused safely.\n\nThe fifth level was continuous and governed infrastructure. This adds control over cost, security, compliance, standardisation, and deployment rules. It shows that IaC is not only about speed, but also about reliability and responsibility.\n\nThe session also explained why CI/CD matters for infrastructure. It creates consistency between environments, reduces human error, adds validation, keeps changes traceable, and makes rollback easier. I learned that Infrastructure as Code is not just a DevOps buzzword. It is a way to make infrastructure more predictable and professional. I would like to learn more about Terraform and Azure Bicep in the future.\n\nI would recommend this session to students interested in cloud, DevOps, or software architecture, because it shows that good infrastructure should be versioned and maintainable, just like good code.",
        tags: ["Infrastructure as Code", "DevOps", "Cloud", "CI/CD"],
        images: ["/media/IaC.jpeg", "/media/IaC-2.jpeg", "/media/IaC-3.jpeg"],
    },
    {
        title: "How to Prepare for the Quantum Future",
        category: "Tech & meet" as BlogCategory,
        content:
            "Sarah Ampe’s Tech & Meet session “How to Prepare for the Quantum Future” explored how quantum computing could affect technology, cybersecurity, and organisations in the coming years.\n\nThe session was aimed at students, IT professionals, developers, and organisations that want to understand how quantum technology may affect them. It was technical, but focused mainly on practical impact rather than only physics.\n\nQuantum computers use qubits instead of classical bits. A bit is either 0 or 1, while a qubit can represent possibilities of both. This gives quantum computers a different kind of computing power, especially for specific complex problems. The speaker explained that quantum computing will not simply replace classical computing. We will need both. Classical computers remain useful for everyday tasks, while quantum computers may help with chemical research, route optimisation, traffic optimisation, and financial modelling.\n\nThe biggest concern is the quantum threat to cryptography. Some asymmetric cryptography, such as RSA, relies on problems that are very hard for classical computers to reverse. Quantum computers are good at solving these problems, which means systems that are secure today may not stay secure forever. The session also explained the difference between confidentiality and authentication. Some data needs to stay confidential for many years, so encrypted information could be stolen now and decrypted later. Authentication is also at risk because digital signatures prove that data really comes from a trusted source.\n\nMany sectors could be affected, including government, finance, healthcare, supply chain, and pharma. Regulations such as NIS2, CRA, DORA, and European recommendations make this even more relevant. Organisations can prepare through building blocks such as Post-Quantum Cryptography, Quantum Random Number generation, and Quantum Key Distribution. The most important message was that migration takes time, so organisations should not wait too long.\n\nThis topic connects to my education because we learn about basic security and protecting systems, but this session showed that security also has a future dimension. A system that is secure now may become weak later.\n\nI would attend a similar session again and recommend it to students interested in cybersecurity or future technology. The topic sounds abstract, but the impact is very practical.",
        tags: [
            "Quantum computing",
            "Future tech",
            "Cybersecurity",
            "Cryptography",
        ],
        images: [
            "/media/quantum-computing-3.jpeg",
            "/media/quantum-computing-2.jpeg",
            "/media/quantum-computing.jpeg",
        ],
    },
    {
        title: "Van Plato tot Vibe Coding",
        category: "Tech & meet" as BlogCategory,
        content:
            "“Van Plato tot Vibe Coding” was one of the more unusual Tech & Meet sessions, because it connected philosophy, logic, computing history, programming, and AI. The session was presented by Luc Vervoort and Wim Delvaux from HOGENT.\n\nThe talk was aimed at students, developers, teachers, and people interested in the history and future of software development. It was not a coding session, but more of a reflective talk about how humans express ideas and turn them into systems.\n\nThe session started with ancient philosophers such as Socrates, Plato, Aristotle, Cicero, Heraclitus, and the Stoics. At first, this seemed far away from programming, but the link became clear: software development also depends on reasoning, structure, definitions, and abstraction. One idea that stood out to me was that programming is not only about writing instructions for a computer. It is also about thinking clearly. Ancient logic and formal reasoning are connected to the way developers analyse problems and create solutions today. The speakers also showed how computing evolved through history, from early machines and storage systems to programming languages and interactive systems. This made me realise that software development is part of a long evolution of abstraction.\n\nGrace Hopper was an interesting example because programming languages made it possible to move away from pure machine code and write instructions in a more human-readable way. AI and prompts can be seen as another step in that evolution.\n\nThe talk then connected this to vibe coding. With AI tools, we give instructions, check results, correct misunderstandings, and refine the output. This is different from traditional programming, but it still requires clear thinking. The session did not present AI as magic. It made clear that developers still need to understand the problem, judge the result, and verify the solution. Without context and critical thinking, AI can produce convincing but incorrect output. I learned that software development is not just a technical skill. It is also about reasoning, communication, and abstraction. Tools change, but clear thinking remains essential.\n\nI would recommend this talk to other students because it shows that becoming a good developer is not only about learning syntax. It is also about learning how to think.",
        tags: [
            "AI",
            "Software development",
            "Vibe coding",
            "Computing history",
        ],
        images: [
            "/media/van-plato-tot-vibe-coding.jpeg",
            "/media/van-plato-tot-vibe-coding-2.jpeg",
            "/media/van-plato-tot-vibe-coding-3.jpeg",
            "/media/van-plato-tot-vibe-coding-4.jpeg",
        ],
    },
    {
        title: "DeepSeek Uncovered",
        category: "Tech & meet" as BlogCategory,
        content:
            "DeepSeek Uncovered was a Tech & Meet session by Dimitri Casier about the rise of DeepSeek and what it says about the current AI landscape. The session focused less on implementation and more on context, competition, and critical thinking. This was not a deeply technical talk. It was more about opinions, observations, and context. That made it interesting because AI is not only a programming topic, but also a political, economic, and ethical one.\n\nThe target audience was mainly students and people interested in AI, large language models, and the future of software development. Since AI tools are becoming more common in programming and education, the topic felt very relevant. One comparison I liked was the idea of Martin Kohlstedt as “the first human LLM”. A language model predicts the next word, while a musician can be seen as predicting the next sound. This made the idea of prediction models easier to understand in a creative way.\n\nThe talk also discussed the global AI race. The United States is one of the biggest players and wants to keep that position, while China is becoming a major competitor. DeepSeek became important because it appeared to perform very well while using fewer resources. This raised interesting questions. If DeepSeek can compete with more expensive models, does AI progress always depend on the most powerful hardware? Restrictions on NVIDIA chips were also mentioned, which showed how political AI development has become.\n\nThe session covered concepts such as reinforcement learning, mixture of experts, and reasoning models. I found the reasoning part interesting because DeepSeek became known for showing more of its reasoning process than some other tools. Another surprising idea was representing text visually, where large chunks of text could become compact visual memory. This challenged how I usually think about how models process information.\n\nWhat stayed with me most was the question of trust. People are concerned about DeepSeek because it comes from China, but we should also think critically about American AI tools. Privacy, power, data, and influence matter no matter where the tool comes from.\n\nI would attend a similar session again because it encouraged critical thinking. Even though it was not very technical, it helped me understand that AI is not only about model performance, but also about who controls the technology and how it shapes the future.",
        tags: ["AI", "LLMs", "DeepSeek", "Tech talk"],
        images: [
            "/media/deepseek.jpeg",
            "/media/deepseek-2.jpeg",
            "/media/deepseek-3.jpeg",
        ],
    },
    {
        title: "Transitioning to IPv6",
        category: "Tech & meet" as BlogCategory,
        content:
            "Nico Declerck’s session on transitioning to IPv6 explained why IPv6 is no longer just a future topic. The talk focused on why the transition matters, how dual stack works, and why organisations should start preparing before IPv4 workarounds become a bigger problem.\n\nThe talk was aimed at students, IT professionals, network administrators, and people interested in infrastructure. It was technical, but the explanation was clear and connected theory to real network design.\n\nIPv4 was designed for end-to-end communication, but the internet became much more successful than expected. Because the address space became too small, NAT was introduced to keep IPv4 usable for longer. NAT helped, but it also changed the original model of the internet. Instead of every device communicating directly, networks started relying on translation. Carrier-Grade NAT is another temporary solution, but it is not sustainable forever.\n\nIPv6 solves the problem that caused NAT by providing a much larger address space. It also makes it possible to return to a cleaner networking model where NAT and CGN are no longer needed in the same way.\n\nThe session also explained that the transition period can be risky. Dual stack, where IPv4 and IPv6 run at the same time, increases complexity. Both protocols and their implementations can contain vulnerabilities, so organisations need monitoring and proper security. A key takeaway was that the less IPv4 a network runs, the more future-proof and potentially secure it becomes. This does not mean every organisation can stop using IPv4 immediately, but IPv6 should be the long-term direction. The speaker gave practical advice: check hardware and software support, measure IPv4 versus IPv6 traffic, start with simpler networks such as guest or client networks, use a stateful IPv6 firewall, and monitor carefully.\n\nThis topic connects strongly to networking and cybersecurity in my education. It showed me that infrastructure choices can become technical debt, just like bad code can.\n\nI would recommend this session to IT students and professionals because IPv6 is not just a future topic. It is already the current standard, and organisations need a realistic path towards it.",
        tags: ["Networking", "IPv6", "Infrastructure", "Dual stack"],
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
            "Hack The Future was a hackathon organised by De Cronos Groep, and took place in Antwerp, close to the station and the Antwerp Zoo. That made the day a mix of coding, teamwork, networking, and a very memorable location.\n\nHack The Future is aimed mainly at students and young developers who want to challenge themselves through practical problems. It combines coding, teamwork, creativity, and networking.\n\nI participated in Challenge 104, organised by Collide. The goal was to build a backend that could generate coding challenges and a frontend application that would fetch and solve those challenges. The challenge was technical because it involved both backend logic and frontend interaction. It felt close to what we learn in our software engineering education, where different parts of an application need to communicate correctly. The most valuable part for me was working under time pressure. In school projects, there is usually more time to plan and improve things. During a hackathon, you need to make faster decisions, divide tasks clearly, and accept that the final result may not be perfect.\n\nI also enjoyed the social side of the event. It was a chance to meet people, work in a different environment, and experience a professional tech event outside the classroom.\n\nThe location made the day even better. Since the event was next to the Antwerp Zoo, we had access to the zoo as well. I visited the aquarium, which was a nice break from coding and made the day feel more relaxed. I learned that hackathons are intense, but valuable. They push you to collaborate, stay flexible, and focus on building something that works within limited time. I would definitely attend Hack The Future again and recommend it to other students. Even if the final product is not perfect, the experience itself is worth it.",
        tags: ["Hackathon", "Frontend", "Backend", "Teamwork"],
        images: [
            "/media/htf-entrance.jpg",
            "/media/tea.jpg",
            "/media/challenges.jpg",
            "/media/aquarium.jpg",
            "/media/penguins.jpg",
        ],
    },
    {
        title: "Flutter: The Future of Cross-Platform Development",
        category: "Tech & meet" as BlogCategory,
        content:
            "Thijs Pirmez gave a Tech & Meet session about Flutter and its role in cross-platform development. The session introduced Flutter as a framework for building applications across mobile, web, desktop, and even embedded devices from one codebase.\n\nThe target audience was mainly students and developers interested in mobile development, user experience, and cross-platform technologies. The talk was technical, but still accessible.\n\nFlutter is an open-source framework created by Google. It can be used for Android, iOS, web, desktop, and even embedded devices. This makes it interesting because cross-platform development is becoming more common. One important point was that mobile development is not only about making an app work. A good app also needs a clear interface, smooth animations, and a good user experience. Flutter supports this through its widget system and fast development workflow. A key feature is hot reload, which allows developers to see changes quickly. This felt familiar to me because I also use hot reload when working with React and Next.js.\n\nFlutter uses Dart as its programming language. Dart is mainly associated with Flutter and was described as relatively easy to learn. The idea is to write once and deploy to many platforms. The widget system was another important topic. In Flutter, widgets describe the user interface, and every widget is a class. The difference between stateless and stateful widgets reminded me of how state works in React. The session also showed that Flutter is not only for mobile apps. Tools like Flame, Jasper, and Serverpod show that the Dart and Flutter ecosystem can go beyond frontend development. I learned that Flutter is more flexible than I first thought. I mainly saw it as a mobile framework before, but now I understand better why developers use it for cross-platform projects.\n\nI would attend a similar event again, especially if it included a live coding demo. I would recommend it to students interested in mobile development or comparing frontend technologies.",
        tags: ["Flutter", "Mobile", "Cross-platform", "Dart"],
        images: [
            "/media/flutter.jpeg",
            "/media/flutter-2.jpeg",
            "/media/flutter-3.jpg",
        ],
    },
    {
        title: "Mob Programming Session",
        category: "Workshops" as BlogCategory,
        content:
            "Our DDD course included a mob programming workshop guided by Dimitri Casier and Matthias Blomme. Instead of working individually, the whole group worked together on the same coding challenge.\n\nThe workshop was aimed at software development students learning how to collaborate and solve problems as a team. It was technical because we worked on a coding challenge, but the main focus was how we worked together. Mob programming means that the whole team works on the same task at the same time. One person is the driver and types the code, while the others act as navigators who discuss ideas, review decisions, and guide the solution.\n\nDuring the session, we rotated roles so everyone could participate. It was interesting to see how classmates approached the same problem differently. Some focused on structure, others on edge cases or implementation details. I learned that mob programming can create strong knowledge sharing. Because everyone works together, decisions are discussed immediately and no single person owns one part of the code alone. At the same time, I noticed that mob programming is not always my preferred way of working. It can feel slow when many people have different opinions. I usually like having some time to think individually before discussing a solution. Still, the experience was useful. It showed me that mob programming can work well when a team needs shared understanding, when onboarding new members, or when solving difficult problems. This connects well with our education because software development is rarely completely individual. Even when writing code alone, communication and shared understanding are still important.\n\nI would attend a similar workshop again to experience different collaboration styles. I would also recommend it to students because it shows that good software development is not only about code, but also about teamwork.",
        tags: ["Collaboration", "DDD", "Teamwork", "Mob programming"],
        images: ["/media/mob-programming.jpg"],
    },
    {
        title: "CTI, From Threats to Intelligence",
        category: "Tech & meet" as BlogCategory,
        content:
            "“CTI, From Threats to Intelligence” showed how cybersecurity teams investigate threats beyond a single malicious link or message. Sandro Manzo and Niels Desloover from the Centre for Cybersecurity Belgium explained how threat intelligence helps reveal the bigger campaign behind an incident.\n\nThe target audience was mainly people interested in cybersecurity, IT, threat analysis, and how organisations respond to online attacks. The session was technical, but understandable.\n\nThe session started with a familiar example: suspicious SMS messages being forwarded for analysis. The example involved smishing. At first, it may seem enough to block one malicious domain, but the speakers showed that this only solves a small part of the problem. Modern threat actors often operate campaigns, not isolated domains. If defenders only block one link, attackers can continue using related infrastructure. This is where Cyber Threat Intelligence becomes valuable. CTI turns separate indicators into useful intelligence. Analysts look for patterns, related domains, infrastructure, and possible links between incidents. Tools such as urlscan.io and Censys can help with this process.\n\nI found this interesting because it showed that cybersecurity is investigative. Analysts need to think critically, test assumptions, and decide whether connections are meaningful or accidental. The session also discussed responsible information sharing. Some intelligence is shared under restrictions such as TLP:AMBER+STRICT, meaning it is only meant for specific communities.\n\nI learned that threat handling should not only be reactive. The real value is in understanding the bigger picture and helping others take coordinated action.\n\nI would attend a similar session again and recommend it to students interested in cybersecurity. Even if someone does not want to become a CTI analyst, the mindset is useful: do not only react to symptoms, investigate the cause.",
        tags: ["Cybersecurity", "CTI", "Threat intelligence", "Smishing"],
        images: ["/media/cti.jpeg", "/media/cti-2.jpeg"],
    },
    {
        title: "The Road to a Defensible IT/OT Architecture",
        category: "Tech & meet" as BlogCategory,
        content:
            "Dieter Sarrazyn’s talk “The Road to a Defensible IT/OT Architecture” focused on why architecture matters in industrial and operational technology environments. The session showed that good architecture is not just a diagram, but a way to manage risk in systems that often connect directly to physical processes.\n\nThe speaker’s experience with SCADA, ICS, and OT security made the talk feel practical and credible. The target audience was mainly people interested in cybersecurity, architecture, industrial environments, and IT/OT security.\n\nOne of the main ideas was that architecture is not just a network diagram. A good architecture helps solve recurring security problems while still allowing the business to function. The talk explained that security should not be added afterwards. In OT environments, systems can be long-lived and difficult to replace, so security needs to be considered from the start. A key insight was that technical controls alone are not enough. If security measures do not fit the operational reality, engineers and users may look for workarounds. This shows that cybersecurity also depends on governance, ownership, and communication. The speaker referred to guidance such as IEC 62443, including ideas like zones and conduits. These concepts help divide systems into logical areas and control communication between them.\n\nI learned that a defensible architecture does not assume perfect prevention. Instead, it assumes that threats may enter and focuses on detection, containment, segmentation, secure access, and visibility. This topic connects to my education because we learn about security and architecture, but IT/OT security adds a physical and industrial dimension that I had not considered as much before.\n\nI would attend a similar talk again, especially with more real-world examples. I would recommend it to students interested in cybersecurity, infrastructure, or architecture because the mindset is useful beyond OT as well.",
        tags: ["IT/OT", "Architecture", "Cybersecurity", "IEC 62443"],
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
            "One of our DDD classes was built around an Event Storming workshop. Instead of immediately thinking in code or databases, we used the session to explore how a team can understand and model a complex domain together.The session introduced Event Storming as a collaborative technique for understanding and modelling complex domains. It helps people with different perspectives build a shared understanding of a process.\n\nThe target audience was software development students learning about Domain-Driven Design. The topic was technical, but not in the sense of writing code. It focused more on communication, analysis, and modelling.\n\nEvent Storming is useful because it brings business and IT people together. Instead of immediately thinking about databases or code, the group first maps out important events in the process.This helped me see that software development is not only about programming. A lot of important work happens before implementation, when the team is still trying to understand the problem.\n\nDuring the workshop, I learned that communication is one of the most important parts of software design. If people understand a process differently, this can lead to wrong assumptions and bad software decisions.Event Storming slows the process down in a useful way. By visualising events step by step, it becomes easier to ask questions, notice missing information, and discover unclear parts of the domain.This connects well with our education because we often need to analyse requirements and translate business needs into software. Event Storming gives a structured way to do that.\n\nI would attend a similar workshop again, especially with a real case or stakeholder involved. I would recommend it to other software development students because it teaches an important lesson: good software starts with good understanding.",
        tags: ["DDD", "Workshop", "Event Storming", "Domain modelling"],
        images: [
            "/media/event-storming.jpg",
            "/media/event-storming-2.jpg",
            "/media/event-storming-3.jpg",
        ],
    },
];

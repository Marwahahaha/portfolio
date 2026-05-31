export type ProjectCategory =
  | "Software Engineering"
  | "Graphic and Digital Media";

export interface Project {
  title: string;
  category: ProjectCategory;
  intro: string;
  description?: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];
  thesisPdfUrl?: string;
}

export const githubProfileUrl = "https://github.com/Marwahahaha";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    category: "Software Engineering",
    intro:
      "A personal e-portfolio built to present my background, projects, hobbies, blog posts, and contact information.",
    description:
      "This portfolio website was built with Next.js, React, TypeScript, and Tailwind CSS. The goal was to create a professional portfolio that presents my work clearly, while still reflecting my personality, interests, and creative side. The website contains separate pages for my background, projects, hobbies, blog posts, and contact information. This structure makes the website easy to navigate and gives each part of the portfolio its own purpose. Visitors can quickly learn who I am, view my projects, read about my experiences, and contact me if needed.\n\nA big focus of the project was maintainability. The blog posts and projects are data-driven, which means their content is stored separately from the page layout. Instead of creating a new page or component every time I want to add something, I can simply add a new object to the data file. The website then automatically displays it using the existing card and modal layout.\n\nI also used reusable components for the navigation, page layout, section headers, cards, modals, buttons, and image previews. This helped keep the code cleaner and made the design more consistent across the website. If I want to change the style of a card or modal later, I only need to update the component once instead of editing every page separately.\n\nFor styling, I used Tailwind CSS together with custom global classes and CSS variables in globals.css. This made it easier to keep the visual identity consistent. The color palette, rounded cards, soft backgrounds, and button styles were chosen to make the portfolio feel professional, but still warm and personal.\n\nThe contact form uses Formspree, which allows visitors to send me a message without needing a custom backend server. This fits well with the way the website is deployed, because the portfolio can stay fully static while still having a working contact form.\n\nThis project helped me practise component-based development, responsive design, static deployment, and data-driven rendering in React. It also taught me how important structure is when building a website that needs to grow over time. The final result is not only a portfolio, but also a project that I can keep improving as I add more work and experience.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/Marwahahaha/portfolio",
    liveUrl: "",
  },
  {
    title: "Ironclad Arena",
    category: "Software Engineering",
    intro:
      "A multiplayer digital collectible card game prototype inspired by games like Hearthstone and Yu-Gi-Oh!, focused on deck building, online matches, and maintainable game architecture.",
    description:
      "Ironclad Arena is a multiplayer digital collectible card game prototype. Players can collect cards, build a deck, choose a hero, and play online one-versus-one matches. The goal of the project was to create a playable prototype that clearly demonstrates the core mechanics of a digital card game.\n\nThe project combines several software engineering challenges, including game logic, state management, client-server communication, UI/UX, architecture design, and teamwork. A large part of the work was researching how digital card games are structured and how online multiplayer games keep the game state consistent.\n\nFor the networking architecture, we chose a client-server model instead of peer-to-peer. The server is authoritative and validates the full game state, while the clients only send actions and display the information received from the server. This makes the game more secure, prevents cheating more effectively, and keeps both players synchronized.\n\nThe game uses a custom protocol supported by ENet. This gave us more control over communication between the client and server, while still keeping the networking layer efficient enough for a turn-based multiplayer game.\n\nUnity was chosen for the game client because it provides strong support for game development, useful documentation, and a familiar workflow for several team members. This allowed us to focus more on the card game mechanics, architecture, and multiplayer behaviour instead of building every technical layer from scratch.\n\nThe game itself includes decks of 30 cards, different hero classes, mana, life points, card effects, spell cards, and a board with front and back rows. Each class has its own identity, such as warrior, mage, priest, hunter, and rogue. These rules were inspired by existing card games, but adapted into our own system.\n\nDuring development, we worked in phases: research, MVP, expansion, and finalisation. First, we explored technology choices and tested the game concept. Then we implemented the core architecture and basic playable version. After that, we expanded the gameplay and improved the visual interface. In the final phase, we focused on debugging, testing, and making the prototype more stable.\n\nThis project taught me a lot about building software that is modular, maintainable, and multiplayer-ready. It also showed how important architecture is when many systems need to work together, such as the game rules, networking, UI, card effects, and server validation.\n\nThe final result is a working prototype with deck selection, playable cards, clear rules, basic win conditions, online multiplayer, and a representative set of cards. It forms a solid foundation for future improvements and shows how professional software engineering practices can be applied to a concrete game project.\n\nFor readers who want to know more about the research and technical decisions behind Ironclad Arena, the full research document is available as a downloadable PDF.",
    techStack: [
      "Unity",
      "C#",
      "ENet",
      "Client-server architecture",
      "Domain-Driven Design",
      "Ports & Adapters",
      "Game networking",
    ],
    repoUrl: "https://github.com/howest-ti-sep/group-02-hearthstone-clone-client",
    thesisPdfUrl: "/documents/IroncladArena.pdf",
    images: [
      "/media/ironclad-logo.jpg",
      "/media/deck-list.jpg",
      "/media/battle-field.jpg",
    ],
  },
  {
    title: "Figurative Composition",
    category: "Graphic and Digital Media",
    intro:
      "A geometric design project where I created a recognizable figure using simple shapes, lines, triangles, and a limited color palette.",
    description:
      "For this assignment, the goal was to design an easily recognizable figure using geometric shapes. I chose to create a flamingo because its silhouette is distinctive, elegant, and playful.\n\nI built the flamingo using lines, triangles, and a half circle. The long vertical line forms the body and neck, while the triangular shapes create the beak, wing, and legs. I used a black circle for the eye to make the figure more expressive and immediately recognizable.\n\nFor the color palette, I kept the design simple and used pink tones combined with black outlines. This made the flamingo feel clean, minimal, and suitable for a graphic application.\n\nAs a mock-up, I chose a tote bag because the simple and playful shape of the flamingo works well as a printed design. The final result shows how a basic geometric composition can be transformed into a recognizable and usable visual product.",
    techStack: ["Geometric design", "Composition", "Illustration", "Mock-up"],
    images: [
      "/media/opdracht-1-schets.jpg",
      "/media/opdracht-1-definitief.jpg",
      "/media/flamingo-gekleurd.png",
      "/media/flamingo-canvas-tote-bag-mockUp.jpg",
    ],
  },
  {
    title: "Abstract Composition",
    category: "Graphic and Digital Media",
    intro:
      "An abstract design project where I explored rhythm, balance, and color by arranging geometric shapes inside a structured grid.",
    description:
      "For this assignment, the goal was to create an abstract composition using a grid and geometric shapes. The composition had to include shapes such as half circles, quarter circles, different types of triangles, rectangles, and partial squares.\n\nI first created a rough version on a grid to plan the placement of the shapes. This helped me think about balance, spacing, direction, and how the viewer’s eye moves through the composition.\n\nAfter that, I made a cleaner digital version on an A4 layout. I used a limited color palette with red, black, yellow, blue, and light neutral tones. The contrast between the colors and shapes gives the composition more energy while still keeping it structured.\n\nA glued version was also part of the assignment. For that version, magazine pieces were used to create interesting color combinations and textures. This made the abstract composition feel more handmade and experimental.\n\nFor the mock-up, I chose a poster because the composition works well as a decorative graphic piece. The final result shows how simple geometric shapes can create a dynamic abstract design when they are arranged carefully.",
    techStack: [
      "Abstract composition",
      "Geometric design",
      "Grid layout",
      "Color exploration",
      "Mock-up",
    ],
    images: [
      "/media/opdracht-2-voorstudie.jpg",
      "/media/opdracht-2-voorstudie-1.jpg",
      "/media/opdracht-2-voorstudie-2.jpg",
      "/media/opdracht-2-gekleefd.jpg",
      "/media/poster-artwork-in-a-modern-loft-mockUp.jpg",

    ],
  },
  {
    title: "Cut-Up Letter Logo",
    category: "Graphic and Digital Media",
    intro:
      "A logo design project where I created six original letter logos by cutting up and rearranging the letter Y.",
    description:
      "For this assignment, each student received a random letter: three lowercase versions and three uppercase versions. The goal was to create an original logo using all parts of the assigned letter. Nothing could be thrown away, so every cut piece had to become part of the final design.\n\nI received the letter Y and created six different logo variations. Each version explored a different way of cutting, rotating, separating, or recombining the letterforms. This helped me experiment with balance, contrast, negative space, and recognisability.\n\nAfter comparing the different versions, I selected the design that felt strongest as a logo. I liked how it still clearly referred to the letter Y, while also looking bold and graphic.\n\nFor the mock-up, I chose a hoodie because the logo has a strong, minimal shape that works well as a clothing print. The final result shows how a simple letter can be transformed into a visual identity through shape exploration and composition.",
    techStack: [
      "Logo design",
      "Typography",
      "Letterform exploration",
      "Composition",
      "Mock-up",
    ],
    images: [
      "/media/letter-logo-1.png",
      "/media/letter-logo-2.png",
      "/media/letter-logo-3.png",
      "/media/letter-logo-4.png",
      "/media/letter-logo-5.png",
      "/media/letter-logo-6.png",
      "/media/hoodie-mockUp.jpg",
    ],
  },
  {
    title: "Word Logo",
    category: "Graphic and Digital Media",
    intro:
      "A personal word logo created for my portfolio cover, based on my name and developed through several sketching and lettering experiments.",
    description:
      "For this assignment, the goal was to create a word logo for our own portfolio. The logo had to be based on the student’s name and was intended to be used as a portfolio cover.\n\nI started by sketching different versions of my name and exploring several visual directions. Some options focused more on decorative lettering, while others experimented with structure, initials, lines, and framing.\n\nDuring the process, I tried to find a balance between readability and personality. I wanted the final logo to feel personal and elegant, but still clean enough to work as a portfolio identity.\n\nFor the final version, I combined a simple black wordmark with a flowing turquoise line. The line adds movement and gives the logo a more expressive look, while the black text keeps the name readable and clear.\n\nThis project helped me understand how many small decisions are involved in logo design. Letter shape, spacing, contrast, color, and composition all influence how professional and recognizable the final result feels.",
    techStack: [
      "Wordmark design",
      "Typography",
      "Logo design",
      "Sketching",
      "Portfolio identity",
    ],
    images: [
      "/media/woordlogo-end-result.png",
      "/media/woordlogo-1.jpg",
      "/media/woordlogo-2.jpg",
    ],
  },
];

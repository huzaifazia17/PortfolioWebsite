/**
 * Single source of truth for every piece of content on the site.
 * Transcribed from public/Huzaifa-Zia-Resume.pdf — keep the two in sync.
 */

export const profile = {
  name: "Huzaifa Zia",
  title: "Software Engineer",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Data Analyst",
    "AI Engineer",
    "Problem Solver",
  ],
  location: "Toronto, ON",
  email: "huzaifa.zia@ontariotechu.net",
  phone: "+1 905-243-7932",
  resumeUrl: "/Huzaifa-Zia-Resume.pdf",
  links: {
    github: "https://github.com/huzaifazia17",
    linkedin: "https://www.linkedin.com/in/huzaifa-zia-86673b206/",
    twitter: "https://twitter.com/HuzaifaZia17",
  },
};

export const about = {
  paragraphs: [
    "I'm a software engineer based in Toronto who enjoys the messy middle of a problem — the part where the requirements are vague, the data is inconsistent, and someone still needs a working answer by Friday.",
    "I graduated from Ontario Tech University with a B.Eng in Software Engineering, and I currently work as a Data Analyst on Project Controls at Black & McDonald, where I build Power BI and Python tooling that has replaced legacy reporting processes and saved teams 25+ hours a week. Before that I spent 16 months as a Software Engineering Intern at Ontario Power Generation.",
    "Outside of work I build full-stack and AI-powered applications — retrieval-augmented assistants, decentralized apps, and mobile marketplaces. I'm always interested in work that sits where solid engineering meets genuinely useful products.",
  ],
};

export const education = {
  degree: "Bachelor of Engineering — Software Engineering",
  school: "Ontario Tech University",
  location: "Oshawa, ON",
  period: "September 2020 – April 2025",
  courses: [
    "Web Programming",
    "Artificial Intelligence",
    "Distributed Systems",
    "Data Structures & Algorithms",
    "Embedded Systems",
  ],
};

export const experience = [
  {
    id: "black-mcdonald",
    role: "Data Analyst",
    company: "Black & McDonald",
    team: "Project Controls",
    url: "https://www.blackandmcdonald.com/",
    location: "Pickering, ON",
    period: "January 2025 – Present",
    current: true,
    note: "Valid OPG Security Clearance",
    bullets: [
      "Developed a Project Health Dashboard with Power BI, DAX, SQL, and Python, automating legacy reporting processes, saving 25+ hours per week and enabling project managers to proactively identify risks.",
      "Led the business integration of Procore for project management across a region of 1,000+ employees, identified software gaps and authored detailed requirements for third-party developers to implement enhancements.",
      "Built a Schedule Gantt Chart Tool with Power BI, SQL, Python, and Matplotlib to forecast resource needs, identify shortages or surpluses, and optimize hiring, improving efficiency and reducing costs.",
    ],
    tech: ["Power BI", "DAX", "SQL", "Python", "Matplotlib", "Procore"],
  },
  {
    id: "opg",
    role: "Software Engineering Intern",
    company: "Ontario Power Generation",
    team: "Project Management",
    url: "https://www.opg.com/",
    location: "Darlington, ON",
    period: "May 2023 – August 2024",
    bullets: [
      "Developed a streamlined Work Report tool with Power BI Report Builder, SQL, and Python, consolidating data from multiple sources, automating daily fieldwork reports, and reducing report generation time by >90%.",
      "Developed and optimized SQL views, tables, and procedures for large datasets, significantly reducing load times and enhancing performance of legacy systems used for critical project tracking.",
      "Designed and implemented automated metric dashboards in Power BI, using Python and SQL to provide real-time insights for project managers, simplifying access to project data for monitoring and enabling faster decision-making.",
    ],
    tech: ["Power BI", "SQL", "Python", "Report Builder"],
  },
  {
    id: "sain-lab",
    role: "Software Research Engineer",
    company: "SAIN Lab",
    team: "Ontario Tech University",
    url: "https://www.sain.ca/",
    location: "Oshawa, ON",
    period: "May 2022 – September 2022",
    bullets: [
      "Designed and implemented a full-stack survey website using JavaScript, HTML, CSS, ExpressJS, Node.js, and MongoDB to raise awareness about Password Managers and the risks associated with weak passwords.",
      "Developed Python scripts to analyze pilot tester data, ensuring comprehensive documentation for future use.",
      "Achieved significant engagement, with over 1,000 users completing the survey on Amazon Mechanical Turk, resulting in a 50%+ increase in awareness of password management practices and the dangers of weak passwords.",
    ],
    tech: ["JavaScript", "Express.js", "Node.js", "MongoDB", "Python"],
  },
  {
    id: "ad2mlabs",
    role: "Undergraduate Research Assistant",
    company: "AD2M Labs",
    team: "Ontario Tech University",
    url: "http://ad2mlabs.com/lab/",
    location: "Oshawa, ON",
    // TODO: confirm — the previous site listed an impossible "May 2023 – August 2021".
    period: "May 2021 – August 2021",
    bullets: [
      "Developed a program using Python that reads through an ASCII STL file and stores triangle information into a multi layered data structure, enabling rapid identification and resolution of errors.",
      "Developed an intuitive 3D visualization tool using PyQt and Qt Designer to assist in the repair of broken STL files.",
      "Built and launched three websites (ahmadbarari.com, ad2mlabs.com, robin-team.com) utilizing WordPress, HTML, and CSS, deepening expertise in front-end development and user experience (UX) design.",
    ],
    tech: ["Python", "PyQt", "Qt Designer", "WordPress"],
  },
];

export const projects = [
  {
    id: "tomo-ai",
    name: "Generative AI Educational Assistant",
    blurb:
      "A web app that lets students query their professor's lecture-specific content, bridging the gap between students and educational material. Uses retrieval-augmented generation for precise retrieval from course materials, significantly reducing student search times.",
    tech: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "LangChain",
      "OpenAI API",
    ],
    github: "https://github.com/huzaifazia17/TomoAIClient",
    demo: null,
    featured: true,
  },
  {
    id: "decentralized-voting",
    name: "Decentralized Voting Web App",
    blurb:
      "A decentralized voting application built on blockchain technology, using smart contracts, MetaMask authentication, and Hardhat to run secure and transparent elections.",
    tech: ["Solidity", "Hardhat", "MetaMask", "React", "Ethers.js"],
    github: "https://github.com/huzaifazia17/DecentralizedVotingWebApp",
    demo: null,
    featured: true,
  },
  {
    id: "bazaar",
    name: "Bazaar Marketplace App",
    blurb:
      "A mobile marketplace for buying and selling items, integrating Firebase authentication and the Google Maps API behind a seamless user experience.",
    tech: ["React Native", "Express.js", "MongoDB", "Firebase", "Google Maps"],
    github: "https://github.com/huzaifazia17/BazaarMarketplaceApp",
    demo: null,
    featured: true,
  },
  {
    id: "grocery-store",
    name: "Online Grocery Store",
    blurb:
      "A full-stack responsive online grocery store with an authentication system and Home, Product, and dynamic Cart pages.",
    tech: ["React", "Redux", "Express.js", "MySQL", "React Router"],
    github: "https://github.com/huzaifazia17/Online_Grocery_Store",
    demo: "https://h2z2groceries.netlify.app/",
    featured: false,
  },
  {
    id: "transcriber",
    name: "Audio / Video Transcriber",
    blurb:
      "Built in four hours for a hackathon. Transcribes audio and video via AssemblyAI's API and renders the result as a formatted HTML document divided into chapters.",
    tech: ["HTML", "CSS", "JavaScript", "AssemblyAI API"],
    github: "https://github.com/huzaifazia17/DH8Transcriber",
    demo: "https://huzaifazia17.github.io/DH8Transcriber/",
    featured: false,
  },
  {
    id: "image-retrieval",
    name: "Content Based Image Retrieval",
    blurb:
      "A Python program that converts a black and white image into a barcode using angled projections, then searches for the most similar barcode with greater than 80% accuracy.",
    tech: ["Python", "Pillow", "NumPy"],
    github: "https://github.com/huzaifazia17/ContentBasedImageRetrieval",
    demo: null,
    featured: false,
  },
];

export const skills = [
  {
    group: "Languages",
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "C#",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "LLMs",
      "Claude Code",
      "RAG",
      "AI Agents",
      "MCP",
      "LangChain",
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Redux", "Tailwind CSS", "Express.js", "Next.js"],
  },
  {
    group: "Data & Infrastructure",
    items: [
      "MySQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Linux",
      "Azure",
      "Git",
    ],
  },
  {
    group: "Analytics & Tools",
    items: ["Power BI", "Excel", "Visio"],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

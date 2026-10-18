/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO DATA — SINGLE SOURCE OF TRUTH
 *  Real résumé data for Parsa Nazari · Backend Developer.
 *  Edit this one file to update anything shown on the site.
 * ─────────────────────────────────────────────────────────────
 */

export type ProjectStatus = "Completed" | "In Progress" | "Concept";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  emoji: string;
}

export interface TechGroup {
  category: string;
  icon: string; // lucide icon key resolved in the component
  items: { name: string; monogram: string; color: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export const profile = {
  name: "Parsa Nazari",
  firstName: "Parsa",
  role: "Backend Developer",
  specialization: "Python & FastAPI",
  tagline:
    "Backend developer with 4+ years of experience building scalable, production-ready web applications with Python — RESTful APIs, backend architecture, PostgreSQL, Redis, Kafka, Docker, CI/CD, and Linux infrastructure. Clean architecture and reliable production systems, first.",
  location: "Iran · Open to Remote",
  email: "callmexenix@gmail.com",
  phone: "+98 911 579 8804",
  phoneHref: "tel:+989115798804",
  github: "https://github.com/Its-Xen",
  githubHandle: "github.com/Its-Xen",
  resumeUrl: "#contact", // replace with a link to the real résumé PDF when ready
  availability: "Open to new opportunities",
  /**
   * Web3Forms access key — the only thing needed to make the contact form
   * deliver email from this fully static site. Get a free key at
   * https://web3forms.com (1 minute, no account needed) and paste it here.
   * While empty, the form gracefully falls back to opening the visitor's
   * email client with a pre-filled message.
   */
  web3formsKey: "",
  funFact:
    "Good backends are boring — predictable, observable, and fast. I build for boring.",
};

export const heroStats = [
  { value: "4+", label: "Years of Backend Experience" },
  { value: "3", label: "Production Backend Roles" },
  { value: "15+", label: "Technologies in Daily Stack" },
  { value: "2", label: "Key Projects Designed & Built" },
];

export const about = {
  paragraph1:
    "I'm a backend developer with 4+ years of experience building scalable, production-ready web applications with Python. My work covers the full backend lifecycle: designing RESTful APIs and backend architecture, modeling and optimizing databases, wiring caching and messaging layers, and shipping everything through Docker, CI/CD pipelines, and Linux infrastructure.",
  paragraph2:
    "I've built and maintained backend systems for high-traffic e-commerce and fintech products, worked on complex financial workflows, integrated third-party payment gateways, implemented authentication and asynchronous processing, and refactored legacy monoliths into modular, testable architectures. Day to day I work with FastAPI, Django, and Django REST Framework — always with a focus on clean architecture, high-performance APIs, and systems that stay reliable in production.",
  highlights: [
    {
      title: "Backend Architecture",
      description:
        "Clean, modular design — routing, business logic, data access, and schemas kept separate so systems stay testable and easy to change.",
    },
    {
      title: "Performance Under Load",
      description:
        "PostgreSQL query optimization and Redis caching that keep APIs responsive on high-traffic, production e-commerce and fintech systems.",
    },
    {
      title: "Async & Event-Driven",
      description:
        "Kafka-based workflows, background processing, and distributed services for the work that shouldn't block the request path.",
    },
    {
      title: "Ship to Production",
      description:
        "Docker, Nginx, Linux, and GitHub Actions CI/CD — I own services from commit to production deployment.",
    },
  ],
};

/** Chip list rendered under the About narrative — straight from the résumé. */
export const coreStrengths = [
  "Backend Architecture & System Design",
  "REST API Development",
  "FastAPI & Python",
  "Database Design & Query Optimization",
  "Performance Optimization",
  "Clean & Maintainable Code",
  "Redis & Kafka",
  "Docker & CI/CD",
  "Production Linux Infrastructure",
  "Problem Solving & Debugging",
  "International Team Communication",
  "Self-Learning & Adaptability",
];

export const experience: ExperienceItem[] = [
  {
    company: "ROSHD Company",
    role: "Backend Developer — International Projects",
    period: "Aug 2025 — Jul 2026",
    summary:
      "Backend systems for international clients across high-traffic e-commerce and fintech projects.",
    bullets: [
      "Designed scalable RESTful APIs and backend architectures with Python for high-traffic e-commerce and fintech products.",
      "Built complex financial workflows: multi-currency transaction processing, automated invoicing, and inventory management.",
      "Refactored legacy monolithic modules into maintainable, testable, modular architectures.",
      "Integrated third-party payment gateways and external financial services into backend systems.",
      "Optimized PostgreSQL queries and implemented Redis caching to improve API performance under high traffic.",
      "Designed asynchronous, event-driven workflows across distributed services; worked directly with international stakeholders.",
      "Containerized services with Docker and managed CI/CD pipelines plus Linux production deployments.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "CI/CD", "Nginx"],
  },
  {
    company: "Saha App",
    role: "Backend Developer",
    period: "May 2024 — Jun 2025",
    summary:
      "Designed and developed a custom ERP platform from scratch — finance, accounting, HR, and supply chain.",
    bullets: [
      "Designed and developed a custom ERP platform from scratch using Python, Django, and Django REST Framework.",
      "Built RESTful APIs for finance, accounting, HR, and supply-chain workflows.",
      "Developed invoice and cheque management systems with complex business logic, plus HR scheduling with conflict detection.",
      "Shipped real-time communication features using Django Channels and Firebase push notifications.",
      "Implemented Redis caching and Kafka-based event-driven workflows for asynchronous backend processing.",
      "Implemented JWT authentication, automated deployments through GitHub Actions, and ran production on Linux + Nginx.",
    ],
    tech: ["Django", "DRF", "Django Channels", "Redis", "Kafka", "JWT", "Docker"],
  },
  {
    company: "Moshaversara",
    role: "Backend Developer",
    period: "Jan 2024 — Apr 2024",
    summary:
      "Educational platform focused on curriculum management and college planning.",
    bullets: [
      "Developed backend features for an educational platform focused on curriculum management and college planning.",
      "Designed and implemented RESTful API endpoints with PostgreSQL and JWT authentication.",
      "Configured production infrastructure using Linux and Nginx, and extended existing backend functionality.",
    ],
    tech: ["Python", "REST APIs", "PostgreSQL", "JWT", "Linux", "Nginx"],
  },
];

export const projects: Project[] = [
  {
    id: "ecommerce-api",
    title: "FastAPI E-Commerce Platform",
    emoji: "🛒",
    tagline: "Production-oriented backend for an online clothing store",
    description:
      "A production-oriented e-commerce backend built with FastAPI: modular endpoints for authentication, users, products, categories, addresses, cart, and orders — with business logic isolated in a service layer and the whole app designed for containerized deployment.",
    status: "Completed",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "JWT",
      "Redis",
      "Docker",
    ],
    highlights: [
      "Modular endpoints across 7+ domains: auth, users, products, categories, addresses, cart, orders",
      "PostgreSQL models via SQLAlchemy with Pydantic request/response validation",
      "Product search & filtering, pagination, and full shopping-cart + order-management workflows",
      "JWT authentication and containerized deployment with Docker",
    ],
  },
  {
    id: "study-social-hub",
    title: "Study Social Hub",
    emoji: "📚",
    tagline: "Collaborative study rooms with gamified progress tracking",
    description:
      "Backend architecture for a collaborative study platform: shared study rooms, timers, progress tracking, streaks, and leaderboards. Note-management and AI-powered summary/quiz workflows are planned as modular services so the system can scale feature by feature.",
    status: "In Progress",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Collaborative study rooms with timers and shared progress tracking",
      "Streaks and leaderboards to keep learners engaged",
      "Note-management and AI-powered summary/quiz workflows planned as modular services",
    ],
  },
];

export const techGroups: TechGroup[] = [
  {
    category: "Languages",
    icon: "code",
    items: [
      { name: "Python", monogram: "Py", color: "#3776ab" },
      { name: "SQL", monogram: "Sq", color: "#e38c00" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "layers",
    items: [
      { name: "FastAPI", monogram: "Fa", color: "#009688" },
      { name: "Django", monogram: "Dj", color: "#092e20" },
      { name: "Django REST Framework", monogram: "Dr", color: "#a30000" },
      { name: "Django Channels", monogram: "Ch", color: "#0c7c59" },
      { name: "Pydantic", monogram: "Pd", color: "#e92063" },
      { name: "SQLAlchemy", monogram: "Sa", color: "#d71f00" },
      { name: "JWT Authentication", monogram: "Jw", color: "#000000" },
      { name: "OpenAPI", monogram: "Oa", color: "#6ba539" },
    ],
  },
  {
    category: "Databases & Caching",
    icon: "database",
    items: [
      { name: "PostgreSQL", monogram: "Pg", color: "#336791" },
      { name: "MySQL", monogram: "My", color: "#00758f" },
      { name: "Redis", monogram: "Re", color: "#dc382d" },
    ],
  },
  {
    category: "Messaging & Architecture",
    icon: "workflow",
    items: [
      { name: "Kafka", monogram: "Kf", color: "#231f20" },
      { name: "Event-Driven Architecture", monogram: "Ev", color: "#7c3aed" },
      { name: "Clean Architecture", monogram: "Cl", color: "#0e7490" },
      { name: "Microservices", monogram: "Mi", color: "#4f46e5" },
      { name: "System Design", monogram: "Sd", color: "#b45309" },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    icon: "container",
    items: [
      { name: "Docker", monogram: "Dk", color: "#2496ed" },
      { name: "Nginx", monogram: "Nx", color: "#009639" },
      { name: "Linux", monogram: "Li", color: "#fcc624" },
      { name: "Git", monogram: "Gt", color: "#f05032" },
      { name: "GitHub Actions", monogram: "Gh", color: "#181717" },
      { name: "CI/CD", monogram: "Ci", color: "#059669" },
    ],
  },
  {
    category: "Other",
    icon: "flask",
    items: [
      { name: "Selenium", monogram: "Se", color: "#43b02a" },
      { name: "Beautiful Soup", monogram: "Bs", color: "#3b82f6" },
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Engineering",
  school: "University of Shomal",
  period: "2021 — 2026",
  note: "Studying computer engineering while working as a professional backend developer — theory in the morning, production systems in the afternoon.",
  languages: [
    {
      name: "Persian",
      level: "Native",
      note: "Mother tongue",
      proficiency: 100,
    },
    {
      name: "English",
      level: "B2–C1",
      note: "Technical communication, meetings, and documentation",
      proficiency: 80,
    },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

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
  items: { name: string; monogram: string; color: string; icon?: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export interface Book {
  title: string;
  author: string;
  category: string;
  note: string;
  /** Gradient for the CSS book cover: [from, to] — used as fallback when no photo */
  gradient: [string, string];
  /** Real cover photo under /public/covers — optional, gradient is the fallback */
  cover?: string;
  link?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const profile = {
  name: "Parsa Nazari",
  firstName: "Parsa",
  role: "Backend Developer",
  specialization: "Python & FastAPI",
  tagline:
    "I design and ship scalable, production-ready backend systems with Python — clean architecture, fast APIs, reliable infrastructure.",
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
  { value: "5", label: "Key Projects Designed & Built" },
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
    id: "eveto",
    title: "Eveto — Event Ticketing Platform",
    emoji: "🎟️",
    tagline: "Production-grade, Eventbrite-style ticketing backend",
    description:
      "A lightweight event-management platform handling the complete ticketing lifecycle — browsing, booking, mock payment processing, and confirmation — with full admin control over venues and inventory. External partners integrate through a versioned, rate-limited REST API. Built to master advanced backend patterns under high concurrency.",
    status: "In Progress",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Dramatiq",
      "SQLAlchemy",
      "JWT",
      "Prometheus",
      "Docker",
    ],
    highlights: [
      "Concurrency-safe ticket reservations using PostgreSQL locking",
      "Asynchronous payments with idempotent webhooks + Dramatiq workers",
      "RBAC with JWT (RS256) auth and a versioned, rate-limited partner API",
      "OpenTelemetry tracing, Prometheus metrics, and structured logging",
    ],
    repoUrl: "https://github.com/Its-Xen/Eveto",
  },
  {
    id: "study-social-hub",
    title: "Study Social Hub",
    emoji: "📚",
    tagline: "Collaborative study rooms with gamified progress tracking",
    description:
      "Backend architecture for a collaborative study platform: shared study rooms, timers, progress tracking, streaks, and leaderboards. Note-management and AI-powered summary/quiz workflows are structured as modular services so the system can scale feature by feature.",
    status: "Completed",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Collaborative study rooms with timers and shared progress tracking",
      "Streaks and leaderboards to keep learners engaged",
      "Note-management and AI-powered summary/quiz workflows built as modular services",
    ],
  },
  {
    id: "medium-clone",
    title: "Medium Clone API",
    emoji: "✍️",
    tagline: "Medium-style publishing backend with Django & DRF",
    description:
      "A backend implementation of a Medium-like blog platform built with Django and Django REST Framework — a robust API for managing users, articles, comments, and everything else behind a publishing platform, secured with JWT authentication and backed by an Elasticsearch service.",
    status: "Completed",
    tech: ["Django", "DRF", "JWT", "Elasticsearch", "pytest", "Docker"],
    highlights: [
      "Robust DRF API for users, articles, and comments",
      "JWT authentication across the platform",
      "Article CRUD backed by an Elasticsearch service",
      "pytest suite with coverage reporting",
    ],
    repoUrl: "https://github.com/Its-Xen/Medium-Clone",
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    emoji: "🍳",
    tagline: "Django web app for browsing and sharing recipes",
    description:
      "A Django-powered recipe app that organizes recipes effortlessly — visitors browse a categorized collection, open detailed pages with ingredients and instructions, and publish their own recipes with image upload, all wrapped in a friendly Bootstrap interface.",
    status: "Completed",
    tech: ["Django", "Bootstrap", "Pillow"],
    highlights: [
      "Category browsing — dinners, desserts, and drinks",
      "Create recipes with image upload via Pillow",
      "Detailed recipe pages with ingredients & instructions",
      "User profiles with photo upload",
    ],
    repoUrl: "https://github.com/Its-Xen/Recipe-App",
  },
];

export const techGroups: TechGroup[] = [
  {
    category: "Languages",
    icon: "code",
    items: [
      { name: "Python", monogram: "Py", color: "#3776ab", icon: "python" },
      { name: "SQL", monogram: "Sq", color: "#e38c00" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "layers",
    items: [
      { name: "FastAPI", monogram: "Fa", color: "#009688", icon: "fastapi" },
      { name: "Django", monogram: "Dj", color: "#092e20", icon: "django" },
      { name: "Django REST Framework", monogram: "Dr", color: "#a30000" },
      { name: "Django Channels", monogram: "Ch", color: "#0c7c59" },
      { name: "Pydantic", monogram: "Pd", color: "#e92063", icon: "pydantic" },
      { name: "SQLAlchemy", monogram: "Sa", color: "#d71f00" },
      { name: "JWT Authentication", monogram: "Jw", color: "#000000", icon: "jsonwebtokens" },
      { name: "OpenAPI", monogram: "Oa", color: "#6ba539", icon: "openapiinitiative" },
    ],
  },
  {
    category: "Databases & Caching",
    icon: "database",
    items: [
      { name: "PostgreSQL", monogram: "Pg", color: "#336791", icon: "postgresql" },
      { name: "MySQL", monogram: "My", color: "#00758f", icon: "mysql" },
      { name: "Redis", monogram: "Re", color: "#dc382d", icon: "redis" },
    ],
  },
  {
    category: "Messaging & Architecture",
    icon: "workflow",
    items: [
      { name: "Kafka", monogram: "Kf", color: "#231f20", icon: "apachekafka" },
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
      { name: "Docker", monogram: "Dk", color: "#2496ed", icon: "docker" },
      { name: "Nginx", monogram: "Nx", color: "#009639", icon: "nginx" },
      { name: "Linux", monogram: "Li", color: "#fcc624", icon: "linux" },
      { name: "Git", monogram: "Gt", color: "#f05032", icon: "git" },
      { name: "GitHub Actions", monogram: "Gh", color: "#181717", icon: "githubactions" },
      { name: "CI/CD", monogram: "Ci", color: "#059669" },
    ],
  },
  {
    category: "Other",
    icon: "flask",
    items: [
      { name: "Selenium", monogram: "Se", color: "#43b02a", icon: "selenium" },
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

/**
 * Books I've read and keep on my shelf — a mix of Python craft, API design,
 * data systems, security, protocols, and the infrastructure underneath it all.
 */
export const books: Book[] = [
  {
    title: "Fluent Python",
    author: "Luciano Ramalho",
    category: "Python",
    note: "The Pythonic deep dive — data model, dunder methods, and idioms. Made my code measurably more Pythonic.",
    gradient: ["#2b5b84", "#3776ab"],
    cover: "/covers/fluent-python.jpg",
    link: "https://www.goodreads.com/search?q=Fluent+Python+Luciano+Ramalho",
  },
  {
    title: "Robust Python",
    author: "Patrick Viafore",
    category: "Python",
    note: "Writing Python that resists bugs — typing, contracts, and defensive patterns for production codebases.",
    gradient: ["#4c1d95", "#7c3aed"],
    cover: "/covers/robust-python.jpg",
    link: "https://www.goodreads.com/search?q=Robust+Python+Patrick+Viafore",
  },
  {
    title: "Django for APIs",
    author: "William S. Vincent",
    category: "APIs & Frameworks",
    note: "My DRF reference — serializers, viewsets, and REST design patterns straight from real project work.",
    gradient: ["#0c4a33", "#0f7a4d"],
    cover: "/covers/django-for-apis.jpg",
    link: "https://www.goodreads.com/search?q=Django+for+APIs+William+Vincent",
  },
  {
    title: "Building Python Microservices with FastAPI",
    author: "Sherwin John C. Tragura",
    category: "APIs & Frameworks",
    note: "Structuring FastAPI services at scale — modular design, async workflows, and deployment patterns.",
    gradient: ["#0d6e64", "#009688"],
    cover: "/covers/building-python-microservices.jpg",
    link: "https://www.goodreads.com/search?q=Building+Python+Microservices+with+FastAPI+Tragura",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Data Systems",
    note: "The data-systems bible — replication, partitioning, and consistency. The mental model behind my Kafka and Redis decisions.",
    gradient: ["#1e293b", "#475569"],
    cover: "/covers/ddia.jpg",
    link: "https://www.goodreads.com/search?q=Designing+Data-Intensive+Applications+Kleppmann",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin (Uncle Bob)",
    category: "Code Craft",
    note: "Names, functions, and boundaries — the craft standard I hold every module to.",
    gradient: ["#7c2d12", "#c2410c"],
    cover: "/covers/clean-code.jpg",
    link: "https://www.goodreads.com/search?q=Clean+Code+Robert+Martin",
  },
  {
    title: "Domain-Driven Design",
    author: "Eric Evans",
    category: "Architecture",
    note: "The blue book — ubiquitous language and bounded contexts, how I think about modular monoliths.",
    gradient: ["#1e3a8a", "#2563eb"],
    cover: "/covers/ddd.jpg",
    link: "https://www.goodreads.com/search?q=Domain-Driven+Design+Eric+Evans",
  },
  {
    title: "Web Application Security",
    author: "Andrew Hoffman",
    category: "Security",
    note: "Attacks and defenses end to end, from the request line to auth — how I approach hardening APIs.",
    gradient: ["#7f1d1d", "#dc2626"],
    cover: "/covers/web-app-security.jpg",
    link: "https://www.goodreads.com/search?q=Web+Application+Security+Andrew+Hoffman",
  },
  {
    title: "HTTP: The Definitive Guide",
    author: "David Gourley",
    category: "Protocols",
    note: "The HTTP/1.1 deep dive — methods, headers, connections, and caching, from first principles.",
    gradient: ["#92400e", "#d97706"],
    cover: "/covers/http-definitive-guide.jpg",
    link: "https://www.goodreads.com/search?q=HTTP+The+Definitive+Guide+Gourley",
  },
  {
    title: "Learning HTTP/2",
    author: "Stephen Ludin & Javier Garza",
    category: "Protocols",
    note: "Multiplexing, streams, and header compression — what actually changes at the protocol level.",
    gradient: ["#155e75", "#0891b2"],
    cover: "/covers/learning-http2.jpg",
    link: "https://www.goodreads.com/search?q=Learning+HTTP/2+Ludin+Garza",
  },
  {
    title: "Networking Fundamentals",
    author: "Crystal Panek",
    category: "Networking",
    note: "IP, subnetting, routing, and DNS — the layered model everything I deploy runs on.",
    gradient: ["#334155", "#64748b"],
    cover: "/covers/networking-fundamentals.jpg",
    link: "https://www.goodreads.com/search?q=Networking+Fundamentals+Crystal+Panek",
  },
  {
    title: "NGINX Cookbook",
    author: "Derek DeJonghe",
    category: "Infrastructure",
    note: "Practical recipes for load balancing, caching, and TLS — my production reverse-proxy companion.",
    gradient: ["#00532b", "#009639"],
    cover: "/covers/nginx-cookbook.jpg",
    link: "https://www.goodreads.com/search?q=NGINX+Cookbook+Derek+DeJonghe",
  },
  {
    title: "Ansible: Up and Running",
    author: "Bas Meijer",
    category: "Infrastructure",
    note: "Configuration as code — provisioning and automating Linux servers the reproducible way.",
    gradient: ["#111827", "#374151"],
    cover: "/covers/ansible-up-and-running.jpg",
    link: "https://www.goodreads.com/search?q=Ansible+Up+and+Running+Bas+Meijer",
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Reading", href: "#reading" },
  { label: "Contact", href: "#contact" },
];

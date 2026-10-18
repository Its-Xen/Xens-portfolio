/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO DATA — SINGLE SOURCE OF TRUTH
 *  Stage 1: placeholder content for a FastAPI developer persona.
 *  Stage 2: swap every field below with the real résumé details.
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

export interface Book {
  title: string;
  author: string;
  takeaway: string;
  link: string;
  coverGradient: string; // tailwind gradient classes for the CSS book cover
  accentText: string;
}

export const profile = {
  name: "Arman Rezaei",
  firstName: "Arman",
  role: "Software Engineer",
  specialization: "Python · FastAPI · Django",
  tagline:
    "I design and build fast, scalable backend systems with Python — production-grade APIs with FastAPI today, full-featured products with Django, and Rust on the roadmap. Clean architecture, type safety, and performance first.",
  location: "Tehran, Iran · Open to Remote",
  email: "arman.rezaei.dev@gmail.com",
  github: "https://github.com/armanrezaei-dev",
  linkedin: "https://www.linkedin.com/in/armanrezaei-dev",
  telegram: "https://t.me/armanrezaei_dev",
  resumeUrl: "#contact", // Stage 2: replace with a link to the real résumé PDF
  availability: "Available for new opportunities",
  funFact:
    "When I'm not shipping endpoints, I'm benchmarking them — or lost in a book about distributed systems.",
};

export const heroStats = [
  { value: "4+", label: "Years of Experience" },
  { value: "25+", label: "APIs Shipped to Production" },
  { value: "120k+", label: "Daily Requests Served" },
  { value: "99.9%", label: "Uptime Maintained" },
];

export const about = {
  paragraph1:
    "I'm a software engineer with 4+ years of experience designing and shipping high-performance backend systems in Python. My journey started with a curiosity about how the web talks to itself — that curiosity grew into a career building the services that power products used by thousands of people every day.",
  paragraph2:
    "I care deeply about the craft of backend engineering: APIs that are self-documenting, schemas that are type-safe from database to response, and infrastructure that scales without drama. I build async, high-throughput services with FastAPI and batteries-included products with Django — obsessing over latency budgets, clean architecture, and the kind of developer experience that makes teams faster. Next chapter: Rust.",
  highlights: [
    {
      title: "API Architecture",
      description:
        "Designing versioned REST & WebSocket APIs with OpenAPI, Pydantic v2 contracts, and clean layered architecture.",
    },
    {
      title: "Performance & Scale",
      description:
        "Async-first Python, query optimization, caching strategies, and load-tested services that hold up under pressure.",
    },
    {
      title: "DevOps Mindset",
      description:
        "Dockerized deployments, CI/CD pipelines, observability with structured logs and metrics — I ship it and I own it.",
    },
    {
      title: "Continuous Learning",
      description:
        "Reading, experimenting, and contributing to open source — every project teaches the next one something new.",
    },
  ],
};

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow API",
    emoji: "🗂️",
    tagline: "Collaborative task-management platform backend",
    description:
      "A production REST + WebSocket API for team task management: JWT auth with refresh rotation, role-based permissions, real-time notifications, and activity feeds. Fully dockerized with a 120-endpoint OpenAPI spec.",
    status: "Completed",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "pytest"],
    highlights: [
      "95% test coverage with async integration tests",
      "p95 response time under 40 ms with Redis caching",
      "Real-time updates via WebSockets for 500+ concurrent users",
    ],
    repoUrl: "https://github.com/armanrezaei-dev/taskflow-api",
    liveUrl: "https://taskflow-demo.armanrezaei.dev",
  },
  {
    id: "shopstream",
    title: "Shopstream Commerce",
    emoji: "🛒",
    tagline: "Headless e-commerce backend engine",
    description:
      "A headless commerce engine powering multiple storefronts from one API: product catalog with faceted search, inventory synchronization, Stripe payments with idempotent webhooks, and aggressive rate limiting on public endpoints.",
    status: "Completed",
    tech: ["Django", "DRF", "PostgreSQL", "Stripe", "Nginx", "AWS"],
    highlights: [
      "Idempotent payment webhooks — zero double charges in production",
      "Catalog search under 80 ms on 50k+ products",
      "Multi-tenant-ready data model with row-level isolation",
    ],
    repoUrl: "https://github.com/armanrezaei-dev/shopstream",
  },
  {
    id: "chatstack",
    title: "Realtime Chat Service",
    emoji: "💬",
    tagline: "Horizontal-scaling WebSocket chat platform",
    description:
      "A WebSocket-first chat service with presence tracking, typing indicators, delivery receipts, and paginated history. Multiple app instances stay in sync through Redis pub/sub — stateless servers, sticky-session-free scaling.",
    status: "Completed",
    tech: ["FastAPI", "WebSockets", "Redis", "PostgreSQL", "Docker Compose"],
    highlights: [
      "Scaled horizontally across 6 instances with zero config drift",
      "Sub-100 ms message fan-out across regions",
      "Graceful reconnection with offline message replay",
    ],
    repoUrl: "https://github.com/armanrezaei-dev/chatstack",
  },
  {
    id: "mlserve",
    title: "MLserve Platform",
    emoji: "🧠",
    tagline: "Self-service model-serving infrastructure",
    description:
      "A platform for serving ML models as versioned async APIs: upload a model artifact, get a scalable inference endpoint with request batching, Prometheus metrics, and A/B traffic splitting. Currently building the model registry UI.",
    status: "In Progress",
    tech: ["FastAPI", "ONNX Runtime", "Redis", "Prometheus", "Kubernetes"],
    highlights: [
      "Dynamic request batching cut GPU cost per inference by 35%",
      "Canary deployments with weighted traffic routing",
      "Automatic scale-to-zero for idle model endpoints",
    ],
    repoUrl: "https://github.com/armanrezaei-dev/mlserve",
  },
  {
    id: "pykit",
    title: "PyKit CLI",
    emoji: "🧰",
    tagline: "Open-source scaffolding toolkit for FastAPI teams",
    description:
      "A CLI that scaffolds production-ready FastAPI projects in seconds: layered architecture templates, pre-configured Docker Compose, linting presets, auth boilerplate, and CI workflows. Designed for teams that keep rebuilding the same skeleton.",
    status: "In Progress",
    tech: ["Python", "Typer", "Rich", "Cookiecutter", "GitHub Actions"],
    highlights: [
      "830+ downloads in the first month on PyPI",
      "Interactive project wizard with sensible defaults",
      "Pluggable template system for team conventions",
    ],
    repoUrl: "https://github.com/armanrezaei-dev/pykit",
  },
  {
    id: "meshqueue",
    title: "MeshQueue",
    emoji: "🕸️",
    tagline: "Distributed task queue — designed, not yet built",
    description:
      "A design-stage concept for a lightweight distributed task queue: priority scheduling, dead-letter queues with replay, and exactly-once semantics on top of RabbitMQ. The RFC and architecture drawings are done — code comes after MLserve ships.",
    status: "Concept",
    tech: ["RabbitMQ", "Python", "Redis", "Protobuf", "System Design"],
    highlights: [
      "Architecture RFC with failure-mode analysis complete",
      "Benchmark plan targeting 10k tasks/sec on commodity hardware",
      "Exploring WAL-based persistence vs. broker-native durability",
    ],
  },
];

export const techGroups: TechGroup[] = [
  {
    category: "Languages",
    icon: "code",
    items: [
      { name: "Python", monogram: "Py", color: "#3776ab" },
      { name: "TypeScript", monogram: "Ts", color: "#3178c6" },
      { name: "SQL", monogram: "Sq", color: "#e38c00" },
      { name: "Bash", monogram: "Sh", color: "#4eaa25" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "layers",
    items: [
      { name: "FastAPI", monogram: "Fa", color: "#009688" },
      { name: "Django", monogram: "Dj", color: "#092e20" },
      { name: "Pydantic v2", monogram: "Pd", color: "#e92063" },
      { name: "SQLAlchemy", monogram: "Sa", color: "#d71f00" },
      { name: "Celery", monogram: "Ce", color: "#37814a" },
      { name: "Typer", monogram: "Ty", color: "#0891b2" },
    ],
  },
  {
    category: "Databases & Caching",
    icon: "database",
    items: [
      { name: "PostgreSQL", monogram: "Pg", color: "#336791" },
      { name: "Redis", monogram: "Re", color: "#dc382d" },
      { name: "SQLite", monogram: "Lt", color: "#0f80cc" },
      { name: "MongoDB", monogram: "Mo", color: "#47a248" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: "container",
    items: [
      { name: "Docker", monogram: "Dk", color: "#2496ed" },
      { name: "Kubernetes", monogram: "K8", color: "#326ce5" },
      { name: "Nginx", monogram: "Nx", color: "#009639" },
      { name: "GitHub Actions", monogram: "Gh", color: "#181717" },
      { name: "AWS", monogram: "Aw", color: "#ff9900" },
    ],
  },
  {
    category: "Testing & Workflow",
    icon: "flask",
    items: [
      { name: "pytest", monogram: "Pt", color: "#0a9edc" },
      { name: "Postman", monogram: "Pm", color: "#ff6c37" },
      { name: "Git", monogram: "Gt", color: "#f05032" },
      { name: "Linux", monogram: "Li", color: "#fcc624" },
      { name: "OpenAPI", monogram: "Oa", color: "#6ba539" },
    ],
  },
];

export const books: Book[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    takeaway:
      "Reliability, scalability, and maintainability aren't accidents — they're engineering choices you design for on purpose.",
    link: "https://www.goodreads.com/search?q=Designing+Data-Intensive+Applications",
    coverGradient: "from-amber-500 via-orange-600 to-rose-700",
    accentText: "text-amber-100",
  },
  {
    title: "Architecture Patterns with Python",
    author: "Harry Percival & Bob Gregory",
    takeaway:
      "Ports, adapters, and event-driven boundaries keep business logic pure — even in a framework-heavy world like FastAPI.",
    link: "https://www.cosmicpython.com/book/preface.html",
    coverGradient: "from-cyan-600 via-sky-700 to-indigo-900",
    accentText: "text-cyan-100",
  },
  {
    title: "Fluent Python",
    author: "Luciano Ramalho",
    takeaway:
      "Python rewards those who learn its idioms — async generators, descriptors, and dunder protocols are superpowers, not trivia.",
    link: "https://www.goodreads.com/search?q=Fluent+Python",
    coverGradient: "from-yellow-500 via-amber-600 to-orange-700",
    accentText: "text-yellow-100",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    takeaway:
      "DRY, orthogonality, and tracer bullets — timeless practices that make codebases kind to the humans who maintain them.",
    link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    coverGradient: "from-slate-700 via-slate-800 to-navy-950",
    accentText: "text-slate-200",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    takeaway:
      "The dependency rule is the whole game: dependencies point inward, frameworks are plugins, and details can wait.",
    link: "https://www.goodreads.com/search?q=Clean+Architecture+Robert+Martin",
    coverGradient: "from-stone-600 via-stone-700 to-stone-900",
    accentText: "text-stone-200",
  },
  {
    title: "High Performance Python",
    author: "Micha Gorelick & Ian Ozsvald",
    takeaway:
      "Measure before you optimize — profilers, async I/O, and the right data structure beat premature cleverness every time.",
    link: "https://www.oreilly.com/library/view/high-performance-python/9781492055013/",
    coverGradient: "from-emerald-600 via-teal-700 to-cyan-900",
    accentText: "text-emerald-100",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Reading", href: "#reading" },
  { label: "Contact", href: "#contact" },
];

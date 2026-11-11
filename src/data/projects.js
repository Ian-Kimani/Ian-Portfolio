const projects = [
  {
    slug: "kahawamanager-edge",
    id: "01",
    title: "KahawaManager Edge",
    year: "2025",
    category: "Coffee Factory IoT & Edge Runtime",
    summary:
      "Offline-first desktop system for coffee factories. Connects directly to digital weighing scales + thermal printers , records deliveries locally (even during power/internet outages), prints receipts, and sends SMS confirmations to farmers.",
    description:
      "An offline-first desktop application engineered for rural coffee factories across Kenya. Interfacing directly with digital weighing scales and thermal receipt printers, it captures unalterable delivery weights even in areas with zero internet connectivity.",
    stack: ["Python", "CustomTkinter", "PostgreSQL", "PySerial", "ESC/POS", "Threading"],
    image: "/images/kahawa_manager_edge.png",
    altText: "KahawaManager Edge desktop interface showing hardware integration and coffee weighing data",
    seoTitle: "KahawaManager Edge | Offline Desktop & Hardware Integration | Ian Kimani",
    status: "Active / Field Deployment",
    role: "Designed and built the offline desktop application, hardware integrations, local data flow, and receipt workflow.",
    outcomes: [
      "Keeps weighing operations running during power and connectivity interruptions.",
      "Replaces handwritten delivery records with locally captured, auditable transactions.",
      "Connects digital scales, thermal printers, and queued SMS notifications in one workflow."
    ],
    evidence: "Built for coffee factory operations in Kenya, with the system designed around the constraints of real field deployment rather than an always-online demo.",
    links: {
      repository: "https://github.com/Ian-Kimani/KahawaManager-Edge"
    },
    featured: true,
    related: {
      slug: "kahawamanager-cloud",
      text: "To see how edge transactions are synchronized to the central cooperative office, explore the",
      linkText: "KahawaManager Cloud case study"
    },
    caseStudy: {
      tagline: "Bridging physical industrial hardware with resilient offline data capture in rural factories.",
      problem:
        "Rural coffee factories in Kenya often face frequent electrical outages and no cellular connectivity. Under traditional manual operations, thousands of smallholder farmers queue for hours while clerks handwrite delivery receipts in paper ledgers. This manual process causes severe time wastage, arithmetic errors, and vulnerability to weight manipulation at the weighing station.",
      architecture:
        "Engineered as a standalone offline-first desktop application utilizing Python and CustomTkinter, backed by a local PostgreSQL engine designed to guarantee zero data loss. The core technical foundation is direct serial hardware integration using `PySerial`, communicating over RS-232/USB with industrial digital weighing indicators. A dedicated multithreaded architecture isolates hardware polling from the UI event loop, ensuring sub-second response times without locking.",
      solution:
        "When a farmer places cherry sacks onto the weighing platform, the software queries the digital scale via serial protocols, locks the tare and gross weights, records an immutable delivery entry, and immediately prints a serialized duplicate receipt using an ESC/POS thermal printer. If cellular internet is momentarily detected, it queues SMS notifications. Even if the factory operates offline for weeks, weighing operations continue uninterrupted at full velocity.",
      highlights: [
        "Direct RS-232/USB serial integration with digital weighing scale indicators via PySerial",
        "ESC/POS thermal printer generation for instant serialized farmer delivery receipts",
        "Zero-latency offline-first database transactions with local audit logging",
        "Resilient multi-threaded architecture preventing UI freezes during hardware I/O",
        "Queued transactional outbox ready for upstream synchronization"
      ]
    }
  },
  {
    slug: "kahawamanager-cloud",
    id: "02",
    title: "KahawaManager Cloud",
    year: "2026",
    category: "Distributed Systems & Cloud Sync",
    summary:
      "Multi-tenant cloud dashboard that syncs with offline Edge devices . Handles analytics, factory expenses, farmer advances, bulk SMS, and end-of-season payments.",
    description:
      "A distributed, multi-tenant cloud management platform that synchronizes with remote KahawaManager Edge instances via an efficient delta-sync protocol, giving cooperative executives consolidated visibility and automated payout workflows.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Delta Sync", "M-Pesa API", "Bulk SMS"],
    image: "/images/kahawa_manager_cloud.png",
    altText: "KahawaManager Cloud dashboard displaying distributed analytics and farmer financial records",
    seoTitle: "KahawaManager Cloud | Offline-First Sync Architecture | Ian Kimani",
    status: "Active / Production",
    role: "Designed and built the cloud platform, multi-tenant data model, delta-sync workflow, and operational dashboards.",
    outcomes: [
      "Gives cooperative teams one view of activity across distributed factory stations.",
      "Synchronizes incremental changes instead of repeatedly transferring complete datasets.",
      "Brings delivery analytics, expenses, farmer advances, payouts, and SMS workflows into one system."
    ],
    evidence: "The cloud application is the central half of the KahawaManager system, paired with the Edge application for disconnected factory work.",
    links: {
      repository: "https://github.com/Ian-Kimani/KahawaManager-Cloud"
    },
    featured: true,
    related: {
      slug: "kahawamanager-edge",
      text: "To see how raw weighing records are captured offline at the factory scale, explore the",
      linkText: "KahawaManager Edge case study"
    },
    caseStudy: {
      tagline: "Consolidating distributed rural factory nodes through conflict-aware synchronization.",
      problem:
        "While local factory stations run reliably offline on KahawaManager Edge, cooperative society chairmen and financial managers need central visibility over multiple dispersed coffee deliveries in the factory. Consolidating season yields, auditing store requisitions, and issuing timely mobile money payouts to thousands of farmers previously required physical paper couriers or fragile spreadsheets.",
      architecture:
        "Built with Node.js, Express, and PostgreSQL, the platform implements a custom Delta Sync protocol based on monotonically increasing revision tokens and idempotent payload processing. Whenever an edge machine establishes intermittent internet access, it submits compressed incremental logs. The cloud sync gateway processes batches inside ACID database transactions, preventing double-entry and handling intermittent packet loss gracefully.",
      solution:
        "The multi-tenant cloud portal aggregates factory intakes in real time, generates yield analytics, manages factory-level operational expenses, and automates farmer advance deductions. Crucially, it interfaces with payment gateway APIs (including M-Pesa B2C) to disburse earnings directly to farmers' mobile wallets, while broadcasting automated bulk SMS transaction statements.",
      highlights: [
        "Custom Delta Synchronization engine with idempotent batching and revision tokens",
        "Multi-tenant organization partitioning ensuring cooperative-level data isolation",
        "Automated mobile money payment gateway integrations (M-Pesa B2C)",
        "Cooperative analytics dashboard with seasonal delivery projections and factory yields",
        "Bulk SMS broadcast pipeline notifying farmers of receipts, payouts, and announcements"
      ]
    }
  },
  {
    slug: "miliqo",
    id: "03",
    title: "Miliqo",
    year: "2026",
    category: "Rental Management SaaS",
    summary:
      "Multi-tenant property management SaaS. Automated rent billing, arrears calculation, utility sub-metering, and print-ready invoices.",
    description:
      "A multi-tenant SaaS property management platform engineered to eliminate manual ledger tracking for residential and commercial landlords through automated billing engines and utility apportionment.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "RBAC", "WhatsApp API"],
    image: "/images/miliqo.png",
    altText: "Miliqo rental management dashboard showing property and rent collection data",
    seoTitle: "Miliqo | Property Management SaaS Case Study | Ian Kimani",
    status: "Live",
    role: "Designed and built the full-stack product, including the relational data model, billing engine, RBAC, and tenant notifications.",
    outcomes: [
      "Turns recurring rent, utility, deposit, and arrears calculations into a repeatable billing workflow.",
      "Gives landlords and property teams a shared view of occupancy, collections, expenses, and balances.",
      "Reduces reliance on manual ledgers and spreadsheet reconciliation for multi-unit properties."
    ],
    evidence: "Miliqo is a working property-management product focused on the operational details that make rental software useful beyond a dashboard.",
    links: {
      repository: "https://github.com/Ian-Kimani/Miliqo---Property-Management-System"
    },
    featured: true,
    caseStudy: {
      tagline: "Automating billing calculations and utility distribution across multi-unit properties.",
      problem:
        "Managing multiple residential properties in urban Kenya is plagued by manual reconciliation. Tracking which tenant paid via M-Pesa, apportioning communal versus individual sub-meter water and electricity bills, carrying forward floating deposit credits, and manually chasing arrears consume immense operational time and invite errors.",
      architecture:
        "Architected with a modern React SPA client and a resilient Node.js/Express backend paired with PostgreSQL and Prisma ORM. The data schema accurately models polymorphic hierarchies: Estates, Properties, Units, Leases, Meter Readings, and Invoices. A granular Role-Based Access Control (RBAC) layer isolates landlord accounts from property caretakers and auditors.",
      solution:
        "Miliqo automates the monthly billing lifecycle end-to-end. On scheduled billing cycles, it computes prorated rent, calculates precise utility costs from sequential water/power meter snapshots, credits any pre-existing balances, and produces detailed itemized statements. Invoices and payment reminders are dispatched automatically via SMS and WhatsApp integrations, driving on-time rent recovery.",
      highlights: [
        "Automated monthly invoice generation incorporating dynamic sub-meter utility rates",
        "Robust Role-Based Access Control (RBAC) with landlord, manager, and caretaker scopes",
        "Relational ledger maintaining running account balances, security deposits, and credits",
        "Automated tenant notifications over SMS and WhatsApp messaging webhooks",
        "Real-time occupancy metrics, collection rates, and expense tracking visualizations"
      ]
    }
  },
  {
    slug: "smartseason",
    id: "04",
    title: "SmartSeason Field Monitoring",
    year: "2025",
    category: "Agritech : Field Telemetry",
    summary:
      "Platform for agricultural officers to track crop progress, soil conditions, and harvest projections.",
    description:
      "A resilient, offline-capable field survey and crop analytics platform designed for smallholder farmer cooperatives and field officers working in remote agricultural corridors.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "IndexedDB", "PWA", "Data Modeling"],
    image: null,
    seoTitle: "SmartSeason Field Monitoring | Agritech & Offline Data | Ian Kimani",
    status: "Prototype / Completed",
    featured: true,
    caseStudy: {
      tagline: "Reliable agronomic data capture and yield forecasting across disconnected agricultural corridors.",
      problem:
        "Field agronomists visiting smallholder coffee and macadamia farmers spend most of their field days in remote areas with zero cellular connectivity. Paper-based agronomic surveys resulted in delayed reporting on pest infestations, lost soil health observations, and inaccurate yield estimates for cooperative seasonal planning.",
      architecture:
        "Constructed as a Progressive Web Application (PWA) with a local-first storage model leveraging browser IndexedDB. Field agronomists can execute complex assessment forms, record GPS geo-stamps, and attach compressed field photos offline. An intelligent sync worker detects network availability and securely pushes delta bundles to a central PostgreSQL database.",
      solution:
        "SmartSeason enables field extension teams to inspect hundreds of farmer plots seamlessly without worrying about signal bars. The centralized cooperative dashboard translates collected data into agronomic heatmaps, flagging pest outbreaks early and generating predictive harvest timelines that help cooperatives negotiate export contracts in advance.",
      highlights: [
        "Local-first Progressive Web App with IndexedDB offline data cache",
        "Automated background delta sync engine with network quality detection",
        "Agronomic assessment forms capturing soil health, fertilizer applications, and crop stages",
        "Geographical aggregation and early warning alerts for crop pest infestations",
        "Predictive harvest yield forecasting models based on historical delivery curves"
      ]
    }
  },
  {
    slug: "tutapass",
    id: "05",
    title: "TutaPass",
    year: "2026",
    category: "AI Learning Product",
    summary:
      "Human-first AI study coach that helps AZ-900 learners understand why an answer is right, not just whether it is correct.",
    description:
      "A learning product built around explanation, misconception detection, and spaced review rather than simple quiz scores.",
    stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Gemini", "SM-2"],
    image: null,
    altText: "TutaPass AI study coach dashboard for Azure fundamentals learners",
    seoTitle: "TutaPass | AI Study Coach & Responsible AI | Ian Kimani",
    status: "Live / Hackathon Project",
    role: "Designed and built the learner experience, REST API, AI evaluation flow, study progress model, and fallback behavior.",
    outcomes: [
      "Turns each practice question into a loop of answering, explaining, reviewing, and improving.",
      "Surfaces likely misconceptions through Teach-Back and Distractor Autopsy feedback.",
      "Keeps the core demo usable when the AI service is unavailable through deterministic fallback content."
    ],
    evidence: "Built for the Power Learn Project #1MillionDevs Vibe Coding Hackathon, with a live demo and a documented API, data model, and architecture.",
    links: {
      demo: "https://tuta-pass.vercel.app",
      repository: "https://github.com/Ian-Kimani/TutaPass"
    },
    featured: true,
    caseStudy: {
      tagline: "Most quiz apps tell learners whether they are right. TutaPass checks whether they understand why.",
      problem:
        "Learners can recognise cloud-service names and still struggle to distinguish similar ideas in a scenario. A correct answer may also be a lucky guess, but most quiz tools stop at correct or wrong.",
      architecture:
        "The React and Vite client communicates with an Express and PostgreSQL API. Gemini is used for structured explanations and Teach-Back evaluation, while the learning engine tracks readiness, misconceptions, and SM-2 spaced-repetition reviews.",
      solution:
        "TutaPass combines scenario-based questions, a Distractor Autopsy for every option, Teach-Back reasoning checks, a Misconception Map, and Mistake Cards. Learners can also switch between standard explanations, African real-life analogies, and optional Nairobi Sheng.",
      highlights: [
        "Structured JSON output for predictable AI responses instead of unbounded chatbot text",
        "Deterministic fallback content when the Gemini service is slow or unavailable",
        "SM-2 spaced repetition for mistakes that need another review",
        "AI Transparency Lab showing prompts, safety constraints, and fallback state",
        "Original practice content grounded in public learning outlines rather than exam dumps"
      ]
    }
  }
];

export default projects;
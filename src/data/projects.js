const projects = [
  {
    slug: "miliqo",
    id: "01",
    title: "MILIQO",
    category: "RENTAL MANAGEMENT SYSTEM : SAAS",
    description:
      "A complete property management platform handling the entire tenancy lifecycle, automated rent generation, and complex utility cost distribution.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    image: "/images/miliqo.png",
    altText: "Miliqo rental management dashboard showing property and rent collection data",
    seoTitle: "Miliqo | Property Management SaaS Case Study | Ian Kimani",
    status: "Live",
    caseStudy: {
      problem: "Landlords and property managers struggle to manage multiple properties, tenants, and utility bills. Calculating individual electricity and water bills based on varying meter readings is error-prone. Keeping track of partial payments, floating balances, and tenant communication requires constant context-switching across different tools.",
      architecture: "I built Miliqo using a React frontend and a Node.js/Express backend, backed by PostgreSQL and Prisma. The database is carefully designed to link Properties, Houses, and Tenants and all their bills of rent, water, electricity and other expenses. It also features a robust Role-Based Access Control (RBAC) system so managers only ever see their own property data.",
      solution: "The platform completely automates property management.The system automatically generates monthly rent bills, and accurately calculates individual electricity and water bills based on meter readings. It handles complex financials like credit balances, tracks property expenses, and even sends automated SMS and WhatsApp notifications to tenants for pending bills."
    }
  },
  {
    slug: "kahawamanager-edge",
    id: "02",
    title: "KAHAWAMANAGER EDGE",
    category: "COFFEE FACTORY IOT",
    description:
      "An offline-first desktop system for coffee factories, connecting software with weighing hardware and operational workflows.",
    stack: ["Python", "Tkinter", "PostgreSQL/SQLite", "PySerial"],
    image: "/images/kahawa_manager_edge.png",
    altText: "KahawaManager Edge desktop interface showing hardware integration and coffee weighing data",
    seoTitle: "KahawaManager Edge | Offline Desktop & Hardware Integration | Ian Kimani",
    status: "In development",
    related: {
      slug: "kahawamanager-cloud",
      text: "To see how this local data is synchronized to the central office, read the",
      linkText: "KahawaManager Cloud case study"
    },
    caseStudy: {
      problem: "Rural coffee factories often have no internet and face frequent power outages. Using cloud software is impossible, and recording thousands of farmers' coffee deliveries on paper leads to massive delays, calculation errors, and fraud at the weighing station.",
      architecture: "I built an offline-first Desktop application using Python and CustomTkinter, connected to a local database that never loses data. The most critical engineering feature is the hardware integration: I used the `PySerial` library to connect the software directly to industrial digital weighing scales via USB/COM ports, alongside a background threading system to keep the user interface fast.",
      solution: "When a farmer delivers coffee, the system instantly reads the exact, unalterable weight from the digital scale, saves it to the local database, and prints a receipt using an ESC/POS thermal printer then sends SMS notifications if there's internet connectivity. This completely eliminates manual data entry and fraud. Even if the internet is down for weeks, the factory can continue to operate at full speed."
    }
  },
  {
    slug: "kahawamanager-cloud",
    id: "03",
    title: "KAHAWAMANAGER CLOUD",
    category: "DISTRIBUTED SYSTEMS",
    description:
      "A multi-tenant Node.js cloud dashboard that synchronizes via a custom delta-sync protocol with offline edge devices.",
    stack: ["React", "Node.js", "PostgreSQL", "Delta Sync"],
    image: "/images/kahawa_manager_cloud.png",
    altText: "KahawaManager Cloud dashboard displaying distributed analytics and farmer financial records",
    seoTitle: "KahawaManager Cloud | Offline-First Sync Architecture | Ian Kimani",
    status: "In development",
    related: {
      slug: "kahawamanager-edge",
      text: "To see where this data originates and how it is captured offline, read the",
      linkText: "KahawaManager Edge case study"
    },
    caseStudy: {
      problem: "While the Edge app works perfectly at the local factory level, society chairmen and factory managers need to monitor daily yields, track performance, and process financial payouts for thousands of farmers across multiple disconnected factories from a central office.",
      architecture: "I built a Node.js and PostgreSQL cloud dashboard. The biggest engineering challenge was figuring out how to sync data from the offline Edge devices to the Cloud without duplicating records, crashing, or losing data during highly unstable internet connections.",
      solution: "I implemented a custom 'Delta Sync' protocol using logical timestamps. Whenever a factory gets a brief internet connection, the Edge app automatically pushes its latest local transactions to the Cloud API. The Node.js server resolves any conflicts and safely updates the central database. The cloud dashboard then provides real-time analytics and handles the entire financial workflow: tracking factory expenses, processing farmer advances, broadcasting bulk SMS updates, and automatically executing end-of-season payments via payment gateway APIs based on synchronized delivery data."
    }
  },
];

export default projects;
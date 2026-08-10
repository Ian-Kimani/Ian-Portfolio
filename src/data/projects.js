const projects = [
  {
    slug: "miliqo",
    title: "Miliqo",
    category: "SaaS · Rental Management System",
    description:
      "A complete property management platform handling the entire tenancy lifecycle, automated rent generation, and complex utility cost distribution.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    image: "/images/miliqo.png",
    status: "Live",
    caseStudy: {
      problem: "Landlords and property managers struggle to manage multiple properties, tenants, and utility bills. Calculating individual electricity and water bills is time-consuming and error-prone. Keeping track of who paid what, partial payments, and overpayments requires too many spreadsheets and leads to financial losses.",
      architecture: "I built Miliqo using a React frontend and a Node.js/Express backend, backed by PostgreSQL and Prisma. The database is carefully designed to link Properties, Houses, and Tenants and all their bills of rent , water , electricity or others. It also features a robust Role-Based Access Control (RBAC) system so managers only ever see their own property data.",
      solution: "The platform completely automates property management. It tracks lease agreements, automatically generates monthly rent bills, and accurately calculates individual electricity and water bills based on meter readings. It handles complex financials like floating credit balances, tracks property expenses, and even sends automated SMS and WhatsApp notifications to tenants for pending bills."
    }
  },
  {
    slug: "kahawamanager-desktop",
    title: "KahawaManager Edge",
    category: "Desktop · Coffee Factory IoT",
    description:
      "An offline-first Python management system built for coffee factories. It connects directly to hardware scales (via PySerial) to manage daily deliveries, weights, sending sms notifications the moment a farmer weighs his coffee and prints receipts instantly.",
    stack: ["Python", "CustomTkinter", "SQLite", "PySerial"],
    image: "/images/kahawa_manager_edge.png",
    status: "In development",
    caseStudy: {
      problem: "Rural coffee factories often have no internet and face frequent power outages. Using cloud software is impossible, and recording thousands of farmers' coffee deliveries on paper leads to massive delays, calculation errors, and fraud at the weighing station.",
      architecture: "I built an offline-first Desktop application using Python and CustomTkinter, connected to a local database that never loses data. The most critical engineering feature is the hardware integration: I used the `PySerial` library to connect the software directly to industrial digital weighing scales via USB/COM ports, alongside a background threading system to keep the user interface fast.",
      solution: "When a farmer delivers coffee, the system instantly reads the exact, unalterable weight from the digital scale, saves it to the local database, and prints a receipt using an ESC/POS thermal printer then sends SMS notifications if there's internet connectivity. This completely eliminates manual data entry and fraud. Even if the internet is down for weeks, the factory can continue to operate at full speed."
    }
  },
  {
    slug: "kahawamanager-cloud",
    title: "KahawaManager Cloud",
    category: "Web · Distributed Systems",
    description:
      "A multi-tenant Node.js cloud dashboard that synchronizes via a custom delta-sync protocol with offline edge devices. Managers can track global factory yields, metrics, and manage payouts remotely.",
    stack: ["React", "Node.js", "PostgreSQL", "Delta Sync"],
    image: "/images/kahawa_manager_cloud.png",
    status: "In development",
    caseStudy: {
      problem: "While the Edge app works perfectly at the local factory level, cooperative managers need to monitor daily yields, track performance, and process financial payouts for thousands of farmers across multiple disconnected factories from a central office.",
      architecture: "I built a Node.js and PostgreSQL cloud dashboard. The biggest engineering challenge was figuring out how to sync data from the offline Edge devices to the Cloud without duplicating records, crashing, or losing data during highly unstable internet connections.",
      solution: "I implemented a custom 'Delta Sync' protocol using logical timestamps. Whenever a factory gets a brief internet connection, the Edge app automatically pushes its latest local transactions to the Cloud API. The Node.js server resolves any conflicts and safely updates the central database. The cloud dashboard then provides real-time analytics and handles the entire financial workflow: tracking factory expenses, processing farmer advances, broadcasting bulk SMS updates, and automatically executing end-of-season payments via payment gateway APIs based on synchronized delivery data."
    }
  },
];

export default projects;
export const personalInfo = {
  name: "Peter Phoenix",
  title: "Senior Software Engineer",
  email: "peterphoenix00@gmail.com",
  phone: "+6281218006237",
  linkedin: "linkedin.com/in/peter-phoenix",
  bio: "Senior Software Engineer with 4+ years of experience building scalable backend systems, microservices, and cloud infrastructure. Specialized in Go, PostgreSQL, Kubernetes, and distributed systems. ICPC Bronze Medallist with a passion for optimization and system design."
};

export const experience = [
  {
    company: "GoTu",
    location: "Florida, United States",
    role: "Senior Software Engineer",
    period: "January 2025 – Present",
    description: "US-based leading dental talent marketplace",
    highlights: [
      "Discovered and fixed an old issue in the notification process for new job postings, reducing the P95 process time by over 90%, significantly improving system performance and reliability.",
      "Analyzed and optimized a frequently used query based on business requirements, reducing database CPU usage by over 50% and cutting execution time by 90%.",
      "Led and designed the development of new notification system that increases 20% dental talent match rate.",
      "Designed and implemented a new reporting system for finance team that significantly reduces hours of manual work each week.",
      "Migrated multiple process from a TypeScript monolith with MongoDB to a Go-based microservices architecture with PostgreSQL."
    ]
  },
  {
    company: "GovTech Procurement",
    location: "Jakarta, Indonesia",
    role: "Senior Software Engineer",
    period: "January 2024 – December 2024",
    description: "Indonesia's procurement platform handling $150B+ annually",
    highlights: [
      "Automatically and securely migrate more than 670 on-premises servers (Debian, CentOS, FreeBSD, and Solaris) by developing a multi-OS compatible shell script that automates tool installation, security checks, setup peer-to-peer VPN tunnelling, network routing, and also configures all necessary deployments, configs, and migration jobs in GCP using Kubernetes and Terraform, resulting in operational cost savings by over 80%.",
      "Designed and developed an ETL system to support multi-tenancy, consolidating workloads and reducing running pod costs by 70%.",
      "Led meetings and migration system socialization for 100+ government organizations to ensure smooth adoption and alignment.",
      "In charge of server uptime, scalability, maintainability, and observability, ensuring reliable and efficient system performance."
    ]
  },
  {
    company: "GovTech Procurement",
    location: "Jakarta, Indonesia",
    role: "Software Engineer",
    period: "January 2023 – December 2023",
    description: "Indonesia's procurement platform handling $150B+ annually",
    highlights: [
      "One of the first founding engineers who initiated and built the core system used in the company. Created and designed API gateways, authentication methods, and frameworks using Tyk, Auth0, and GraphQL.",
      "Initiated the development of an e-commerce order system from scratch used for a government marketplace that complies with all government procedures and regulations in Go with PostgreSQL for database and Temporal for process orchestration.",
      "Developed an application for generating documents with a government-approved electronic notarization system, with features like e-signature and e-stamping."
    ]
  },
  {
    company: "SIRCLO",
    location: "Banten, Indonesia",
    role: "Associate Software Engineer",
    period: "March 2022 – January 2023",
    description: "Indonesia's leading omnichannel commerce enabler",
    highlights: [
      "Led a team of four backend engineers to develop a new internal API library for managing requests for 10 different third-party logistics used by four different subsidiaries.",
      "Initiated the implementation of internal tooling, resulting in 70% work efficiency through the automation of repetitive tasks for some business units such as customer support and QA, also proposed an internal dashboard for internal admin to use.",
      "Identified and resolved critical security issues within the system, and optimized PostgreSQL database schema and indices resulting in nearly 2x performance improvement."
    ]
  },
  {
    company: "Tiket.com",
    location: "Jakarta, Indonesia",
    role: "Software Engineer Intern",
    period: "February 2021 – February 2022",
    description: "Fastest growing Online Travel Agent (OTA) platform",
    highlights: [
      "Led a team of 3 interns to develop a query engine using Trino, accelerating transaction data tracking by over 80%. This engine retrieves all database records associated with a specific transaction ID and operates across multiple database servers and data sources, including MySQL, PostgreSQL, and BigQuery.",
      "Implemented a ledger system with a microservice orchestrator which ensures data reliability and consistency even if a server crash or another unexpected error occurs by using Temporal.",
      "Applied a more verbose and secure logging system, especially in payment service."
    ]
  }
];

export const projects = [
  {
    title: "Renderin Studio",
    description: "An end-to-end AI platform that transforms raw product images into studio-quality, production-ready product photography.",
    highlights: [
      "Created an end-to-end AI platform that transforms raw product images into studio-quality, production-ready product photography.",
      "Designed the entire product vision, workflow, and website, taking the project from concept to launch.",
      "Built the full user journey, including chat-based onboarding, trial flow, and a streamlined photo submission experience."
    ],
    tags: ["AI", "Computer Vision", "Product Design", "Full-Stack", "UX/UI"],
    link: "https://renderin-studio.com/"
  },
  {
    title: "Automated Data Flow Query Engine",
    description: "Built a dashboard that will show all database records given a transaction ID for selected tables and its reference in another tables.",
    highlights: [
      "Able to operate on different servers and data sources such as MySQL, PostgreSQL, and BigQuery at once.",
      "Support reference ID. If the transaction ID is referenced with a different reference ID in another table, it will show that result as well.",
      "Improve debuggability and reduce manual data tracking time by over 80%."
    ],
    tags: ["Trino", "MySQL", "PostgreSQL", "BigQuery", "Query Optimization"]
  },
  {
    title: "Database Migration System",
    description: "Created scripts that will automatically set up secure VPN tunnelling and migrate databases across different operating systems.",
    highlights: [
      "Created scripts that will automatically set up secure VPN tunnelling, supporting 3 different VPNs, Tailscale, Netbird, and OpenVPN.",
      "Automatically dump all source database data and do CDC from the source database to the destination database without disrupting the current application.",
      "Automatically install all the required tools and configure database configurations such as WAL level, HBA file, replication workers, and extensions.",
      "Works in several different OS such as Solaris, FreeBSD, and Linux-based OS (CentOS, Debian, Ubuntu)."
    ],
    tags: ["Shell Scripting", "VPN", "Database Migration", "CDC", "Multi-OS"]
  }
];

export const education = {
  institution: "Bina Nusantara (BINUS) University",
  location: "Jakarta, Indonesia",
  degree: "Bachelor's Degree, Computer Science",
  period: "2018 – 2022",
  gpa: "3.91 / 4.00",
  activities: [
    {
      title: "Competitive Programming Team",
      period: "September 2018 – September 2021",
      description: "Took part and got awards in several competitive programming contests and wrote various programming problems for internal contests."
    },
    {
      title: "Student Mentor",
      period: "September 2019 – July 2020",
      description: "Obtained Certificate of Excellent Achievement as a student mentor by improving the student's score and got an excellent review from the student as well."
    },
    {
      title: "Informatics Competition Coach for Highschooler",
      period: "January 2020 – February 2020",
      description: "Coached high school students in Jakarta for the city-level National Science Olympiad, with several of them advanced to the provincial level."
    },
    {
      title: "Apple iOS Foundation",
      period: "January 2019 – February 2019",
      description: "One of 20 students selected to join a one-month course provided by Apple. Developed an e-commerce app that enables people to be personal shoppers across countries using Swift programming language."
    }
  ]
};

export const awards = [
  {
    title: "National Bronze Medallist – ICPC Asia Jakarta Regional Contest",
    date: "December 2020",
    description: "Algorithmic programming contest held by the ICPC Foundation, a highly prestigious competitive programming competition for university students around the world."
  },
  {
    title: "First Author – ICCSCI",
    date: "November 2020",
    description: "Wrote and presented a paper titled \"Classifying Promotion Images Using Optical Character Recognition and Naïve Bayes Classifier\" on ICCSCI (International Conference on Computer Science and Computational Intelligence)."
  }
];

export const skills = {
  languages: ["Go", "Java", "JavaScript", "Python", "C", "C++", "HTML", "CSS"],
  frameworks: ["REST API", "RPC", "Go-Chi", "Spring Boot"],
  databases: ["PostgreSQL", "MySQL", "BigQuery", "Redis", "Google CloudSQL"],
  cloud: ["GCP", "AWS", "Docker", "Kubernetes", "Terraform"],
  messageQueues: ["Apache Kafka", "Pub/Sub", "RabbitMQ"],
  orchestration: ["Temporal", "Camunda", "iWF"],
  tools: ["Linux", "FreeBSD", "Solaris", "WSL", "Git", "Arcanist", "Jenkins", "Postman", "GoLand", "IntelliJ"],
  other: ["GraphQL", "gqlgen", "Trino", "Tyk", "Auth0", "Swagger", "Debezium", "DMS", "CDC", "Netbird", "Tailscale", "OpenVPN", "Protobuf"]
};

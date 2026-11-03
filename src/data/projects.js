export const projectGroups = [
  {
    title: 'Featured Projects',
    caption: 'Latest academic and application engineering work demonstrating full-stack development, AI-assisted systems, and scalable application design.',
    items: [
      {
        title: 'FinContext Agent — SEC Filing Portfolio Analysis',
        description:
          'Designed a hybrid retrieval pipeline combining BM25 keyword search, Qdrant vector search with BAAI bge-large-en-v1.5 embeddings, and BAAI bge-reranker-large reranking with reciprocal rank fusion, improving retrieval precision by 16 points (78% to 94%) over vector-only search, with retrieval clients built as swappable, dependency-injected components. Engineered a decoupled FastAPI/Uvicorn inference gateway proxying chat completion, embedding, and reranking requests to NVIDIA NIM. The Agent API owns the end-to-end workflow — hybrid retrieval, LangGraph-based disclosure change detection, and memo generation — processing 500+ SEC filings monthly with sub-2-second query response times.',
        tags: ['Python', 'FastAPI', 'LangGraph', 'Qdrant', 'NVIDIA NIM', 'Docker'],
        actions: [
          {
            type: 'github',
            label: 'View FinContext Agent on GitHub',
            href: 'https://github.com/kishankc123/Finance-Context-Agent',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(200, 150, 255, 0.2), rgba(0, 0, 0, 0.42))',
      },
      {
        title: 'CBMS — Multi-Tenant Client Accounting Platform',
        description:
          'A multi-tenant SaaS accounting platform built on a double-entry bookkeeping engine, where every transaction posts balanced journal entries and reports (Ledger, Trial Balance, P&L, Balance Sheet) are derived directly from them. Built with Next.js, NextAuth, Drizzle ORM, and PostgreSQL, with per-tenant data isolation and role-based permissions across Super Admin, Admin, and User roles.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'NextAuth', 'Zod'],
        actions: [
          {
            type: 'github',
            label: 'View CBMS on GitHub',
            href: 'https://github.com/kishankc123/cbms',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(130, 255, 200, 0.2), rgba(0, 0, 0, 0.42))',
      },
      {
        title: 'Tipa — Inventory Management System',
        description:
          'A ~20-route inventory management dashboard built with React 19, Next.js 16 (App Router), and TypeScript, covering products, bulk import, reports, logs, and team management, with loading skeletons, error, and empty states on every view. Integrates with a Django REST backend through a layered API architecture (typed api.ts functions over a central apiFetch client) handling JWT auth, automatic Bearer headers, typed error handling, 401 redirects, and pagination. Dashboard and report views use Recharts for a daily-stock area chart, stat cards, and a weekly activity strip, with a responsive UI in Tailwind CSS v4, shadcn/ui, and Radix UI, tested with Vitest and React Testing Library.',
        tags: ['Next.js', 'React', 'TypeScript', 'Django REST', 'shadcn/ui', 'Recharts'],
        actions: [
          {
            type: 'github',
            label: 'View Tipa on GitHub',
            href: 'https://github.com/kishankc123/Tipa',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(255, 205, 130, 0.2), rgba(0, 0, 0, 0.42))',
      },
      {
        title: 'MovieLens 100K Recommender System',
        description:
          'Built recommendation pipelines in Python for collaborative, content-based, and hybrid ranking, implementing LightGCN with PyTorch and evaluating performance on the MovieLens 100K dataset.',
        tags: ['Python', 'PyTorch', 'Machine Learning', 'Google Colab'],
        actions: [
          {
            type: 'github',
            label: 'View MovieLens 100K Recommender System on GitHub',
            href: 'https://github.com/kishankc123/Advanced_Machine_Learning/blob/main/MovieLens100k.ipynb',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(144, 165, 255, 0.22), rgba(0, 0, 0, 0.42))',
      },
      {
        title: 'WeCureIt — Clinical Scheduling System',
        description:
          'A full-stack clinical scheduling platform built with Next.js, TypeScript, Node.js, Prisma, and PostgreSQL, enabling secure appointment management for patients, providers, and administrators through role-based workflows. Engineered a three-layer scheduling validation architecture combining business logic, PostgreSQL composite constraints, and Prisma transactions to guarantee atomic appointment booking while preventing conflicts across 500+ concurrent scheduling scenarios, secured with NextAuth, RBAC, middleware protection, and AES-256 encryption.',
        tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Prisma ORM', 'PostgreSQL'],
        actions: [
          {
            type: 'vercel',
            label: 'Open WeCureIt on Vercel',
            href: 'https://we-cure-it2-v2-la2w6k8qb-kishans-projects-3ea8dea8.vercel.app/',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(111, 160, 255, 0.22), rgba(0, 0, 0, 0.42))',
      },
      {
        title: 'AWS Academy Coursework — Three-Tier Web Application',
        description:
          'Architected and deployed a three-tier web application on AWS combining an RDS MySQL database, an Auto Scaling group of EC2 application servers across multiple Availability Zones, and an internet-facing Application Load Balancer, validated end-to-end through a live public-facing query application. Built serverless, event-driven data pipelines using AWS Lambda, DynamoDB, DynamoDB Streams, SNS, and EventBridge Scheduler, and automated infrastructure deployment with AWS CloudFormation and a CI/CD pipeline built with CodePipeline and CodeCommit, defining VPC networking and application stacks as YAML templates.',
        tags: ['AWS', 'EC2', 'RDS', 'Lambda', 'DynamoDB', 'CloudFormation'],
        actions: [],
        accent:
          'linear-gradient(135deg, rgba(255, 170, 90, 0.22), rgba(0, 0, 0, 0.42))',
      },
      {
        title: 'Dynamic Test-Time Training for Image Classification',
        description:
          'Improved robustness under blur and stylized distribution shifts with a research-driven test-time training system in PyTorch, achieving strong gains on distorted image inputs.',
        tags: ['Python', 'PyTorch', 'Machine Learning', 'Google Colab'],
        actions: [
          {
            type: 'github',
            label: 'View more projects on GitHub',
            href: 'https://github.com/kishankc123/',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0.45))',
      },
      {
        title: 'AI-Assisted Video Content Summarization',
        description:
          'Built an AI-powered learning platform that generated timestamped summaries and quizzes using GPT APIs with a Flask backend, Vue.js frontend, OpenCV processing, and Linux-based workflows.',
        tags: ['Python', 'Flask', 'Vue.js', 'GPT API Integration', 'OpenCV', 'Docker'],
        actions: [
          {
            type: 'github',
            label: 'View more projects on GitHub',
            href: 'https://github.com/kishankc123/AI-Assisted-Learning',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(166, 217, 255, 0.14), rgba(0, 0, 0, 0.45))',
      },
    ],
  },
];

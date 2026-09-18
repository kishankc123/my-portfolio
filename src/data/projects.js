export const projectGroups = [
  {
    title: 'Featured Projects',
    caption: 'Latest academic and application engineering work demonstrating full-stack development, AI-assisted systems, and scalable application design.',
    items: [
      {
        title: 'FinContext Agent — SEC Filing Portfolio Analysis',
        description:
          'Team project for the AMD Developer Hackathon 2026 (AI Agents track). Ingests 10-K and 10-Q filings from EDGAR, detects changes in disclosure language over time, scores holding-level risk, and generates analyst-style memos that cite exact filing chunks. Built with a LangGraph agent workflow on FastAPI, an inference gateway routing to NVIDIA NIM-hosted Qwen models, Qdrant vector retrieval with BGE embeddings and reranking, SQLite metadata, and a React (Vite) UI.',
        tags: ['Python', 'FastAPI', 'LangGraph', 'React', 'Qdrant', 'Docker'],
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
          'A full-featured inventory management web app covering products, categories, groups, units, store places, team members, and reporting, backed by a layered data-flow architecture (page → api.ts → apiFetch → proxy route → backend) with JWT-based auth. Built with Next.js, React, TypeScript, shadcn/radix-ui, and Recharts for reporting dashboards.',
        tags: ['Next.js', 'React', 'TypeScript', 'shadcn/ui', 'Recharts'],
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
        title: 'WeCureIt',
        description:
          'A secure role-based clinical scheduling platform built with Next.js, React, TypeScript, Node.js, Prisma ORM, and PostgreSQL, with concurrency-safe booking logic and 2FA-backed authentication.',
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

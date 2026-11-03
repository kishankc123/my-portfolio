export const experience = [
  {
    company: 'Z2ONE AI',
    role: 'React Frontend Engineer',
    date: 'June 2025 - Present',
    logo: '◈',
    points: [
      'Redesigned and shipped Saathi, a React 19 mental-health application spanning 7 routed experiences and 58 JSX modules, unifying marketing, protected chat, safety, partner, urgent-help, and recovery flows.',
      'Architected authentication and routing with React Router, Context, protected routes, session storage, React.lazy/Suspense, and a route error boundary, isolating the chat bundle and recovering from stale deployments.',
      'Built a real-time conversational UI integrating 8 authenticated chat and voice endpoints, streamed deltas/status events, abortable requests, source views, model controls, and explicit loading/error states.',
      'Engineered persistent chat state for up to 20 conversations and 120 messages per thread, including model settings, conversation titles, deletion, voice modes, and mobile navigation.',
      'Developed multilingual voice UX for English, Spanish, Hindi, and Nepali with MediaRecorder, Web Audio, speech recognition, voice-activity gating, transcript validation, and live telemetry.',
      'Implemented accessible dialogs, menus, forms, and live chat using semantic HTML, ARIA states/live regions, keyboard focus trapping and restoration, Escape handling, and reduced-motion fallbacks.',
      'Expanded frontend quality to 149 automated checks across 16 test files covering routing, authentication, chat, voice, responsive CSS, and accessibility.',
      'Built CRM4Attorney as a 6-page React 19/TypeScript application using 50 TSX modules, 14 data modules, 8 reusable UI primitives, and a feature-oriented component architecture, delivering responsive legal-product UX with 41 CSS Modules, accessible mega menus, a mobile drawer, and GSAP/Lenis motion.',
    ],
  },
  {
    company: 'Beehive Technologies',
    role: 'Software Engineer',
    date: 'Jan 2023 - July 2024',
    logo: '◉',
    points: [
      'Built multi-tenant analytics workflows as part of a team, serving 1,000+ users across multiple organizations, developing REST endpoints and GraphQL resolvers across React, Next.js, TypeScript, Node.js, and PostgreSQL, containerized with Docker, while maintaining 99.9% application availability and strict tenant isolation.',
      'Constructed automated testing pipelines using Jest, Supertest for integration testing, and GitHub Actions CI/CD, increasing test coverage to over 85%, catching defects before they reached production with no critical data leak incidents reported across multiple releases.',
      'Debugged frontend performance bottlenecks by consolidating redundant API requests by 57% (14 to 6) using React Query caching with stale-while-revalidate, improving Lighthouse performance scores and shipping a 30% faster, more responsive dashboard for production users.',
      'Fortified application security through layered role-based access control using JWT authentication, Express.js middleware, GraphQL authorization directives, PostgreSQL row-level security, and protected React routes, reducing cross-tenant data exposure.',
    ],
  },
  {
    company: 'Devops Technology',
    role: 'Software Developer',
    date: 'June 2022 - Dec 2022',
    logo: '△',
    points: [
      'Built a reusable React component library including DataTable, Modal, FormInput, ConfirmDialog, Dropdown, Badge, and Card, standardizing UI patterns across the application and reducing feature development time by 50% (two days to one day) while improving overall interface consistency for the engineering team.',
      "Developed application features that consumed an existing normalized Redux Toolkit state architecture, reading data through memoized selectors and dispatching actions across multiple views, ensuring new functionality integrated cleanly within the team's established state management patterns and conventions.",
      'Constructed automated integration testing workflows validating more than twelve REST API endpoints consumed by the React frontend, using Postman alongside deployment pipelines, which helped prevent three frontend-backend contract mismatches from reaching production across multiple release cycles.',
      'Debugged PostgreSQL query performance issues through targeted indexing strategies, execution plan analysis, and query restructuring, improving API response times by 25% under peak production workloads and directly speeding up data rendering within the React frontend.',
    ],
  },
];

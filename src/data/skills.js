import { buildSkillBadge } from './skillBadges';

export const skillCategories = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'Kotlin', 'SQL', 'Bash'].map(buildSkillBadge),
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'React Query', 'Redux Toolkit', 'Ant Design', 'Vue.js'].map(buildSkillBadge),
  },
  {
    title: 'AI & LLM Tools',
    items: ['LangGraph', 'RAG', 'NVIDIA NIM', 'Prompt Engineering', 'GPT API Integration', 'Gemini', 'GitHub Copilot', 'Cursor', 'PyTorch'].map(buildSkillBadge),
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Linux', 'Git', 'GitLab', 'Vercel'].map(buildSkillBadge),
  },
  {
    title: 'AWS',
    items: ['Amazon EC2', 'Amazon S3', 'Amazon RDS', 'AWS Lambda', 'Amazon DynamoDB', 'AWS CloudFormation', 'Amazon VPC', 'AWS IAM', 'AWS CodePipeline', 'AWS CodeCommit'].map(buildSkillBadge),
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs', 'GraphQL', 'Prisma ORM', 'PostgreSQL', 'MySQL', 'SQLite', 'Qdrant', 'Spring Boot', 'OAuth 2.0', 'JWT', 'Swagger UI', 'OpenCV'].map(buildSkillBadge),
  },
  {
    title: 'Mobile & Edge',
    items: ['Kotlin Multiplatform', 'Android', 'iOS', 'SwiftUI', 'UIKit'].map(buildSkillBadge),
  },
  {
    title: 'Testing & Methodologies',
    items: ['Jest', 'Postman', 'Lighthouse', 'Agile Methodologies'].map(buildSkillBadge),
  },
];

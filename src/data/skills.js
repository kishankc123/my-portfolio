import { buildSkillBadge } from './skillBadges';

export const skillCategories = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'Bash'].map(buildSkillBadge),
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3'].map(buildSkillBadge),
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'Prisma ORM'].map(buildSkillBadge),
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux'].map(buildSkillBadge),
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Redis'].map(buildSkillBadge),
  },
  {
    title: 'Tools',
    items: ['Git', 'Postman', 'Jira', 'Jest', 'Agile Methodologies'].map(buildSkillBadge),
  },
];

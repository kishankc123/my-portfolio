import awsIcon from '../svg/AWS.svg';
import antDesignIcon from '../svg/Ant-Design.svg';
import bashIcon from '../svg/Bash.svg';
import bootstrapIcon from '../svg/Bootstrap.svg';
import cppIcon from '../svg/C++-(CPlusPlus).svg';
import cssIcon from '../svg/CSS3.svg';
import dockerIcon from '../svg/Docker.svg';
import expressIcon from '../svg/Express.svg';
import fastapiIcon from '../svg/FastAPI.svg';
import flaskIcon from '../svg/Flask.svg';
import gitIcon from '../svg/Git.svg';
import githubActionsIcon from '../svg/GitHub-Actions.svg';
import githubIcon from '../svg/GitHub.svg';
import gitlabIcon from '../svg/GitLab.svg';
import googleIcon from '../svg/Google.svg';
import graphqlIcon from '../svg/GraphQL.svg';
import htmlIcon from '../svg/HTML5.svg';
import javaIcon from '../svg/Java.svg';
import javascriptIcon from '../svg/JavaScript.svg';
import jiraIcon from '../svg/Jira.svg';
import kotlinIcon from '../svg/Kotlin.svg';
import kubernetesIcon from '../svg/Kubernetes.svg';
import linuxIcon from '../svg/Linux.svg';
import mysqlIcon from '../svg/MySQL.svg';
import nextIcon from '../svg/Next.js.svg';
import nodeIcon from '../svg/Node.js.svg';
import opencvIcon from '../svg/OpenCV.svg';
import postgresqlIcon from '../svg/PostgresSQL.svg';
import postmanIcon from '../svg/Postman.svg';
import pythonIcon from '../svg/Python.svg';
import pytorchIcon from '../svg/PyTorch.svg';
import reactIcon from '../svg/React.svg';
import reduxIcon from '../svg/Redux.svg';
import springIcon from '../svg/Spring.svg';
import sqliteIcon from '../svg/SQLite.svg';
import swaggerIcon from '../svg/Swagger.svg';
import swiftIcon from '../svg/Swift.svg';
import tailwindIcon from '../svg/Tailwind-CSS.svg';
import trelloIcon from '../svg/Trello.svg';
import typescriptIcon from '../svg/TypeScript.svg';
import vercelIcon from '../svg/Vercel.svg';
import vueIcon from '../svg/Vue.js.svg';
import androidIcon from '../svg/Android.svg';

const skillMeta = {
  TypeScript: { icon: 'TS', iconBg: 'rgba(49, 120, 198, 0.18)', iconColor: '#6cb3ff', borderColor: 'rgba(108, 179, 255, 0.32)' },
  JavaScript: { icon: 'JS', iconBg: 'rgba(247, 223, 30, 0.16)', iconColor: '#ffe55e', borderColor: 'rgba(255, 229, 94, 0.28)' },
  Python: { icon: 'Py', iconBg: 'rgba(64, 139, 255, 0.16)', iconColor: '#8fc1ff', borderColor: 'rgba(143, 193, 255, 0.28)' },
  Java: { icon: 'Jv', iconBg: 'rgba(230, 109, 74, 0.16)', iconColor: '#ffb39a', borderColor: 'rgba(255, 179, 154, 0.28)' },
  'C++': { icon: 'C+', iconBg: 'rgba(0, 102, 204, 0.16)', iconColor: '#8bbcff', borderColor: 'rgba(139, 188, 255, 0.28)' },
  Bash: { icon: '>_', iconBg: 'rgba(84, 169, 89, 0.16)', iconColor: '#9ce5a0', borderColor: 'rgba(156, 229, 160, 0.28)' },
  PHP: { icon: 'PHP', iconBg: 'rgba(119, 123, 179, 0.18)', iconColor: '#bcc0ff', borderColor: 'rgba(188, 192, 255, 0.28)' },
  HTML5: { icon: 'H5', iconBg: 'rgba(227, 79, 38, 0.16)', iconColor: '#ffaf94', borderColor: 'rgba(255, 175, 148, 0.28)' },
  CSS3: { icon: 'C3', iconBg: 'rgba(38, 77, 228, 0.16)', iconColor: '#95a9ff', borderColor: 'rgba(149, 169, 255, 0.28)' },
  HTML: { icon: 'H5', iconBg: 'rgba(227, 79, 38, 0.16)', iconColor: '#ffaf94', borderColor: 'rgba(255, 175, 148, 0.28)' },
  CSS: { icon: 'C3', iconBg: 'rgba(38, 77, 228, 0.16)', iconColor: '#95a9ff', borderColor: 'rgba(149, 169, 255, 0.28)' },
  React: { icon: '⚛', iconBg: 'rgba(97, 218, 251, 0.16)', iconColor: '#92eeff', borderColor: 'rgba(146, 238, 255, 0.28)' },
  'Next.js': { icon: 'N', iconBg: 'rgba(255, 255, 255, 0.1)', iconColor: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.24)' },
  'Vue.js': { icon: 'V', iconBg: 'rgba(65, 184, 131, 0.16)', iconColor: '#8ff0bb', borderColor: 'rgba(143, 240, 187, 0.28)' },
  'Redux Toolkit': { icon: 'RTK', iconBg: 'rgba(118, 74, 188, 0.18)', iconColor: '#c7a7ff', borderColor: 'rgba(199, 167, 255, 0.28)' },
  'Tailwind CSS': { icon: 'TW', iconBg: 'rgba(56, 189, 248, 0.16)', iconColor: '#9ae7ff', borderColor: 'rgba(154, 231, 255, 0.28)' },
  'Ant Design': { icon: 'Ant', iconBg: 'rgba(1, 120, 255, 0.16)', iconColor: '#96c7ff', borderColor: 'rgba(150, 199, 255, 0.28)' },
  Bootstrap: { icon: 'B', iconBg: 'rgba(121, 82, 179, 0.18)', iconColor: '#d2b6ff', borderColor: 'rgba(210, 182, 255, 0.28)' },
  'Node.js': { icon: '⬢', iconBg: 'rgba(104, 160, 99, 0.18)', iconColor: '#a7e39f', borderColor: 'rgba(167, 227, 159, 0.28)' },
  'Express.js': { icon: 'Ex', iconBg: 'rgba(255, 255, 255, 0.1)', iconColor: '#f6f8fb', borderColor: 'rgba(255, 255, 255, 0.24)' },
  Flask: { icon: 'Fl', iconBg: 'rgba(255, 255, 255, 0.1)', iconColor: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.24)' },
  'REST APIs': { icon: '{}', iconBg: 'rgba(97, 110, 124, 0.18)', iconColor: '#d8e1ef', borderColor: 'rgba(216, 225, 239, 0.28)' },
  PostgreSQL: { icon: 'Pg', iconBg: 'rgba(51, 103, 145, 0.18)', iconColor: '#9cc5ef', borderColor: 'rgba(156, 197, 239, 0.28)' },
  MySQL: { icon: 'My', iconBg: 'rgba(0, 117, 143, 0.18)', iconColor: '#91e0f4', borderColor: 'rgba(145, 224, 244, 0.28)' },
  'MS SQL': { icon: 'SQL', iconBg: 'rgba(204, 61, 61, 0.18)', iconColor: '#ffb0b0', borderColor: 'rgba(255, 176, 176, 0.28)' },
  'Prisma ORM': { icon: 'Pr', iconBg: 'rgba(92, 107, 192, 0.18)', iconColor: '#aab8ff', borderColor: 'rgba(170, 184, 255, 0.28)' },
  Docker: { icon: '🐳', iconBg: 'rgba(13, 183, 237, 0.18)', iconColor: '#8fe8ff', borderColor: 'rgba(143, 232, 255, 0.28)' },
  AWS: { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'GitHub Actions': { icon: 'GA', iconBg: 'rgba(32, 136, 255, 0.18)', iconColor: '#9bc9ff', borderColor: 'rgba(155, 201, 255, 0.28)' },
  'CI/CD': { icon: 'CI', iconBg: 'rgba(55, 130, 255, 0.18)', iconColor: '#a8cbff', borderColor: 'rgba(168, 203, 255, 0.28)' },
  Linux: { icon: '🐧', iconBg: 'rgba(245, 206, 66, 0.18)', iconColor: '#ffe48e', borderColor: 'rgba(255, 228, 142, 0.28)' },
  Postman: { icon: 'Pm', iconBg: 'rgba(255, 108, 55, 0.18)', iconColor: '#ffb89e', borderColor: 'rgba(255, 184, 158, 0.28)' },
  Jira: { icon: 'Jr', iconBg: 'rgba(38, 132, 255, 0.18)', iconColor: '#9ec8ff', borderColor: 'rgba(158, 200, 255, 0.28)' },
  Trello: { icon: 'Tr', iconBg: 'rgba(0, 121, 191, 0.18)', iconColor: '#98dcff', borderColor: 'rgba(152, 220, 255, 0.28)' },
  Git: { icon: 'Git', iconBg: 'rgba(240, 80, 51, 0.18)', iconColor: '#ffb29e', borderColor: 'rgba(255, 178, 158, 0.28)' },
  Redis: { icon: 'Re', iconBg: 'rgba(220, 64, 50, 0.18)', iconColor: '#ffb4ac', borderColor: 'rgba(255, 180, 172, 0.28)' },
  Jest: { icon: 'Je', iconBg: 'rgba(153, 78, 50, 0.18)', iconColor: '#efc1ae', borderColor: 'rgba(239, 193, 174, 0.28)' },
  'Agile Methodologies': { icon: 'Ag', iconBg: 'rgba(99, 134, 189, 0.18)', iconColor: '#b6d2ff', borderColor: 'rgba(182, 210, 255, 0.28)' },
  'GPT API Integration': { icon: 'AI', iconBg: 'rgba(16, 163, 127, 0.18)', iconColor: '#9af1d4', borderColor: 'rgba(154, 241, 212, 0.28)' },
  OpenCV: { icon: 'CV', iconBg: 'rgba(92, 109, 228, 0.18)', iconColor: '#b4c1ff', borderColor: 'rgba(180, 193, 255, 0.28)' },
  'Machine Learning': { icon: 'ML', iconBg: 'rgba(138, 92, 246, 0.18)', iconColor: '#d1b4ff', borderColor: 'rgba(209, 180, 255, 0.28)' },
  Xcode: { icon: 'X', iconBg: 'rgba(20, 164, 255, 0.18)', iconColor: '#92dcff', borderColor: 'rgba(146, 220, 255, 0.28)' },
  'MS Visual Studio': { icon: 'VS', iconBg: 'rgba(104, 33, 122, 0.2)', iconColor: '#e0a7ff', borderColor: 'rgba(224, 167, 255, 0.28)' },
  Kotlin: { icon: 'Kt', iconBg: 'rgba(127, 82, 255, 0.18)', iconColor: '#c7b2ff', borderColor: 'rgba(199, 178, 255, 0.28)' },
  SQL: { icon: 'SQL', iconBg: 'rgba(97, 110, 124, 0.18)', iconColor: '#d8e1ef', borderColor: 'rgba(216, 225, 239, 0.28)' },
  'React Query': { icon: 'RQ', iconBg: 'rgba(255, 64, 129, 0.16)', iconColor: '#ff9ebf', borderColor: 'rgba(255, 158, 191, 0.28)' },
  GraphQL: { icon: 'GQ', iconBg: 'rgba(225, 0, 152, 0.16)', iconColor: '#ff8fd0', borderColor: 'rgba(255, 143, 208, 0.28)' },
  FastAPI: { icon: 'Fa', iconBg: 'rgba(5, 150, 105, 0.18)', iconColor: '#8ff0c9', borderColor: 'rgba(143, 240, 201, 0.28)' },
  LangGraph: { icon: 'LG', iconBg: 'rgba(138, 92, 246, 0.18)', iconColor: '#d1b4ff', borderColor: 'rgba(209, 180, 255, 0.28)' },
  RAG: { icon: 'RAG', iconBg: 'rgba(138, 92, 246, 0.18)', iconColor: '#d1b4ff', borderColor: 'rgba(209, 180, 255, 0.28)' },
  'NVIDIA NIM': { icon: 'NV', iconBg: 'rgba(118, 185, 0, 0.18)', iconColor: '#baf27a', borderColor: 'rgba(186, 242, 122, 0.28)' },
  'Prompt Engineering': { icon: 'PE', iconBg: 'rgba(138, 92, 246, 0.14)', iconColor: '#d1b4ff', borderColor: 'rgba(209, 180, 255, 0.24)' },
  'GPT API Integration': { icon: 'AI', iconBg: 'rgba(16, 163, 127, 0.18)', iconColor: '#9af1d4', borderColor: 'rgba(154, 241, 212, 0.28)' },
  Gemini: { icon: 'Ge', iconBg: 'rgba(66, 133, 244, 0.16)', iconColor: '#a7c7ff', borderColor: 'rgba(167, 199, 255, 0.28)' },
  'GitHub Copilot': { icon: 'Co', iconBg: 'rgba(240, 80, 51, 0.16)', iconColor: '#ffb29e', borderColor: 'rgba(255, 178, 158, 0.28)' },
  Cursor: { icon: 'Cu', iconBg: 'rgba(255, 255, 255, 0.1)', iconColor: '#f5f7fb', borderColor: 'rgba(255, 255, 255, 0.22)' },
  Kubernetes: { icon: 'K8s', iconBg: 'rgba(50, 108, 229, 0.18)', iconColor: '#9fb8ff', borderColor: 'rgba(159, 184, 255, 0.28)' },
  GitLab: { icon: 'GL', iconBg: 'rgba(226, 67, 41, 0.16)', iconColor: '#ffab93', borderColor: 'rgba(255, 171, 147, 0.28)' },
  Vercel: { icon: '▲', iconBg: 'rgba(255, 255, 255, 0.1)', iconColor: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.24)' },
  'Amazon EC2': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'Amazon S3': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'Amazon RDS': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'AWS Lambda': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'Amazon DynamoDB': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'AWS CloudFormation': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'Amazon VPC': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'AWS IAM': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'AWS CodePipeline': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  'AWS CodeCommit': { icon: 'aws', iconBg: 'rgba(255, 153, 0, 0.18)', iconColor: '#ffd18d', borderColor: 'rgba(255, 209, 141, 0.28)' },
  SQLite: { icon: 'Li', iconBg: 'rgba(51, 103, 145, 0.18)', iconColor: '#9cc5ef', borderColor: 'rgba(156, 197, 239, 0.28)' },
  Qdrant: { icon: 'Qd', iconBg: 'rgba(220, 38, 38, 0.16)', iconColor: '#ffaeae', borderColor: 'rgba(255, 174, 174, 0.28)' },
  'Spring Boot': { icon: 'Sp', iconBg: 'rgba(109, 179, 63, 0.18)', iconColor: '#b6e68c', borderColor: 'rgba(182, 230, 140, 0.28)' },
  Uvicorn: { icon: 'Uv', iconBg: 'rgba(79, 70, 229, 0.18)', iconColor: '#b7b0ff', borderColor: 'rgba(183, 176, 255, 0.28)' },
  'OAuth 2.0': { icon: 'OA', iconBg: 'rgba(97, 110, 124, 0.18)', iconColor: '#d8e1ef', borderColor: 'rgba(216, 225, 239, 0.28)' },
  JWT: { icon: 'JWT', iconBg: 'rgba(219, 39, 119, 0.16)', iconColor: '#ff9ecb', borderColor: 'rgba(255, 158, 203, 0.28)' },
  'Swagger UI': { icon: 'OA', iconBg: 'rgba(133, 234, 45, 0.16)', iconColor: '#c4f58a', borderColor: 'rgba(196, 245, 138, 0.28)' },
  'Kotlin Multiplatform': { icon: 'KMP', iconBg: 'rgba(127, 82, 255, 0.18)', iconColor: '#c7b2ff', borderColor: 'rgba(199, 178, 255, 0.28)' },
  Android: { icon: 'An', iconBg: 'rgba(164, 198, 57, 0.18)', iconColor: '#d4ea9c', borderColor: 'rgba(212, 234, 156, 0.28)' },
  iOS: { icon: 'iOS', iconBg: 'rgba(255, 255, 255, 0.1)', iconColor: '#f5f7fb', borderColor: 'rgba(255, 255, 255, 0.22)' },
  SwiftUI: { icon: 'SU', iconBg: 'rgba(240, 81, 56, 0.16)', iconColor: '#ffab9a', borderColor: 'rgba(255, 171, 154, 0.28)' },
  UIKit: { icon: 'UI', iconBg: 'rgba(240, 81, 56, 0.16)', iconColor: '#ffab9a', borderColor: 'rgba(255, 171, 154, 0.28)' },
  Lighthouse: { icon: 'Lh', iconBg: 'rgba(245, 158, 11, 0.18)', iconColor: '#ffd48f', borderColor: 'rgba(255, 212, 143, 0.28)' },
};

const skillIconFileMap = {
  TypeScript: typescriptIcon,
  JavaScript: javascriptIcon,
  Python: pythonIcon,
  Java: javaIcon,
  'C++': cppIcon,
  Bash: bashIcon,
  HTML5: htmlIcon,
  CSS3: cssIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
  React: reactIcon,
  'Next.js': nextIcon,
  'Vue.js': vueIcon,
  'Redux Toolkit': reduxIcon,
  'Tailwind CSS': tailwindIcon,
  'Ant Design': antDesignIcon,
  Bootstrap: bootstrapIcon,
  'Node.js': nodeIcon,
  'Express.js': expressIcon,
  Flask: flaskIcon,
  PostgreSQL: postgresqlIcon,
  MySQL: mysqlIcon,
  Docker: dockerIcon,
  AWS: awsIcon,
  'GitHub Actions': githubActionsIcon,
  Linux: linuxIcon,
  Postman: postmanIcon,
  Jira: jiraIcon,
  Trello: trelloIcon,
  Git: gitIcon,
  OpenCV: opencvIcon,
  PyTorch: pytorchIcon,
  'Google Colab': googleIcon,
  Kotlin: kotlinIcon,
  'Kotlin Multiplatform': kotlinIcon,
  GraphQL: graphqlIcon,
  FastAPI: fastapiIcon,
  'GitHub Copilot': githubIcon,
  Kubernetes: kubernetesIcon,
  GitLab: gitlabIcon,
  Vercel: vercelIcon,
  SQLite: sqliteIcon,
  'Spring Boot': springIcon,
  'Swagger UI': swaggerIcon,
  SwiftUI: swiftIcon,
  UIKit: swiftIcon,
  Android: androidIcon,
};

const resolveSkillSvg = (label) => skillIconFileMap[label] || '';

export const buildSkillBadge = (label) => {
  const meta = skillMeta[label];

  if (meta) {
    return { label, ...meta, svg: resolveSkillSvg(label) };
  }

  return {
    label,
    icon: label.slice(0, 2).toUpperCase(),
    iconBg: 'rgba(255, 255, 255, 0.1)',
    iconColor: '#f5f7fb',
    borderColor: 'rgba(255, 255, 255, 0.22)',
    svg: resolveSkillSvg(label),
  };
};

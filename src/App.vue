<template>
  <div class="portfolio-shell">
    <div class="top-progress" :style="{ width: `${scrollProgress}%` }"></div>

    <section id="hero" class="hero-section">
      <div class="hero-pattern"></div>
      <div class="hero-copy">
        <h1 class="hero-name">KISHAN K C</h1>
        <div class="hero-divider"></div>
        <p class="hero-role">{{ heroRole }}</p>

        <div class="hero-actions">
          <template v-for="link in socialLinks" :key="link.label">
            <a
              v-if="link.href"
              :href="link.href"
              class="icon-button"
              :aria-label="link.label"
              :title="link.label"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                v-if="link.icon !== 'indeed'"
                class="social-icon"
                :viewBox="brandIcons[link.icon].viewBox"
                aria-hidden="true"
              >
                <path
                  v-for="(path, index) in brandIcons[link.icon].paths"
                  :key="`${link.icon}-${index}`"
                  v-bind="path"
                />
              </svg>
              <span v-else class="social-wordmark indeed-wordmark" aria-hidden="true">
                in
              </span>
            </a>

            <span
              v-else
              class="icon-button icon-button-disabled"
              :aria-label="`${link.label} unavailable`"
              :title="`${link.label} link coming soon`"
            >
              <span v-if="link.icon === 'indeed'" class="social-wordmark indeed-wordmark">
                in
              </span>
              <svg
                v-else
                class="social-icon"
                :viewBox="brandIcons[link.icon].viewBox"
                aria-hidden="true"
              >
                <path
                  v-for="(path, index) in brandIcons[link.icon].paths"
                  :key="`${link.icon}-${index}`"
                  v-bind="path"
                />
              </svg>
            </span>
          </template>

          <button class="pill-button" @click="scrollTo('contact')">
            Let's Talk
          </button>
        </div>

        <div class="hero-section-nav" aria-label="Section shortcuts">
          <button
            v-for="section in sectionLinks"
            :key="section.id"
            type="button"
            class="section-jump"
            @click="scrollTo(section.id)"
          >
            <span class="section-jump-icon" aria-hidden="true">{{ section.icon }}</span>
            <span>{{ section.label }}</span>
          </button>
        </div>

        <button class="scroll-cue" @click="scrollTo('about')">
          <!-- <span class="scroll-arrow">↓</span>
          <span>Scroll Down</span> -->
        </button>
      </div>

    </section>

    <main>
      <section id="about" class="content-section section-light about-section">
        <div class="section-inner">
          <div class="section-heading">
            <span class="section-marker">◀</span>
            <div>
              <h2>About Me</h2>
              <p>{{ summary }}</p>
            </div>
          </div>

          <div class="journey-block">
            <div class="journey-intro">
              <h3>Journey</h3>
              <p>{{ journeyIntro }}</p>
              <div class="triangle-grid" aria-hidden="true">
                <span v-for="n in 35" :key="n"></span>
              </div>
            </div>

            <div class="journey-timeline">
              <article
                v-for="(item, index) in journeyTimeline"
                :key="`${item.type}-${item.title}`"
                class="journey-card"
                :class="{ expanded: expandedJourneyIndex === index }"
                :id="item.anchorId || undefined"
              >
                <div class="journey-year" aria-hidden="true">{{ item.year }}</div>
                <div class="journey-node" aria-hidden="true"></div>
                <div class="journey-card-shell">
                  <button
                    class="journey-toggle"
                    type="button"
                    @click="toggleJourney(index)"
                    :aria-expanded="expandedJourneyIndex === index"
                  >
                    <div class="journey-card-top">
                      <span v-if="item.kindLabel" class="journey-kind">{{ item.kindLabel }}</span>
                      <span class="journey-date">{{ item.date }}</span>
                    </div>
                    <h4>{{ item.title }}</h4>
                    <p class="journey-role">{{ item.subtitle }}</p>
                    <p class="journey-meta">{{ item.meta }}</p>
                  </button>

                  <div v-if="expandedJourneyIndex === index" class="journey-details">
                    <ul class="journey-points">
                      <li v-for="point in item.points" :key="point">{{ point }}</li>
                    </ul>
                    <div
                      v-if="item.type === 'education'"
                      class="journey-education-footer"
                    >
                      <div class="journey-courses">
                        <span
                          v-for="course in item.courses"
                          :key="course"
                          class="course-pill"
                        >
                          {{ course }}
                        </span>
                      </div>
                      <a
                        class="transcript-button"
                        :href="item.transcriptHref || '#about'"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Transcript
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="content-section section-dark">
        <div class="section-inner">
          <div class="section-heading">
            <div>
              <h2>Skills</h2>
            </div>
          </div>

          <div
            v-for="category in skillCategories"
            :key="category.title"
            class="skills-block"
          >
            <h3>{{ category.title }}</h3>
            <div class="skill-cloud">
              <span v-for="skill in category.items" :key="skill.label" class="skill-pill">
                <span
                  class="skill-mark"
                  :style="{
                    background: skill.iconBg,
                    color: skill.iconColor,
                    borderColor: skill.borderColor,
                  }"
                >
                  <img
                    v-if="skill.svg"
                    :src="skill.svg"
                    :alt="`${skill.label} icon`"
                    class="skill-icon-image"
                  />
                  <span v-else>{{ skill.icon }}</span>
                </span>
                <span>{{ skill.label }}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="content-section section-light">
        <div class="section-inner">
          <div class="section-heading">
            <div>
              <h2>Projects</h2>
            </div>
          </div>

          <p class="section-kicker">"Building systems that fail gracefully and improve continuously"</p>

          <div
            v-for="group in projectGroups"
            :key="group.title"
            class="project-group"
          >
            <div class="project-group-header">
              <h3>{{ group.title }}</h3>
              <p>{{ group.caption }}</p>
            </div>

            <div class="project-grid">
              <article
                v-for="project in group.items"
                :key="project.title"
                class="project-card"
                :style="{ '--card-accent': project.accent }"
              >
                <div class="project-overlay"></div>
                <div class="project-content">
                  <h4>{{ project.title }}</h4>
                  <p>{{ project.description }}</p>

                  <div class="tag-list">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="tech-tag"
                    >
                      <span
                        class="tech-tag-mark"
                        :style="{
                          background: getSkillBadge(tag).iconBg,
                          color: getSkillBadge(tag).iconColor,
                          borderColor: getSkillBadge(tag).borderColor,
                        }"
                      >
                        <img
                          v-if="getSkillBadge(tag).svg"
                          :src="getSkillBadge(tag).svg"
                          :alt="`${tag} icon`"
                          class="skill-icon-image"
                        />
                        <span v-else>{{ getSkillBadge(tag).icon }}</span>
                      </span>
                      <span>{{ tag }}</span>
                    </span>
                  </div>

                  <div class="project-actions">
                    <a
                      v-for="action in project.actions"
                      :key="`${project.title}-${action.type}`"
                      :href="action.href"
                      target="_blank"
                      rel="noreferrer"
                      class="project-action-icon"
                      :aria-label="action.label"
                      :title="action.label"
                    >
                      <svg
                        class="social-icon"
                        :viewBox="projectActionIcons[action.type].viewBox"
                        aria-hidden="true"
                      >
                        <path
                          v-for="(path, index) in projectActionIcons[action.type].paths"
                          :key="`${action.type}-${index}`"
                          v-bind="path"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="contact-backdrop"></div>
        <div class="contact-card">
          <div class="section-heading contact-heading">
            <span class="section-marker">◀</span>
            <div>
              <h2>Let's Talk</h2>
              <p>
                I'm currently in Washington, DC. If you want to talk about
                full-stack engineering, backend systems, or product-focused
                software work, my inbox is open.
              </p>
            </div>
          </div>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your Name" />
            </label>

            <label>
              <span>Email</span>
              <input type="email" placeholder="your@email.com" />
            </label>

            <label>
              <span>Message</span>
              <textarea rows="6" placeholder="Your Message..."></textarea>
            </label>

            <div class="captcha-row">
              <span class="captcha-box"></span>
              <span>Verify you are human</span>
              <span class="captcha-brand">Cloudflare</span>
            </div>

            <button class="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>© 2026 Kishan K C. All rights reserved</p>
      <div class="footer-links">
        <a
          v-for="link in socialLinks"
          :key="`${link.label}-footer`"
          :href="link.href || undefined"
          target="_blank"
          rel="noreferrer"
          :class="{ 'footer-link-disabled': !link.href }"
        >
          {{ link.label }}
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import awsIcon from './svg/AWS.svg';
import antDesignIcon from './svg/Ant-Design.svg';
import bashIcon from './svg/Bash.svg';
import bootstrapIcon from './svg/Bootstrap.svg';
import cppIcon from './svg/C++-(CPlusPlus).svg';
import cssIcon from './svg/CSS3.svg';
import dockerIcon from './svg/Docker.svg';
import expressIcon from './svg/Express.svg';
import flaskIcon from './svg/Flask.svg';
import gitIcon from './svg/Git.svg';
import githubActionsIcon from './svg/GitHub-Actions.svg';
import googleIcon from './svg/Google.svg';
import htmlIcon from './svg/HTML5.svg';
import javaIcon from './svg/Java.svg';
import javascriptIcon from './svg/JavaScript.svg';
import jiraIcon from './svg/Jira.svg';
import linuxIcon from './svg/Linux.svg';
import mysqlIcon from './svg/MySQL.svg';
import nextIcon from './svg/Next.js.svg';
import nodeIcon from './svg/Node.js.svg';
import opencvIcon from './svg/OpenCV.svg';
import postgresqlIcon from './svg/PostgresSQL.svg';
import postmanIcon from './svg/Postman.svg';
import pythonIcon from './svg/Python.svg';
import pytorchIcon from './svg/PyTorch.svg';
import reactIcon from './svg/React.svg';
import reduxIcon from './svg/Redux.svg';
import tailwindIcon from './svg/Tailwind-CSS.svg';
import trelloIcon from './svg/Trello.svg';
import typescriptIcon from './svg/TypeScript.svg';
import vueIcon from './svg/Vue.js.svg';

const scrollProgress = ref(0);
const expandedJourneyIndex = ref(0);

const heroRole =
  'Full-Stack Software Engineer building web applications and AI/ML systems';

const summary =
  'Full-stack software engineer with hands-on experience across modern web development and applied machine learning. Skilled in building scalable front-end and back-end systems with React, Next.js, Node.js, Flask, SQL, and TypeScript, while also shipping research-driven Python projects involving recommendation systems, computer vision, and GPT-powered applications.';

const journeyIntro =
  'Experience across full-stack product engineering, secure application architecture, recommendation systems, computer vision workflows, and AI-assisted user experiences.';

const socialLinks = [
  { label: 'Website', icon: 'website', href: 'https://www.kckishan.com.np/' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/kishankc123/' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/kishan-kc19/',
  },
  { label: 'Gmail', icon: 'gmail', href: 'mailto:kishan.kc.cs@gmail.com' },
];

const sectionLinks = [
  { id: 'about', label: 'About', icon: '◉' },
  { id: 'skills', label: 'Skills', icon: '⌘' },
  { id: 'education', label: 'Education', icon: '▣' },
  { id: 'projects', label: 'Projects', icon: '✦' },
];

const brandIcons = {
  website: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm6.92 8h-3.1a14.7 14.7 0 0 0-1.16-4A7.04 7.04 0 0 1 18.92 11ZM12 5.06c.71.84 1.66 2.8 1.93 5.94h-3.86C10.34 7.86 11.29 5.9 12 5.06ZM9.34 7a14.7 14.7 0 0 0-1.16 4h-3.1A7.04 7.04 0 0 1 9.34 7ZM5.08 13h3.1a14.7 14.7 0 0 0 1.16 4A7.04 7.04 0 0 1 5.08 13ZM12 18.94c-.71-.84-1.66-2.8-1.93-5.94h3.86c-.27 3.14-1.22 5.1-1.93 5.94ZM14.66 17a14.7 14.7 0 0 0 1.16-4h3.1A7.04 7.04 0 0 1 14.66 17Z',
        fill: 'currentColor',
      },
    ],
  },
  github: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-1.04-.02-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.47.11 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.52-.01 2.87 0 .27.18.59.69.48A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z',
        fill: 'currentColor',
      },
    ],
  },
  vercel: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M12 4 21 19H3L12 4Z',
        fill: 'currentColor',
      },
    ],
  },
  linkedin: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.33a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 12.63c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.87 1.1-3.37 1.87V8.5H9.39c.04.63 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.67.88-1.37 1.9-1.37 1.34 0 1.88 1.03 1.88 2.55V20h3.38v-7.37Z',
        fill: 'currentColor',
      },
    ],
  },
  gmail: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M3 6.75 12 13l9-6.25',
        fill: 'none',
        stroke: '#ea4335',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
      },
      {
        d: 'M4.5 7.5v9h3.25v-5.7L12 13.9l4.25-3.1v5.7h3.25v-9',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
      },
    ],
  },
};

const projectActionIcons = {
  github: brandIcons.github,
  vercel: brandIcons.vercel,
};

const experience = [
  {
    company: 'Beehive Technologies',
    role: 'Software Engineer',
    date: 'Jan 2023 - Dec 2023',
    logo: '◉',
    points: [   "Delivered multi-tenant analytics workflows across user roles by developing a scalable platform using React, Next.js,TypeScript, and Node.js, following Agile practices with Jira and Git-based version control.",
"Improved application load performance by ~30% by implementing a React Query-based data-fetching layer, leveraging caching, background revalidation, and optimized API calls to reduce redundant network requests",
"Ensured secure, role-based data access across tenants by implementing RBAC using Node.js, Express.js, and protected React routes, enforcing permission-aware UI rendering and backend authorization checks",
"Reduced state inconsistencies in complex workflows through centralized state management using Redux Toolkit, improving data synchronization across multiple interconnected UI modules.",
"Increased release reliability and reduced regressions by integrating Jest testing into GitHub Actions CI/CD pipelines,automating build validation and ensuring consistent deployment workflows using Docker and Linux environments"
  ]},
  {
    company: 'Devops Technology',
    role: 'Software Developer',
    date: 'Jun 2022 - Dec 2022',
    logo: '△',
    points: [
      'Reduced feature development time by 20% by building reusable UI components using React, TypeScript, Redux Toolkit, and Tailwind CSS, enabling scalable integration across HRM modules such as payroll and attendance systems.',
      'Increased user engagement by 15% and improved cross-browser performance by optimizing responsive UI using JavaScript(ES6+), HTML5, CSS3, and Ant Design, ensuring accessibility and efficient DOM rendering.',
      'Improved application performance by ~25% through centralized state management using Redux Toolkit, minimizing unnecessary re-renders and enabling efficient data normalization and transformation across complex UI workflows.',
      'Enabled secure and reliable data operations by integrating REST APIs using Postman and connecting them to a structuredfrontend service layer, ensuring consistent CRUD functionality across HRM features.'
    ],
  },
];

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
};

const resolveSkillSvg = (label) => {
  return skillIconFileMap[label] || '';
};

const buildSkillBadge = (label) => {
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

const skillCategories = [
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

const education = [
  {
    type: 'education',
    badge: 'MS',
    title: 'George Washington University',
    subtitle: 'Master of Science, Computer Science',
    degree: 'Master of Science, Computer Science',
    school: 'George Washington University',
    meta: 'Washington, DC • May 2026',
    courses: [
      'Advanced Machine Learning',
      'Computer Vision',
      'Cloud Computing',
      'Algorithms',
      'Distributed Systems',
      'Software Engineering',
    ],
    transcriptHref: '#education',
    points: [
      'Graduate studies focused on machine learning, systems, and software engineering.',
      'Built project work spanning recommendation systems, computer vision, and production-oriented web applications.',
    ],
    anchorId: 'education',
  },
  {
    type: 'education',
    badge: 'BS',
    title: 'Tribhuvan University',
    subtitle: 'BSc, Computer Science & Information Technology',
    degree: 'BSc, Computer Science & Information Technology',
    school: 'Tribhuvan University',
    meta: 'Kathmandu, Nepal • Dec 2022',
    courses: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Web Technology',
    ],
    transcriptHref: '#education',
    points: [
      'Built a strong foundation in algorithms, systems, databases, networking, and software engineering.',
      'Developed the technical base that shaped later work in full-stack development and AI-assisted systems.',
    ],
  },
];

const journeyTimeline = [
  ...experience.map((item) => ({
    type: 'experience',
    kindLabel: 'Experience',
    title: item.company,
    subtitle: item.role,
    date: item.date,
    year: item.date.match(/20\d{2}/)?.[0] || '',
    meta: 'Professional impact across product engineering, performance, and scalable application delivery.',
    points: item.points,
  })),
  ...education.map((item) => ({
    type: 'education',
    kindLabel: 'Education',
    title: item.school,
    subtitle: item.degree,
    date: item.meta.split('•').at(-1)?.trim() || item.meta,
    year: item.meta.match(/20\d{2}/)?.[0] || '',
    meta: 'Academic foundations in computer science, machine learning, systems, and software engineering.',
    points: item.points,
    courses: item.courses,
    transcriptHref: item.transcriptHref,
    anchorId: item.anchorId,
  })),
].sort((a, b) => Number(b.year || 0) - Number(a.year || 0));

const projectGroups = [
  {
    title: 'Featured Projects',
    caption: 'Latest academic and application engineering work demonstrating full-stack development, AI-assisted systems, and scalable application design.',
    items: [
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
            href: 'https://we-cure-it.vercel.app/',
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
            href: 'https://github.com/kishankc123/',
          },
        ],
        accent:
          'linear-gradient(135deg, rgba(166, 217, 255, 0.14), rgba(0, 0, 0, 0.45))',
      },
    ],
  },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const getSkillBadge = (label) => buildSkillBadge(label);

const toggleJourney = (index) => {
  expandedJourneyIndex.value = expandedJourneyIndex.value === index ? null : index;
};

const updateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  scrollProgress.value =
    scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0;
};

const handleSubmit = () => {
  window.alert('Thanks for reaching out. This portfolio form is currently a styled demo.');
};

onMounted(() => {
  updateScrollProgress();
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress);
  window.removeEventListener('resize', updateScrollProgress);
});
</script>

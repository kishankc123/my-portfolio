<template>
  <div class="portfolio-shell">
    <div class="top-progress" :style="{ width: `${scrollProgress}%` }"></div>

    <section id="hero" class="hero-section">
      <div class="hero-pattern"></div>
      <div class="hero-copy">
        <p class="eyebrow">Application Developer</p>
        <h1 class="hero-name">KISHAN</h1>
        <h2 class="hero-subtitle">K C</h2>
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

        <button class="scroll-cue" @click="scrollTo('about')">
          <span class="scroll-arrow">↓</span>
          <span>Scroll Down</span>
        </button>
      </div>

      <div class="hero-portrait-wrap">
        <div class="portrait-glow"></div>
        <img
          class="hero-portrait"
          :src="heroImage"
          alt="Portrait of Kishan K C"
        />
      </div>
    </section>

    <main>
      <section id="about" class="content-section section-light">
        <div class="section-inner">
          <div class="section-heading">
            <span class="section-marker">◀</span>
            <div>
              <h2>About Me</h2>
              <p>{{ summary }}</p>
            </div>
          </div>

          <p class="section-kicker">I turn coffee into code</p>

          <div class="about-grid">
            <div class="journey-intro">
              <h3>Journey</h3>
              <p>{{ journeyIntro }}</p>
              <div class="triangle-grid" aria-hidden="true">
                <span v-for="n in 35" :key="n"></span>
              </div>
            </div>

            <div class="timeline-card">
              <article
                v-for="(item, index) in experience"
                :key="item.company"
                class="timeline-item"
                :class="{ expanded: expandedExperience === index }"
              >
                <button
                  class="timeline-header"
                  type="button"
                  @click="toggleExperience(index)"
                  :aria-expanded="expandedExperience === index"
                >
                  <div class="timeline-company">
                    <span class="timeline-logo">{{ item.logo }}</span>
                    <div>
                      <h4>{{ item.company }}</h4>
                      <p>{{ item.role }}</p>
                    </div>
                  </div>
                  <div class="timeline-meta">
                    <span>{{ item.date }}</span>
                    <span class="timeline-chevron">
                      {{ expandedExperience === index ? '⌃' : '⌄' }}
                    </span>
                  </div>
                </button>

                <ul v-if="expandedExperience === index" class="timeline-points">
                  <li v-for="point in item.points" :key="point">{{ point }}</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="content-section section-dark">
        <div class="section-inner">
          <div class="section-heading">
            <span class="section-marker">◀</span>
            <div>
              <h2>Skills</h2>
            </div>
          </div>

          <div class="skills-block">
            <h3>Tools</h3>
            <div class="skill-cloud">
              <span v-for="skill in skills" :key="skill.label" class="skill-pill">
                <span
                  class="skill-mark"
                  :style="{
                    background: skill.iconBg,
                    color: skill.iconColor,
                    borderColor: skill.borderColor,
                  }"
                >
                  {{ skill.icon }}
                </span>
                <span>{{ skill.label }}</span>
              </span>
            </div>
          </div>

          <div class="skills-block">
            <h3>Education</h3>
            <div class="cert-grid">
              <article v-for="item in education" :key="item.school" class="cert-card">
                <span class="cert-badge">{{ item.badge }}</span>
                <h4>{{ item.degree }}</h4>
                <p>{{ item.school }}</p>
                <p>{{ item.meta }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="content-section section-light">
        <div class="section-inner">
          <div class="section-heading">
            <span class="section-marker">◀</span>
            <div>
              <h2>Projects</h2>
              <p>
                Resume highlights spanning full-stack product engineering,
                AI-assisted systems, and scalable application development.
              </p>
            </div>
          </div>

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
                        {{ getSkillBadge(tag).icon }}
                      </span>
                      <span>{{ tag }}</span>
                    </span>
                  </div>

                  <div class="project-actions">
                    <a
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      rel="noreferrer"
                      class="ghost-action"
                    >
                      GitHub
                    </a>
                    <a
                      v-if="project.link"
                      :href="project.link"
                      target="_blank"
                      rel="noreferrer"
                      class="primary-action"
                    >
                      View
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
import heroImage from './assets/hero.png';

const scrollProgress = ref(0);

const heroRole =
  'Full-Stack Software Engineer focused on scalable front-end and back-end systems';

const summary =
  'Full-stack software engineer skilled in building scalable front-end and back-end solutions using React, Node.js, Flask, SQL, and TypeScript. Experienced in designing databases, integrating systems across client-server architectures, optimizing performance, and delivering robust user-focused software in agile environments.';

const journeyIntro =
  'Experience across product engineering, reusable UI systems, REST integrations, secure role-based applications, and performance-focused web delivery.';

const socialLinks = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/kishankc123/' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/kishan-kc19/',
  },
  { label: 'Indeed', icon: 'indeed', href: '' },
  { label: 'Gmail', icon: 'gmail', href: 'mailto:kishan.kc.cs@gmail.com' },
];

const brandIcons = {
  github: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-1.04-.02-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.47.11 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.52-.01 2.87 0 .27.18.59.69.48A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z',
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

const experience = [
  {
    company: 'Beehive Technologies',
    role: 'Associate Software Developer',
    date: 'Jun 2023 - Dec 2023',
    logo: '◉',
    points: [
      'Built and shipped a multi-tenant analytics platform using React, Next.js, and TypeScript for role-specific Admin, Manager, and Client workflows.',
      'Engineered optimized data fetching with React Query, reducing redundant API requests and improving load performance by about 30%.',
      'Implemented secure RBAC with protected routes and permission-aware UI rendering for multi-tenant access control.',
      'Strengthened release reliability with Jest-based automated testing in GitHub Actions CI/CD pipelines.',
    ],
  },
  {
    company: 'Devops Technology',
    role: 'Software Development Intern',
    date: 'Jun 2022 - Dec 2022',
    logo: '△',
    points: [
      'Designed and built reusable React components for employee management, attendance, and payroll modules using modular UI patterns.',
      'Improved UI responsiveness and accessibility with HTML5, CSS3, ES6+, Ant Design, and Bootstrap, contributing to a 15% increase in user engagement.',
      'Validated and integrated REST APIs with PHP backends and MS SQL databases to support secure CRUD workflows across HRM modules.',
    ],
  },
  {
    company: 'George Washington University',
    role: 'M.S. Computer Science',
    date: 'Expected May 2026',
    logo: '▦',
    points: [
      'Master of Science in Computer Science with a 3.7 GPA.',
      'Built graduate-level systems including the AI-Assisted Learning and Summarization System and WeCureIt.',
    ],
  },
  {
    company: 'Tribhuvan University',
    role: 'BSc, Computer Science & Information Technology',
    date: 'Dec 2022',
    logo: '◇',
    points: [
      'Completed undergraduate studies in Computer Science & Information Technology with a 3.7 GPA.',
      'Built a strong foundation in software engineering, data structures, systems, and full-stack development.',
    ],
  },
];

const expandedExperience = ref(0);

const skillMeta = {
  TypeScript: { icon: 'TS', iconBg: 'rgba(49, 120, 198, 0.18)', iconColor: '#6cb3ff', borderColor: 'rgba(108, 179, 255, 0.32)' },
  JavaScript: { icon: 'JS', iconBg: 'rgba(247, 223, 30, 0.16)', iconColor: '#ffe55e', borderColor: 'rgba(255, 229, 94, 0.28)' },
  Python: { icon: 'Py', iconBg: 'rgba(64, 139, 255, 0.16)', iconColor: '#8fc1ff', borderColor: 'rgba(143, 193, 255, 0.28)' },
  Java: { icon: 'Jv', iconBg: 'rgba(230, 109, 74, 0.16)', iconColor: '#ffb39a', borderColor: 'rgba(255, 179, 154, 0.28)' },
  'C++': { icon: 'C+', iconBg: 'rgba(0, 102, 204, 0.16)', iconColor: '#8bbcff', borderColor: 'rgba(139, 188, 255, 0.28)' },
  Bash: { icon: '>_', iconBg: 'rgba(84, 169, 89, 0.16)', iconColor: '#9ce5a0', borderColor: 'rgba(156, 229, 160, 0.28)' },
  PHP: { icon: 'PHP', iconBg: 'rgba(119, 123, 179, 0.18)', iconColor: '#bcc0ff', borderColor: 'rgba(188, 192, 255, 0.28)' },
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
  Linux: { icon: '🐧', iconBg: 'rgba(245, 206, 66, 0.18)', iconColor: '#ffe48e', borderColor: 'rgba(255, 228, 142, 0.28)' },
  Postman: { icon: 'Pm', iconBg: 'rgba(255, 108, 55, 0.18)', iconColor: '#ffb89e', borderColor: 'rgba(255, 184, 158, 0.28)' },
  Jira: { icon: 'Jr', iconBg: 'rgba(38, 132, 255, 0.18)', iconColor: '#9ec8ff', borderColor: 'rgba(158, 200, 255, 0.28)' },
  Trello: { icon: 'Tr', iconBg: 'rgba(0, 121, 191, 0.18)', iconColor: '#98dcff', borderColor: 'rgba(152, 220, 255, 0.28)' },
  Git: { icon: 'Git', iconBg: 'rgba(240, 80, 51, 0.18)', iconColor: '#ffb29e', borderColor: 'rgba(255, 178, 158, 0.28)' },
  'GPT API Integration': { icon: 'AI', iconBg: 'rgba(16, 163, 127, 0.18)', iconColor: '#9af1d4', borderColor: 'rgba(154, 241, 212, 0.28)' },
  OpenCV: { icon: 'CV', iconBg: 'rgba(92, 109, 228, 0.18)', iconColor: '#b4c1ff', borderColor: 'rgba(180, 193, 255, 0.28)' },
  'Machine Learning': { icon: 'ML', iconBg: 'rgba(138, 92, 246, 0.18)', iconColor: '#d1b4ff', borderColor: 'rgba(209, 180, 255, 0.28)' },
  Xcode: { icon: 'X', iconBg: 'rgba(20, 164, 255, 0.18)', iconColor: '#92dcff', borderColor: 'rgba(146, 220, 255, 0.28)' },
  'MS Visual Studio': { icon: 'VS', iconBg: 'rgba(104, 33, 122, 0.2)', iconColor: '#e0a7ff', borderColor: 'rgba(224, 167, 255, 0.28)' },
};

const buildSkillBadge = (label) => {
  const meta = skillMeta[label];

  if (meta) {
    return { label, ...meta };
  }

  return {
    label,
    icon: label.slice(0, 2).toUpperCase(),
    iconBg: 'rgba(255, 255, 255, 0.1)',
    iconColor: '#f5f7fb',
    borderColor: 'rgba(255, 255, 255, 0.22)',
  };
};

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'Bash',
  'PHP',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Vue.js',
  'Redux Toolkit',
  'Tailwind CSS',
  'Ant Design',
  'Bootstrap',
  'Node.js',
  'Express.js',
  'Flask',
  'REST APIs',
  'PostgreSQL',
  'MySQL',
  'MS SQL',
  'Prisma ORM',
  'Docker',
  'AWS',
  'GitHub Actions',
  'Linux',
  'Postman',
  'Jira',
  'Trello',
  'Git',
  'GPT API Integration',
  'OpenCV',
  'Machine Learning',
  'Xcode',
  'MS Visual Studio',
].map(buildSkillBadge);

const education = [
  {
    badge: 'MS',
    degree: 'Master of Science, Computer Science',
    school: 'George Washington University',
    meta: 'GPA 3.7 • Washington, DC • May 2026',
  },
  {
    badge: 'BS',
    degree: 'BSc, Computer Science & Information Technology',
    school: 'Tribhuvan University',
    meta: 'GPA 3.7 • Kathmandu, Nepal • Dec 2022',
  },
];

const projectGroups = [
  {
    title: 'Featured Projects',
    caption: 'Graduate and production-ready application work from the resume',
    items: [
      {
        title: 'WeCureIt',
        description:
          'A full-stack medical scheduling platform with role-based access for doctors, patients, and admins, built with Next.js, React, TypeScript, Prisma, Tailwind CSS, and PostgreSQL.',
        tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL'],
        github: 'https://github.com/kishankc123/WeCureIt/tree/main',
        link: '',
        accent:
          'linear-gradient(135deg, rgba(111, 160, 255, 0.22), rgba(0, 0, 0, 0.42))',
      },
      {
        title: 'AI-Assisted Learning and Summarization System',
        description:
          'An AI-powered learning platform that used Python, Flask, Vue.js, PostgreSQL, transcript processing, and GPT-based services for summaries, adaptive assessments, and study suggestions.',
        tags: ['Python', 'Flask', 'Vue.js', 'PostgreSQL', 'GPT API', 'OpenCV'],
        github: '',
        link: '',
        accent:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0.45))',
      },
    ],
  },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const toggleExperience = (index) => {
  expandedExperience.value = expandedExperience.value === index ? null : index;
};

const getSkillBadge = (label) => buildSkillBadge(label);

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

import { education } from './education';
import { experience } from './experience';

export const journeyTimeline = [
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

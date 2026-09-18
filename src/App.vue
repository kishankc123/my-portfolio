<template>
  <div class="portfolio-shell">
    <ScrollProgressBar />
    <HeroSection />

    <main>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PhotographySection />
      <BlogSection />
      <QuotesSection />
      <ContactSection />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import AboutSection from './components/AboutSection.vue';
import BlogSection from './components/BlogSection.vue';
import ContactSection from './components/ContactSection.vue';
import HeroSection from './components/HeroSection.vue';
import PhotographySection from './components/PhotographySection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import QuotesSection from './components/QuotesSection.vue';
import ScrollProgressBar from './components/ScrollProgressBar.vue';
import SiteFooter from './components/SiteFooter.vue';
import SkillsSection from './components/SkillsSection.vue';
</script>

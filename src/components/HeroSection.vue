<template>
  <section id="hero" class="hero-section">
    <div class="hero-pattern"></div>
    <div class="hero-copy">
      <h1 class="hero-name">KISHAN K C</h1>
      <div class="hero-divider"></div>
      <p class="hero-role">{{ heroRole }}</p>

      <div class="hero-actions">
        <SocialLink v-for="link in socialLinks" :key="link.label" :link="link" />

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
</template>

<script setup>
import SocialLink from './SocialLink.vue';
import { heroRole, sectionLinks, socialLinks } from '../data/profile';
import { scrollTo } from '../utils/scrollTo';
</script>

<template>
  <section id="skills" class="content-section section-alt">
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
</template>

<script setup>
import { skillCategories } from '../data/skills';
</script>

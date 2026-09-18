<template>
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
          <ProjectCard
            v-for="project in group.items"
            :key="project.title"
            :project="project"
            :expanded="expandedProjectTitle === project.title"
            @toggle="toggleProjectDescription(project.title)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { projectGroups } from '../data/projects';

const expandedProjectTitle = ref(null);

const toggleProjectDescription = (title) => {
  expandedProjectTitle.value = expandedProjectTitle.value === title ? null : title;
};
</script>

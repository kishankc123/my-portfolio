<template>
  <article
    class="project-card"
    :class="{ expanded }"
    :style="{ '--card-accent': project.accent }"
  >
    <div class="project-overlay"></div>
    <div class="project-content">
      <div class="project-title-row">
        <h4>{{ project.title }}</h4>
      </div>

      <button
        class="project-description-row"
        type="button"
        @click="emit('toggle')"
        :aria-expanded="expanded"
      >
        <span class="project-description-text">{{ project.description }}</span>
        <span class="project-description-hint">
          {{ expanded ? 'Show less' : 'Read more' }}
        </span>
      </button>

      <div class="tag-list project-tags-row">
        <span
          v-for="tag in tags"
          :key="tag.label"
          class="tech-tag"
        >
          <span
            class="tech-tag-mark"
            :style="{
              background: tag.iconBg,
              color: tag.iconColor,
              borderColor: tag.borderColor,
            }"
          >
            <img
              v-if="tag.svg"
              :src="tag.svg"
              :alt="`${tag.label} icon`"
              class="skill-icon-image"
            />
            <span v-else>{{ tag.icon }}</span>
          </span>
          <span>{{ tag.label }}</span>
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
          <BrandIcon :name="action.type" />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import BrandIcon from './BrandIcon.vue';
import { buildSkillBadge } from '../data/skillBadges';

const props = defineProps({
  project: { type: Object, required: true },
  expanded: { type: Boolean, default: false },
});

const emit = defineEmits(['toggle']);

const tags = computed(() => props.project.tags.map(buildSkillBadge));
</script>

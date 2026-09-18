<template>
  <article
    class="journey-card"
    :class="{ expanded }"
    :id="item.anchorId || undefined"
  >
    <div class="journey-year" aria-hidden="true">{{ item.year }}</div>
    <div class="journey-node" aria-hidden="true"></div>
    <div class="journey-card-shell">
      <button
        class="journey-toggle"
        type="button"
        @click="emit('toggle')"
        :aria-expanded="expanded"
      >
        <div class="journey-card-top">
          <span v-if="item.kindLabel" class="journey-kind">{{ item.kindLabel }}</span>
          <span class="journey-date">{{ item.date }}</span>
        </div>
        <h4>{{ item.title }}</h4>
        <p class="journey-role">{{ item.subtitle }}</p>
        <p class="journey-meta">{{ item.meta }}</p>
      </button>

      <div v-if="expanded" class="journey-details">
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
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  expanded: { type: Boolean, default: false },
});

const emit = defineEmits(['toggle']);
</script>

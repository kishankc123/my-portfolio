<template>
  <div class="social-link-shell" :class="{ 'has-preview': link.preview }">
    <a
      v-if="link.href"
      :href="link.href"
      class="icon-button"
      :aria-label="link.label"
      :title="link.label"
      target="_blank"
      rel="noreferrer"
    >
      <BrandIcon :name="link.icon" />
    </a>

    <span
      v-else
      class="icon-button icon-button-disabled"
      :aria-label="`${link.label} unavailable`"
      :title="`${link.label} link coming soon`"
    >
      <BrandIcon :name="link.icon" />
    </span>

    <div v-if="link.preview" class="social-preview" aria-hidden="true">
      <div class="social-preview-eyebrow">{{ link.preview.eyebrow }}</div>
      <div class="social-preview-handle">{{ link.preview.handle }}</div>
      <p class="social-preview-copy">{{ link.preview.description }}</p>
      <div class="social-preview-tags">
        <span v-for="tag in link.preview.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import BrandIcon from './BrandIcon.vue';

defineProps({
  link: { type: Object, required: true },
});
</script>

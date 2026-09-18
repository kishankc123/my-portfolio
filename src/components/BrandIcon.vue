<template>
  <svg class="social-icon" :viewBox="icon.viewBox" aria-hidden="true">
    <path
      v-for="(path, index) in icon.paths"
      :key="`${name}-${index}`"
      v-bind="path"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue';
import { brandIcons } from '../data/brandIcons';

const props = defineProps({
  name: { type: String, required: true },
});

const icon = computed(() => brandIcons[props.name]);
</script>

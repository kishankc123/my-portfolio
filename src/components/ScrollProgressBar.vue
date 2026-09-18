<template>
  <div class="top-progress" :style="{ width: `${scrollProgress}%` }"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const scrollProgress = ref(0);

const updateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  scrollProgress.value =
    scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0;
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

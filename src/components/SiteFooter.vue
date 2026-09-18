<template>
  <footer class="site-footer">
    <p>© 2026 Kishan K C. All rights reserved</p>
    <div class="footer-links">
      <a
        v-for="link in socialLinks"
        :key="`${link.label}-footer`"
        :href="link.href || undefined"
        target="_blank"
        rel="noreferrer"
        :class="{ 'footer-link-disabled': !link.href }"
      >
        {{ link.label }}
      </a>
    </div>
  </footer>
</template>

<script setup>
import { socialLinks } from '../data/profile';
</script>

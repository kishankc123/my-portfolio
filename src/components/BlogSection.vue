<template>
  <section id="blog" class="content-section section-light showcase-section">
    <div class="section-inner">
      <div class="section-heading">
        <div>
          <h2>Blog</h2>
          <p>{{ blogProfile.description }}</p>
        </div>
      </div>

      <div class="showcase-grid">
        <article class="showcase-card showcase-card-featured">
          <div class="showcase-card-top">
            <span class="showcase-kicker">{{ blogProfile.kicker }}</span>
            <h3>{{ blogProfile.title }}</h3>
          </div>
          <p>{{ blogProfile.summary }}</p>
          <div class="showcase-tag-row">
            <span v-for="topic in blogProfile.tags" :key="topic" class="showcase-tag">
              {{ topic }}
            </span>
          </div>
          <a
            v-if="blogProfile.href"
            class="showcase-link"
            :href="blogProfile.href"
            target="_blank"
            rel="noreferrer"
          >
            Read the Blog
          </a>
          <span v-else class="showcase-link showcase-link-disabled">Blog link coming soon</span>
        </article>

        <article class="showcase-card showcase-card-secondary">
          <div class="showcase-card-top">
            <span class="showcase-kicker">Featured Post</span>
            <h3>{{ blogProfile.featuredPost.title }}</h3>
          </div>
          <p class="blog-preview-meta">
            By {{ blogProfile.featuredPost.author }} · {{ blogProfile.featuredPost.date }}
          </p>
          <p>{{ blogProfile.featuredPost.excerpt }}</p>
          <a
            class="blog-read-more"
            :href="blogProfile.featuredPost.href"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { blogProfile } from '../data/blog';
</script>

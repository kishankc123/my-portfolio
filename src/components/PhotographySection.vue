<template>
  <section id="photography" class="content-section section-alt showcase-section">
    <div class="section-inner">
      <div class="section-heading">
        <div>
          <h2>Photography</h2>
          <p>{{ photographyProfile.description }}</p>
        </div>
      </div>

      <div class="showcase-grid">
        <article class="showcase-card showcase-card-featured">
          <div class="showcase-card-top">
            <span class="showcase-kicker">{{ photographyProfile.kicker }}</span>
            <h3>{{ photographyProfile.title }}</h3>
          </div>
          <p>{{ photographyProfile.summary }}</p>
          <div class="featured-photo-card">
            <img
              v-if="photographyProfile.featuredPhoto.src"
              :src="photographyProfile.featuredPhoto.src"
              :alt="photographyProfile.featuredPhoto.alt"
              class="featured-photo-image"
            />
            <div v-else class="featured-photo-placeholder" aria-hidden="true">
              <span>{{ photographyProfile.featuredPhoto.placeholderLabel }}</span>
            </div>
            <div class="featured-photo-copy">
              <h4>{{ photographyProfile.featuredPhoto.title }}</h4>
              <p>{{ photographyProfile.featuredPhoto.caption }}</p>
              <span class="photo-card-file">{{ photographyProfile.featuredPhoto.fileHint }}</span>
            </div>
          </div>
          <a
            class="showcase-link"
            :href="photographyProfile.href"
            target="_blank"
            rel="noreferrer"
          >
            View Instagram
          </a>
        </article>

        <article class="showcase-card showcase-card-secondary photography-gallery-card">
          <div class="showcase-card-top">
            <span class="showcase-kicker">Photo Grid</span>
            <h3>Selected Frames</h3>
          </div>
          <p>{{ photographyProfile.galleryIntro }}</p>
          <div class="photo-grid">
            <article
              v-for="photo in photographyProfile.photos"
              :key="photo.title"
              class="photo-card"
            >
              <img
                v-if="photo.src"
                :src="photo.src"
                :alt="photo.alt"
                class="photo-card-image"
              />
              <div v-else class="photo-card-placeholder" aria-hidden="true">
                <span>{{ photo.placeholderLabel }}</span>
              </div>
              <div class="photo-card-copy">
                <h4>{{ photo.title }}</h4>
                <p>{{ photo.caption }}</p>
                <span class="photo-card-file">{{ photo.fileHint }}</span>
              </div>
            </article>
          </div>
          <a
            class="blog-read-more"
            :href="photographyProfile.href"
            target="_blank"
            rel="noreferrer"
          >
            See more on Instagram
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { photographyProfile } from '../data/photography';
</script>

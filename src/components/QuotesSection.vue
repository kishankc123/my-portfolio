<template>
  <section id="quotes" class="content-section section-alt quotes-section">
    <div class="section-inner">
      <div class="section-heading">
        <div>
          <h2>Quotes</h2>
          <p>{{ quotesIntro }}</p>
        </div>
      </div>

      <div class="quotes-grid">
        <article v-for="quote in favoriteQuotes" :key="quote.text" class="quote-card">
          <p class="quote-text">"{{ quote.text }}"</p>
          <p class="quote-author">{{ quote.author }}</p>
          <p v-if="quote.note" class="quote-note">{{ quote.note }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { favoriteQuotes, quotesIntro } from '../data/quotes';
</script>

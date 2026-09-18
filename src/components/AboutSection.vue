<template>
  <section id="about" class="content-section section-light about-section">
    <div class="section-inner">
      <div class="section-heading">
        <div>
          <h2>About Me</h2>
          <p>{{ summary }}</p>
        </div>
      </div>

      <div class="journey-block">
        <div class="journey-intro">
          <h3>Journey</h3>
          <p>{{ journeyIntro }}</p>
          <div class="triangle-grid" aria-hidden="true">
            <span v-for="n in 35" :key="n"></span>
          </div>
        </div>

        <div class="journey-timeline">
          <JourneyCard
            v-for="(item, index) in journeyTimeline"
            :key="`${item.type}-${item.title}`"
            :item="item"
            :expanded="expandedJourneyIndex === index"
            @toggle="toggleJourney(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import JourneyCard from './JourneyCard.vue';
import { journeyTimeline } from '../data/journey';
import { journeyIntro, summary } from '../data/profile';

const expandedJourneyIndex = ref(0);

const toggleJourney = (index) => {
  expandedJourneyIndex.value = expandedJourneyIndex.value === index ? null : index;
};
</script>

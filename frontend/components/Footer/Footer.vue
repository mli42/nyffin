<template>
  <div
    class="bg-nyffinRed text-white flex flex-row justify-around items-center py-8 px-6 w-full"
  >
    <div class="flex flex-row gap-x-6 items-center">
      <NuxtLink class="bg-blue-400 rounded-full h-12 w-12" to="/" />
      <p>email@address.com</p>
    </div>

    <!-- Tabs -->
    <div class="hidden md:flex flex-row gap-x-10">
      <NuxtLink v-for="([text, link], index) in tabs" :key="index" :to="link">
        <t-button variant="navbar">
          {{ $t(text) }}
        </t-button>
      </NuxtLink>
    </div>

    <!-- Social Media -->
    <div class="flex flex-row gap-x-4">
      <a
        v-for="(media, index) in socialMedias"
        :key="index"
        :href="media.url"
        target="_blank"
      >
        <component :is="media.icon" class="h-10 w-10" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import socialMedias from '~/config/social-media';

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      socialMedias: socialMedias as ISocialMedia[],
      tabs: new Map([
        ['tab.teams', '/teams'],
        ['tab.about', '/about'],
        ['tab.achievements', '/achievements'],
      ]),
    };
  },
});
</script>

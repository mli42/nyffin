<template>
  <div
    class="bg-nyffinRed text-white flex flex-row justify-between items-center py-2 px-6"
  >
    <!-- Burger -->
    <Burger class="md:hidden">
      <p>Burger Content</p>
    </Burger>

    <NuxtLink class="bg-blue-400 rounded-full h-12 w-12" to="/" />

    <!-- Tabs -->
    <div class="hidden md:flex flex-row gap-x-10">
      <NuxtLink v-for="([text, link], index) in tabs" :key="index" :to="link">
        <t-button variant="navbar">
          {{ $t(text) }}
        </t-button>
      </NuxtLink>
    </div>

    <!-- Language picker -->
    <div class="flex flex-row gap-x-3">
      <t-button
        v-for="(locale, index) in $i18n.locales"
        :key="index"
        :class="currentLocaleClass(locale)"
        @click="$i18n.setLocale(locale.code)"
        variant="navbar"
      >
        {{ locale.code.toUpperCase() }}
      </t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { LocaleObject } from '@nuxtjs/i18n';
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      tabs: new Map([
        ['tab.teams', '/teams'],
        ['tab.about', '/about'],
        ['tab.achievements', '/achievements'],
      ]),
    };
  },
  methods: {
    currentLocaleClass(locale: LocaleObject): unknown {
      return {
        'text-black': this.$i18n.locale === locale.code,
      };
    },
  },
});
</script>

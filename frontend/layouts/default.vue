<template>
  <div class="flex flex-col w-full">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
});
</script>

<template>
  <div>
    {{ $metaInfo.title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutPage',
  head() {
    return {
      title: this.$t('tab.about').toString(),
    };
  },
});
</script>

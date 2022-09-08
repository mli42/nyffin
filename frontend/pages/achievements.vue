<template>
  <div>
    {{ $metaInfo.title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AchievementsPage',
  head() {
    return {
      title: this.$t('tab.achievements').toString(),
    };
  },
});
</script>

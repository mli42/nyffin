<template>
  <div>
    {{ $metaInfo.title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TeamsPage',
  head() {
    return {
      title: this.$t('tab.teams').toString(),
    };
  },
});
</script>

<template>
  <div>
    <t-button variant="empty" @click="togglePanel">Burger</t-button>

    <transition :name="transitionName">
      <div
        v-if="showPanel"
        class="fixed top-0 left-0 h-screen w-full max-h-screen bg-gray-400 p-2 overflow-y-auto"
      >
        <t-button class="float-right" @click="togglePanel"> Close </t-button>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Burger',
  props: {
    transitionName: {
      type: String,
      default: 'from-left',
    },
  },
  data() {
    return {
      showPanel: false,
    };
  },
  methods: {
    togglePanel(): void {
      this.showPanel = !this.showPanel;
    },
  },
});
</script>

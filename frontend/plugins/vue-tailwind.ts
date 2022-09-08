import Vue from 'vue';
import VueTailwind from 'vue-tailwind';

import {
  TButton,
  TInput,
  TSelect,
  TTextarea,
} from 'vue-tailwind/dist/components';

const settings = {
  't-button': {
    component: TButton,
    props: {
      fixedClasses: '',
      classes: 'px-5 py-2 border rounded',
      variants: {
        navbar: 'hover:text-green-500',
        rounded: '!rounded-full px-2 py-2',
      },
    },
  },
  't-input': {
    component: TInput,
    props: {
      classes: '',
    },
  },
  't-select': {
    component: TSelect,
    props: {
      classes: '',
    },
  },
  't-textarea': {
    component: TTextarea,
    props: {
      classes: '',
    },
  },
};

Vue.use(VueTailwind, settings);

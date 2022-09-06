import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from 'typed-vuex';

// https://typed-vuex.roe.dev/

export const state = () => ({});

export type indexState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  isDarkMode(): boolean {
    return window.$nuxt.$colorMode.value === 'dark';
  },
  isFrench(): boolean {
    return window.$nuxt.$i18n.locale === 'fr';
  },
});

export const mutations = mutationTree(state, {});

export const actions = actionTree(
  { state, getters, mutations },
  {
    toggleColorMode(): void {
      const mode = getters.isDarkMode() ? 'light' : 'dark';

      window.$nuxt.$colorMode.preference = mode;
    },
    toggleLang(): void {
      const lang = getters.isFrench() ? 'en' : 'fr';

      window.$nuxt.$i18n.setLocale(lang);
    },
  }
);

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});

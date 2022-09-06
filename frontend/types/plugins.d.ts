import { accessorType } from '~/store';

interface InjectedObjects {
  $accessor: typeof accessorType;
}

declare module 'vue/types/vue' {
  // this.$injectedObj inside Vue components
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Vue extends InjectedObjects {}
}

declare module '@nuxt/types' {
  // Context.app.$injectedObj inside asyncData, fetch, plugins, middleware, nuxtServerInit
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface NuxtAppOptions extends InjectedObjects {}

  // Context.$injectedObj
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Context extends InjectedObjects {}
}

declare module 'vuex/types/index' {
  // this.$injectedObj inside Vuex stores
  // eslint-disable-next-line
  interface Store<S> extends InjectedObjects {}
}

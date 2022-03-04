export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'boki',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/chapters'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NODE_ENV === "production" ? "https://bokunoboki-backend.herokuapp.com" : "http://localhost:5050",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    // redirect: {
    //   login: false,
    //   logout: '/',
    //   callback: false,
    //   home: false
    // },
    //strategiesの中身に認証ロジックを書いていく
    strategies: {
      //localという認証方法を使う場合
      local: {
        //axiosでアクセスする際の設定
        endpoints: {
          login: { url: '/auth/sign_in', method: 'post', propertyName: 'access-token' },
          logout: { url: '/auth/sign_out', method: 'delete' },
          user: { url: '/currentUser', method: 'get', propertyName: 'user' }
        }
      }
    }
  }

}
<template>
  <section class="w-full px-8 text-gray-700 bg-white">
    <div class="container flex flex-row flex-wrap  md:items-center justify-between py-5 mx-auto max-w-7xl">
      <div class="flex flex-col gap-5 md:flex-row">
        <NuxtLink to="/">
          <span class="mx-auto text-xl font-bold text-gray-900 select-none ">僕のボキ</span>
        </NuxtLink>
        <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
          <NuxtLink class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900" to="/about">About</NuxtLink>

          <!-- <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
          <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a> -->
        </nav>
      </div>

      <div v-if="$auth.loggedIn" v-click-outside="hide" @click="toggle" class="relative ml-auto flex items-center justify-center flex-shrink-0 rounded cursor-pointer">
        <img v-if="$auth.user.avatar_url" class="w-10 h-10 rounded-full" :src="$auth.user.avatar_url" />
        <div v-else class="w-8 h-8">
          <SvgNoimage />
        </div>
        <div v-show="opened" class="z-10 absolute right-0 top-8 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <NuxtLink to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">プロフィール</NuxtLink>
          <div @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">ログアウト</div>
        </div>
      </div>
      <div v-else class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        <NuxtLink to="/login" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">Login</NuxtLink>
        <NuxtLink
          to="/signup"
          class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Sign up
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      opened: false,
    }
  },

  methods: {
    toggle() {
      this.opened = !this.opened
    },
    hide() {
      this.opened = false
    },
    async logout() {
      await this.$auth.logout('/sign_out')
    },
  },

  directives: {
    ClickOutside,
  },
}
</script>

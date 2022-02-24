<template>
  <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
    <div class="text-lg font-medium">
      <Breadcrunbs />
    </div>

    <div v-click-outside="hide" @click="toggle" class="ml-auto flex items-center justify-center flex-shrink-0 ml-5 w-10 h-10 rounded cursor-pointer">
      <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div v-show="opened" class="origin-top-right absolute right-0 top-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <NuxtLink to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">プロフィール</NuxtLink>
      <NuxtLink to="/card" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">カード登録</NuxtLink>
      <div @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">ログアウト</div>
    </div>
  </div>
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
    logout() {
      console.log('ログアウトします')
    }
  },

  directives: {
    ClickOutside
  }

}
</script>
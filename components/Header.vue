<template>
  <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
    <div class="text-lg font-medium">
      <Breadcrunbs :pages="pages"/>
    </div>
    <div v-click-outside="hide" @click="toggle" class="ml-auto flex items-center justify-center flex-shrink-0 rounded cursor-pointer">
      <img v-if="$auth.user.avatar_url" class="w-10 h-10 rounded-full" :src="$auth.user.avatar_url">
      <div v-else class="w-8 h-8">
        <SvgNoimage />
      </div>
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
  props: ['pages'],
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
    }
  },

  directives: {
    ClickOutside
  }

}
</script>
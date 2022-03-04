<template>
  <div class="w-screen h-screen text-gray-700">
    <Nav />
    <div class="max-w-7xl mx-auto flex">
      <Dropdown :item="item" />
      <Contents />
    </div>
  </div>
</template>

<script>
export default {
  middleware({ redirect, store }) {
    if (!store.$auth.$state.loggedIn) {
      redirect('/')
    }
  },
  data() {
    return {
      item: {
        subject: 'second_commercial',
        title: this.$secondCommercialChapters[this.$route.params.chapterId - 1].title,
        lessons: this.$secondCommercialChapters[this.$route.params.chapterId - 1].lessons,
      },
    }
  },
}
</script>

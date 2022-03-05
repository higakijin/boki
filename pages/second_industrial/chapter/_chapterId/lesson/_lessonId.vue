<template>
  <div class="w-screen h-screen text-gray-700">
    <Nav />
    <div class="max-w-7xl mx-auto flex gap-x-5">
      <Dropdown :item="item" class="w-1/5"/>
      <Contents class="w-4/5"/>
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
        subject: 'second_industrial',
        title: this.$secondIndustrialChapters[this.$route.params.chapterId - 1].title,
        lessons: this.$secondIndustrialChapters[this.$route.params.chapterId - 1].lessons,
      },
    }
  },
}
</script>

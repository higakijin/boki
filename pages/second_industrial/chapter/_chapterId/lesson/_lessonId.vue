<template>
  <div class="flex w-screen h-screen text-gray-700">
    <Icons />
    <Dropdown :item="item" />
    <div class="flex flex-col flex-grow h-full">
      <Header :pages="pages" />
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
        subject: 'second_industrial',
        title: this.$secondIndustrialChapters[this.$route.params.chapterId - 1].title,
        lessons: this.$secondIndustrialChapters[this.$route.params.chapterId - 1].lessons,
      },
      pages: [
        { name: 'コース選択', link: '/dashbord' },
        { name: '2級工業簿記', link: '/second_industrial' },
        { name: `Chapter.${this.$route.params.chapterId}`, link: `/second_industrial/chapter/${this.$route.params.chapterId}/lesson/${this.$route.params.lessonId}` },
        { name: `Lesson.${this.$route.params.lessonId}`, link: `/second_industrial/chapter/${this.$route.params.chapterId}/lesson/${this.$route.params.lessonId}` },
      ],
    }
  },
}
</script>

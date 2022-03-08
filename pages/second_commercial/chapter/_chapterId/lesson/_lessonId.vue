<template>
  <div class="w-screen md:h-screen text-gray-700">
    <Nav />
    <div class="max-w-7xl mx-5 md:mx-auto flex flex-col md:flex-row gap-5 h-4/5">
      <Dropdown :item="item" class="w-full md:w-1/5" />
      <Contents :item="item" class="w-full md:w-4/5" />
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
  async asyncData({ $axios, $secondCommercialChapters, params }) {
    const chapter = $secondCommercialChapters[params.chapterId - 1]
    const lesson_name = chapter.lessons[params.lessonId - 1].title
    const res = await $axios.$get(`/outputs?output[lesson]=${lesson_name}`)
    if (res) {
      return {
        item: {
          subject: 'second_commercial',
          title: chapter.title,
          lessons: chapter.lessons,
          outputs: res.outputs,
        }
      }
    }
  },
}
</script>

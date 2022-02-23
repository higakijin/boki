<template>
  <div class="flex w-screen h-screen text-gray-700">
    <Icons />
    <Dropdown :item="item" />
    <div class="flex flex-col flex-grow h-full">
      <Header />
      <Contents />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        subject: 'second_commercial',
        title: this.$secondCommercialChapters[this.$route.params.chapterId - 1].title,
        lessons: this.$secondCommercialChapters[this.$route.params.chapterId - 1].lessons,
      }
    }
  },
}
</script>
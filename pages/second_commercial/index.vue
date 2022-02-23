<template>
  <div class="flex w-screen h-screen text-gray-700 overflow-hidden">
    <Icons />
    <div class="flex flex-col flex-grow h-full">
      <Header />
      <Chapters :chapters="chapters"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: {
        parents: this.$secondCommercialChapters,
        title: '2商',
        body: '2級商業簿記'
      }
    }
  }
}
</script>
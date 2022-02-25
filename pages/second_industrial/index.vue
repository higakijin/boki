<template>
  <div class="flex w-screen h-screen text-gray-700 overflow-hidden">
    <Icons />
    <div class="flex flex-col flex-grow h-full">
      <Header :pages="pages" />
      <Chapters :chapters="chapters" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: {
        parents: this.$secondIndustrialChapters,
        title: '2工',
        body: '2級工業簿記',
      },
      pages: [
        { name: 'コース選択', link: '/dashbord' },
        { name: '2級工業簿記', link: '/second_industrial' },
      ],
    }
  },
}
</script>

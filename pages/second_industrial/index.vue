<template>
  <div class="w-screen h-screen text-gray-700">
    <Nav />
    <div class="flex flex-col flex-grow">
      <Chapters :chapters="chapters" />
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
      chapters: {
        parents: this.$secondIndustrialChapters,
        title: '2工',
        body: '2級工業簿記',
        svg: 'SvgLevelFactory',
        introduction: `簿記2級の大問4・5に登場する工業簿記を学習します。
        他の受験生と差がつきにくい分野なので、満点を目指して勉強していきましょう！`
      },
    }
  },
}
</script>

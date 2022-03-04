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
        parents: this.$secondCommercialChapters,
        title: '2商',
        body: '2級商業簿記',
        svg: 'SvgLevelBussiness',
        introduction: `簿記2級の大問1~3に登場する商業簿記を学習します。
        実務にも大きく役立つので、心してかかりましょう！`
      },
    }
  },
}
</script>

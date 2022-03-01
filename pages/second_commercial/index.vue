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
      },
      pages: [
        { name: 'コース選択', link: '/dashbord' },
        { name: '2級商業簿記', link: '/second_commercial' },
      ],
    }
  },
}
</script>

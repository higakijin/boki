<template>
  <div class="w-screen h-screen text-gray-700">
    <Nav />
    <Chapters :chapters="chapters" />
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
    }
  },
}
</script>

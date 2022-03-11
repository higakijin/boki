<template>
  <div class="w-screen h-screen text-gray-700">
    <Nav />
    <div class="flex flex-col flex-grow">
      <section class="py-20 bg-white">
        <div class="container max-w-6xl mx-auto">
          <h2 class="mx-5 text-4xl font-bold tracking-tight text-center">コースを選択して簿記の学習を開始。</h2>
          <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div @click="selectLevel(course)" v-for="course in courses" :key="course.id" class="mx-5 flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden border-2 border-indigo-200 hover:bg-gray-100 rounded-xl shadow-md">
              <component :is="course.svg" class="w-96 h-32"></component>
              <h4 class="text-xl font-medium text-gray-700">{{ course.body }}</h4>
              <p class="text-base text-center text-gray-500">{{ course.text }}</p>
            </div>
          </div>
        </div>
      </section>
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
      courses: [
        { title: '3', body: '3級（商業）', name: '3級簿記', text: 'キホンのキホン。まずはここから', link: '/third', svg: 'SvgLevelBasic' },
        { title: '2工', body: '2級工業', name: '2級工業簿記', text: '大きな得点源。完璧にしよう', link: '/second_industrial', svg: 'SvgLevelFactory' },
        { title: '2商', body: '2級商業', name: '2級商業簿記', text: '実務に役立つ重要ポイント', link: '/second_commercial', svg: 'SvgLevelBussiness' },
      ],
    }
  },
  methods: {
    async selectLevel(course) {
      await this.$axios.$put(`/users/${this.$auth.user.id}`, {
        level_name: course.name,
      }).then(() => {
        window.location.href = window.location.href.replace('/dashbord', course.link)
      })
    },
  },
}
</script>

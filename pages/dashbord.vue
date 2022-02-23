<template>
  <div class="flex w-screen h-screen text-gray-700">
    <Icons />
    <div class="flex flex-col flex-grow h-full">
      <Header />
      <section class="py-20 bg-white">
        <div class="container max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold tracking-tight text-center">コースを選択して簿記の学習を開始。</h2>
          <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <NuxtLink v-for="course in courses" :key="course.id" :to="course.link" class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
              <div class="w-16 h-16 text-white bg-blue-500 rounded-full">
                <p class="font-extrabold text-2xl text-center pt-4">{{ course.title }}</p>
              </div>
              <h4 class="text-xl font-medium text-gray-700">{{ course.body }}</h4>
              <p class="text-base text-center text-gray-500">{{ course.text }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        { title: '3', body: '3級（商業）', text: 'キホンのキホン。まずはここから', link: '/third' },
        { title: '2工', body: '2級工業', text: '大きな得点源。完璧にしよう', link: '/second_industrial' },
        { title: '2商', body: '2級商業', text: '実務に役立つ重要ポイント', link: '/second_commercial' },
      ],
    }
  },
}
</script>
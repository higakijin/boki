<template>
  <section class="max-w-7xl mx-auto mb-20">
    <h1 class="text-3xl mx-5 py-10 font-bold">{{ chapters.body }}</h1>
    <div class="flex flex-col md:flex-row gap-x-5">
      <div class="w-full md:w-3/5 p-3">
        <component :is="chapters.svg" class="h-1/3 max-w-full p-10 mx-auto h-auto"></component>
        <p class="text-md text-center" style="white-space: pre-wrap">{{ chapters.introduction }}</p>
      </div>
      <div class="m-5 md:w-2/5">
        <NuxtLink v-for="chapter in chapters.parents" :key="chapter.id" :to="`/${$route.name}/chapter/${chapter.id}/lesson/1`" class="flex rounded-xl shadow border border-gray-300 mb-4 hover:bg-gray-100 w-full">
          <div v-if="false" class="h-8 w-8 rounded-full bg-blue-500 m-2 flex">
            <p class="text-white mx-auto my-auto text-xl font-bold">{{ chapters.title }}</p>
          </div>
          <div v-else class="h-8 w-8 rounded-full bg-indigo-500 m-2 flex">
            <SvgCheck />
          </div>
          <p class="text-xl my-auto px-4">Chapter.{{ chapter.id }}　{{ chapter.title }}</p>
          <!-- <div class="ml-auto my-auto mr-3">
            <SvgLock />
          </div> -->
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['chapters'],
}
</script>

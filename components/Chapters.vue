<template>
  <section class="grid grid-cols-12 py-10 overflow-scroll">
    <h1 class="col-span-5 col-start-4 text-3xl py-10 font-bold">{{ chapters.body }}</h1>
    <NuxtLink v-for="chapter in chapters.parents" :key="chapter.id" :to="`/${$route.name}/chapter/${chapter.id}/lesson/1`" class="col-span-5 col-start-4 flex rounded-xl shadow border border-gray-300 mb-4">
      <div v-if="false" class="h-10 w-10 rounded-full bg-blue-500 m-2 flex">
        <p class="text-white mx-auto my-auto text-lg font-bold">{{ chapters.title }}</p>
      </div>
      <div v-else class="h-10 w-10 rounded-full bg-yellow-400 m-2 flex">
        <SvgCheck />
      </div>
      <p class="text-xl my-auto px-4">Chapter.{{ chapter.id }}　{{ chapter.title }}</p>
      <div class="ml-auto my-auto mr-3">
        <SvgLock />
      </div>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  props: ['chapters'],
}
</script>

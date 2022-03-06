<template>
  <div class="flex flex-col border border-gray-300">
    <button class="relative text-sm focus:outline-none group">
      <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
        <div>
          <p class="font-medium text-left">chapter.{{ $route.params.chapterId }}</p>
          <p class="font-medium text-left">{{ title }}</p>
        </div>
        <SvgInverseTriangle />
      </div>
      <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
      </div>
    </button>
    <div class="flex flex-col flex-grow p-4 overflow-auto gap-y-3">
      <NuxtLink
        v-for="lesson in lessons"
        :key="lesson.id"
        class="flex items-center flex-shrink-0 text-sm font-medium rounded hover:bg-gray-300"
        :class="{ 'bg-indigo-500 hover:bg-indigo-500 text-white': lesson.id === parseInt($route.params.lessonId) }"
        :to="`/${item.subject}/chapter/${$route.params.chapterId}/lesson/${lesson.id}`"
      >
        <span class="leading-none p-2">{{ lesson.id }}. {{ lesson.title }}</span>
      </NuxtLink>
      <div class="mt-auto">
        <NuxtLink class="flex items-center flex-shrink-0 h-10 px-3 mt-4 text-sm font-medium bg-gray-200 rounded hover:bg-yellow-300 bg-yellow-200" :to="`/${item.subject}`">
          <SvgCancel />
          <span class="ml-2 leading-none">やめる</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      title: this.item.title,
      lessons: this.item.lessons,
      isBgcolor: false,
    }
  },
}
</script>

<template>
  <div class="flex flex-col w-56 border-r border-gray-300">
    <button class="relative text-sm focus:outline-none group">
      <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
        <span class="font-medium">工業簿記とは</span>
        <SvgInverseTriangle />
      </div>
      <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
        <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
      </div>
    </button>
    <div class="flex flex-col flex-grow p-4 overflow-auto">
      <a v-for="chapter in chapters" :key="chapter.id" class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
        <span class="leading-none">{{ chapter.id }}. {{ chapter.title }}</span>
      </a>
      <a class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300" href="#">
        <SvgBack />
        <span class="ml-2 leading-none">スライドに戻る</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: [
        { id: 1, title: '工業簿記とは' },
        { id: 2, title: '工業簿記の全体の流れ' },
        { id: 3, title: '原価計算とは' },
        { id: 4, title: '仕掛品と製品' },
      ],
    }
  },
}
</script>
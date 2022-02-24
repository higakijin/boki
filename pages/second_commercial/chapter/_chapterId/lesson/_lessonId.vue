<template>
  <div class="relative flex w-screen h-screen text-gray-700">
    <Icons />
    <Dropdown :item="item" @backPresentetion="backPresentetion" />
    <div class="flex flex-col flex-grow h-full">
      <Header />
      <Contents />
    </div>
    <div v-show="presentetion" class="bg-gray-300 w-screen h-screen absolute opacity-75"></div>
    <div v-show="presentetion" class="absolute w-11/12 right-0 left-0 mx-auto top-16">
      <div class="flex">
        <button @click="presentetion = false" class="px-2 py-1 bg-blue-500 text-white rounded-xl my-2 right-0 justify-end ml-auto">演習を行う</button>
      </div>
      <div v-show="index === page" v-for="(image, index) in images" :key="index" class="relative">
        <img :src="image.src" class="w-full" />
        <div class="absolute right-5 inset-y-1/2 font-extrabold text-white text-5xl text-blue-400 cursor-pointer" @click="nextPage">＞</div>
        <div class="absolute left-5 inset-y-1/2 font-extrabold text-white text-5xl text-blue-400 cursor-pointer" @click="nextPage">＜</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        subject: 'second_commercial',
        title: this.$secondCommercialChapters[this.$route.params.chapterId - 1].title,
        lessons: this.$secondCommercialChapters[this.$route.params.chapterId - 1].lessons,
      },
      page: 0,
      images: [
        {
          src: require('@/assets/images/img1.jpg'),
        },
        {
          src: require('@/assets/images/img2.jpg'),
        },
        {
          src: require('@/assets/images/img3.jpg'),
        },
      ],
      presentetion: true,
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 >= this.images.length) {
        this.page = 0
        return
      }
      this.page++
    },
    prevPage() {
      if (this.page <= 0) {
        return
      }
      this.page--
    },
    backPresentetion() {
      this.presentetion = true
    },
  },
}
</script>
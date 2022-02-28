<template>
  <div class="relative w-5/12 mx-auto">
    <div v-show="index === page" v-for="(image, index) in images" :key="index">
      <img :src="image.src" class="w-full" />
    </div>
    <div class="absolute right-5 font-extrabold top-52 text-white text-5xl text-blue-400 cursor-pointer" @click="nextPage">＞</div>
    <div class="absolute left-5 font-extrabold top-52 text-white text-5xl text-blue-400 cursor-pointer" @click="nextPage">＜</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
  },
}
</script>
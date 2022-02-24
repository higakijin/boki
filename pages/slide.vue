<template>
  <div class="slide__wrapper">
    <div v-show="index === page" v-for="(image, index) in images" :key="index">
      <img :src="image.src" class="image" />
    </div>
    <div class="right-btn" @click="nextPage">＞</div>
    <div class="left-btn" @click="nextPage">＜</div>
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

<style>
.slide__wrapper {
  position: relative;
  width: 40%;
  margin: 0 auto;
}
.image {
  width: 100%;
}
.right-btn {
  position: absolute;
  right: 20px;
  top: 41%;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
}
.left-btn {
  position: absolute;
  left: 20px;
  top: 41%;
  font-size: 25px;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
}
</style>

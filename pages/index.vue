<template>
  <div>ここはindexページ</div>
</template>

<script>
export default {
  // lpはあとで作るよ
  middleware({ redirect }) {
    redirect('/dashbord')
  },
}
</script>

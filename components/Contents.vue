<template>
  <div class="w-full">
    <div class="w-full h-full flex gap-x-2">
      <div class="w-1/2 bg-white h-auto border border-gray-300 py-4 px-6">
        <div class="mt-8">
          <h2 class="text-xl font-bold not-italic">Question.</h2>
          <p>
            参考書p.{{ lesson.page }}
            <i class="font-bold not-italic">『{{ lesson.title }}』</i>
            を参考に、学んだことをアウトプットしてください。
          </p>
        </div>
        <div class="mt-8">
          <h2 class="text-xl font-bold not-italic">復習ポイント</h2>
          <ul class="list-inside list-disc">
            <li class="m-1">工業簿記・商業簿記の各役割を整理しましょう。</li>
            <li class="m-1">商品と製品の違いを説明してみましょう。</li>
          </ul>
        </div>
        <div class="mt-8">
          <h2 class="text-xl font-bold not-italic">投稿したユーザー</h2>
          <p class="text-gray-400">投稿したユーザーはいません</p>
        </div>
      </div>
      <div class="w-1/2 bg-white h-auto">
        <Editor />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      lesson: this.item.lessons[this.$route.params.lessonId - 1]
    }
  }
}
</script>

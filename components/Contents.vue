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
          <ul v-if="lesson.hints" class="list-inside list-disc">
            <li v-for="hint in lesson.hints" :key="hint.id" class="m-1">{{ hint }}</li>
          </ul>
          <p v-else class="text-gray-400">ヒントはありません</p>
        </div>
        <div class="mt-8">
          <h2 class="text-xl font-bold not-italic">投稿したユーザー</h2>
          <ul v-if="outputs[0]">
            <li v-for="output in outputs" :key="output.id" class="text-md text-green-600 hover:underline">
              <NuxtLink :to="`/outputs/${output.id}`">{{ output.user.name }}さんのアウトプット（{{ $format(output.updated_at) }}）</NuxtLink>
            </li>
          </ul>
          <p v-else class="text-gray-400">投稿したユーザーはいません</p>
        </div>
      </div>
      <div class="w-1/2 bg-white h-auto">
        <Editor @value="value = $event" />
        <button @click="postOutput" class="bg-indigo-500 hover:bg-indigo-600 rounded-md px-3 py-2 mt-5 text-white float-right">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      lesson: this.item.lessons[this.$route.params.lessonId - 1],
      outputs: this.item.outputs,
      value: ''
    }
  },

  methods: {
    async postOutput() {
      await this.$axios.$post('/outputs', {
        output: {
          lesson: this.lesson.title,
          post: this.value,
        },
      })
      await this.$axios.$get(`/outputs?output[lesson]=${this.lesson.title}`)
      .then(res => {
        this.outputs = res.outputs
      })
    },
  },
}
</script>

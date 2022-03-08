<template>
  <div class="w-full md:h-full flex flex-col md:flex-row gap-5 md:gap-x-2">
    <div class="w-full md:w-1/2 bg-white h-auto border border-gray-300 py-4 px-6 pb-10 overflow-scroll">
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
        <div v-if="outputs[0]">
          <div v-for="output in outputs" :key="output.id" class="mt-1 ml-1">
            <div @click="showOtherOutput(output)" class="flex gap-x-2 cursor-pointer">
              <img v-if="output.user.avatar_url" :src="output.user.avatar_url" class="h-8 w-8 rounded-full" />
              <div v-else class="h-8 w-8">
                <SvgNoimage />
              </div>
              <p class="my-auto text-green-600 text-md hover:underline">
                {{ output.user.name }}さんのアウトプット
                <i class="text-sm not-italic">({{ $format(output.updated_at) }}) </i>
                <i v-show="isEdited(output)" class="text-gray-500 not-italic text-xs">(編集済み)</i>
              </p>
            </div>
          </div>
        </div>
        <p v-else class="text-gray-400">投稿したユーザーはいません</p>
      </div>
      <div v-show="!otherOutput" class="mt-8">
        <h2 class="text-lg font-bold">もらったコメント</h2>
        <div v-if="myOutputComments" class="ml-1 mt-1">
          <div v-for="comment in myOutputComments" :key="comment.id" class="flex mt-1">
            <div>
              <img v-if="comment.avatar_url" :src="comment.avatar_url" class="h-8 w-8 rounded-full" />
              <div v-else class="h-8 w-8">
                <SvgNoimage />
              </div>
              <p class="w-8 text-center text-gray-500 text-xs">{{ comment.user_name }}</p>
            </div>
            <div class="speech-bubble ml-10 mb-2 align-center flex">
              <p class="my-auto p-2 text-sm">{{ comment.body }}</p>
            </div>
            <div class="mb-2 mt-auto text-xs text-gray-400 mx-2">{{ $format(comment.created_at) }}</div>
          </div>
        </div>
        <p v-else class="text-gray-400">コメントはありません</p>
        <form v-show="myOutput" @submit.prevent="postComment(myOutput)" class="px-2">
          <div class="flex items-center border-b border-indigo-300 py-1 w-full">
            <input v-model="comment" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="コメントを入力" aria-label="Full name" />
            <button class="flex-shrink-0 bg-indigo-300 hover:bg-indigo-400 border-indigo-300 hover:border-indigo-400 text-sm border-4 text-white p-1 rounded" type="submit">投稿</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="otherOutput" class="w-full md:w-1/2">
      <div class="border border-gray-300 py-10 px-6 h-full overflow-scroll">
        <div class="flex my-2">
          <img v-if="otherOutput.user.avatar_url" :src="otherOutput.user.avatar_url" class="h-8 w-8 rounded-full" />
          <div v-else class="h-8 w-8">
            <SvgNoimage />
          </div>
          <p class="text-green-600 my-auto ml-1">{{ otherOutput.user.name }}さんのアウトプット （{{ $format(otherOutput.updated_at) }}）</p>
        </div>
        <div v-html="otherOutput.post"></div>
        <div class="mt-8 pt-2 border-t border-gray-500">
          <h2 class="text-lg font-bold">コメント一覧</h2>
          <div v-if="true" class="ml-1 mt-1">
            <div class="flex">
              <div>
                <img v-if="$auth.user.avatar_url" :src="$auth.user.avatar_url" class="h-8 w-8 rounded-full" />
                <div v-else class="h-8 w-8">
                  <SvgNoimage />
                </div>
                <p class="w-8 text-center text-gray-500">aaa</p>
              </div>
              <div class="speech-bubble ml-5 mb-2 align-center flex">
                <p class="my-auto p-2 text-sm">材料費と製造間接費と労務費は、仕掛品勘定で当月投入の欄に記入する3種の神器(?)です。きっちりおさえましょう！</p>
              </div>
              <div class="mb-2 mt-auto text-xs text-gray-400 mx-2">3/17 12:40</div>
            </div>
            <div class="flex">
              <div>
                <img v-if="$auth.user.avatar_url" :src="$auth.user.avatar_url" class="h-8 w-8 rounded-full" />
                <div v-else class="h-8 w-8">
                  <SvgNoimage />
                </div>
                <p class="w-8 text-center text-gray-500">aaa</p>
              </div>
              <div class="speech-bubble ml-5 mb-2 align-center flex">
                <p class="my-auto p-2 text-sm">材料費と製造間接費と労務費は</p>
              </div>
              <div class="mb-2 mt-auto text-xs text-gray-400 mx-2">3/17 12:40</div>
            </div>

            <form @submit.prevent="postComment(otherOutput)" class="px-2">
              <div class="flex items-center border-b border-indigo-300 py-1 w-full">
                <input v-model="comment" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="コメントを入力" aria-label="Full name" />
                <button class="flex-shrink-0 bg-indigo-300 hover:bg-indigo-400 border-indigo-300 hover:border-indigo-400 text-sm border-4 text-white p-1 rounded" type="submit">投稿</button>
              </div>
            </form>
          </div>
          <p v-else class="text-gray-400">コメントはありません</p>
        </div>
      </div>
      <button @click="otherOutput = null" class="bg-yellow-300 hover:bg-yellow-400 rounded-md px-3 py-2 my-5 float-right">自分のアウトプットへ</button>
    </div>
    <div v-else class="w-full md:w-1/2 md:h-auto h-auto mb-5">
      <div>
        <Editor :myOutput="myOutput" @value="value = $event" />
      </div>
      <div class="mt-5">
        <button v-show="myOutput" @click="deleteOutput" class="bg-red-500 hover:bg-red-600 rounded-md px-3 py-2 text-white">削除</button>
        <button @click="postOutput" class="bg-indigo-500 hover:bg-indigo-600 rounded-md px-3 py-2 text-white float-right">保存</button>
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
      value: '',
      myOutput: this.item.outputs.filter((e) => e.user.name === this.$auth.user.name)[0],
      otherOutput: null,
      comment: '',
      myOutputComments: null,
    }
  },

  created() {
    if (this.myOutput) {
      this.myOutputComments = this.myOutput.comments
    }
  },

  methods: {
    async postOutput() {
      if (!this.myOutput) {
        await this.$axios
          .$post('/outputs', {
            output: {
              lesson: this.lesson.title,
              post: this.value,
            },
          })
          .then((res) => {
            this.myOutput = res.output
          })
      } else {
        await this.$axios.$put(`/outputs/${this.myOutput.id}`, {
          output: {
            lesson: this.lesson.title,
            post: this.value,
          },
        })
      }
      this.getOutputs()
    },
    async showOtherOutput(output) {
      if (output.user.name === this.$auth.user.name) {
        this.otherOutput = null
      } else {
        await this.$axios.$get(`/outputs/${output.id}`).then((res) => {
          this.otherOutput = res.output
        })
      }
      this.comment = ''
    },
    isEdited(output) {
      return output.created_at !== output.updated_at
    },
    async deleteOutput() {
      await this.$axios.$delete(`/outputs/${this.myOutput.id}`, {
        data: {
          output: {
            lesson: this.lesson.title,
          },
        },
      })
      this.getOutputs()
    },
    async getOutputs() {
      await this.$axios.$get(`/outputs?output[lesson]=${this.lesson.title}`).then((res) => {
        this.outputs = res.outputs
        this.myOutput = this.outputs.filter((e) => e.user.name === this.$auth.user.name)[0]
      })
    },
    async postComment(output) {
      await this.$axios
        .$post(`/outputs/${output.id}/comments`, {
          comment: {
            body: this.comment,
          },
        })
        .then((res) => {
          this.myOutputComments = res.comments
        })
      this.comment = ''
    },
  },
}
</script>

<style scoped>
.speech-bubble {
  position: relative;
  background: #e5e7eb;
  border-radius: 0.4em;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: #e5e7eb;
  border-left: 0;
  border-top: 0;
  margin-top: -10px;
  margin-left: -20px;
}
</style>

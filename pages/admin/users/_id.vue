<template>
  <div>
    <Nav />
    <div class="bg-gray-100">
      <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2">
          <div class="w-full md:w-3/12 md:mx-2">
            <div class="bg-white p-3 border-t-4 border-green-400">
              <div class="image overflow-hidden">
                <img class="h-auto w-full mx-auto" :src="user.avatar_url" alt="" />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ user.name }}</h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">{{ user.email }}</h3>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>最終ログイン</span>
                  <span class="ml-auto">{{ $format(user.updated_at) }}</span>
                </li>
                <li class="flex items-center py-3">
                  <span>会員登録</span>
                  <span class="ml-auto">{{ $format(user.created_at) }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-9/12 mx-2 h-64">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Name</div>
                    <div class="px-4 py-2">{{ user.name }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2">{{ user.email }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">学習中のレベル</div>
                    <div v-if="user.level" class="px-4 py-2">{{ user.level.name }}</div>
                    <div v-else class="px-4 py-2">なし</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">プラン</div>
                    <div class="px-4 py-2">{{ user.ticket }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">最終支払日</div>
                    <div class="px-4 py-2">2021.12.24</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">次回支払予想</div>
                    <div class="px-4 py-2">{{ user.ticket }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience and education -->
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="grid grid-cols-2">
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <span class="tracking-wide">購入履歴</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600">プラスチケット</div>
                      <div class="text-gray-500 text-xs">2021.10.11 - 2021.11.10</div>
                    </li>
                    <li>
                      <div class="text-teal-600">プラスチケット</div>
                      <div class="text-gray-500 text-xs">2021.11.11 - 2021.12.10</div>
                    </li>
                    <li>
                      <div class="text-teal-600">プロチケット</div>
                      <div class="text-gray-500 text-xs">2021.12.24 - 永久</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </span>
                    <span class="tracking-wide">学習履歴</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li v-for="output in reverseOutputs" :key="output.id">
                      {{ output.chapter }}
                      <NuxtLink :to="`/${output.level_name_en}/chapter/${output.chapter_order}/lesson/${output.lesson.order}`" class="text-green-600 hover:underline">
                        {{ output.level_name_ja }}
                        Chapter.{{ output.chapter_order }} Lesson.{{ output.lesson.order }}
                        {{ output.lesson.name }}
                      </NuxtLink>
                      <div class="text-gray-500 text-xs">{{ $format(output.updated_at) }}</div>
                      <button v-if="!output.be_finished" @click.prevent="admitOutput(output)" class="bg-red-500 text-white p-2 rounded-lg">合格させる</button>
                      <button v-else @click.prevent="admitOutput(output)" class="bg-yellow-500 text-white p-2 rounded-lg">合格を取り消す</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware({ redirect, store }) {
    if (!store.$auth.$state.user.is_admin) {
      redirect('/about')
    }
  },
  async asyncData({ $axios, params }) {
    const res = await $axios.$get(`/admin/users/${params.id}`)
    return {
      user: res.user,
    }
  },
  computed: {
    reverseOutputs() {
      return this.user.outputs.reverse();
    },
  },
  methods: {
    async admitOutput(output) {
      await this.$axios.$put(`/admin/outputs/${output.id}`)
      .then(res => {
        this.user = res.user
      })
    },
  }
}
</script>

<style>
:root {
  --main-color: #4a76a8;
}
.bg-main-color {
  background-color: var(--main-color);
}
.text-main-color {
  color: var(--main-color);
}
.border-main-color {
  border-color: var(--main-color);
}
</style>

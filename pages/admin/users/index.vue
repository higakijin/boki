<template>
  <div>
    <Nav />

    <div class="text-gray-900 bg-gray-200">
      <div class="p-4 flex">
        <h1 class="text-3xl">Users</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">ID</th>
              <th class="text-left p-3 px-5">アイコン</th>
              <th class="text-left p-3 px-5">Name</th>
              <th class="text-left p-3 px-5">Email</th>
              <th class="text-left p-3 px-5">学習中のレベル</th>
              <th class="text-left p-3 px-5">会員ステータス</th>
              <th class="text-left p-3 px-5">最終支払日</th>
              <th class="text-left p-3 px-5">有効期限</th>
              <th class="text-left p-3 px-5">最終ログイン</th>
              <th class="text-left p-3 px-5">詳細</th>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id" class="border-b bg-gray-100" :class="{ 'bg-gray-300': index % 2 !== 0 }">
              <td class="p-3 px-5">{{ user.id }}</td>
              <td class="px-5"><img class="h-8" :src="user.avatar_url" /></td>
              <td class="p-3 px-5">{{ user.name }}</td>
              <td class="p-3 px-5">{{ user.email }}</td>
              <td class="p-3 px-5">{{ user.level }}</td>
              <td class="p-3 px-5">{{ user.ticket }}</td>
              <td class="p-3 px-5">2021.12.24</td>
              <td class="p-3 px-5">{{ user.is_pro }}</td>
              <td class="p-3 px-5">{{ $format(user.updated_at) }}</td>
              <td class="p-3 px-5 flex">
                <NuxtLink :to="`/admin/users/${user.id}`" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Detail</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
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
  async asyncData({ $axios }) {
    const res = await $axios.$get('/admin/users')
    return {
      users: res.users
    }
  },
}
</script>
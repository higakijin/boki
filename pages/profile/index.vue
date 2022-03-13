<template>
  <div class="w-screen h-screen text-gray-700">
    <Nav />
    <div class="font-sans pt-40 w-full flex flex-row">
      <div class="card w-96 mx-auto bg-white shadow-lg">
        <img v-if="$auth.user.avatar_url" class="w-28 h-28 mx-auto rounded-full -mt-20 border-8 border-white" :src="$auth.user.avatar_url" />
        <div v-else class="w-28 h-28 mx-auto rounded-full -mt-20 border-8 border-white">
          <SvgNoimage />
        </div>
        <div class="text-center mt-2 text-3xl font-medium">{{ $auth.user.name }}</div>
        <div class="text-center mt-2 font-light text-sm">{{ $auth.user.email }}</div>
        <div v-if="$auth.user.level" class="text-center mt-4 font-normal text-lg">{{ $auth.user.level.name }}を勉強中</div>
        <div v-else class="text-center mt-4 font-normal text-md">学習中のレッスンはありません</div>
        <hr class="mt-8" />
        <div class="flex p-4">
          <div v-if="$auth.user.tickets" class="w-1/2 text-center"><span class="font-bold text-green-500">プレミアム会員</span>です</div>
          <div v-else class="w-1/2 text-center">
            <span v-if="$auth.user.plan === 'basic'" class="font-bold text-blue-500">ベーシック会員</span>
            <span v-if="$auth.user.plan === 'plus'" class="font-bold text-yellow-500">プラス会員</span>
            <span v-if="$auth.user.plan === 'pro'" class="font-bold text-red-500">プロ会員</span>
            です
          </div>
          <div class="w-0 border border-gray-300"></div>
          <NuxtLink to="/profile/edit" class="w-1/2 text-center hover:bg-gray-300">プロフィールを編集</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware({ redirect, store }) {
    if (!store.$auth.$state.loggedIn) {
      redirect('/')
    }
  },
}
</script>

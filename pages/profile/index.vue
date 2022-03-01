<template>
  <div class="flex w-screen h-screen text-gray-700">
    <Icons />
    <div class="flex flex-col flex-grow h-full">
      <Header />

      <div class="font-sans pt-40 w-full flex flex-row">
        <div class="card w-96 mx-auto bg-white shadow-lg">
          <img class="w-28 h-28 mx-auto rounded-full -mt-20 border-8 border-white" src="https://www.dailyshincho.jp/image/log/16/05180505/1.jpg" />
          <div class="text-center mt-2 text-3xl font-medium">higakijin</div>
          <div class="text-center mt-2 font-light text-sm">hm385.chejptks@gmail.com</div>
          <div class="text-center mt-4 font-normal text-lg">2級工業簿記を学習中</div>
          <hr class="mt-8" />
          <div class="flex p-4">
            <div class="w-1/2 text-center"><span class="font-bold text-green-500">プレミアム会員</span>です</div>
            <div class="w-0 border border-gray-300"></div>
            <NuxtLink to="/profile/edit" class="w-1/2 text-center hover:bg-gray-300">プロフィールを編集</NuxtLink>
          </div>
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
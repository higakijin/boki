<template>
  <div>
    <Nav />

    <section class="relative container mx-auto flex flex-wrap py-8 max-w-7xl mx-auto">
      <div class="flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 lg:h-screen lg:items-center">
        <div class="max-w-lg mx-auto text-center lg:text-left lg:pr-12">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">最強の簿記学習ツール</h2>

          <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione sed cumque molestiae dolores eaque odit corporis accusamus reprehenderit laborum?</p>

          <NuxtLink to="/dashbord" class="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-indigo-500 rounded-lg">いますぐ始める</NuxtLink>
        </div>
      </div>

      <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
        <img class="absolute inset-0 object-cover w-full h-full rounded-xl" src="https://www.hyperui.dev/photos/man-1.jpeg" alt="" />
      </div>
    </section>

    <!-- Section 3 -->
    <section class="box-border leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid pt-20">
      <div class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
        <div class="flex flex-col items-center leading-7 text-center text-gray-900">
          <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">プラン一覧</h2>
          <p class="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">We've got a plan for companies of any size</p>
        </div>
        <div class="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-indigo-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
          <div class="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
            <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">Basic</h3>
            <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">一部学習可能なお試しコース</p>
            <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
              <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200 not-italic">￥0</p>
              <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200"><span class="block">per month</span></p>
            </div>

            <button
              class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-indigo-600 no-underline bg-transparent border border-b-2 border-indigo-600 rounded-md cursor-pointer hover:bg-indigo-600 hover:border-indigo-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
            >
              Select Plan
            </button>
          </div>
          <div class="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
            <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">Plus</h3>
            <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">一番人気な学習コース</p>
            <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
              <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">￥980</p>
              <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200"><span class="block">per month</span></p>
            </div>
            <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 border-b-4 border-indigo-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">Select Plan</button>
          </div>
          <div class="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
            <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">Pro</h3>
            <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">永久に利用可能な買い切りプラン</p>
            <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
              <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">￥14,980</p>
            </div>
            <button
              class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-indigo-600 no-underline bg-transparent border border-b-2 border-indigo-600 rounded cursor-pointer hover:bg-indigo-600 hover:border-indigo-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
            >
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section class="px-2 bg-white md:px-0">
      <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div class="flex flex-wrap items-center sm:-mx-3">
          <div class="w-full md:w-1/2 md:px-3">
            <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span class="block xl:inline">会計を身につけて</span>
                <span class="block text-indigo-600 xl:inline">最強のビジネスマンへ！</span>
              </h1>
              <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p>
              <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                <NuxtLink to="/dashbord" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                  Try It Free
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <SvgTopExam />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  middleware({ redirect, store }) {
    if (store.$auth.$state.loggedIn) {
      redirect('/dashbord')
    }
  },
}
</script>

<template>
  <div class="flex w-screen h-screen text-gray-700">
    <Icons />
    <div class="flex flex-col flex-grow h-full">
      <Header />
      <section class="grid grid-cols-12 mt-10">
        <h1 class="col-span-5 col-start-4 text-3xl py-10 font-bold">2級工業簿記</h1>
        <div v-for="chapter in $secondIndustrialChapters" :key="chapter.id" class="col-span-5 col-start-4 flex rounded-xl shadow border border-gray-300 mb-4">
          <div class="h-10 w-10 rounded-full bg-blue-500 m-2 flex">
            <p class="text-white mx-auto my-auto text-lg font-bold">2工</p>
          </div>
          <p class="text-xl my-auto px-4">Chapter.{{ chapter.id }}　{{ chapter.title }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

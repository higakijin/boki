<template>
  <div class="h-screen overflow-hidden">
    <!-- Section 1 -->
    <TopNav />

    <section class="flex flex-col md:flex-row h-full items-center">
      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-full px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight">Create super future</h1>

          <form class="mt-6" action="#" method="POST">
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input type="email" name="" id="" placeholder="" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Password</label>
              <input type="password" name="" id="" placeholder="" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
            </div>

            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
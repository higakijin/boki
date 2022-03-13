<template>
  <div class="h-screen overflow-hidden">
    <!-- Section 1 -->
    <Nav />

    <section class="flex flex-col md:flex-row h-full items-center max-w-7xl mx-auto">
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-full">
        <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover" />
      </div>

      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-full px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Create your new account</h1>

          <form @submit.prevent="signup" class="mt-6">
            <div>
              <label class="block text-gray-700">Name</label>
              <input type="text" v-model="name" id="" placeholder="Name" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Email Address</label>
              <input type="email" v-model="email" id="" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Password</label>
              <input type="password" v-model="password" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Password Confirmation</label>
              <input type="password" v-model="password_confirmation" id="" placeholder="Enter Password Again" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
            </div>

            <ul v-show="errors[0]" class="mt-4 pl-5">
              <li v-for="error in errors" :key="error.id" class="text-sm text-red-500 list-disc">{{ error }}</li>
            </ul>

            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
          </form>

          <!-- <hr class="my-6 border-gray-300 w-full" /> -->

          <!-- <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
              <SvgGoogle />
              <span class="ml-4"> Sign in with Google</span>
            </div>
          </button> -->

          <p class="mt-8">Already created? <NuxtLink to="/login" class="text-blue-500 hover:text-blue-700 font-semibold">Login here</NuxtLink></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware({ redirect, store }) {
    if (store.$auth.state.loggedIn) {
      redirect('/dashbord')
    }
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: []
    }
  },
  methods: {
    async signup() {
      this.errors = []
      await this.$axios
        .$post('/auth', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then((res) => {
          this.$auth
            .loginWith('local', {
              data: {
                email: this.email,
                password: this.password,
              },
            })
            .then(() => {
              this.$router.push('/dashbord')
            })
        })
        .catch((e) => {
          this.errors = e.response.data.errors.full_messages
        })
    },
  },
}
</script>

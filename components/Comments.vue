<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <div v-if="comment.user_name === $auth.user.name" class="flex mt-1">
        <div class="mb-2 mt-auto text-xs text-gray-400 mx-2">{{ $format(comment.created_at) }}</div>
        <div class="speech-bubble-right mr-10 mb-2 align-center flex">
          <p class="my-auto p-2 text-sm text-white">{{ comment.body }}</p>
        </div>
        <div>
          <img v-if="comment.avatar_url" :src="comment.avatar_url" class="h-8 w-8 rounded-full" />
          <div v-else class="h-8 w-8">
            <SvgNoimage />
          </div>
          <p class="w-8 text-center text-gray-500 text-xs">{{ comment.user_name }}</p>
        </div>
      </div>

      <div v-else class="flex mt-1">
        <div>
          <img v-if="comment.avatar_url" :src="comment.avatar_url" class="h-8 w-8 rounded-full" />
          <div v-else class="h-8 w-8">
            <SvgNoimage />
          </div>
          <p class="w-8 text-center text-gray-500 text-xs">{{ comment.user_name }}</p>
        </div>
        <div class="speech-bubble-left ml-10 mb-2 align-center flex">
          <p class="my-auto p-2 text-sm">{{ comment.body }}</p>
        </div>
        <div class="mb-2 mt-auto text-xs text-gray-400 mx-2">{{ $format(comment.created_at) }}</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['comments'],
}
</script>

<style scoped>
.speech-bubble-left {
  position: relative;
  background: #e5e7eb;
  border-radius: 0.4em;
}

.speech-bubble-left:after {
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

.speech-bubble-right {
  position: relative;
  background: #16a34a;
  border-radius: 0.4em;
}

.speech-bubble-right:after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: #16a34a;
  border-right: 0;
  border-top: 0;
  margin-top: -10px;
  margin-right: -20px;
}
</style>

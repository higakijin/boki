<template>
  <div class="h-full">
    <vue-editor id="editor" v-model="content" useCustomImageHandler @imageAdded="handleImageAdded" style="height: 72vh;"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '',
    }
  },
  watch: {
    content() {
      this.$emit('value', this.content)
    }
  },
  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('image', file)
      const config = {
        headers: {
          // header setting
        },
      }
      this.$axios
        .$post('/api_url', formData, config)
        .then((result) => {
          const url = result.data.url // Get url from response
          Editor.insertEmbed(cursorLocation, 'image', url)
          resetUploader()
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    },
  },
}
</script>

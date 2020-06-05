<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col text-center">
        <h1 class="light">Markdown Preview</h1>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6">
        <h4 class="light">Markdown</h4>
        <textarea class="info" v-model="markdown" />
      </div>
      <div class="col-md-6">
        <h4 class="light">Preview</h4>
        <div class="info" v-markdown :key="markdown">{{ markdown }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      markdown: '',
    };
  },

};
</script>

<style lang="scss">
body {
  font-family: 'Libre Franklin', sans-serif;
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  min-height: 100vh;
  overflow: hidden;
}

.light {
  color: #fff;
  text-shadow: 1px 1px 5px rgba(150, 150, 150, 0.9);
}
</style>

<style lang="scss" scoped>
textarea {
  resize: none;
  border: 2px dashed #ff7256;
  outline: none;
}

.info {
  height: 400px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>

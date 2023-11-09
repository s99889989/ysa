<script setup lang="ts">

const path = ref(['video', '2023', '第1回', '第1天'])
const title = ref('2023-第1回-第1天-影片')

</script>

<template>

  <VideoDisplay  :path="path" :title="title" />

</template>

<style scoped>

</style>
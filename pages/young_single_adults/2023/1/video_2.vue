<script setup lang="ts">

const path = ref(['ysa', 'video', '2023', '第1回', '第2天'])
const title = ref('2023-第1回-第2天-影片')

</script>

<template>

  <VideoDisplay  :path="path" :title="title" />

</template>

<style scoped>

</style>
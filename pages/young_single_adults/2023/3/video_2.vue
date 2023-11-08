<script setup lang="ts">

const path = ref(['video', '2023', '第3回', '第2天', 'config'])
const title = ref('2022-第3回-第2天-影片')

</script>

<template>

  <VideoDisplay  :path="path" :title="title" />

</template>

<style scoped>

</style>
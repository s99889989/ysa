<script setup lang="ts">

const path = ref(['ysa', 'video', '2021', '第2回', '第1天'])
const title = ref('2021-第2回-第1天-影片')

</script>

<template>

  <VideoDisplay  :path="path" :title="title" />

</template>

<style scoped>

</style>
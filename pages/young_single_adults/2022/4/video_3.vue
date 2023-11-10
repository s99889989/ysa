<script setup lang="ts">

const path = ref(['ysa', 'video', '2022', '第4回', '第3天'])
const title = ref('2022-第4回-第3天-影片')

</script>

<template>

  <VideoDisplay  :path="path" :title="title" />

</template>

<style scoped>

</style>
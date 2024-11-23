<script setup lang="ts">
import PhotoDisplay from "~/components/PhotoDisplay.vue";

const path = ref(['ysa', 'image', "2024", "hualien"])
const title = ref('2024-花蓮支聯會單成活動-照片')

</script>

<template>

  <PhotoDisplay :path="path" :title="title" />

</template>

<style scoped>

</style>
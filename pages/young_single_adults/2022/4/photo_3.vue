<script setup lang="ts">
import PhotoDisplay from "~/components/PhotoDisplay.vue";

const path = ref(['ysa', 'image', "2022", "第4回", "第3天"])
const title = ref('2022-第4回-第3天-照片')

</script>

<template>
  <PhotoDisplay :path="path" :title="title" />
</template>

<style scoped>

</style>
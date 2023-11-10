<script setup lang="ts">
import PhotoDisplay from "~/components/PhotoDisplay.vue";

const path = ref(['ysa', 'image', "2023", "第2回", "第2天"])
const title = ref('2023-第2回-第2天-照片')

</script>

<template>
  <PhotoDisplay :path="path" :title="title" />
</template>

<style scoped>

</style>
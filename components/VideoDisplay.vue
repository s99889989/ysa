<script setup lang="ts">
const props = defineProps({
  path:{
    type: Array,
    default: '',
  },
  title:{
    type: String,
    default: '',
  }
})
const videos = reactive({
  data: [
    {
      urlPath: '',
      name: ''
    }
  ],
})
onMounted(()=>{
  const pathList = props.path;
  // const url = 'http://localhost:9100/video/'+pathList.join(',');
  const url = 'https://madustrialtd.asuscomm.com:9100/ysa/video/'+pathList.join(',');
  fetch(url)
      .then(res=>res.json())
      .then(data=>{
        videos.data = data;
      })


})
</script>

<template>


  <div class="dark:bg-black bg-white min-h-screen container-top">
    <p class="dark:text-white text-2xl text-black text-center">{{props.title}}</p>
    <div class="grid grid-cols-1 lg:grid-cols-3">

      <div v-for="item in videos.data">
        <iframe class="w-full aspect-video p-4" :src="item.urlPath" allowfullscreen></iframe>
      </div>

    </div>
    <br/>
  </div>
</template>

<style scoped>

</style>
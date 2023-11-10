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

const photos = reactive({
  data: [
    {
      image: ''
    }
  ],
})
onMounted(()=>{
  const pathList = props.path;
  // const url = 'https://localhost:9100/ysa/image';
  const url = 'https://madustrialtd.asuscomm.com:9100/ysa/image';
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pathList)
  })
      .then(res=>res.json())
      .then(data=>{
        photos.data = data;
      })


})


</script>

<template>
  <div class="dark:bg-black p-4 bg-white min-h-screen container-top">
    <p class="dark:text-white text-2xl text-black text-center">{{props.title}}</p>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-wrap justify-center p-4" v-for="item in photos.data">

        <!--        <img class="object-contain w-full" :src="'https://localhost:9100/'+item.image" alt="">-->
        <img class="object-contain w-full" :src="'https://madustrialtd.asuscomm.com:9100/'+item.image" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
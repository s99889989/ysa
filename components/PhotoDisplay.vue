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
      image: '',
      panoramic: false
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

        nextTick(() => {
          photos.data.forEach(item => {
            // console.log(item.image + ' : ' + item.panoramic);
            if (item.panoramic) {
              // 確保元素已渲染到 DOM 中，然後初始化 Pannellum

              pannellum.viewer('panorama-' + item.image, {
                type: 'equirectangular',
                panorama: 'https://madustrialtd.asuscomm.com:9100/' + item.image,
                autoLoad: false,
                autoRotate: -2,
              });
            }
          });
        });



      })

})

</script>

<template>
<!--  <div class="dark:bg-black p-4 bg-white min-h-screen container-top">-->
<!--    <p class="dark:text-white text-2xl text-black text-center">{{props.title}}</p>-->
<!--    <div class="grid grid-cols-1 lg:grid-cols-2">-->
<!--      <div class="flex flex-wrap justify-center p-4" v-for="item in photos.data">-->

<!--        &lt;!&ndash;        <img class="object-contain w-full" :src="'https://localhost:9100/'+item.image" alt="">&ndash;&gt;-->
<!--        <img class="object-contain w-full" :src="'https://madustrialtd.asuscomm.com:9100/'+item.image" alt="">-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="dark:bg-black p-4 bg-white min-h-screen container-top">
    <p class="dark:text-white text-2xl text-black text-center">{{ props.title }}</p>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-wrap justify-center p-4" v-for="item in photos.data" :key="item.image">
        <!-- 判斷是否為全景圖 -->
        <div v-if="item.panoramic" class="w-full">
          <!-- Pannellum 显示全景图 -->
          <div :id="'panorama-' + item.image" class="w-full h-96"></div>
        </div>
        <div v-else>
          <!-- 一般图片显示 -->
          <img class="object-contain w-full" :src="'https://madustrialtd.asuscomm.com:9100/' + item.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
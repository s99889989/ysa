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
  <div class="dark:bg-black p-4 bg-white min-h-screen container-top">

    <p class="dark:text-white text-2xl text-black text-center">{{ props.title }}</p>

    <nav aria-label="Page navigation example" class="pt-2 items-center flex justify-center">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
        </li>
        <li>
          <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

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
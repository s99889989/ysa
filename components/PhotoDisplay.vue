<script setup lang="ts">
const props = defineProps({
  path: {
    type: Array,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})

const photos = reactive({ data: [] });
const currentPage = ref(1);
let totalPages = 5;

// 請求數據
const fetchImages = (page: number = 1) => {
  const imageSelectPage = {
    path: props.path,
    amount: 30,
    page,
  };

  fetch('https://madustrialtd.asuscomm.com:9100/ysa/image_select_pages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(imageSelectPage),
  })
      .then(res => res.json())
      .then(data => {
        photos.data = data;
        nextTick(() => initPannellumForPanoramas());
      });
}

// 初始化 Pannellum
const initPannellumForPanoramas = () => {
  photos.data.forEach(item => {
    if (item.panoramic) {
      pannellum.viewer('panorama-' + item.image, {
        type: 'equirectangular',
        panorama: 'https://madustrialtd.asuscomm.com:9100/' + item.image,
        autoLoad: false,
        autoRotate: -2,
      });
    }
  });
}

// 計算總頁數
const fetchTotalPages = () => {
  const imageCountPage = { path: props.path, amount: 30 };

  fetch('https://madustrialtd.asuscomm.com:9100/ysa/image_count_pages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(imageCountPage),
  })
      .then(res => res.json())
      .then(data => {
        totalPages = Number(data);
      });
}

// 切換頁面
const goToPage = (page: number) => {
  if(currentPage.value == page){
    return;
  }
  if(page < 1){
    page = 1;
  }
  if(page > totalPages){
    page = totalPages;
  }
  if (page >= 1 && page <= totalPages) {
    currentPage.value = page;
    photos.data = {};
    fetchImages(page);
  }
}

// 頁面加載時初始化
onMounted(() => {
  fetchTotalPages();
  fetchImages(currentPage.value);
});

const loadImage = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const actualSrc = img.dataset.src;  // 取得高解析度圖片 URL

  // 創建新的圖片來加載高解析度版本
  const highResImg = new Image();
  highResImg.src = actualSrc;
  highResImg.onload = () => {
    img.src = actualSrc;  // 替換為高解析度圖片
    img.classList.add('fade-in');  // 添加淡入效果
  };
}

</script>

<template>
  <div class="dark:bg-black p-4 bg-white min-h-screen container-top">
    <p class="dark:text-white text-2xl text-black text-center">{{ props.title }}</p>

    <!-- 分頁導航 -->
    <nav aria-label="Page navigation example" class="pt-2 items-center flex justify-center">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a @click.prevent="goToPage(currentPage - 1)" href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </a>
        </li>

        <li v-for="page in totalPages" :key="page">
          <a  @click.prevent="goToPage(page)" :class="page === currentPage ? 'text-blue-600 bg-blue-50 dark:bg-gray-700 ' : 'text-gray-500 bg-white dark:bg-gray-800  dark:text-gray-400'" href="#" class="flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</a>
        </li>

        <li>
          <a @click.prevent="goToPage(currentPage + 1)" href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

    <!-- 圖片顯示 -->
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-wrap justify-center p-4" v-for="item in photos.data" :key="item.image">
        <!-- 判斷是否為全景圖 -->
        <div v-if="item.panoramic" class="w-full">
          <div :id="'panorama-' + item.image" class="w-full h-96"></div>
        </div>
        <div v-else>
          <img
              class="object-contain w-full placeholder"
              src="../assets/image.png"
              :data-src="'https://madustrialtd.asuscomm.com:9100/' + item.image"
              alt="Loading..."
              @load="loadImage($event)"
          >
        </div>
      </div>
    </div>


    <!-- 分頁導航 -->
    <nav aria-label="Page navigation example" class="pt-2 items-center flex justify-center">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a @click.prevent="goToPage(currentPage - 1)" href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </a>
        </li>

        <li v-for="page in totalPages" :key="page">
          <a  @click.prevent="goToPage(page)" :class="page === currentPage ? 'text-blue-600 bg-blue-50' : ''" href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</a>
        </li>

        <li>
          <a @click.prevent="goToPage(currentPage + 1)" href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<style scoped>

</style>
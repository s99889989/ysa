<template>
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
          <!-- 預設佔位圖 -->
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
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  path: {
    type: Array,
    default: '',
  },
  title: {
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

onMounted(() => {
  const pathList = props.path;
  const url = 'https://madustrialtd.asuscomm.com:9100/ysa/image';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pathList)
  })
      .then(res => res.json())
      .then(data => {
        photos.data = data.sort((a, b) => {
          return a.panoramic === b.panoramic ? 0 : a.panoramic ? 1 : -1;
        });


        nextTick(() => {
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
        });

      })
})

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

<style scoped>
.placeholder {
  transition: opacity 1s ease-in-out;
  opacity: 0.5; /* 初始設置半透明，表示佔位圖 */
}

.fade-in {
  opacity: 1; /* 高解析度圖片加載完成後淡入 */
}
</style>
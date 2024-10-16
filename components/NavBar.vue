<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
  initFlowbite();
})

const hidden_dropdown = () => {
  const dropdown_name_list = ref(['navbar-solid-bg' ,'ysa-2022', "ysa-2022-3", "ysa-2022-4", "ysa-2023", "ysa-2023-1", "ysa-2023-2", "ysa-2023-3"])
  dropdown_name_list.value.forEach(dropdown_id=>{
    let dropdown = document.getElementById(dropdown_id);
    if(dropdown != null){
      if(!dropdown.classList.contains('hidden')){
        dropdown.classList.add('hidden')
      }
    }

  })

}

</script>

<template>
  <nav class="navbar-top bg-white dark:bg-gray-900 z-20 top-0 left-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo.png" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">單身成人大會</span>
      </NuxtLink>

      <ThemeToggle2/>





      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="ysa-2021" class="flex text-2xl items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              2021<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>
            <!-- Dropdown menu -->
            <div id="ysa-2021" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="ysa-2021-2" data-dropdown-placement="right-start" type="button" class="flex text-xl items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    第二回<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <div id="ysa-2021-2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2021/2/photo_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2021/2/photo_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2021/2/photo_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2021/2/video_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2021/2/video_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2021/2/video_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-影片</NuxtLink></li>
                    </ul>
                  </div>
                </li>

              </ul>
            </div>
          </li>

          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="ysa-2022" class="flex text-2xl items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              2022<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>
            <!-- Dropdown menu -->
            <div id="ysa-2022" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">


                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="ysa-2022-3" data-dropdown-placement="right-start" type="button" class="flex text-xl items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    第三回<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <div id="ysa-2022-3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/3/photo_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/3/photo_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/3/photo_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/3/video_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/3/video_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/3/video_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-影片</NuxtLink></li>
                    </ul>
                  </div>
                </li>

                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="ysa-2022-4" data-dropdown-placement="right-start" type="button" class="flex text-xl items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    第四回<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <div id="ysa-2022-4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/4/photo_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/4/photo_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/4/photo_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/4/video_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/4/video_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2022/4/video_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-影片</NuxtLink></li>
                    </ul>
                  </div>
                </li>

              </ul>
            </div>
          </li>

          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="ysa-2023" class="flex text-2xl items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              2023<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>
            <!-- Dropdown menu -->
            <div id="ysa-2023" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="ysa-2023-1" data-dropdown-placement="right-start" type="button" class="flex text-xl items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    第一回<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <div id="ysa-2023-1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/1/photo_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/1/photo_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/1/photo_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/1/video_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/1/video_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/1/video_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-影片</NuxtLink></li>
                    </ul>
                  </div>
                </li>

                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="ysa-2023-2" data-dropdown-placement="right-start" type="button" class="flex text-xl items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    第二回<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <div id="ysa-2023-2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/2/photo_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/2/photo_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/2/photo_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/2/video_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/2/video_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/2/video_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-影片</NuxtLink></li>
                    </ul>
                  </div>
                </li>

                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="ysa-2023-3" data-dropdown-placement="right-start" type="button" class="flex text-xl items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    第三回<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <div id="ysa-2023-3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/3/photo_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/3/photo_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/3/photo_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/3/video_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/3/video_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2023/3/video_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-影片</NuxtLink></li>
                    </ul>
                  </div>
                </li>


              </ul>
            </div>
          </li>

          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="ysa-2024" class="flex text-2xl items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              2024<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>
            <!-- Dropdown menu -->
            <div id="ysa-2024" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="ysa-2024-2" data-dropdown-placement="right-start" type="button" class="flex text-xl items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    第二回<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg></button>
                  <div id="ysa-2024-2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2024/2/photo_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2024/2/photo_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2024/2/photo_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-照片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2024/2/video_1" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第1天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2024/2/video_2" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第2天-影片</NuxtLink></li>
                      <li><NuxtLink @click="hidden_dropdown" to="/young_single_adults/2024/2/video_3" class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">第3天-影片</NuxtLink></li>
                    </ul>
                  </div>
                </li>

              </ul>
            </div>
          </li>


        </ul>
      </div>

      <ThemeToggle/>

    </div>
  </nav>

</template>

<style scoped>

</style>
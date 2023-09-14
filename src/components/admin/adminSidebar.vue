<template>
  <div class="bg-green-600">
    <span
      class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
      @click="openSidebar"
    >
      <i class="bi bi-filter-left px-2 bg-green-900 rounded-md"></i>
    </span>
    <div
      class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-green-900"
    >
      <div class="text-green-100 text-xl">
        <div class="p-2.5 mt-1 flex items-center">
          <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-green-600"></i>
          <h1 class="font-bold text-green-200 text-[15px] ml-3">Alhouda Admin</h1>
          <i
            class="bi bi-x cursor-pointer ml-28 lg:hidden"
            @click="openSidebar"
          ></i>
        </div>
        <div class="my-2 bg-green-600 h-[1px]"></div>
      </div>
      <div
        class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-green-700 text-white"
      >
        <i class="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
      >
        <i class="bi bi-house-door-fill"></i>
        <span class="text-[15px] ml-4 text-green-200 font-bold">
          <router-link to="/admin">Home</router-link>
        </span>
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
      >
        <i class="bi bi-bookmark-fill"></i>
        <span class="text-[15px] ml-4 text-green-200 font-bold">
          <router-link to="/admin/about">About Admin</router-link>
        </span>
      </div>
      <div class="my-4 bg-green-600 h-[1px]"></div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
        @click="dropdown"
      >
        <i class="bi bi-chat-left-text-fill"></i>
        <div class="flex justify-between w-full items-center">
          <span class="text-[15px] ml-4 text-green-200 font-bold">User</span>
          <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen }">
            <i class="bi bi-chevron-down" ></i>
          </span>
        </div>
      </div>
      <div
        class="text-left text-sm mt-2 w-4/5 mx-auto text-green-200 font-bold"
        :class="{ hidden: isDropdownOpen }"
      >
        <h1 class="cursor-pointer p-2 hover:bg-green-600 rounded-md mt-1">
         <router-link to="/admin/users"> Utilisateurs  </router-link>
        </h1>
        <h1 class="cursor-pointer p-2 hover:bg-green-600 rounded-md mt-1">
          Personal
        </h1>
        <h1 class="cursor-pointer p-2 hover:bg-green-600 rounded-md mt-1">
          Friends
        </h1>
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
      >
        <i class="bi bi-box-arrow-in-right"></i>
        <span class="text-[15px] ml-4 text-green-200 font-bold">Logout</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDropdownOpen = ref(false);

const dropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const openSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.classList.toggle("hidden");
  }
};

dropdown();
</script>

<style scoped>
/* Add your custom styles here */
</style>
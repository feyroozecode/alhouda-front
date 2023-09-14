<script setup lang="ts">
import headerComponent       from '@/components/clientHeaderComponent.vue';
import adminHeaderComponent  from '@/components/admin/adminHeaderComponent.vue';
import leftSideBar           from '@/components/left_sidebar.vue'
import rightSidebar        from '@/components/right_sidebar.vue';
import { useRoute } from 'vue-router';
import { computed, watch, ref } from 'vue';

// current selected Item with ref and method to get current route path 
const isAdminRoute = ref(false);
const route = useRoute();

// check if is content admin and dont containt login  using computed and hide a seadbar on login page 
const currentRoute = computed(() => {
  return route.path.includes('/admin') && !route.path.includes('/admin/login');
})

// show current route all time is changed 
watch(currentRoute, (value) => {
  isAdminRoute.value = value;
  console.log(isAdminRoute.value);
})

</script>

<template>
  <div class="w-full h-auto">
  
    <headerComponent v-if="!isAdminRoute" />  <!-- show client header if is not admin -->
    
    <adminHeaderComponent v-if="isAdminRoute" />  <!-- show admin header if is admin -->
   
    <div class="flex h-screen bg-gray-100 p-1 ">

      <leftSideBar v-if="!isAdminRoute" /> <!-- show admin sidebar if is admin -->

      <main class="flex-1 rounded  ">
        <router-view name="mainContent" />
      </main>

      <rightSidebar v-if="!isAdminRoute" />

    </div>
  </div>
</template>


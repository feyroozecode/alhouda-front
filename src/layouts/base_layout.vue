<script setup lang="ts">
import headerComponent from '@/components/clientHeaderComponent.vue';
import adminHeaderComponent from '@/components/admin/adminHeaderComponent.vue';
// useRoute
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
  <div class="w-full h-full">
  
    <headerComponent v-if="!isAdminRoute" />  <!-- show client header if is not admin -->
    
    <adminHeaderComponent v-if="isAdminRoute" />  <!-- show admin header if is admin -->
   
    <router-view name="mainContent" />
    
  </div>
</template>


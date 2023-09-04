<script setup lang="ts">
import headerComponent from './components/clientHeaderComponent.vue';
import adminHeaderComponent from './components/admin/adminHeaderComponent.vue';
// useRoute
import { useRoute } from 'vue-router';
import { computed, watch, ref } from 'vue';



// current selected Item with ref and method to get current route path 
const isAdminRoute = ref(false);
const route = useRoute();

// check if is containt admin and dont containt login  using computed 
const currentRoute = computed(() => {
  return route.path.includes('admin') && !route.path.includes('login');
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
   
    <RouterView />
  </div>
</template>


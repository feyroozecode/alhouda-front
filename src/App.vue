<script setup lang="ts">
import headerComponent from './components/headerComponent.vue';
import adminHeaderComponent from './components/adminHeaderComponent.vue';
// useRoute
import { useRouter, useRoute } from 'vue-router';
import { computed, watch, ref } from 'vue';



const router = useRouter();

// current selected Item with ref and method to get current route path 
const isAdminRoute = ref(false);
const route = useRoute();


// check if is containt admin using computed
const currentRoute = computed(() => {
  return route.path.includes('/admin');
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



<template>
    <div class="w-full h-full">

    <!--Sidebar with Dimmer -->
    <Sidebar v-if="!isLoginRoute" />
       
        <div class="flex justify-center">
           <router-view name="mainContent" />
        </div>
    </div>
</template>

<script setup lang="ts" >
import Sidebar from '@/components/admin/adminSidebar.vue'
// useRoute
import { useRoute } from 'vue-router';
import { computed, watch, ref } from 'vue';

// current selected Item with ref and method to get current route path 
const isLoginRoute = ref(false);
const route = useRoute();

// check if is content is login  using computed and hide a sidbar on login page 
const currentRoute = computed(() => {
  return !route.path.includes('/admin/login');
})

// show current route all time is changed 
watch(currentRoute, (value) => {
  isLoginRoute.value = value;
  console.log(isLoginRoute.value);
})
// hide a sidebar if route is login 


</script>

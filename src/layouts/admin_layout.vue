
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

</script>

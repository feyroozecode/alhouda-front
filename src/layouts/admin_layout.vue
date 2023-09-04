
<template>
    <div class="w-full h-full">

   
    <!--Sidebar with Dimmer -->
    <Sidebar />
       
        <div class="flex justify-center">
           <router-view name="mainContent" />
        </div>
    </div>
</template>

<script setup lang="ts" >
import Sidebar from '@/components/admin/adminSidebar.vue'
</script>

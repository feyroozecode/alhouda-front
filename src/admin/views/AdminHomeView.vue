
<template>
    <div class="w-full h-full">

   
    <!--Sidebar with Dimmer -->
    <Sidebar />
       
        <div class="flex justify-center">
            <h1 class="text-green-700"> {{ title }} </h1>
            Alhouda is a Platforme for islamic courses .
        </div>
    </div>
</template>

<script setup lang="ts" >
import Sidebar from '../../components/admin/adminSidebar.vue'

const title = 'Admin Home Page'

</script>

<style scoped>

</style>
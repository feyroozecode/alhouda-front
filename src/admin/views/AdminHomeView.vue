<template>
    <div class="w-full h-full">
       
        <div class="flex justify-center ">
            <br/>
            <h1 class="text-green-700"> {{ title }} </h1> 
            <br/>
            Alhouda is a Platforme for islamic courses .

           
            <div class="mt-25">
                <router-link to="/">return <b class="text-green-500">Home Page</b> </router-link>
            </div>

        </div>


    </div>
</template>

<script setup lang="ts" >

const title = 'Admin Home Page'

</script>

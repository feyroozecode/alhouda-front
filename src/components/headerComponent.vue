<template>
    <div class="bg-gray-100 p-5">
        <header class="w-full">
            <h1>Alhouda  </h1>
            <nav class="mt-4 mr-20">
              
                <router-link class="p-2 text-green-700" to="/">Home</router-link> 
                <router-link class="p-2 text-green-700"   to="/about">About</router-link>
                <router-link class="p-2 text-green-700"  to="/admin">Admin</router-link>
            </nav>
        </header>
    </div>
</template>

<script lang="ts">

import { ref } from 'vue';

 export default {
    data() {
        return {
           // get current routes selected 
           
        }
    },

    // if iem is the current route change color 
    // current selected Item with ref 

    methods: {
        
    },

 }
</script>
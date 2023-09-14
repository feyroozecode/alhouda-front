<script setup lang="ts">
import { TheCard  } from 'flowbite-vue'

</script>

<template>
    <div class="w-full h-full">
       
       
        <div class="container mx-auto flex justify-center">
           <the-card>
            <div class="w-full max-w-md">
                <div class="p-8 rounded-lg">
                  <h1 class="text-center text-3xl font-bold">Login</h1>
                  
                    <input type="email" class="w-full px-4 py-2 mb-4 border-gray-300 rounded-md" placeholder="Email">
                    <input type="password" class="w-full px-4 py-2 mb-4 border-gray-300 rounded-md" placeholder="Password">
                    <router-link to="/admin"  class="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Login</router-link>
                 
                  <p class="mt-4 text-center">Don't have an account? <a href="/register">Sign up</a></p>
                </div>
              </div>
           </the-card>
          </div>
    </div>
</template>

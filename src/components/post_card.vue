
<script setup lang="ts">
import {  defineProps  } from 'vue'
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue'

const props = defineProps({
    title: String,
    description: String,
    scholar: String,
    category: String,
    date: String,
    mediaUrl: String,
    mediaType: String,
    mediaLength: String,
    thumbnailUrl: String,
});

</script>

<template>
    <div class="mt-5 mb-5">
      <Accordion class="bg-white" always-open> 
     
       <!-- Top Header -->
      <accordion-panel>
         
        <accordion-header class=" rounded-none ">
        <div class="flex justify-between items-center border-b">
      
          <div class="font-semibold text-lg">{{ scholar }}</div>
        
         
        </div>
        </accordion-header>

      <accordion-content>
       <!-- Media (Video or Audio) -->
      <div class="relative">
        <img
          :src="thumbnailUrl"
          alt="Thumbnail"
          class="object-cover w-full h-40"
        />
        <div class="absolute top-0 right-0 m-2 p-1 bg-gray-900 text-white text-sm rounded-full">
          {{ mediaType === 'video' ? 'Video' : 'Audio' }}
        </div>
      </div>
      
      
      <!-- Content -->
      <div class="px-4 py-2">
        <!-- Title -->
        <div class="font-bold text-lg mb-2">{{ title }}</div>
        
        <!-- Description -->
        <p class="text-gray-600 text-base">{{ description }}</p>
      </div>
      
      <!-- Separation Line -->
      <div class="border-t border-gray-300"></div>
      
          <!-- Author, Category, and Date -->
          <div class="px-4 py-2">
          
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Category:</span> {{ category }} | 
              <span class="font-semibold">Date:</span> {{ date }}         |
              <span class="font-semibold">Length:</span> {{ mediaLength }}
            </p>
        
          </div>
          
          <!-- Media Length -->
          <div class="px-6 ">
            <p class="text-sm text-gray-600">
            
            </p>
          </div>
          
          <!-- Social Buttons -->
          <div class="px-6 py-2 flex items-center space-x-4">
            <!-- Add social buttons here, e.g., Facebook, Twitter, LinkedIn, etc. -->
            <button class="text-gray-600 hover:text-blue-500 focus:outline-none">
              <!-- Add a social icon, e.g., Facebook icon -->
              <i class="fab fa-facebook-f"></i>
            </button>
            <button class="text-gray-600 hover:text-blue-500 focus:outline-none">
              <!-- Add a social icon, e.g., Twitter icon -->
              <i class="fab fa-twitter"></i>
            </button>
            <!-- Add more social buttons as needed -->
          </div>
          
          <!-- Media URL (Link to video/audio) -->
        </accordion-content>
   
      </accordion-panel>
      </Accordion>
   
    </div>
</template>

<style scoped>
svg {
  fill: gray;
  width: 48px;
  height: 48px;
  }
</style>
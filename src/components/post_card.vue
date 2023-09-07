
<script setup lang="ts">
import { ref, defineProps  } from 'vue'

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

// create a expanded bool with ref 
const expanded: any = ref(false);

</script>

<template>
    <div class="bg-white mb-4">
     <!-- Top Header -->
    <div class="flex justify-between items-center px-6 py-4 bg-white border-b">
      <!-- Author Name -->
      <div class="font-semibold text-lg">{{ scholar }}</div>
      
      <!-- Close/Expand Button -->
      <button class="text-gray-600 hover:text-gray-800 focus:outline-none">
        <!-- You can use an icon like "X" or "+" here -->
        {{ expanded ? 'Close' : 'Expand' }}
      </button>
    </div>
    
    <!-- Media (Video or Audio)
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
     -->
    
    <!-- Content -->
    <div class="px-6 py-4">
      <!-- Title -->
      <div class="font-bold text-lg mb-2">{{ title }}</div>
      
      <!-- Description -->
      <p class="text-gray-600 text-base">{{ description }}</p>
    </div>
    
    <!-- Separation Line -->
    <div class="border-t border-gray-300"></div>
    
        <!-- Author, Category, and Date -->
        <div class="px-6 py-2">
          <p class="text-sm text-gray-600">
            <span class="font-semibold">Author:</span> {{ scholar }}
          </p>
          <p class="text-sm text-gray-600">
            <span class="font-semibold">Category:</span> {{ category }}
          </p>
          <p class="text-sm text-gray-600">
            <span class="font-semibold">Date:</span> {{ date }}
          </p>
        </div>
        
        <!-- Media Length -->
        <div class="px-6 py-2">
          <p class="text-sm text-gray-600">
            <span class="font-semibold">Media Length:</span> {{ mediaLength }}
          </p>
        </div>
        
        <!-- Social Buttons -->
        <div class="px-6 py-4 flex items-center space-x-4">
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
        
        <!-- Favorite Button -->
        <div class="px-6 py-4 flex items-center">
          <button class="text-red-600 hover:text-red-800 focus:outline-none">
            <!-- You can use a heart icon for favoriting -->
            <i class="far fa-heart"></i>
          </button>
          <span class="text-sm text-gray-600 ml-2">Fab</span>
        </div>
        
        <!-- Media URL (Link to video/audio) -->
       
    </div>
</template>
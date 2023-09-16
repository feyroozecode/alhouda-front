<script setup lang="ts">
import { ref } from 'vue'
import PostCard from '@/components/post_card.vue' 

  const posts = ref([
    {
      "id": "1",
      title: " Khutba Jumaa - Sunnah ",
      description: "Khutba Juma'a Djoumaat mosque Uthman bin Affane ",
      scholar: "Abdul Aziz Al Fawzan",
      category: "Kjutba | Sermont",
      date : "07-09-2023",
      mediaUrl:  "youtube.com/",
      mediaType : "video",
      mediaLength: "1:30:00",
      thumbnailUrl: "https://i.ytimg.com/vi/3ZqWYRQnJZM/maxresdefault.jpg"
    },
    
    {
      "id": "2",
      title: "Kitabu Tawhid - Aqidat ",
      description: "Khutba Juma'a Djoumaat mosque Uthman bin Affane ",
      scholar: "Abdul Aziz Al Fawzan",
      category: "Kjutba | Sermont",
      date : "07-09-2023",
      mediaUrl:  "youtube.com/",
      mediaType : "video",
      mediaLength: "1:30:00",
      thumbnailUrl: "https://i.ytimg.com/vi/3ZqWYRQnJZM/maxresdefault.jpg"
    },
    {
      "id": "3",
      title: " Arbaouna Hadith ",
      description: "Khutba Juma'a Djoumaat mosque Uthman bin Affane ",
      scholar: "Abdul ",
      category: "Kjutba | Sermont",
      date : "07-09-2023",
      mediaUrl:  "youtube.com/",
      mediaType : "video",
      mediaLength: "1:30:00",
      thumbnailUrl: "https://i.ytimg.com/vi/3ZqWYRQnJZM/maxresdefault.jpg"
    },
    {
      "id": "4",
      title: " Khutba Jumaa - Sunnah ",
      description: "Khutba Juma'a Djoumaat mosque Uthman bin Affane ",
      scholar: "Abdul Aziz Al Fawzan",
      category: "Kjutba | Sermont",
      date : "07-09-2023",
      mediaUrl:  "youtube.com/",
      mediaType : "video",
      mediaLength: "1:30:00",
      thumbnailUrl: "https://i.ytimg.com/vi/3ZqWYRQnJZM/maxresdefault.jpg"
    },

  ])

</script>

<template>
  <main class="pt-8">
    <div class="justify-center text-xl w-full ">
    <ul>
      <li v-for="post in posts" :key="post.id"> 
       
        <PostCard
          :title="post.title"
          :description="post.description"
          :scholar="post.scholar"
          :category="post.category"
          :date="post.date"
          :mediaUrl="post.mediaUrl"
          :mediaType="post.mediaType"
          :mediaLength="post.mediaLength"
          :thumbnailUrl="post.thumbnailUrl" />
      </li>
    </ul>
    </div>

  </main>
</template>

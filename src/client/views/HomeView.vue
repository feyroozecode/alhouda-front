<script setup lang="ts">
import { ref, onMounted } from 'vue'
import  axios     from 'axios'
import {Course}   from '@/models/course.model'
import {Article } from '@/models/article.model'
import PostCard from '@/components/post_card.vue' 
import { GET_ALL_COURSES, GET_ALL_ARTICLES } from '@/data/static'

onMounted(() => {
     
})
  
const courses = ref<Course[]>([]) ;
const articles = ref<Article[]>([])
  
// fecth datas 
const fetchCourses: any = () => {
  axios.get( GET_ALL_COURSES ) 
    .then( (response: any) => {
       courses.value = response.data.courses as Course[]
       console.table( courses.value )
    } )
    .catch ( (error: any) => {
      console.error('Error fetching courses ', error)
    } ) 
} 

const fetchArticles: any = () => {
  axios.get( GET_ALL_ARTICLES ) 
    .then( (response: any) => {
       articles.value = response.data.courses as Course[]
       console.table( articles.value )
    } )
    .catch ( (error: any) => {
      console.error('Error fetching courses ', error)
    } ) 
} 

// combines all data to show on landing pages on random on last added 
const allCombined = () => {
    // give a combiations of all differents parts 
    
}

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

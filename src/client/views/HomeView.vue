<script setup lang="ts">
  import { ref } from 'vue'

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
    },
    {
      "id": "3",
      title: " Khutba Jumaa - Sunnah ",
      description: "Khutba Juma'a Djoumaat mosque Uthman bin Affane ",
      scholar: "Abdul Aziz Al Fawzan",
      category: "Kjutba | Sermont",
      date : "07-09-2023",
      mediaUrl:  "youtube.com/",
      mediaType : "video",
      mediaLength: "1:30:00",
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
    },

  ])

</script>

<template>
  <main class="pt-8 pl-2 pr-2">
    <div class="justify-center text-xl w-full">
    <ul>
      <li v-for="post in posts" :key="post.id"> 
       
          <div class="bg-white rounded-md shadow-md m-4 card mb-4">
            <div class="card-body">
              <h2 class="card-title">{{ post.title }}</h2>
              <p class="card-text">{{ post.description }}</p>
              <p class="card-text">
                <small>
                  By <a href="#">{{ post.scholar }}</a>,
                  <time datetime="{{ date }}">{{ post.date }}</time>
                </small>
              </p>
             <!--
               <video class="card-img-top" src="{{ post.mediaUrl }}" controls></video>
             -->
            
            </div>
          </div>

      

      </li>
    </ul>
    </div>
   
       
        
       

  </main>
</template>

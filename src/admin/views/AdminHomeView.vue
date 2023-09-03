
<template>
    <div class="w-full h-full">

        <Sidebar 
            width="250px"
            position="fixed"
            items="[
                {
                    name: 'Dashboard',
                    href: '/',
                    icon: 'home',
                  },
                  {
                    name: 'Users',
                    href: '/users',
                    icon: 'users',
                  },
                  {
                    name: 'Settings',
                    href: '/settings',
                    icon: 'cog',
                  },
            ]"
        > </Sidebar>
       
        <div class="flex justify-center">
            <h1 class="text-green-700"> {{ title }} </h1>
            Alhouda is a Platforme for islamic courses .
        </div>
    </div>
</template>

<script>
import { Sidebar }  from 'flowbite-vue'

</script>
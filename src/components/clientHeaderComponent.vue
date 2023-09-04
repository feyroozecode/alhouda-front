<template>
    <div class="bg-gray-100 p-5">
        <header class="w-full">

            <Navbar>
                <template #logo>
                  
                    <a href="/" class="text-xl font-weight-700"> Alhouda</a>
                  
                </template>
                <template #default={isShowMenu}>
                    <NavbarCollapse :isShowMenu="isShowMenu">
                        <NavbarLink > <router-link class="p-2 "  to="/">Home</router-link>  </NavbarLink>
                        <NavbarLink  > <router-link class="p-2 "  to="/about">About</router-link></NavbarLink>
                        <NavbarLink ><router-link class="p-2"  to="/admin/login">Admin</router-link></NavbarLink>
                    </NavbarCollapse>
                </template>
            </Navbar>
        </header>
    </div>
</template>

<script setup lang="ts">
import { Navbar, /* NavbarLogo ,*/ NavbarCollapse, NavbarLink } from 'flowbite-vue'

import { useRoute } from 'vue-router'

// get current route selected
const currentRoute = useRoute()

// check a current route name 
const isActiveRoute = (routeName: string) => {
    return currentRoute.name === routeName
}

</script>
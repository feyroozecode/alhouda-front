<template>
    <div class="bg-gray-100 p-5">
        <header class="w-full">

            <Navbar>
                <template #logo>
                  
                    <a href="/" class="text-xl font-weight-700"> Alhouda - Admin </a>
                  
                </template>
                <template #default={isShowMenu}>
                    <NavbarCollapse :isShowMenu="isShowMenu">
                        <NavbarLink > <router-link class="p-2 "  to="/">Home</router-link>  </NavbarLink>
                        <NavbarLink ><router-link class="p-2"  to="/admin">Admin</router-link></NavbarLink>
                       
                    </NavbarCollapse>
                </template>
            </Navbar>
        </header>
    </div>
</template>

<script setup lang="ts">

import { Navbar, /* NavbarLogo ,*/ NavbarCollapse, NavbarLink } from 'flowbite-vue'

</script>

<script setup lang="ts">
import { ref, onMounted }       from  'vue'
import 
    { 
      Table, TableHead, 
      TableBody, TableRow, 
      TableHeadCell, TableCell
    }                           from 'flowbite-vue'
import   axios                  from 'axios'
import { GET_ALL_USERS }        from '@/data/static';
import {  User }                from '@/models/user.model'

onMounted(() => {
    fetchAllUsers()
})

// fetch a user list from server 
const users = ref<User[]>([])
const fetchAllUsers: any = () => {
    axios.get( GET_ALL_USERS )
        .then((response: any) => {
            users.value = response.data.users as User[]
            console.table(  users.value )
        })
        .catch((error: any) => {
            console.error('Error fetching user data', error)
        })
}

</script>

<template>
    <div  class="flex items-center m-10">
        <Table striped>
            <table-head class="">
                <table-head-cell>ID</table-head-cell>
                <table-head-cell>UserName</table-head-cell>
                <table-head-cell>Email</table-head-cell>
                <table-head-cell>Roles</table-head-cell>
            </table-head>
            <table-body>
                <table-row v-for="user in users " :key="user.userId">
                    <table-cell> {{ user.userId }} </table-cell>
                    <table-cell> {{ user.username }} </table-cell>
                    <table-cell> {{ user.email }} </table-cell>
                    <table-cell> {{ user.role }} </table-cell>
                </table-row>
            </table-body>
        </Table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted }  from  'vue'
import { Table } from 'flowbite-vue'
import axios     from 'axios'
import { GET_ALL_USERS } from '@/data/static';

onMounted(() => {
    fetchAllUsers()
})

// fetch a user list from server 
const users = ref([])

const fetchAllUsers: any = () => {
    axios.get(GET_ALL_USERS)
        .then((response) => {
            users.value = response.data
        })
        .catch((error: any) => {
            console.error('Error fetching user data', error)
        })
}

</script>

<template>
    <div  class="flex items-center">
        <Table>
            <table-head>
                <table-cell>ID</table-cell>
                <table-cell>UserName</table-cell>
                <table-cell>Email</table-cell>
                <table-cell>Roles</table-cell>
            </table-head>
            <table-body>
                <table-row v-for="user in users " :key="user._id">
                    <table-cell> {{ user._id }} </table-cell>
                    <table-cell> {{ user.name }} </table-cell>
                    <table-cell> {{ user.email }} </table-cell>
                    <table-cell> {{ user.role }} </table-cell>
                </table-row>
            </table-body>
        </Table>
    </div>
</template>
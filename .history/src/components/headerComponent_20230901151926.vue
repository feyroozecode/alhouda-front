<template>
    <div class="bg-green-500">
        <header>
            <h1> {{ title }} </h1>
        </header>
    </div>
</template>

<script lang="ts">
 export default default {
    data() {
        return {
            title: String
        }
    }
 }
</script>
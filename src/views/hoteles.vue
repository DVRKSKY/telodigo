<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()


</script>

<template>
    <div>
        <h1>HOTELESSSSS</h1>
        <p>{{route.params}}</p>
        <RouterView></RouterView>
    </div>
</template>
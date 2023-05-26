<script setup>
import Card from '../../components/card.vue'

const alert2 = () => alert('holaa')
</script>
<template lang="pug">
div
    h1 holi cards
    Card(@click='alert2("CARD")')
        h2 este es mi card s
        span con sus respectivo contenido 
        span !Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>
<script setup>
const props = defineProps(['nombre', 'item', 'funcion'])

</script>
<template lang="pug">
button(@click="props.funcion()") {{ props.nombre }}
</template>
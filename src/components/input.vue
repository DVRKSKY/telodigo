<script setup>
import { ref } from "vue"

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const valor = ref('')
</script>
<template lang="pug">
div
    h1 input
    input(:value="modelValue" @change="emit('update:modelValue', valor)"  v-model="val")
</template>
<template lang="pug">
div
    h1#title holi perfil
    p#texto {{ palabra }}
    h3 {{ user  }}
    h3 {{ Mayuscula  }}
    Boton(nombre='miboton' :funcion='mifuncion')
    Boton(nombre='miboto2n' :funcion='mifuncion')
    Boton(nombre='mibotoasdn' :funcion='mifuncion')
    Boton(nombre='mibotoasdn' :funcion='mifuncion')
    Boton(nombre='mibotoasdn' :funcion='mifuncion')

</template>
<script setup>
import {user} from '../../store/users'
import { onMounted, onUnmounted, watch, ref, watchEffect, computed } from 'vue'
import Boton from '../../components/boton.vue'
const palabra = ref('amadeo')
const mifuncion = () => {
    alert('MI BOTOOON')
}

console.log('CREADO', document.getElementById('title'))
onMounted(()=>{
    console.log('Montado', document.getElementById('title'))
    palabra.value = 'montado amadoe'
})
onUnmounted(()=>{
    console.log('Desmontado', document.getElementById('title'))
    palabra.value = ''
})
watch(
    ()=>palabra.value,
    ()=>{
        alert('cambiooo')
    }
)
watchEffect(()=>{
    console.log('WAAAAATCH', document.getElementById('title'))
    
    console.log(palabra.value)
})
const Mayuscula = computed(()=>user.value.toUpperCase())
</script>
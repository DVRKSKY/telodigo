<script setup>
/*var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});*/
</script>


<template lang="pug">
.contenedorPrincipal
  .topBar
    h2 Mapa
  .cuerpo
    span Aqui va el mapa
  .nav
    ul
      li home
      li users 
      li logout
</template>

<style lang="sass" scoped>
.contenedorPrincipal
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 400px
  height: 100vh
  background-color: #8d8d8d
  .topBar
    display: flex
    justify-content: center
    height: 60px
    width: 100%
    background-color: #fff
    >h2 
      color: #c2c2c2
  .cuerpo
    height: 100%
    width: 100%
    padding: 0
    margin: 0
  .nav
    display: flex
    justify-content: center
    align-items: center
    flex-direction: row
    background-color: #fff
    width: 100%
    >ul
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      >li 
        margin-left: 10px
        margin-right: 10px
        list-style-type: none
        color: red

</style>

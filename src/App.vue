<template>
  <warsame></warsame>
</template>

<script>
import Warsame from './components/Warsame.vue'
import HelloWorld from './components/HelloWorld.vue'
import SachaComponent from './components/SachaComponent.vue'

export default {
  name: 'App',
  components: {
    Warsame,
    HelloWorld,
    SachaComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

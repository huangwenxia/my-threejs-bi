<template>
  <div id="app">
    <Earth/>
  </div>
</template>

<script>
// import Earth from './components/Earth/Earth.vue'
import Earth from './components/Earth'

export default {
  name: 'App',
  components: {
    Earth
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  background-color: #414141;
}
canvas {
  display: block;
}
#app {
  height: 100%;
  width: 100%;
}
</style>

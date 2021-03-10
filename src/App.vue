<template>
  <div id="app">
  <v-nav-bar></v-nav-bar>
  <v-cart></v-cart>

  </div>
</template>

<script>

import vNavBar from './components/v-nav-bar'
import vCart from './components/v-cart'
export default {
  name: 'App',
  components: {
    vNavBar,
    vCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>

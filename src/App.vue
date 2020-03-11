<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <cartItem title="Goodnight Moon" author="Margaret Wise Brown" />
    <cartCounter />
    <checkout />
  </div>
</template>

<script>
import cartItem from './components/cartItem.vue'
import cartCounter from './components/cartCounter.vue'
import checkout from './components/checkout.vue'

export default {
  name: 'App',
  components: {
    cartItem,
    cartCounter,
    checkout
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

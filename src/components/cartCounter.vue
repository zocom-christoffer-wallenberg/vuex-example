<template>
  <section>
      <p>Du har lagt till {{ cartLength }} böcker</p>
      <p>Du har lagt till följande böcker:</p>
      <ul>
          <li v-for="(item, index) in cart" :key="index"> {{ item.title }}</li>
      </ul>
  </section>
</template>

<script>
export default {
    computed: {
        cartLength() {
            return this.$store.state.cart.length;
        },
        cart() {
            return this.$store.state.cart;
        }
    }
}
</script>

<style>

</style>
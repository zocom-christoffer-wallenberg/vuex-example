<template>
  <article class="card">
      <h3 class="title">{{ title }}</h3>
      <p class="author">Av {{ author }}</p>
      <p class="about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Nihil odio unde ad modi amet deleniti explicabo debitis earum rem vel illum dolores, 
          quidem quibusdam adipisci dolorem repellendus repellat mollitia! Voluptatem?
      </p>
      <button class="button" v-on:click="addToCart">Add to cart</button>
  </article>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    author: String
  },
  methods: {
    addToCart() {
      let item = {
        title: this.title,
        author: this.author
      }

      this.$store.commit('addToCart', item);
      this.$store.commit('setName', 'Christoffer');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    max-width: 300px;
    background-color: #fffffe;
    text-align: center;
    padding: 1.2rem;
    box-shadow: 0 5px 15px -10px rgba(31, 18, 53, 0.6);
    border-radius: 3px;
    margin: 0 auto;
}

.title {
    margin-bottom: 0;
}

.about {
    text-align: left;
}

.author {
    text-align: center;
    margin-top: 0;
    font-size: 0.9rem;
}
</style>

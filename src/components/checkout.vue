<template>
    <section>
        <p v-if="loading">Skickar din order</p>
        <button v-else v-on:click="buy">Köp</button>
    </section>
</template>

<script>
export default {
    computed: {
        loading() {
            return this.$store.state.loading;
        }
    },
    methods: {
        buy() {
            this.$store.dispatch('sendOrder');
        }
    }
}
</script>

<style>

</style>
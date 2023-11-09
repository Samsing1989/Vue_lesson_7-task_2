<template>
    <h1>Список Товарів</h1>
    <div v-for="product in getProducts" :key="product.id" class="product">
        <div>{{ product.title }}</div>
        <div class="body">
            <span>{{ getCurrentPrice(product.price) }} {{ currencyTitle }}</span>
            <button @click="buyProduct(product)">Купити</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductsList',
    computed: {
        ...mapGetters(['getProducts', 'currencyTitle', 'getCurrentPrice']),
    },
    methods: {
        ...mapActions(['buyProduct']),
    },
}
</script>

<style lang="scss" scoped>
.product {
    width: 400px;
    display: flex;
    justify-content: space-between;
    border: 2px solid #000;
    padding: 10px;
}
.body {
    display: inline-flex;
    gap: 10px;
}
</style>

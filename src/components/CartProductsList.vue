<template>
    <h1>Список Товарів корзини</h1>
    <div v-for="product in getCartList" :key="product.id" class="product">
        <div>{{ product.title }}</div>
        <div class="body">
            <span>{{ getCurrentPrice(product.price) }}{{ currencyTitle }}</span>
            <button @click="rejectProdact(product.id)">видалити</button>
        </div>
    </div>
    <div class="total">Разом до оплати: {{ getTotal }} {{ currencyTitle }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CartProductsList',
    computed: {
        ...mapGetters(['getCartList', 'currencyTitle', 'getCurrentPrice', 'getTotal']),
    },
    methods: {
        ...mapActions(['rejectProdact']),
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
    display: flex;
    gap: 10px;
}
.total {
    padding-top: 10px;
    font-size: 24px;
    font-weight: 700;
}
</style>

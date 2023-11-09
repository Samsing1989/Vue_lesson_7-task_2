<template>
    <currensy-selector />
    <products-list />
    <cart-products-list />
</template>

<script>
import { mapActions } from 'vuex'
import CartProductsList from './CartProductsList.vue'
import CurrensySelector from './CurrensySelector.vue'
import ProductsList from './ProductsList.vue'
export default {
    name: 'ProductsManegare',
    components: {
        CurrensySelector,
        ProductsList,
        CartProductsList,
    },

    created() {
        this.loadDataFromFils()
    },
    methods: {
        ...mapActions(['loadDataFromFils']),
    },
}
</script>

<style lang="scss" scoped></style>

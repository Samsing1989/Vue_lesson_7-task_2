<template>
    <select v-model="currentCurrency">
        <option v-for="currency in currencyList" :key="currency.title" :value="currency.rate">
            {{ currency.title }}
        </option>
    </select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { currencyList } from './settings'
export default {
    name: 'CurrensySelector',
    data() {
        return {
            currencyList,
        }
    },
    computed: {
        ...mapGetters(['getCurrencyRate']),
        currentCurrency: {
            get() {
                return this.getCurrencyRate
            },
            set(val) {
                this.setCurrencyRate(val)
            },
        },
    },
    methods: {
        ...mapActions(['setCurrencyRate']),
    },
}
</script>

<style lang="scss" scoped></style>

import { createStore } from 'vuex'
import products from '../data/products.json'
const store = createStore({
    state() {
        return {
            products: [],
            cart: [],
            currencyRate: 1,
        }
    },
    getters: {
        getTotal: (state) =>
            (state.cart.reduce((prevSum, product) => prevSum + product.price, 0) * state.currencyRate).toFixed(2),
        getCartList: (state) => state.cart,

        getProducts: (state) => state.products,
        currencyTitle: (state) => (state.currencyRate === 1 ? 'грн' : '$'),

        getCurrentPrice: (state) => (price) => (price * state.currencyRate).toFixed(2),

        getCurrencyRate: ({ currencyRate }) => currencyRate,
    },
    mutations: {
        setProducts(state, list) {
            state.products = list
        },
        changeCurrencyRate(state, val) {
            state.currencyRate = val
        },
        addProductToCartList(state, product) {
            state.cart.push(product)
        },
        removeProductFromCart(state, productId) {
            state.cart = state.cart.filter((product) => product.id !== productId)
        },
    },
    actions: {
        loadDataFromFils({ commit }) {
            commit('setProducts', products)
        },
        setCurrencyRate({ commit }, currency) {
            commit('changeCurrencyRate', currency)
        },
        buyProduct({ commit }, product) {
            commit('addProductToCartList', product)
        },
        rejectProdact({ commit }, prodId) {
            commit('removeProductFromCart', prodId)
        },
    },
})
export default store

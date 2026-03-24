<template>
    <div>
        <h1>Menu</h1>
    </div>
    <div v-for="drink in drinks" :key="drink.name">
      <p>{{ drink.name }} - ${{ drink.price }}</p>
      <button @click="addToCart(drink)">add to cart</button>

  </div>
  <h2>Cart</h2>
  <p v-if="cart.length === 0">empty</p> 
  <p v-else ></p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const cart = ref([])
function addToCart(drink) {
  cart.value.push(drink)
}
const drinks = ref([
  {id: 1, name: 'Jasmine Latte', price: '6.49'},
  {id: 2, name: 'Coconut Mango Boom', price: '7.49'},
  {id: 3, name: 'Triple Matcha Supreme', price: '7.99' },
  {id: 4, name: 'Grapefruit Boom', price: '7.49'},
  {id: 5, name: 'Crispy Grape', price: '7.49'},
])
</script>

<style scoped>
</style>
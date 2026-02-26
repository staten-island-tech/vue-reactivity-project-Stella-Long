<template>
    <div>
        <h1>Menu</h1>
    </div>
    <div v-for="drink in drinks" :key="drink.id">
      <p>{{ drink.name }} - ${{ drink.price }}</p>
      <button @click="addToCart(drink)">add to cart</button>
  </div>
  <h2>Cart</h2>
  <p v-if="cart.length === 0">empty</p>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

function addToCart()
const drinks = ref([s
  { id:1, name: 'Jasmine Latte', price: '$6.49', img: ''},
  { id:2, name: 'Coconut Mango Boom', price: '$7.49', img: ''},
  { id:3, name: 'Triple Matcha Supreme', price: '$7.99', img: '' },
])
</script>

<style scoped>

</style>
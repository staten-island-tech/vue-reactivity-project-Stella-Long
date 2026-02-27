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
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
function addToCart(drink) {
  console.log(drink)
}
const drinks = ref([
  {name: 'Jasmine Latte', price: '$6.49'},
  {name: 'Coconut Mango Boom', price: '$7.49'},
  {name: 'Triple Matcha Supreme', price: '$7.99' },
  {name: 'GrapefruitBoom', price: '$7.49'},
  {name: 'Crispy Grape', price: '$7.49'},

])
</script>

<style scoped>

</style>
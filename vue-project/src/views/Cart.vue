<template>
  <div class="shop">
    <div class="title">
      HEYTEA Menu
    </div>
    <div class="menu">
      <div 
        class="drink"
        v-for="drink in drinks"
        :key="drink.name"
        >
        <img
          class="img"
          :src="drink.img"
          :alt="drink.name"
        />
        <div class="name">
          {{ drink.name }}
        </div>
        <div class="price">

        </div>
      </div>
    </div>
  </div>
    <div>
        <h1>Menu</h1>
    </div>
    <div v-for="drink in drinks" :key="drink.name">
      <p>{{ drink.name }} - ${{ drink.price }}</p>
      <button @click="addToCart(drink)">add to cart</button>

  </div>
  <h2>Cart</h2>
  <p v-if="cart.length === 0">empty</p> 
  <p v-else="drink in drinks" :key="drink.name">
    <p>{{ drink.name }} - ${{ drink.price }}</p>
      <button @click="addToCart(drink)">add to cart</button>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const cart = ref([])
function addToCart(drink) {
  cart.value.push(drink)
}
const drinks = ref([
  {id: 1, name: 'Jasmine Latte', price: '6.49', img: },
  {id: 2, name: 'Coconut Mango Boom', price: '7.49', img: },
  {id: 3, name: 'Triple Matcha Supreme', price: '7.99', img: },
  {id: 4, name: 'Grapefruit Boom', price: '7.49', img:},
  {id: 5, name: 'Crispy Grape', price: '7.49', img: },
])
</script>

<style scoped>
</style>
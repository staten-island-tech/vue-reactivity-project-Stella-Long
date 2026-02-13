<template>
    <div>
        <h1>Menu</h1>
        <h2>{{ count }}</h2>
        <button @click="increment">add to cart</button>
    </div>
    <div class="container">
    <DrinksCard v-for="drink in drinks" :key="drink.name" :drink="drink">{{
      drink.name
    }}</DrinksCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
function increment() {
    count.value++
}
import DrinksCard from '@/components/Drinks.vue'
const drinks = ref([
  { name: 'Jasmine Latte', price: '', img: ''},
  { name: 'Coconut Mango Boom', price: '', img: ''},
  { name: 'Triple Matcha Supreme', price: '$7.99', img: '' },
])
</script>

<style scoped>
.button {
    width: 200px;
}
.container {
    color:rgb(231, 225, 218) ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
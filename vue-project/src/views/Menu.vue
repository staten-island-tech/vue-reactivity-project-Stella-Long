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
  { name: 'Jasmine Latte', price: '$6.49', img: 'https://heyteamenu.com/wp-content/uploads/2025/07/101cc4e9-9568-44e1-b337-f2ea44cf8182-f89c8f48-3f71-486a-815f-da7412ab3d55-retina-large-1024x1024.jpg'},
  { name: 'Coconut Mango Boom', price: '$7.49', img: ''},
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
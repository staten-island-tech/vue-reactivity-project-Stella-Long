<template>
  <div class="shop">

    <div class="title">
      HEYTEA Menu
    </div>

    <div class="menu">

      <div
        class="drink"
        v-for="drink in drinks"
        :key="drink.id"
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
          ${{ drink.price }}
        </div>

        <button @click="addToCart(drink)">
          add to cart
        </button>

      </div>

    </div>

    <div class="cartTitle">
      Cart
    </div>

    <div class="cart">

      <div v-if="cart.length === 0">
        empty
      </div>

      <div v-else>

        <div
          class="cartItem"
          v-for="item in cart"
          :key="item.id"
        >
          {{ item.name }} ${{ item.price }}
        </div>

      </div>


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

.shop {
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.drink {
  border: 1px solid #ddd;
  padding: 10px;
}

.img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.name {
  margin-top: 8px;
  font-weight: bold;
}

.price {
  margin-top: 4px;
}

.cartTitle {
  margin-top: 40px;
  font-size: 24px;
  font-weight: bold;
}

.cartItem {
  margin-top: 6px;
}

</style>
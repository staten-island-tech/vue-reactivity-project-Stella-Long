<template>
    <div>
        <h1>Menu</h1>
        <h2>{{ count }}</h2>
        <button @click="increment">add to cart</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
function increment() {
    count.value++
}
</script>

<style scoped>
.button {
    width: 200px;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
<template>
  <div>
    <h2>{{ drink.name }}</h2>
    <h2 {{ drink.price }}></h2>
  </div>
</template>

<script setup>
defineProps({
  drink: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
div {
  color: rgb(211, 202, 192) ;
  font-family:'Times New Roman', Times, serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
  border: 3px solid rgb(231, 225, 218);
  border-radius: 1rem;
}
</style>
<template>
  <div>
    <h2>{{ drink.name }}</h2>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
  border: 3px solid black;
}
</style>
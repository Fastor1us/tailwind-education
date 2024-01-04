<script setup>
import Card from './Card.vue'
defineProps({
  value: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <Card
      v-bind:value="value.groups[0].cards[0]"
      v-for="card in value.groups[0].cards"
      v-bind:key="card.id"
    />
  </div>
</template>

<style scoped></style>

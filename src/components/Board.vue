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
  <div class="w-full h-full bg-gray-200 flex flex-col px-3">
    <p class="p-3 my-3 text-xl bg-gray-300">
      {{ value.title }}
    </p>

    <div class="w-full h-full flex flex-row space-x-3">
      <div v-for="group in value.groups" :key="group.id" class="w-96">
        <div class="bg-gray-300 flex flex-col">
          <p class="bg-purple-300 text-xl p-3 mb-3">
            {{ group.title }}
          </p>
          <div class="flex-1 mx-3 px-3">
            <Card v-for="card in group.cards" :key="card.id" :value="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

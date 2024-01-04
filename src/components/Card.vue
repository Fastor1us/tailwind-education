<script setup>
defineProps({
  value: {
    type: Object,
    required: true
  },
})
</script>


<template>
  <div class="flex flex-col w-full bg-gray-50 p-3 rounded-lg">
    <div class="flex">
      <div class="mr-1" v-for="tag in value.tags" v-bind:key="tag.id">
        {{ tag.title }}
      </div>
    </div>
    <div class="grid grid-cols-5 gap-x-0.5 py-1">
      <p class="col-span-3 text-left">{{ value.title }}</p>
      <p class="col-span-2 text-right">{{ value.createdAt }}</p>
    </div>
    <div class="text-left">{{ value.content }}</div>
    <p class="text-left pt-3">{{ value.author }}</p>
  </div>
</template>


<style>
html,
body,
#app {
  background-color: gray;
}
</style>

<script setup>
  defineProps({
    value: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div class="flex flex-col w-full bg-gray-50 p-3 rounded-lg mb-3">
    <div class="flex">
      <div class="mr-1" v-for="tag in value.tags" v-bind:key="tag.id">
        <p class="text-sm px-3 py-1" :class="`bg-[${tag.color}]`">
          {{ tag.title }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-x-0.5 py-3">
      <p class="col-span-4 text-left text-xl font-semibold">
        {{ value.title }}
      </p>
      <p class="col-span-1 text-right">
        {{ value.createdAt }}
      </p>
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

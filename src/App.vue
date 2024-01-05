<script setup>
  import Board from '@/components/Board.vue'
  import boardData from '@/data/board.json'
</script>

<template>
  <div class="w-screen h-screen">
    <Board v-bind:value="boardData"></Board>
  </div>
</template>

<style scoped></style>

<script setup>
  import Board from '@/components/Board.vue'
  import boardData from '@/data/board.json'
</script>

<template>
  <div class="m-20">
    <Board v-bind:value="boardData"></Board>
  </div>
</template>

<style scoped></style>

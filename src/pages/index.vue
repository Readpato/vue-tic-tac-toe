<script setup lang="ts">
let isGameStarted = $ref(false)

const startGame = () => {
  isGameStarted = !isGameStarted
}
</script>

<template>
  <main bg-red-600 flex justify-center items-center flex-col rounded-2 p-5 w-full max-w-sm h-auto shadow-2xl space-y-1 md:max-w-md lg:max-w-lg xl:max-w-xl>
    <h1 text-yellow text-2xl>
      Tic Tac Toe
    </h1>
    <button v-if="isGameStarted" bg-yellow text-red-600 p-2 rounded-2 @click="startGame">
      Start game
    </button>
    <div v-else w-full flex flex-col>
      <GameGrid />
    </div>
  </main>
</template>

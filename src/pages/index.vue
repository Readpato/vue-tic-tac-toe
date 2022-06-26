<script setup lang="ts">
// <-- Variables -->
let isGameStarted = $ref(false)
let playerSide = $ref('')

// <-- Functions -->
const startGame = (side: string) => {
  isGameStarted = !isGameStarted
  playerSide = side
}
const handleRestart = () => {
  isGameStarted = !isGameStarted
}
</script>

<template>
  <main bg-red-600 flex justify-center items-center flex-col rounded-xl p-5 w-full max-w-sm h-auto shadow-2xl space-y-3 md:max-w-md lg:max-w-lg xl:max-w-xl>
    <h1 data-cy="main-title" text-yellow text-2xl>
      Tic Tac Toe
    </h1>
    <div v-if="!isGameStarted" data-cy="start-game-modal" flex justify-center items-center flex-col space-y-2 text="yellow">
      <span data-cy="span-choose-side" text-xl>Choose a side:</span>
      <div flex justify-center items-center flex-row space-x-2>
        <div data-cy="start-game-button-x" w-12 h-12 hover:color-red-600 hover:bg-yellow rounded-xl cursor-pointer transition ease-in-out hover:scale-120 @click="startGame('ex')">
          <div w-full h-full class="i-tabler-x" />
        </div>
        <div data-cy="start-game-button-circle" w-12 h-12 hover:color-red-600 hover:bg-yellow rounded-xl cursor-pointer transition ease-in-out hover:scale-120 @click="startGame('circle')">
          <div w-full h-full class="i-tabler-circle" />
        </div>
      </div>
    </div>
    <div v-else data-cy="game-grid" w-full flex flex-col>
      <GameGrid :side="playerSide" @on-game-restart="handleRestart" />
    </div>
  </main>
</template>

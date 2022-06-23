<script setup lang="ts">
let isGameStarted = $ref(false)

const startGame = () => {
  isGameStarted = !isGameStarted
}
</script>

<template>
  <main bg-red-600 flex justify-center items-center flex-col rounded-xl p-5 w-full max-w-sm h-auto shadow-2xl space-y-3 md:max-w-md lg:max-w-lg xl:max-w-xl>
    <h1 text-yellow text-2xl>
      Tic Tac Toe
    </h1>
    <button v-if="isGameStarted" bg-yellow text-red-600 p-2 rounded-2 @click="startGame">
      Start game
    </button>
    <div flex justify-center items-center flex-col space-y-2 text="yellow">
      <span text-xl>Choose a side:</span>
      <div flex justify-center items-center flex-row space-x-2>
        <div w-12 h-12 hover:color-red-600 hover:bg-yellow rounded-xl>
          <div w-full h-full class="i-tabler-x" />
        </div>
        <div w-12 h-12 hover:color-red-600 hover:bg-yellow rounded-xl>
          <div w-full h-full class="i-tabler-circle" />
        </div>
      </div>
    </div>
    <!-- <div w-full flex flex-col>
      <GameGrid />
    </div> -->
  </main>
</template>

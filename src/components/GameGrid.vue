<script setup lang="ts">
// <-- Props -->
const props = defineProps({
  side: { type: String, required: true, default: '' },
})

// <-- Emits -->
const emit = defineEmits(['onGameRestart'])

// <-- Variables -->
let hasCircleWon = $ref(false)
let hasExWon = $ref(false)
let isGameEnded = $ref(false)
let isGameDraw = $ref(false)
let sideType = $ref(props.side)
const maximumAmountOfTilesSelected = 9
const minimumAmountOfTilesToWin = 3
const foundNumberAmountToWin = 3
const circleTilesArray: number[] = []
const exTilesArray: number[] = []
const winCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
]

// <-- Computed properties -->
const showTurnIcon = computed(() => {
  if (sideType === 'circle')
    return true
  else
    return false
})
const endGameText = computed(() => {
  return isGameEnded && isGameDraw ? 'Draw!' : 'The winner of the game is: '
})

// <-- Functions -->
const changeType = (type: string) => {
  if (type === 'circle')
    sideType = 'ex'
  else
    sideType = 'circle'
}
const addSelectedTile = (type: string, id: string) => {
  const numberId = Number(id)
  if (type === 'circle')
    circleTilesArray.push(numberId)
  else
    exTilesArray.push(numberId)
}
const calculateWin = (type: string) => {
  const combinedLengthOfArrays = circleTilesArray.length + exTilesArray.length
  if (combinedLengthOfArrays === maximumAmountOfTilesSelected) {
    isGameDraw = true
    isGameEnded = true
    return
  }
  if (circleTilesArray.length >= minimumAmountOfTilesToWin || exTilesArray.length >= minimumAmountOfTilesToWin) {
    winCombination.forEach((winArray) => {
      let foundNumber = 0
      if (foundNumber === minimumAmountOfTilesToWin)
        return
      if (type === 'circle') {
        circleTilesArray.forEach((element) => {
          if (winArray.includes(element))
            foundNumber++
          if (foundNumber === foundNumberAmountToWin) {
            hasCircleWon = true
            isGameEnded = true
          }
        })
      }
      else {
        exTilesArray.forEach((element) => {
          if (winArray.includes(element))
            foundNumber++
          if (foundNumber === foundNumberAmountToWin) {
            hasExWon = true
            isGameEnded = true
          }
        })
      }
    })
  }
}
const handleSelection = (id: string) => {
  addSelectedTile(sideType, id)
  calculateWin(sideType)
  changeType(sideType)
}
const restartGame = () => {
  emit('onGameRestart')
}
</script>

<template>
  <div v-if="!isGameEnded" data-cy="game-interface">
    <div flex justify-center items-center flex-row text-yellow space-x-1 data-cy="turn-displayer">
      <span text="xl center">Turn: </span>
      <div v-if="!showTurnIcon" data-cy="x-turn-display" w-8 h-8 class="i-tabler-x" />
      <div v-if="showTurnIcon" data-cy="circle-turn-display" w-8 h-8 class="i-tabler-circle" />
    </div>
    <div grid grid-cols-3 grid-rows-3 p="2" h="xs" md="h-sm" lg="h-md">
      <GridTile id="1" data-cy="grid-tile-1" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="2" data-cy="grid-tile-2" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="3" data-cy="grid-tile-3" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="4" data-cy="grid-tile-4" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="5" data-cy="grid-tile-5" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="6" data-cy="grid-tile-6" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="7" data-cy="grid-tile-7" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="8" data-cy="grid-tile-8" :type="sideType" @on-tile-select="handleSelection" />
      <GridTile id="9" data-cy="grid-tile-9" :type="sideType" @on-tile-select="handleSelection" />
    </div>
  </div>
  <div v-if="isGameEnded" data-cy="end-game-interface" flex justify-center items-center flex-col text-yellow space-y-3>
    <div flex justify-center items-center flex-row space-x-1>
      <span data-cy="end-game-text" text="xl center">{{ endGameText }}</span>
      <div v-if="hasExWon" data-cy="x-endgame-icon" w-8 h-8 class="i-tabler-x" />
      <div v-if="hasCircleWon" data-cy="circle-endgame-icon" w-8 h-8 class="i-tabler-circle" />
    </div>
    <button data-cy="restart-game-button" bg-yellow text-red-600 p-2 rounded-2 transition ease-in-out hover:scale-110 @click="restartGame">
      Restart game
    </button>
  </div>
</template>

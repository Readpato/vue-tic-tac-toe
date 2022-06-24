<script setup lang="ts">
// <-- Props -->
const props = defineProps({
  side: { type: String, required: true, default: '' },
})

// <-- Variables -->
let sideType = $ref(props.side)
const circleTilesArray: number[] = []
const exTilesArray: number[] = []
let hasCircleWon = $ref(false)
let hasExWon = $ref(false)
const winCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 6],
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
  if (circleTilesArray.length <= 2 && exTilesArray.length <= 2)
    return
  winCombination.forEach((winArray) => {
    let foundNumber = 0
    if (foundNumber === 3)
      return
    if (sideType === 'circle') {
      circleTilesArray.forEach((element) => {
        if (winArray.includes(element))
          foundNumber++
        if (foundNumber === 3)
          hasCircleWon = true
      })
    }
    else {
      exTilesArray.forEach((element) => {
        if (winArray.includes(element))
          foundNumber++
        if (foundNumber === 3)
          hasExWon = true
      })
    }
  })
}
const handleSelection = (id: string) => {
  addSelectedTile(sideType, id)
  calculateWin(sideType)
  changeType(sideType)
}
</script>

<template>
  <div flex justify-center items-center flex-row text-yellow space-x-1>
    <span text="xl center">Turn: </span>
    <div v-if="!showTurnIcon" w-8 h-8 class="i-tabler-x" />
    <div v-if="showTurnIcon" w-8 h-8 class="i-tabler-circle" />
  </div>
  <div grid grid-cols-3 grid-rows-3 p="2" h="xs" md="h-sm" lg="h-md">
    <GridTile id="1" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="2" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="3" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="4" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="5" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="6" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="7" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="8" :type="sideType" @on-tile-select="handleSelection" />
    <GridTile id="9" :type="sideType" @on-tile-select="handleSelection" />
  </div>
</template>

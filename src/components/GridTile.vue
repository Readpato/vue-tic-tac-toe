<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, required: true },
})
const emit = defineEmits(['onTileSelect'])

let isCircleSelected = $ref(false)
let isExSelected = $ref(false)
let isTileSelected = $ref(false)

const selectIcon = (type: string) => {
  if (type === 'circle')
    isCircleSelected = true
  else
    isExSelected = true
}
const selectTile = (type: string) => {
  selectIcon(type)
  isTileSelected = true
  emit('onTileSelect', props.id)
}
</script>

<template>
  <div :id="props.id" :class="{ 'pointer-events-none': isTileSelected }" border="2 yellow" text-yellow @click="selectTile(props.type)">
    <div v-if="isExSelected" w-full h-full class="i-tabler-x" />
    <div v-if="isCircleSelected" w-full h-full class="i-tabler-circle" />
  </div>
</template>

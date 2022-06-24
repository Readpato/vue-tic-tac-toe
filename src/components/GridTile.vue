<script setup lang="ts">
// <-- Props -->
const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, required: true },
})

// <-- Emits -->
const emit = defineEmits(['onTileSelect'])

// <-- Variables -->
let isCircleSelected = $ref(false)
let isExSelected = $ref(false)
let isTileSelected = $ref(false)

// <-- Computed Properties -->
const classStatus = computed(() => {
  return {
    'pointer-events-none': isTileSelected,
    'cursor-pointer': !isTileSelected,

  }
})

// <-- Functions -->
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
  <div :id="props.id" :class="classStatus" border="2 yellow" text-yellow @click="selectTile(props.type)">
    <Transition animate-flip animate-duration-600>
      <div v-if="isExSelected" w-full h-full class="i-tabler-x" />
    </Transition>
    <Transition animate-rubber-band animate-duration-600>
      <div v-if="isCircleSelected" w-full h-full class="i-tabler-circle" />
    </Transition>
  </div>
</template>

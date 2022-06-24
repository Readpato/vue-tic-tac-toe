<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, required: true },

})

let isCircleSelected = $ref(false)
let isExSelected = $ref(false)

const selectTile = (type: string) => {
  if (type === 'circle')
    isCircleSelected = true
  else
    isExSelected = true
}
</script>

<template>
  <div :id="props.id" border="2 yellow" text-yellow @click="selectTile(props.type)">
    <div v-if="isExSelected" w-full h-full class="i-tabler-x" />
    <div v-if="isCircleSelected" w-full h-full class="i-tabler-circle" />
  </div>
</template>

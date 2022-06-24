<script setup lang="ts">
const props = defineProps({
  side: { type: String, required: true, default: '' },
})
</script>

<template>
  <span text="xl yellow center">Turn: {{ props.side }}</span>
  <div grid grid-cols-3 grid-rows-3 p="2" h="xs" md="h-sm" lg="h-md">
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
    <div border="2 yellow" text-yellow>
      <GridTile />
    </div>
  </div>
</template>

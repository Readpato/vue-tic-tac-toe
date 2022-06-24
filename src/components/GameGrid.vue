<script setup lang="ts">
const props = defineProps({
  side: { type: String, required: true, default: '' },
})
</script>

<template>
  <span text="xl yellow center">Turn: {{ props.side }}</span>
  <div grid grid-cols-3 grid-rows-3 p="2" h="xs" md="h-sm" lg="h-md">
    <GridTile id="1" />
    <GridTile id="2" />
    <GridTile id="3" />
    <GridTile id="4" />
    <GridTile id="5" />
    <GridTile id="6" />
    <GridTile id="7" />
    <GridTile id="8" />
    <GridTile id="9" />
  </div>
</template>

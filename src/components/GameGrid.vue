<script setup lang="ts">
const props = defineProps({
  side: { type: String, required: true, default: '' },
})

const sideType = 'circle'
</script>

<template>
  <span text="xl yellow center">Turn: {{ props.side }}</span>
  <div grid grid-cols-3 grid-rows-3 p="2" h="xs" md="h-sm" lg="h-md">
    <GridTile id="1" :type="sideType" />
    <GridTile id="2" :type="sideType" />
    <GridTile id="3" :type="sideType" />
    <GridTile id="4" :type="sideType" />
    <GridTile id="5" :type="sideType" />
    <GridTile id="6" :type="sideType" />
    <GridTile id="7" :type="sideType" />
    <GridTile id="8" :type="sideType" />
    <GridTile id="9" :type="sideType" />
  </div>
</template>

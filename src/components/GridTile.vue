<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
})
</script>

<template>
  <div :id="props.id" border="2 yellow" text-yellow>
    <div hidden w-full h-full class="i-tabler-x" />
    <div hidden w-full h-full class="i-tabler-circle" />
  </div>
</template>

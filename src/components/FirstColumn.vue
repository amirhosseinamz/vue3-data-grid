<template>
  <div style="display: flex; align-items: center; justify-content: center;gap: 3px; background-color: aqua; height: 100%">
    <div>This is</div>
    <div>{{ props.row.second }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{row: any}>()
</script>

<style scoped>
</style>
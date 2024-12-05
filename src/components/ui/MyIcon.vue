<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>

<template>
  <span
    class="pi"
    :class="`pi-${type}`"
  ></span>
</template>

<template>
  <span class="title" :class="classes">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  classes?: string
}>()
</script>

<style scoped>
.title {
  font-size: var(--size-text-md);
  font-family: var(--font-family-title);
}
</style>

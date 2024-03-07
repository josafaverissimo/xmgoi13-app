<template>
  <button class="btn" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  classes?: string
}>()
</script>

<style scoped>
.btn {
  background: transparent;
  border: none;
  padding: 0;

  &.pointer {
    cursor: pointer;
  }

  &.primary {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
}
</style>

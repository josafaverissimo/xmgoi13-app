<template>
  <span class="spinner"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: number
    color?: string
  }>(),
  {
    size: 1,
    color: 'text'
  }
)

const sizeComputed = computed(() => `${props.size}rem`)
const colorComputed = computed(() => `var(--color-${props.color})`)
</script>

<style scoped>
.spinner {
  width: v-bind(sizeComputed);
  height: v-bind(sizeComputed);
  border: 3px solid v-bind(colorComputed);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

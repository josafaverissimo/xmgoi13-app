<template>
  <Button class="fab pointer primary">
    <Icon :icon="icon" :size="2" color="white"></Icon>
  </Button>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import Icon from '../Icon.vue'

defineProps<{
  icon: string
}>()
</script>

<style>
.fab {
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
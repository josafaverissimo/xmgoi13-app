<template>
  <Button class="fab pointer">
    <slot name="icon">
      <Icon :icon="icon" :size="2" :color="iconColor"></Icon>
    </slot>
  </Button>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import Icon from '../Icon.vue'

defineProps<{
  icon: string
  iconColor: string
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

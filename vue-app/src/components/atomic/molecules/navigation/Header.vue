<template>
  <header class="header">
    <Title>
      <slot name="title" />
    </Title>

    <ToggleThemeButton :iconSize="iconSize" />
  </header>
</template>

<script setup lang="ts">
import Title from '@/components/atomic/atoms/navigation/Title.vue'
import ToggleThemeButton from '@/components/atomic/molecules/ToggleThemeButton.vue'

defineProps({
  iconSize: {
    type: Number
  }
})
</script>

<style scoped>
.header {
  padding: var(--padding-sm);
  border-bottom: 1px solid var(--color-light-shade);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

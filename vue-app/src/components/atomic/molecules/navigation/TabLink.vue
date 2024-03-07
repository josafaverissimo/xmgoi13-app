<template>
  <router-link to="/shoppingList" class="tabLink">
    <Icon :icon="icon" :size="iconSize" />

    <div class="tabLink__name">
      <slot name="tabLinkName"/>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import Icon from '@/components/atomic/atoms/Icon.vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  iconSize: {
    type: Number,
    default: 1
  }
})
</script>

<style scoped>
.tabLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;

  .tabLink__name {
    font-size: var(--size-text-sm);
  }
}
</style>

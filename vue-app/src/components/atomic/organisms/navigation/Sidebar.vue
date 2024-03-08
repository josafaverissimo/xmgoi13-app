<template>
  <section class="sidebarWrapper">
    <Tabs direction="column" padding-x="md" />
  </section>
</template>

<script setup lang="ts">
import Tabs from '@/components/atomic/organisms/navigation/Tabs.vue'
</script>

<style scoped>
.sidebarWrapper {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  height: 100vh;
  border-right: 1px solid var(--color-light-shade);

  @media screen and (min-width: 768px) {
    display: flex;
  }
}
</style>

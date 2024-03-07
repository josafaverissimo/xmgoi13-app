<template>
  <div class="bottomTabs">
    <Tabs />
  </div>
</template>

<script setup lang="ts">
import Tabs from "@/components/atomic/organisms/navigation/Tabs.vue";
</script>

<style scoped>
.bottomTabs {
  border-top: 1px solid var(--color-light-shade);

  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
}
</style>

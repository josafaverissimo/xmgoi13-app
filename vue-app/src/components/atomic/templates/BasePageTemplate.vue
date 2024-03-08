<template>
  <div class="splitSection">
    <Sidebar />

    <section class="mainSection">
      <Header :iconSize="iconSize">
        <template #title>
          <slot name="headerTitle" />
        </template>
      </Header>

      <main class="mainContent">
        <router-view />
      </main>

      <footer>
        <BottomTabs />
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/atomic/molecules/navigation/Header.vue'
import BottomTabs from '@/components/atomic/organisms/navigation/BottomTabs.vue'
import Sidebar from '@/components/atomic/organisms/navigation/Sidebar.vue'

defineProps({
  iconSize: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.splitSection {
  display: flex;

  .mainSection {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .mainContent {
      flex-grow: 1;
      padding: var(--padding-md);
    }
  }
}
</style>

<template>
  <BasePage />
</template>

<script setup lang="ts">
import BasePage from '@/components/atomic/pages/BasePage.vue'
import { setCurrentTheme } from "@/services/theme";

setCurrentTheme()
</script>

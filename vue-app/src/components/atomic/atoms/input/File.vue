<template>
  <div class="trigger" @click="chooseFile">
    <input type="file" name="inputFile" class="inputFile" ref="inputFile" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emits = defineEmits(['change'])

const inputFile = ref<HTMLInputElement | null>(null)
const chooseFile = () => {
  inputFile.value!.click()
}

onMounted(() => {
  inputFile.value!.addEventListener('change', () => {
    emits('change', inputFile.value!.files)
  })
})
</script>

<style scoped>
.inputFile {
  display: none;
}
</style>

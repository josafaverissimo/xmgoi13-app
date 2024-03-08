<template>
  <div class="content">
    <ToastContainer ref="toastContainer" />

    <File @change="fileChangeHandler">
      <Fab icon="Upload" iconColor="white" class="primary">
        <template #icon>
          <Spinner color="white" v-if="isUploading" />
        </template>
      </Fab>
    </File>

    <Title title="Produtos" align="center" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Fab from '@/components/atomic/atoms/button/Fab.vue'
import Title from '@/components/atomic/atoms/page/Title.vue'
import File from '@/components/atomic/atoms/input/File.vue'
import Spinner from '@/components/atomic/atoms/Spinner.vue'
import ToastContainer from '@/components/atomic/molecules/ToastContainer.vue'

const isUploading = ref(false)
const toastContainer = ref<InstanceType<typeof ToastContainer> | null>(null)

const fileChangeHandler = (file: any) => {
  isUploading.value = true


}
</script>

<style scoped>
.content {
  position: relative;
  height: 100%;
}
</style>

<template>
  <div class="content">
    <File>
      <Fab icon="Upload"></Fab>
    </File>

    <Title title="Produtos" align="center"/>
  </div>
</template>

<script setup lang="ts">
  import Fab from '@/components/atomic/atoms/button/Fab.vue'
  import Title from "@/components/atomic/atoms/page/Title.vue";
  import File from "@/components/atomic/atoms/input/File.vue";

  const clicked = () => {
    alert('You clicked me')
  }
</script>

<style scoped>
.content {
  position: relative;
  height: 100%;
}
</style>

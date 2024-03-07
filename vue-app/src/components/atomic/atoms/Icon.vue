<template>
  <component :is="iconComponent" :style="iconStyles" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

interface IconStyles {
  height: string,
  fill?: string
}

const props = withDefaults(defineProps<{
  icon: string,
  size?: number,
  color?: string
}>(), {
  size: 1
})

const iconComponent = computed(() =>
  defineAsyncComponent(() => import(`../../icons/${props.icon}Icon.vue`))
)

const iconStyles: IconStyles = {
  height: `${props.size}rem`
}

if(props.color) {
  const color = getComputedStyle(document.documentElement).getPropertyValue(`--color-${props.color}`)
  iconStyles['fill'] = `${color}`
}
</script>

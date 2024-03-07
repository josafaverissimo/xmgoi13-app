<template>
  <nav>
    <ul class="tabs">
      <li class="tabs__tab">
        <TabLink to="/shoppingList" icon="InvoiceList" :icon-size="2" class="tabs__tab__link">
          <template #tabLinkName>
            <span>Romaneio</span>
          </template>
        </TabLink>
      </li>
      <li class="tabs__tab">
        <TabLink to="/clients" icon="People" :icon-size="2" class="tabs__tab__link">
          <template #tabLinkName>
            <span>Clientes</span>
          </template>
        </TabLink>
      </li>
      <li class="tabs__tab">
        <TabLink to="/products" icon="Dices" :icon-size="2" class="tabs__tab__link">
          <template #tabLinkName>
            <span>Produtos</span>
          </template>
        </TabLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import TabLink from '@/components/atomic/molecules/navigation/TabLink.vue'
import {computed} from "vue";

const props = withDefaults(defineProps<{
  direction?: "row"|"column",
  paddingY?: "sm"|"md"|"lg",
  paddingX?: "sm"|"md"|"lg"
}>(), {
  direction: 'row',
  paddingY: 'sm',
  paddingX: 'sm'
})

const rootStyles = getComputedStyle(document.documentElement)
const paddingYComputed = computed(() => rootStyles.getPropertyValue(`--padding-${props.paddingY}`))
const paddingXComputed = computed(() => rootStyles.getPropertyValue(`--padding-${props.paddingX}`))
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: v-bind(direction);

  .tabs__tab {

    .tabs__tab__link {
      padding: v-bind(paddingXComputed) v-bind(paddingYComputed);
    }
  }

  & > * {
    flex-grow: 1;
  }
}
</style>

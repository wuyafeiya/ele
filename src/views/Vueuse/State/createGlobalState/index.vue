<template>
  <div>
    <!-- <input v-model="state.name" type="text" />
    <input v-model="state.color" type="text" />
    <input v-model="state.size" type="text" />
    <pre lang="yaml">{{ text }}</pre> -->
  </div>
</template>

<script setup>
import { ref } from '@vue/composition-api'
import { createGlobalState } from '@vueuse/core'
const useGlobalState = createGlobalState(() => {
  const count = ref(0)
  return { count }
})
console.log(useGlobalState())
</script>

<style></style>

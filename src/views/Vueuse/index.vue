<template>
  <div>{{ X }}----{{ Y }}</div>
</template>
<script>
import { reactive, ref, methods } from '@vue/composition-api'
import { useMouse } from '@vueuse/core'
export default {
  setup() {
    const msg = ref('hello')
    const X = ref('')
    const Y = ref('')
    console, log(x, y)
  }
}
</script>
<style></style>

<template>
  <publice :components="cache" :componentList="componentList"></publice>
</template>
<script>
import { importAll } from '@/utils/mixin'
import Publice from '@/components/Publice/index.vue'
export default {
  mounted() {
    const r = require.context('@/components/Input-demo', false, /\.vue$/)
    const { cache, componentList } = importAll(r)
    this.cache = cache
    this.componentList = componentList
  },
  data() {
    return {
      cache: {},
      componentList: []
    }
  },
  components: { Publice }
}
</script>

<style></style>

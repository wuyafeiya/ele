<template>
  <div id="main" style="width: 466px; height: 220px"></div>
</template>

<script>
import * as echarts from 'echarts'
import option from './index'
export default {
  mounted() {
    echarts.init(document.getElementById('main')).setOption(option)
  }
}
</script>
<style></style>

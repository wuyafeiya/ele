<template>
  <div>
    <div id="main" style="width: 466px; height: 220px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import option from './index'
export default {
  mounted() {
    this.myChart = echarts.init(document.getElementById('main'))
    this.myChart.setOption(option)
  },
  data() {
    return {
      myChart: ''
    }
  },
  methods: {
    downLoad() {
      const url = this.myChart.getConnectedDataURL({ type: 'png', backgroundColor: '#fff' })
      let link = document.createElement('a')
      link.href = url
      link.download = 'chart.png'
      link.click()
    }
  }
}
</script>
<style></style>

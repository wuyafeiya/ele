<template>
  <div class="Sales">
    <div class="Sales-H">
      <div class="title">Sales</div>
      <div class="Sales-B">
        <buttons :icon="icon"><span>2023</span><i class="el-icon-arrow-down el-icon--right"></i></buttons>
        <buttons :icon="iconDownload" :Color="iconColor" @click.native="down">Download</buttons>
      </div>
    </div>
    <sales-echarts></sales-echarts>
    <img src="@/image/Screenshot.png" alt="" class="Screenshot" />
  </div>
</template>
<script>
import Buttons from '../Sales/Buttons/Buttons.vue'
import mixin from './mixins/index'
import SalesEcharts from './SalesEcharts/index.vue'
export default {
  mixins: [mixin],
  components: {
    SalesEcharts,
    Buttons
  },
  data() {
    return {
      iconDownload: 'el-icon-download',
      iconColor: '#FAD85D'
    }
  },
  methods: {
    down() {
      this.$parent.$children[3].$children[2].downLoad()
    }
  }
}
</script>

<style lang="scss" scoped>
.Sales {
  box-sizing: border-box;
  position: absolute;
  width: 625px;
  height: 296px;
  background: #161717;
  border-radius: 24px;
  padding: 20px 24px 0;
  .Sales-H {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .Sales-B {
      width: 273px;
      display: flex;
      justify-content: space-between;
    }
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 21px;
  }
  span {
    display: inline-block;
    margin: 0 10px;
  }
  .Screenshot {
    position: absolute;
    top: 40px;
    right: 25px;
  }
}
</style>

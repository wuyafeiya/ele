<template>
  <div class="Sales">
    <div class="Sales-H">
      <div class="title">Sales</div>
      <buttons>2023</buttons>
    </div>
    <sales-echarts></sales-echarts>
    <img src="@/image/Screenshot.png" alt="" class="Screenshot" />
  </div>
</template>
<script>
import Buttons from '../Sales/Buttons/Buttons.vue'
import SalesEcharts from './SalesEcharts/index.vue'
export default {
  components: {
    SalesEcharts,
    Buttons
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
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 21px;
  }
  .Screenshot {
    position: absolute;
    top: 40px;
    right: 25px;
  }
}
</style>

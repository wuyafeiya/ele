<template>
  <div class="Balance" :style="{ backgroundColor: BalanceInfo.color }">
    <div class="B-l">
      <span>{{ BalanceInfo.title }}</span>
      <span>{{ BalanceInfo.money }}</span>
      <span>View entire list</span>
    </div>
    <div class="B-r"><img :src="require(`@/image/${BalanceInfo.img}`)" :class="BalanceInfo.class" /></div>
  </div>
</template>
<script>
export default {
  name: 'Balance',
  props: {
    BalanceInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.Balance {
  display: flex;
  width: 300px;
  height: 150px;
  border-radius: 34px;
  padding-left: 24px;
  padding-top: 22px;
  box-sizing: border-box;
  .B-l {
    span {
      display: block;
      &:nth-child(1) {
        width: 135px;
        line-height: 24px;
        font-size: 16px;
      }
      &:nth-child(2) {
        line-height: 48px;
        font-size: 32px;
        margin-top: 16px;
        margin-bottom: 8px;
      }
      &:nth-child(3) {
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
  .B-r {
    img {
      position: relative;
    }
    .img-Balance {
      width: 136px;
      height: 110px;
      top: 30px;
    }
    .img-Line {
      width: 156px;
      height: 135px;
      top: -12px;
      left: -15px;
    }
    .img-Rectangle {
      width: 127px;
      height: 173px;
      top: -45px;
    }
  }
}
</style>

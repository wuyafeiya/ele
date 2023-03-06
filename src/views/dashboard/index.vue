<template>
  <div class="dash-m">
    <div class="dash-m-l">
      <h1 class="title">Hello,WJ</h1>
      <div class="dash-Balance">
        <balance v-for="(item, index) in BalanceInfo" :BalanceInfo="item" :key="index"></balance>
      </div>
      <div class="dash-Sales">
        <Sales></Sales>
        <calendar></calendar>
      </div>
      <div class="dash-Weekly">
        <weekly></weekly>
        <customer></customer>
      </div>
    </div>
    <div class="dash-m-r"></div>
  </div>
</template>
<script>
import { Sales, Calendar, Balance, Weekly, Customer } from './components'
export default {
  components: { Balance, Sales, Calendar, Weekly, Customer },
  data() {
    return {
      BalanceInfo: [
        {
          title: 'Weekly Balance',
          money: '$20k',
          color: '#0BF4C8',
          img: 'Balance.png',
          class: 'img-Balance'
        },
        {
          title: 'Orders In Line',
          money: '750',
          color: '#FAD85D',
          img: 'Line.png',
          class: 'img-Line'
        },
        {
          title: 'New Clients',
          money: '150',
          color: '#F2A0FF',
          img: 'Rectangle.png',
          class: 'img-Rectangle'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.dash-m {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 20px;
  .title {
    font-size: 48px;
    color: #fff;
  }
  .dash-Balance {
    margin-bottom: 24px;
    display: flex;
    width: 930px;
    justify-content: space-between;
  }
  .dash-Sales {
    margin-bottom: 23px;
  }
  .dash-Weekly {
    display: flex;
    justify-content: space-between;
  }
  .dash-calendar {
    margin-left: 630px;
  }
  .dash-m-r {
    width: 307px;
    height: 808px;
    background: #161717;
    border-radius: 32px;
  }
}
</style>

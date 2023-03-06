<template>
  <div class="Weekly">
    <div class="title" style="color: #ffffff; font-weight: 700; margin-bottom: 21px">Weekly Sales</div>
    <div class="group">
      <cylindrical v-for="(item, index) in imgUrl" :imgUrl="item.name" :text="item.text" :key="index"></cylindrical>
    </div>
  </div>
</template>
<script>
import Cylindrical from './Cylindrical/index.vue'
export default {
  components: { Cylindrical },
  mounted() {},
  data() {
    return {
      imgUrl: [
        {
          name: 'Cylindrical-1.png',
          text: 'Mon'
        },
        {
          name: 'Cylindrical-5.png',
          text: 'Tue'
        },
        {
          name: 'Cylindrical-3.png',
          text: 'Wed'
        },
        {
          name: 'Cylindrical-4.png',
          text: 'Thu'
        },
        {
          name: 'Cylindrical-5.png',
          text: 'Fri'
        },
        {
          name: 'Cylindrical-6.png',
          text: 'Sat'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Weekly {
  width: 283px;
  height: 248px;
  background: #161717;
  border-radius: 32px;
  box-sizing: border-box;
  padding: 24px;
  .group {
    display: flex;
    justify-content: space-around;
  }
}
</style>

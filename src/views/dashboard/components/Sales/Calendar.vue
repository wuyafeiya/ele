<template>
  <div class="Calendar">
    <div class="" style="font-size: 16px; font-weight: 700; color: #fff">Calendar</div>
    <div id="view">
      <buttons :icon="icon"><span>Feb 2023</span><i class="el-icon-arrow-down el-icon--right"></i></buttons>
      <a style="color: #fff; line-height: 60px; text-decoration: underline">view</a>
    </div>
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>
<script>
import mixin from './mixins/index'
import Buttons from '../Sales/Buttons/Buttons.vue'
export default {
  components: { Buttons },
  mixins: [mixin],
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.Calendar {
  width: 281px;
  height: 296px;
  background: #161717;
  box-sizing: border-box;
  border-radius: 32px;
  margin-left: 656px;
  padding: 24px 24px 20px 24px;
  #view {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>

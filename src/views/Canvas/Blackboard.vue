<template>
  <div class="Scratch">
    <div class="demo">
      <canvas id="canvas"></canvas>
    </div>
    <el-button type="success" @click="restart">重新开始</el-button>
  </div>
</template>

<script>
import ScrapAward from './ScrapAward'
export default {
  mounted() {
    this.scrapAward = new ScrapAward({
      width: 800,
      height: 800,
      backgroundImageUrl: require('../../image/avatar.jpeg'),
      //
      coverImage: {
        url: '',
        width: 400,
        height: 800
      },
      callback: () => {
        alert('结束')
      }
    })
  },
  methods: {
    restart() {
      this.scrapAward.restart()
    }
  }
}
</script>

<style lang="scss" scoped>
.Scratch {
  position: relative;
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
</style>

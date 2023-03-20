<template>
  <div>
    <div class="SignatureBoard">
      <canvas id="canvas" width="1200" height="500" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup"></canvas>
    </div>
    <img src="@/image/Screenshot.png" alt="" />
    <el-button type="success" style="margin: 0 50%" @click="download">下载</el-button>
    <el-button type="success" style="margin: 20px 50%" @click="Clear">清除</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  mounted() {
    // const img = new Image()
    // img.src = require('@/image/Screenshot.png')
    // img.onload = () => {
    //   this.ctx.drawImage(img, 0, 0)
    // }
    this.canvas = document.getElementById('canvas')
    this.ctx = canvas.getContext('2d')
    this.ctx.strokeStyle = '#fff'
    this.ctx.lineWidth = 1
    this.init()
  },
  methods: {
    init() {},
    mousedown(e) {
      this.show = false
      this.offSetX = e.offsetX
      this.offSetY = e.offsetY
      this.ctx.beginPath()
      this.ctx.moveTo(this.offSetX, this.offSetY)
    },
    mousemove(e) {
      if (!this.show) {
        this.ctx.lineTo(e.offsetX, e.offsetY)
        this.ctx.stroke()
      }
    },
    mouseup() {
      this.ctx.stroke()
      this.show = true
    },
    download() {
      const a = document.createElement('a')
      a.download = '下载.png'
      a.href = this.canvas.toDataURL()
      a.click()
    },
    Clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }
}
</script>

<style lang="scss" scoped>
.SignatureBoard {
  position: relative;
  margin: 40px auto;
  width: 1200px;
  height: 500px;
  background: #000;
  border: 20px solid skyblue;
  border-radius: 10px;
}
img {
  position: absolute;
  bottom: 150px;
  right: 100px;
}
</style>

<template>
  <div>
    <canvas></canvas>
    <audio id="audio" autoplay :src="require(`@/video/安和桥.mp3`)" controls style="margin: 0 auto; display: block"></audio>
  </div>
</template>
<script>
export default {
  mounted() {
    this.cvs = document.querySelector('canvas')
    const audioEle = document.querySelector('#audio')
    this.initCvs()
    audioEle.addEventListener('play', () => {
      this.play(audioEle)
    })
    this.draw()
  },
  data() {
    return {
      data() {
        return {
          cvs: '',
          dataArray: '',
          analyser: '',
          isInit: false
        }
      }
    }
  },
  methods: {
    initCvs() {
      this.cvs.width = window.innerWidth * devicePixelRatio
      this.cvs.height = window.innerHeight / 2
      devicePixelRatio
    },
    play(audioEle) {
      if (this.isInit) {
        return
      }
      // 初始化
      const audCtx = new AudioContext()
      const source = audCtx.createMediaElementSource(audioEle)
      this.analyser = audCtx.createAnalyser()
      this.analyser.fftSize = 512
      // 创建数组
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
      source.connect(this.analyser)
      this.analyser.connect(audCtx.destination)
      this.isInit = true
    },
    draw() {
      const ctx = this.cvs.getContext('2d')
      window.requestAnimationFrame(this.draw)
      const { width, height } = this.cvs
      ctx.clearRect(0, 0, width, height)
      if (!this.isInit) {
        return
      }
      this.analyser.getByteFrequencyData(this.dataArray)
      const len = this.dataArray.length / 2.5
      const barWidth = width / len / 2
      ctx.fillStyle = 'skyblue'
      for (let i = 0; i < len; i++) {
        const data = this.dataArray[i]
        const barHeight = (data / 255) * height
        const x1 = i * barWidth
        const x2 = width / 2 - (i + 1) * barHeight
        const y = height - barHeight
        ctx.fillRect(x1, y, barWidth - 2, barHeight)
        //ctx.fillRect(x2, y, barWidth - 2, barHeight)
      }
    }
  }
}
</script>
<style></style>

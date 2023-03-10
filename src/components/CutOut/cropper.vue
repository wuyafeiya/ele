<template>
  <div>
    <img ref="imagePreview" :src="img" alt="" :v-model="img" />
  </div>
</template>
<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import mixins from './mixins'
export default {
  name: 'Cropepr',
  mixins: [mixins],
  mounted() {
    this.init()
  },
  watch: {
    img() {
      this.init()
    }
  },
  methods: {
    init() {
      this.$refs.imagePreview.addEventListener('load', () => {
        const croper = new Cropper(this.$refs.imagePreview, {
          aspectRatio: 1 / 1
        })
        this.$refs.imagePreview.addEventListener('cropmove', () => {
          const imgUrl = croper.getCroppedCanvas().toDataURL()
          this.$EventBus.$emit('img', imgUrl)
        })
        croper.crop()
      })
    }
  },
  destroyed() {
    this.$EventBus.$off('img')
  }
}
</script>

<style></style>

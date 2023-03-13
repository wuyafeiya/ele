<template>
  <div>
    <el-dialog title="裁剪0图片" :visible="dialogVisible" width="30%" :before-close="handleClose" @closed="$refs['cropper'].handleDestroy()">
      <cropper :img="img" ref="cropper"></cropper>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import cropper from './cropper.vue'
import mixins from './mixins'
export default {
  name: 'Dialog',
  components: { cropper },
  mixins: [mixins],
  mounted() {
    this.oldURL = this.imgUrl
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String
    }
  },
  data() {
    return {
      oldURL: ''
    }
  },
  methods: {
    handleClose() {
      const that = this
      this.$confirm('确认关闭？')
        .then((_) => {
          this.$emit('handleClose', that.oldURL)
        })
        .catch((_) => {})
    }
  }
}
</script>

<style></style>

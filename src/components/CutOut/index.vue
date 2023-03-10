<template>
  <div class="CutOut">
    <el-row>
      <el-col :span="10">
        <div class="file">
          <img style="display: block" src="@/image/upload-alt.png" alt="" />
          <el-button class="Btn" @click="UploadClick">Browse</el-button>
          <input ref="input" type="file" style="display: none" @change="UploadChange" accept="image/*" />
        </div>
      </el-col>
      <el-col :span="12">
        <div style="display: flex; flex-direction: column; align-items: center">
          <div class="avatar" :style="{ background: `url('${imgUrl}'),center` }"></div>
          <div style="margin-top: 100px">
            <el-button class="Btn">重新选择</el-button>
            <el-button class="Btn"> 上传图片</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <upload-dialog :dialog-visible="dialogVisible" :img="img" @handleClose="handleClose" :imgUrl="imgUrl"></upload-dialog>
  </div>
</template>
<script>
import UploadDialog from './Dialog.vue'
export default {
  name: 'CutOut',
  mounted() {
    const that = this
    this.$EventBus.$on('img', (img) => {
      that.imgUrl = img
    })
  },
  components: { UploadDialog },
  data() {
    return {
      img: '',
      imgUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    UploadClick() {
      this.$refs.input.click()
    },
    UploadChange(event) {
      const render = new FileReader()
      console.log(event.target.files[0])
      render.readAsDataURL(event.target.files[0])
      const that = this
      render.addEventListener('load', function () {
        that.img = render.result
        that.dialogVisible = true
      })
      this.$refs.input.value = ''
    },
    handleClose(res) {
      this.imgUrl = res
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.CutOut {
  background-image: #fff !important;
  padding: 36px 0 0 94px;
  .file {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    width: 460px;
    height: 662px;
    border-radius: 36px;
    border: 1px dashed #000;
    img {
      position: absolute;
      left: 170px;
      top: 164px;
    }
  }
  .Btn {
    width: 180px;
    margin-top: 100px;
    height: 48px;
    background: #ffb859;
    box-shadow: 0px 4px 4px #cc7500;
    border-radius: 10px;
  }
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px dashed #000;
  }
}
</style>

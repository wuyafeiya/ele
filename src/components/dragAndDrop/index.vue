<template>
  <div class="dragAndDrop">
    <el-row class="Drag-T">
      <el-col :span="24" style="line-height: 383px">Drag and Drop + File Upload</el-col>
    </el-row>
    <div ref="Drop">
      <el-row class="Drop" type="flex">
        <el-col :span="8"> <img style="display: block; margin: 0 auto" src="@/image/upload-alt.png" alt="" /></el-col>
        <el-col :span="8" style="font-size: 40.1901px">Drag and Drop here</el-col>
        <el-col :span="8">
          <el-button class="Btn" @click="UploadClick">Select file</el-button>
        </el-col>
      </el-row>
    </div>
    <input ref="input" type="file" style="display: none" @change="changeFile" accept="image/*" />
  </div>
</template>
<script>
export default {
  mounted() {
    this.init()
  },
  data() {
    return {}
  },
  methods: {
    UploadClick() {
      this.$refs.input.click()
    },
    init() {
      this.$refs.Drop.addEventListener('dragover', (event) => {
        event.preventDefault()
      })
      this.$refs.Drop.addEventListener('dragenter', (event) => {
        event.preventDefault()
        event.target.classList.add('dragover')
      })
      this.$refs.Drop.addEventListener('dragleave', (event) => {
        event.preventDefault()
        event.target.classList.remove('dragover')
      })
      this.$refs.Drop.addEventListener('drop', (event) => {
        event.preventDefault()
        event.target.classList.remove('dragover')
        alert('开始上传文件')
      })
    },
    changeFile() {
      alert('开始上传文件')
    }
  }
}
</script>

<style lang="scss">
.Drag-T {
  height: 383px;
  background: linear-gradient(92.18deg, #0863b8 28.02%, #021194 120.27%);
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #fff;
}
.Drop {
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 1163px;
  height: 650px;
  border: 2.51188px dashed #454545;
  background: #fff;
  border-radius: 10.0475px;
  margin: auto;
  top: -130px;
  z-index: 999;
  text-align: center;
  .Btn {
    width: 339.1px;
    height: 97.96px;
    background: #0ae8cd;
    border-radius: 10.0475px;
    font-size: 40.1901px;
    color: #000;
    line-height: 47px;
  }
}
.dragover {
  background: skyblue;
  border: 3px dashed #454545;
}
</style>

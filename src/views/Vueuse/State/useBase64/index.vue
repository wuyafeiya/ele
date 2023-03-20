<script setup>
import { ref } from '@vue/composition-api'
import { useBase64 } from '@/utils/useBase64'
import { base64ToBlob } from '@/utils/Base64Toblob'
import { Url } from 'url'
const text = ref('')
const file = ref()
const textBase64 = ref('')
const bufferBase64 = useBase64(new ArrayBuffer(8))
const fileBase64 = ref('')
async function onFileInput(e) {
  file.value = e.target.files[0]
  fileBase64.value = await useBase64(file)
}
async function change() {
  const obj = await useBase64(text)
  textBase64.value = obj
}
const Base64ToBlob = URL.createObjectURL(base64ToBlob('data:text/plain;base64,MTIzMT'))
</script>
<script>
export default {
  data() {
    return {
      imageBase64: ''
    }
  },
  mounted() {
    this.imageBase64 = useBase64(this.$refs.image)
  }
}
</script>
<template>
  <div class="Base64">
    <el-row class="row" type="flex" justify="center">
      <el-col :span="5">
        <div>Text</div>
        <textarea @input="change" v-model="text.value" type="text" placeholder="Type someing...." cols="30" rows="5"></textarea>
      </el-col>
      <el-col :span="5">
        <div>Base64</div>
        <textarea :value="textBase64.value" cols="30" rows="10" readonly></textarea>
      </el-col>
    </el-row>
    <el-row class="row" type="flex" justify="center">
      <el-col :span="5">
        <span>Buffer Input</span>
        <pre mt-2>new ArrayBuffer(1024)</pre>
      </el-col>
      <el-col :span="5">
        <div>Base64</div>
        <textarea :value="bufferBase64" cols="30" rows="10" readonly></textarea>
      </el-col>
    </el-row>
    <el-row class="row" type="flex" justify="center">
      <el-col :span="5">
        <div>File Input</div>
        <div><input @input="onFileInput" mt-2 type="file" /></div>
      </el-col>
      <el-col :span="5">
        <div>Base64</div>
        <textarea :value="fileBase64.value" cols="30" rows="10" readonly></textarea>
      </el-col>
    </el-row>
    <el-row class="row" type="flex" justify="center">
      <el-col :span="5">
        <div>Image Input</div>
        <img ref="image" w-full h-40 object-cover class="rounded mt-2" src="@/image/avatar.jpeg" />
      </el-col>
      <el-col :span="5">
        <div>Base64</div>
        <textarea :value="imageBase64" cols="30" rows="10" readonly></textarea>
      </el-col>
    </el-row>
    <el-row class="row" type="flex" justify="center">
      <el-col :span="5">
        <div>Baer64ToBlob</div>
        <pre>data:text/plain;base64,MTIzMT</pre>
      </el-col>
      <el-col :span="5">
        <div>Base64</div>
        <textarea :value="Base64ToBlob" cols="30" rows="10" readonly></textarea>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.Base64 {
  .row {
    margin-bottom: 20px;
    border-bottom: 1px solid skyblue;
  }
}
</style>

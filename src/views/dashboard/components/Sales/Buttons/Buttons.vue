<template>
  <div>
    <el-button :icon="icon" class="B" :style="{ backgroundColor: Color }">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  mounted() {},
  props: {
    icon: {
      type: String
    },
    Color: {
      type: String,
      default: 'transparent',
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.B {
  border-radius: 8px;
  border: 1px solid #525252;
  width: 121px;
  color: #fff;
  margin-bottom: 10px;
}
</style>

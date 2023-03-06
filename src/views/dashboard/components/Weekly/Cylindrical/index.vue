<template>
  <div style="flex">
    <div id="Cylindrical">
      <img :src="require(`@/image/${imgUrl}`)" alt="" />
    </div>
    <span style="color: #fff; font-size: 12px">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'cylindrical',
  props: {
    imgUrl: {
      type: String,
      require: true
    },
    text: {
      type: String,
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
#Cylindrical {
  display: flex;
  align-items: flex-end;
  width: 18px;
  height: 125px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  margin: 0 auto;
}
</style>

<template>
  <div class="loader-demo">
    <div class="loader-box" v-for="(item, index) in componentList" :key="index">
      <component :is="components[item]"></component>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    components: {
      type: Object
    },
    componentList: {
      type: Array
    }
  }
}
</script>
<style>
.loader-demo {
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.loader-box {
  position: relative;
  width: 19%;
  height: 250px;
  border: 1px solid #212112;
  border-radius: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
  z-index: 1;
}
</style>

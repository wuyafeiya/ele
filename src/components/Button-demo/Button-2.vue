<template>
  <button class="button-2">
    <span>Button</span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.button-2 {
  display: inline-block;
  border-radius: 4px;
  background-color: #3d405b;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 17px;
  padding: 16px;
  width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button-2 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button-2 span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -15px;
  transition: 0.5s;
}

.button-2:hover span {
  padding-right: 15px;
}

.button-2:hover span:after {
  opacity: 1;
  right: 0;
}
</style>

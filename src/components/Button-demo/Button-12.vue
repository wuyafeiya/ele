<template><button class="btn-12">Shop now</button></template>

<script>
export default {}
</script>

<style scoped>
.btn-12 {
  padding: 1.1em 2em;
  background: none;
  border: 2px solid #fff;
  font-size: 15px;
  color: #131313;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 12px;
  background-color: #ecd448;
  font-weight: bolder;
  box-shadow: 0 2px 0 2px #000;
}

.btn-12:before {
  content: '';
  position: absolute;
  width: 100px;
  height: 120%;
  background-color: #ff6700;
  top: 50%;
  transform: skewX(30deg) translate(-150%, -50%);
  transition: all 0.5s;
}

.btn-12:hover {
  background-color: #4cc9f0;
  color: #fff;
  box-shadow: 0 2px 0 2px #0d3b66;
}

.btn-12:hover::before {
  transform: skewX(30deg) translate(150%, -50%);
  transition-delay: 0.1s;
}

.btn-12:active {
  transform: scale(0.9);
}
</style>

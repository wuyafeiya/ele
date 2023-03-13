<template>
  <div class="loader-27">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.loader-27 {
  display: flex;
  align-items: center;
}

.bar {
  display: inline-block;
  width: 3px;
  height: 20px;
  background-color: rgba(233, 6, 6, 0.952);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 35px;
  margin: 0 5px;
  animation-delay: 0.25s;
}

.bar:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes scale-up4 {
  20% {
    background-color: #ffff;
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}
</style>

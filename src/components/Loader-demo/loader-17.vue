<template><span class="loader-17"></span></template>

<script>
export default {}
</script>

<style>
.loader-17 {
  width: 84px;
  height: 84px;
  position: relative;
}

.loader-17:before,
.loader-17:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #000;
  transform: translate(-50%, -100%) scale(0);
  animation: push_401 2s infinite linear;
}

.loader-17:after {
  animation-delay: 1s;
}

@keyframes push_401 {
  0%,
  50% {
    transform: translate(-50%, 0%) scale(1);
  }

  100% {
    transform: translate(-50%, -100%) scale(0);
  }
}
</style>

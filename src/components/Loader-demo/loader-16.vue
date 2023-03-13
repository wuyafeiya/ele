<template>
  <div class="loader-16"></div>
</template>

<script>
export default {}
</script>

<style>
.loader-16 {
  --height-of-loader-16: 4px;
  --loader-16-color: #0071e2;
  width: 60%;
  height: var(--height-of-loader-16);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
}

.loader-16::before {
  content: '';
  position: absolute;
  background: var(--loader-16-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}
</style>

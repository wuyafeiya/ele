<template>
  <button-29 class="button-29">
    <span class="button-29-content">Download </span>
  </button-29>
</template>

<script>
export default {}
</script>

<style scoped>
.button-29 {
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  background-size: 400%;
  color: #fff;
}

.button-29:hover::before {
  transform: scaleX(1);
}

.button-29-content {
  position: relative;
  z-index: 1;
}

.button-29::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%);
  transition: all 0.475s;
}
</style>

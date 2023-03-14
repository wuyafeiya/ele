<template>
  <button class="button-20">
    <span> GAME ON </span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.button-20 {
  position: relative;
  height: 50px;
  padding: 0 30px;
  border: 2px solid #000;
  background: #fff;
  user-select: none;
  white-space: nowrap;
  transition: all 0.05s linear;
  font-family: inherit;
}

.button-20:before,
.button-20:after {
  content: '';
  position: absolute;
  background: #ffff;
  transition: all 0.2s linear;
}

.button-20:before {
  width: calc(100% + 6px);
  height: calc(100% - 16px);
  top: 8px;
  left: -3px;
}

.button-20:after {
  width: calc(100% - 16px);
  height: calc(100% + 6px);
  top: -3px;
  left: 8px;
}

.button-20:hover {
  cursor: crosshair;
}

.button-20:active {
  transform: scale(0.95);
}

.button-20:hover:before {
  height: calc(100% - 32px);
  top: 16px;
}

.button-20:hover:after {
  width: calc(100% - 32px);
  left: 16px;
}

.button-20 span {
  font-size: 15px;
  z-index: 3;
  position: relative;
  font-weight: 600;
}
</style>

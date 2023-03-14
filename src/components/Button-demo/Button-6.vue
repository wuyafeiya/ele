<template>
  <button class="full-rounded Button-6">
    <span>Hover me</span>
    <div class="border full-rounded"></div>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.Button-6 {
  font-size: 16px;
  position: relative;
  margin: auto;
  padding: 1em 2.5em 1em 2.5em;
  border: none;
  background: #fff;
  transition: all 0.1s linear;
  box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
}

.Button-6:active {
  transform: scale(0.95);
}

.Button-6 span {
  color: #464646;
}

.Button-6 .border {
  position: absolute;
  border: 0.15em solid #fff;
  transition: all 0.3s 0.08s linear;
  top: 50%;
  left: 50%;
  width: 9em;
  height: 3em;
  transform: translate(-50%, -50%);
}

.Button-6:hover .border {
  display: block;
  width: 9.9em;
  height: 3.7em;
}

.full-rounded {
  border-radius: 2em;
}
</style>

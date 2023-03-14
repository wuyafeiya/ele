<template>
  <button class="button-10">Click</button>
</template>

<script>
export default {}
</script>

<style scoped>
.button-10 {
  outline: none;
  color: #daa06d;
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  border: 2px dashed #daa06d;
  border-radius: 15px;
  background-color: #eaddca;
  box-shadow: 0 0 0 4px #eaddca, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.1s ease-in-out, 0.4s color;
}

.button-10:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow: 0 0 0 4px #eaddca, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
}
</style>

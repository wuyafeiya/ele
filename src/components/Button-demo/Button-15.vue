<template><button class="button-15">Hover Me</button></template>

<script>
export default {}
</script>

<style scoped>
.button-15 {
  background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
}

.button-15:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
}

.button-15:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
}
</style>

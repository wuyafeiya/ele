<template>
  <div><input type="text" autocomplete="off" name="text" class="input-04" placeholder="Username" /></div>
</template>

<script>
export default {}
</script>

<style scoped>
.input-04 {
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 300ms ease-in-out;
}

.input-04:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
}
</style>

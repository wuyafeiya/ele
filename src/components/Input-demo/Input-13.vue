<template>
  <div>
    <input type="text" name="text" class="input-13" placeholder="Type here..." />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.input-13 {
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  background: #e8e8e8;
  box-shadow: 20px 20px 60px #c5c5c5, -20px -20px 60px #ffffff;
  transition: 0.3s;
}

.input-13:focus {
  outline-color: #e8e8e8;
  background: #e8e8e8;
  box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
  transition: 0.3s;
}
</style>

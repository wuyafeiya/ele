<template>
  <div><input class="input-10" name="text" placeholder="Search..." type="search" /></div>
</template>

<script>
export default {}
</script>

<style scoped>
.input-10 {
  max-width: 190px;
  background-color: #f5f5f5;
  color: #242424;
  padding: 0.15rem 0.5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
}

.input-10:focus {
  border-bottom: 2px solid #5b5fc7;
  border-radius: 4px 4px 2px 2px;
}

.input-10:hover {
  outline: 1px solid lightgrey;
}
</style>

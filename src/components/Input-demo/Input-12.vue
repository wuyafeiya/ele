<template>
  <div class="inputbox-12">
    <input required="required" type="text" />
    <span>Username</span>
    <i></i>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.inputbox-12 {
  position: relative;
  width: 196px;
}

.inputbox-12 input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

.inputbox-12 span {
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: #8f8f8f;
  letter-spacing: 00.05em;
  transition: 0.5s;
  pointer-events: none;
}

.inputbox-12 input:valid ~ span,
.inputbox-12 input:focus ~ span {
  color: #45f3ff;
  transform: translateX(-10px) translateY(-34px);
  font-size: 0, 75em;
}

.inputbox-12 i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #45f3ff;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.inputbox-12 input:valid ~ i,
.inputbox-12 input:focus ~ i {
  height: 44px;
}
</style>

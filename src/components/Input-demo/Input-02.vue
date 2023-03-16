<template>
  <div class="form-control-02">
    <input type="value" required="" />
    <label>
      <span style="transition-delay: 0ms">U</span><span style="transition-delay: 50ms">s</span><span style="transition-delay: 100ms">e</span
      ><span style="transition-delay: 150ms">r</span><span style="transition-delay: 200ms">n</span><span style="transition-delay: 250ms">a</span
      ><span style="transition-delay: 300ms">m</span><span style="transition-delay: 350ms">e</span>
    </label>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form-control-02 {
  position: relative;
  margin: 20px 0 40px;
  width: 190px;
}

.form-control-02 input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px pink solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: red;
}

.form-control-02 input:focus,
.form-control-02 input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.form-control-02 label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control-02 label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: red;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control-02 input:focus + label span,
.form-control-02 input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>

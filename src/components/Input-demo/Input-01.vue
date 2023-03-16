<template>
  <div class="wave-group-01">
    <input required="" type="text" class="input" />
    <span class="bar"></span>
    <label class="label">
      <span class="label-char" style="--index: 0">N</span>
      <span class="label-char" style="--index: 1">a</span>
      <span class="label-char" style="--index: 2">m</span>
      <span class="label-char" style="--index: 3">e</span>
    </label>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wave-group-01 {
  position: relative;
}

.wave-group-01 .input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.wave-group-01 .input:focus {
  outline: none;
}

.wave-group-01 .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.wave-group-01 .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * 0.05s);
}

.wave-group-01 .input:focus ~ label .label-char,
.wave-group-01 .input:valid ~ label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
  color: #5264ae;
}

.wave-group-01 .bar {
  position: relative;
  display: block;
  width: 200px;
}

.wave-group-01 .bar:before,
.wave-group-01 .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group-01 .bar:before {
  left: 50%;
}

.wave-group-01 .bar:after {
  right: 50%;
}

.wave-group-01 .input:focus ~ .bar:before,
.wave-group-01 .input:focus ~ .bar:after {
  width: 50%;
}
</style>

<template>
  <div class="textInputWrapper-09">
    <input placeholder="Type Here" type="text" class="textInput" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.textInputWrapper-09 {
  position: relative;
  width: 180px;
  margin: 12px 5px;
  --accent-color: #a3e583;
}

.textInputWrapper-09:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper-09:before,
.textInputWrapper-09:after {
  content: '';
  left: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  bottom: -1px;
  z-index: 4;
  width: 100%;
}

.textInputWrapper-09:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
}

.textInputWrapper-09:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper-09:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper-09:focus-within:after {
  border-bottom: 2px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper-09:after {
  content: '';
  transform: scaleX(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  will-change: transform;
  border-bottom: 2px solid var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.textInput::placeholder {
  transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  opacity: 1;
  user-select: none;
  color: rgba(255, 255, 255, 0.582);
}

.textInputWrapper-09 .textInput {
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 36px;
  background-color: #252525;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #e8e8e8;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
}

.textInputWrapper-09 .textInput:focus,
.textInputWrapper-09 .textInput:active {
  outline: none;
}

.textInputWrapper-09:focus-within .textInput,
.textInputWrapper-09 .textInput:focus,
.textInputWrapper-09 .textInput:active {
  background-color: #353535;
}

.textInputWrapper-09:focus-within .textInput::placeholder {
  opacity: 0;
}
</style>

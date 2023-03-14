<template><button class="button-19">Button</button></template>

<script>
export default {}
</script>
<style scoped>
.button-19 {
  align-items: center;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  padding: 1rem;
}

.button-19:before {
  background-color: red;
  content: '';
  display: inline-block;
  height: 1px;
  margin-right: 10px;
  transition: all 0.42s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 0;
}

.button-19:hover:before {
  background-color: #fff;
  width: 3rem;
}
</style>

<template>
  <button class="button-16">
    <b>Fold me!</b>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.button-16 {
  position: relative;
  font-size: 1.2em;
  padding: 0.7em 1.4em;
  background-color: #bf0426;
  text-decoration: none;
  border: none;
  border-radius: 0.5em;
  color: #dedede;
  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
}

.button-16::before {
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(150, 4, 31, 1) 50%, rgba(191, 4, 38, 1) 60%);
  border-radius: 0 0 0.5em 0;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.button-16:hover::before {
  width: 1.6em;
  height: 1.6em;
}

.button-16:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
  transform: translate(0.1em, 0.1em);
}
</style>

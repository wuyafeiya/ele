<template>
  <div class="loader-7">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.loader-7 {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: -75px;
}

.loader-7 span {
  position: absolute;
  top: 50%;
  left: var(--left);
  width: 35px;
  height: 7px;
  background: #ffff;
  animation: dominos 1s ease infinite;
  box-shadow: 2px 2px 3px 0px black;
}

.loader-7 span:nth-child(1) {
  --left: 80px;
  animation-delay: 0.125s;
}

.loader-7 span:nth-child(2) {
  --left: 70px;
  animation-delay: 0.3s;
}

.loader-7 span:nth-child(3) {
  left: 60px;
  animation-delay: 0.425s;
}

.loader-7 span:nth-child(4) {
  animation-delay: 0.54s;
  left: 50px;
}

.loader-7 span:nth-child(5) {
  animation-delay: 0.665s;
  left: 40px;
}

.loader-7 span:nth-child(6) {
  animation-delay: 0.79s;
  left: 30px;
}

.loader-7 span:nth-child(7) {
  animation-delay: 0.915s;
  left: 20px;
}

.loader-7 span:nth-child(8) {
  left: 10px;
}

@keyframes dominos {
  50% {
    opacity: 0.7;
  }

  75% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  80% {
    opacity: 1;
  }
}
</style>

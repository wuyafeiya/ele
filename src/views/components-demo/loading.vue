<template>
  <div style="display: flex">
    <div class="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="loading">
      <div class="dot">1</div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
$ballSize: 10px;
$containerSize: 250px;
$n: 46;
$pdeg: 360deg / $n;
.loading {
  width: $containerSize;
  height: $containerSize;
  margin: 50px auto;
  position: relative;
  border-radius: 50%;
  .dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: $ballSize;
    height: $ballSize;
    margin-left: -$ballSize / 2;
    margin-top: -$ballSize / 2;
    perspective: 70px;
    transform-style: preserve-3d;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &::before {
      background: skyblue;
      top: -100%;
      animation: moveBlack 2000ms infinite;
    }
    &::after {
      background: pink;
      top: 100%;
      animation: moveWhite 2000ms infinite;
    }
  }
  @keyframes moveBlack {
    0% {
      animation-timing-function: ease-in;
    }
    25% {
      transform: translate3d(0, 100%, $ballSize);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translate3d(0, 200%, 0);
      animation-timing-function: ease-in;
    }
    75% {
      transform: translate3d(0, 100%, -$ballSize);
      animation-timing-function: ease-out;
    }
  }
  @keyframes moveWhite {
    0% {
      animation-timing-function: ease-in;
    }
    25% {
      transform: translate3d(0, -100%, -$ballSize);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translate3d(0, -200%, 0);
      animation-timing-function: ease-in;
    }
    75% {
      transform: translate3d(0, -100%, $ballSize);
      animation-timing-function: ease-out;
    }
  }
  //scss 循环
  @for $i from 1 through $n {
    .dot:nth-child(#{$i}) {
      transform: rotate($pdeg * $i) translateY(-$containerSize/2);
      &::before,
      &::after {
        animation-delay: -2000ms / $n * 6 * $i;
      }
    }
  }
}
</style>

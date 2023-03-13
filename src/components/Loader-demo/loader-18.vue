<template>
  <div class="loader-18">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@-webkit-keyframes loader-18 {
  0%,
  20%,
  80%,
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  30%,
  70% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes loader-18 {
  0%,
  20%,
  80%,
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  30%,
  70% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.loader-18 {
  height: 24px;
  position: relative;
  width: 24px;
}

.loader-18 div {
  -webkit-animation: loader-18 2.1s infinite backwards;
  animation: loader-18 2.1s infinite backwards;
  background: #000;
  height: 12px;
  margin-top: 6px;
  position: absolute;
  width: 24px;
}

.loader-18 div:after,
.loader-18 div:before {
  content: '';
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  position: absolute;
  left: 0;
  right: 0;
}

.loader-18 div:after {
  top: -6px;
  border-bottom: 6px solid #f3f3f3;
}

.loader-18 div:before {
  bottom: -6px;
  border-top: 6px solid #f3f3f3;
}

.loader-18 div:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  left: -28px;
  top: 0;
}

.loader-18 div:nth-child(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
  left: -14px;
  top: 22px;
}

.loader-18 div:nth-child(3) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  left: 14px;
  top: 22px;
}

.loader-18 div:nth-child(4) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  left: 28px;
  top: 0;
}

.loader-18 div:nth-child(5) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  left: 14px;
  top: -22px;
}

.loader-18 div:nth-child(6) {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  left: -14px;
  top: -22px;
}

.loader-18 div:nth-child(7) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
  left: 0;
  top: 0;
}
</style>

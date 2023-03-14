<template>
  <div data-tooltip="Size: 20Mb" class="btn-27">
    <div class="btn-27-wrapper">
      <div class="text">Download</div>
      <span class="icon">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            fill="none"
          ></path>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.btn-27 {
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-btn-27: 18px;
  --btn-27-color: #1163ff;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--btn-27-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: 'Arial';
  transition: background 0.3s;
}

.btn-27::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: var(--tooltip-color);
  font-size: 0.9rem;
  color: #111;
  border-radius: 0.25em;
  line-height: var(--tooltip-height);
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-btn-27) + 10px);
  left: calc(50% - var(--tooltip-width) / 2);
}

.btn-27::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: var(--tooltip-color);
  left: calc(50% - 10px);
  bottom: calc(100% + var(--gap-between-tooltip-to-btn-27) - 10px);
}

.btn-27::after,
.btn-27::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-27-wrapper,
.text,
.icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
}

.text {
  top: 0;
}

.text,
.icon {
  transition: top 0.5s;
}

.icon {
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-27:hover {
  background: #6c18ff;
}

.btn-27:hover .text {
  top: -100%;
}

.btn-27:hover .icon {
  top: 0;
}

.btn-27:hover:before,
.btn-27:hover:after {
  opacity: 1;
  visibility: visible;
}

.btn-27:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-btn-27) - 20px);
}

.btn-27:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-btn-27));
}
</style>

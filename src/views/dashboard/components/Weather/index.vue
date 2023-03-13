<template>
  <div style="position: relative">
    <img src="@/image/Sun.png" alt="" style="display: block; width: 100%; position: relative; right: -130px; top: -90px" />
    <div style="position: absolute; top: 80px; margin-left: 22px">
      <div class="city">Berlin, Germany</div>
      <div class="temperature">13</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.city {
  width: 110px;
  height: 72px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
}
.temperature {
  height: 115px;
  line-height: 115px;
  font-size: 96px;
  color: #fff;
}
</style>

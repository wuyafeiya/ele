<template>
  <div class="flex">
    <div class="Spindle">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col :span="7" v-for="index in 3" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
    <div class="SideShaft">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col :span="7" v-for="index in 9" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
    <div class="Spindle-item">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col :span="7" v-for="index in 3" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.flex {
  @include flex;
  .Spindle {
    @each $animal, $index in (flex-start: 1, center: 2, flex-end: 3, space-around: 4, space-between: 5, space-evenly: 6) {
      .row:nth-child(#{$index}) {
        justify-content: $animal;
      }
    }
  }
  .SideShaft {
    @each $animal, $index in (flex-start: 1, center: 2, flex-end: 3, space-around: 4, space-between: 5, space-evenly: 6) {
      .row {
        flex-wrap: wrap;
      }
      .row:nth-child(#{$index}) {
        align-content: $animal;
      }
    }
  }
  .Spindle-item {
    .row {
      flex-wrap: wrap;
    }
    @each $animal, $index in (flex-start: 1, center: 2, flex-end: 3, space-around: 4, baseline: 5, stretch: 6) {
      .row:nth-child(#{$index}) {
        align-items: $animal;
      }
    }
  }
}
</style>

<template>
  <div class="flex">
    <h1>justify-content <span style="font-size: 18px">(flex-start | center | flex-end | space-around | space-between | space-evenly)</span></h1>
    <div class="Spindle">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col :span="7" v-for="index in 3" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
    <h1>align-content <span style="font-size: 18px">(flex-start | center | flex-end | space-around | space-between | space-evenly)</span></h1>
    <div class="SideShaft">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col :span="7" v-for="index in 9" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
    <h1>align-items <span style="font-size: 18px">(flex-start | center | flex-end | space-around | space-between | space-evenly)</span></h1>
    <div class="Spindle-item">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col :span="7" v-for="index in 3" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
    <h1>flex-basis <span style="font-size: 18px">(3rem | max-content | min-content | fit-content | content | 100px)</span></h1>
    <div class="flex-basis">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col class="col" :span="7" v-for="index in 3" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
    <h1>flex-direction <span style="font-size: 18px">(row | column | row-reverse | column-reverse )</span></h1>
    <div class="flex-direction">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col class="col" :span="7" v-for="index in 3" :key="index">{{ index }}</el-col>
      </el-row>
    </div>
    <h1>flex-grow</h1>
    <div class="flex-grow">
      <el-row class="row" type="flex" v-for="index in 6" :key="index">
        <el-col class="col" :span="7" v-for="index in 3" :key="index">{{ index }}</el-col>
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
  .flex-basis {
    @each $animal, $index in (3rem: 1, max-content: 2, min-content: 3, fit-content: 4, content: 5, 100px: 6) {
      .row:nth-child(#{$index}) .col:first-child {
        flex-basis: $animal;
      }
    }
  }
  .flex-direction {
    @each $animal, $index in (row: 1, column: 2, row-reverse: 3, column-reverse: 4) {
      .row:nth-child(#{$index}) {
        flex-direction: $animal;
      }
    }
  }
  .flex-grow {
    @each $animal, $index in (1: 1, 2: 2, 3: 3, 0.5: 4) {
      .row:nth-child(#{$index}) .col:nth-child(#{$index}) {
        background: rgba(random(255), random(255), random(255));
        flex-grow: $animal;
      }
    }
  }
}
</style>

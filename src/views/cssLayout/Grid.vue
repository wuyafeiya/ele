<template>
  <div class="Grid">
    <h1>grid-template</h1>
    <div class="grid-template">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-repeat</h1>
    <div class="grid-repeat">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-fill</h1>
    <div class="grid-fill">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-fr</h1>
    <div class="grid-fr">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-minmax</h1>
    <div class="grid-minmax">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-auto</h1>
    <div class="grid-auto">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>两栏布局</h1>
    <div class="grid-Two">
      <div class="row">
        <div class="col" v-for="index in 2" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-row-gap</h1>
    <div class="grid-row-gap">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-column-gap</h1>
    <div class="grid-column-gap">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-gap</h1>
    <div class="grid-gap">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-auto-flow <span style="font-size: 18px">(row dense)</span></h1>
    <div class="grid-auto-flow-row">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>grid-auto-flow <span style="font-size: 19px">(column dense)</span></h1>
    <div class="grid-auto-flow-column">
      <div class="row">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>justify-items <span style="font-size: 18px">(start | end | center | stretch)</span></h1>
    <div class="justify-items">
      <div class="row" v-for="index in 4" :key="index">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <!-- <h1>align-items</h1>
    <div class="align-items">
      <div class="row" v-for="index in 4" :key="index">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div> -->
    <h1>justify-content <span style="font-size: 18px">(start | end | center | stretch | space-around | space-between | space-evenly)</span></h1>
    <div class="justify-content">
      <div class="row" v-for="index in 7" :key="index">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
    <h1>align-content <span style="font-size: 18px">(start | end | center | stretch | space-around | space-between | space-evenly)</span></h1>
    <div class="align-content">
      <div class="row" v-for="index in 7" :key="index">
        <div class="col" v-for="index in 9" :key="index">{{ index }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.Grid {
  @for $i from 1 through 9 {
    .col:nth-child(#{$i}) {
      background: rgb(random(255), random(255), random(255));
    }
  }
  .row {
    display: grid;
    width: 100%;
    height: 300px;
    background: yellowgreen;
    box-shadow: 0 0 8px #161717;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  .col {
    text-align: center;
    line-height: 100px;
    background: skyblue;
    border: 1px solid rgb(249, 215, 215);
  }
  .grid-template {
    .row {
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
    }
  }
  .grid-repeat {
    .row {
      grid-template-columns: repeat(2, 100px 50px 100px);
    }
  }
  .grid-fill {
    .row {
      grid-template-columns: repeat(auto-fill, 100px);
    }
  }
  .grid-fr {
    .row {
      height: 100%;
      grid-template-columns: 1fr 1fr;
    }
  }
  .grid-minmax {
    .row {
      grid-template-columns: 1fr 1fr minmax(100px, 1fr);
    }
  }
  .grid-auto {
    .row {
      grid-template-columns: 100px auto 100px;
    }
  }
  .grid-Two {
    .row {
      grid-template-columns: 70% 30%;
    }
  }
  .grid-row-gap {
    .row {
      height: 100%;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-row-gap: 20px;
    }
  }
  .grid-column-gap {
    .row {
      height: 100%;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-column-gap: 20px;
    }
  }
  .grid-gap {
    .row {
      height: 100%;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-gap: 20px;
    }
  }
  .grid-auto-flow-row {
    .col:nth-child(1),
    .col:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .row {
      height: 100%;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-auto-flow: row dense;
    }
  }
  .grid-auto-flow-column {
    .col:nth-child(1),
    .col:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .row {
      height: 100%;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-auto-flow: column dense;
    }
  }
  .justify-items {
    display: flex;
    justify-content: space-between;
    @each $animal, $index in (start: 1, end: 2, center: 3, stretch: 4) {
      .row:nth-child(#{$index}) {
        width: 23%;
        justify-items: $animal;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
      }
    }
  }
  // .align-items {
  //   display: flex;
  //   justify-content: space-between;

  //   @each $animal, $index in (start: 1, end: 2, center: 3, stretch: 4) {
  //     .row {
  //       grid-template-columns: 100px 100px 100px;
  //       grid-template-rows: 100px 100px 100px;
  //       place-items: center center;
  //     }
  //     // .row:nth-child(#{$index}) {
  //     //   width: 23%;
  //     //   grid-template-columns: 20px 20px 20px;
  //     //   grid-template-rows: 100px 100px 100px;
  //     //   align-items: $animal;
  //     // }
  //   }
  // }
  .justify-content {
    display: flex;
    justify-content: space-between;
    .col {
      line-height: 50px;
    }
    @each $animal, $index in (start: 1, end: 2, center: 3, stretch: 4, space-around: 5, space-between: 6, space-evenly: 7) {
      .row:nth-child(#{$index}) {
        width: 13%;
        grid-template-columns: 50px 50px 50px;
        grid-template-rows: 50px 50px 50px;
        justify-content: $animal;
      }
    }
  }
  .align-content {
    display: flex;
    justify-content: space-between;
    .col {
      line-height: 50px;
    }
    @each $animal, $index in (start: 1, end: 2, center: 3, stretch: 4, space-around: 5, space-between: 6, space-evenly: 7) {
      .row:nth-child(#{$index}) {
        width: 13%;
        grid-template-columns: 50px 50px 50px;
        grid-template-rows: 50px 50px 50px;
        align-content: $animal;
      }
    }
  }
}
</style>

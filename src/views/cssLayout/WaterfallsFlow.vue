<template>
  <div>
    <div id="box">
      <div class="item" v-for="index in number" :key="index">{{ index }}</div>
    </div>
  </div>
</template>
<script>
import debounce from '@/utils/debounce'
export default {
  created() {
    const that = this
    window.addEventListener('resize', debounce(that.resize))
    window.addEventListener('scroll', debounce(that.lazyLoad))
  },
  mounted() {
    this.waterFall()
  },
  data() {
    return {
      items: document.getElementsByClassName('item'),
      gap: 10,
      number: 50,
      itemWidth: 200
    }
  },
  methods: {
    waterFall() {
      let colums = this.getCols()
      let arr = []
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i]
        let height = item.offsetHeight
        if (i < colums - 1) {
          item.style.top = 60 + 'px'
          item.style.left = (this.itemWidth + this.gap) * i + 'px'
          arr.push(height)
        } else {
          let minIndex = this.getMinIndex(arr)
          item.style.top = arr[minIndex] + this.gap + 60 + 'px'
          item.style.left = (this.itemWidth + this.gap) * minIndex + 'px'
          arr[minIndex] = arr[minIndex] + this.items[i].offsetHeight + this.gap
        }
      }
    },
    getCols() {
      return ~~(document.body.offsetWidth / (this.itemWidth + this.gap))
    },
    getMinIndex(array) {
      let min = Math.min(...array)
      return array.indexOf(min)
    },
    getClient() {
      return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      }
    },
    lazyLoad() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let documentHeight = document.documentElement.scrollHeight
      let clientHeight = window.innerHeight
      if (documentHeight - scrollTop < 1.5 * clientHeight) {
        if (this.number > 1000) {
          return alert('满了')
        }
        this.number += 30
        this.waterFall()
      }
    },
    resize() {
      this.items = []
      this.waterFall()
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/mixin.scss';
$Number: v-bind(number);
#box {
  @include clearfix;
  overflow: hidden;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  color: aliceblue;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 206px;
  position: absolute;
  @for $i from 1 through 1000 {
    &:nth-child(#{$i}) {
      background-color: rgba(random(255), random(255), random(255), 0.8);
      height: random(300) + random(300) + px;
    }
  }
}
</style>

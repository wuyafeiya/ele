<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <Nav></Nav>
      <app-main />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { Sidebar, Nav, TagsView, AppMain } from './components'
export default {
  name: 'layout',
  components: {
    Sidebar,
    Nav,
    TagsView,
    AppMain
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    }
  },
  data() {
    return {
      num: 1
    }
  },
  methods: {}
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

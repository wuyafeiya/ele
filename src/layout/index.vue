<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <Nav></Nav>
      <tags-view></tags-view>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { Sidebar, Nav, TagsView } from './components'
export default {
  name: 'layout',
  components: {
    Sidebar,
    Nav,
    TagsView
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
@import '@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>

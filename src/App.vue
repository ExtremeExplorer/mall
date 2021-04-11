<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
    <icon></icon>
    <svg-icon/>
  </div>
</template>

<script>

import MainTabBar from "@/components/content/MainTabBar/MainTabBar";
import Icon from "@/components/content/Icon/Icon";
import SvgIcon from '@/components/content/Icon/SvgIcon'
export default {
  name: 'App',
  components: {
    MainTabBar,
    Icon,
    SvgIcon
  }
}
</script>

<style scoped>
@import "./assets/css/base.css";
</style>

<template>
  <div id="shopcart">
    <!--导航栏-->
    <nav-bar class="shopcart-nav">
      <div slot="center">购物车<span>({{ cartLength }})</span></div>
      <div class="admin" slot="right" @click="isDelete">{{ admin }}</div>
    </nav-bar>
    <!--商品列表-->
    <shopcart-list/>
    <!--底部汇总-->
    <bottom-bar :is-show="isShow"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import ShopcartList from "./childComps/ShopcartList";
import BottomBar from "./childComps/BottomBar";

import {mapGetters} from 'vuex'

export default {
  name: 'Shopcart',
  components: {
    NavBar,

    ShopcartList,
    BottomBar
  },
  data() {
    return {
      admin: '管理',
      isShow: false
    }
  },
  computed: {
    /*...mapGetters({
      length: 'cartLength',
      list: 'cartLength'
    })*/
    ...mapGetters(['cartLength']),
  },
  methods: {
    isDelete() {
      this.isShow = !this.isShow
      this.isShow == true ? this.admin = '完成' : this.admin = '管理'
    }
  }
}
</script>

<style scoped>
.shopcart-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.shopcart-nav span {
  font-size: 14px;
}

.admin {
  font-size: 14px;
}
</style>

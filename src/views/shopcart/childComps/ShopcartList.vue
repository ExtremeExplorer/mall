<template>
  <div class="shopcart-list">
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="roll">
      <shopcart-list-item v-for="(item, index) in cartList"
                          :key="index"
                          :product="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import ShopcartListItem from "./ShopcartListItem";

import {mapGetters} from 'vuex'

export default {
  name: "ShopcartList",
  components: {
    Scroll,

    ShopcartListItem
  },
  computed: {
    ...mapGetters(['cartList', 'cartLength'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  methods: {
    //滚动事件
    roll(position) {
      position && this.hideClick()
    },
    //隐藏加减商品数量按钮
    hideClick() {
      let length = this.cartLength
      for (let i = 0; i < length; i++) {
        this.cartList[i].isShow = false
      }
    }
  }
}
</script>

<style scoped>
.shopcart-list {
  height: 100%;
}

.content {
  height: calc(100vh - var(--vh-offset, 0px) - 44px - 49px - 44px);
  overflow: hidden;
}
</style>

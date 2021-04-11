<template>
  <div id="home">
    <!--导航栏-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--分类导航栏-->
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabControlOne"
                 class="tab-control-one"
                 v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @loadmore="loadMore">
      <!--轮播图-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <!--推荐-->
      <recommend-view :recommends="recommends"/>
      <!--本周流行-->
      <feature-view/>
      <!--分类导航栏-->
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControlTwo"/>
      <!--商品列表-->
      <goods-list :goods="showGoods"/>
    </scroll>
    <!--回到顶部-->
    <!--.native:监听组件根元素的原生事件-->
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>

</template>

<script>
//公共组件
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";

//子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

//封装方法
import {getHomeMultiData, getHomeGoods} from "@/network/home";
import {backTopMixin} from '@/common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  mixins: [backTopMixin],
  data() {
    return {
      //保存轮播图数据
      banners: [],
      //保存推荐数据
      recommends: [],
      //保存商品数据
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      //保存当前商品数据goods的类型
      currentType: 'pop',
      // 保存选项卡上拉到顶部时的值
      tabOffsetTop: 0,
      // 保存当前选项卡是否显示状态
      isTabFixed: false,
      //保存当前离开Home时的位置
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      //获取当前商品数据
      return this.goods[this.currentType].list
    }
  },
  activated() {
    //回到离开前的位置
    this.$refs.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //保存离开时的位置
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created() {
    // 请求多个数据
    this._getMultiData()

    // 请求商品数据
    this._getGoods('pop')
    this._getGoods('new')
    this._getGoods('sell')
  },
  methods: {
    /*
   * 网络请求相关方法
   * */
    _getMultiData() {
      getHomeMultiData().then(res => {
        // console.log(res);
        //获取轮播图数据
        this.banners = res.data.banner.list
        //获取推荐数据
        this.recommends = res.data.recommend.list
      })
    },

    //获取商品数据
    _getGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },

    /*
    * 事件监听相关方法
    * */
    //推荐事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControlOne.currentIndex = index
      this.$refs.tabControlTwo.currentIndex = index
    },

    // 监听滚动位置事件
    contentScroll(position) {
      // 判断回到顶部按钮backTop是否显示
      this.listenShowBackTop(position)

      // 判断选项卡tabControl是否吸顶(position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },

    //上拉加载事件
    loadMore() {
      this._getGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },

    //图片加载事件
    swiperImageLoad() {
      // 所有的组件都有一个属性$el:用于获取组件元素
      this.tabOffsetTop = this.$refs.tabControlTwo.$el.offsetTop
    }
  }
}
</script>

<style scoped>
/*#home {
  height: 100vh;
}*/
.tab-control-one {
  position: relative;
  z-index: 100;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  position: fixed;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

/*.content {*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*}*/

</style>

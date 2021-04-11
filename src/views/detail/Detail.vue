<template>
  <div id="detail">
    <!--导航栏-->
    <detail-nav-bar class="detail-nav"
                    ref="bar"
                    @titleClick="titleClick"/>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            :probe-type="3">
      <!--轮播图-->
      <detail-swiper :top-images="topImages"/>
      <!--商品-->
      <detail-base-info :goods="goods"/>
      <!--商品店铺-->
      <detail-shop-info :shop="shop"/>
      <!--商品详情-->
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      <!--商品参数-->
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <!--评论信息-->
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <!--推荐信息-->
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <!--回到顶部-->
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    <!--底部工具栏-->
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
//公共组件
import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

//子组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

//封装方法
import {getDetail, gerRecommend, Goods, GoodsParam, Shop} from "@/network/detail";
import {debounce} from '@/common/utils'
import {backTopMixin} from '@/common/mixin'

import {mapActions} from 'vuex'


export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar

  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      //保存轮播图图片
      topImages: [],
      //保存商品信息
      goods: {},
      //保存商品店铺信息
      shop: {},
      //保存商品详情数据
      detailInfo: {},
      //保存商品参数信息
      paramInfo: {},
      //保存评论信息
      commentInfo: {},
      //保存推荐数据
      recommends: [],
      //保存导航栏标签跳转到的位置
      themeTopYs: [],
      //保存导航栏标签的值
      getThemeTopYs: null,
      //记录导航栏按钮
      currentIndex: 0,

    }
  },
  created() {
    this._getRequestData()
  },
  methods: {
    ...mapActions(['addCart']),
    //网络请求
    _getRequestData() {
      //保存传入的iid
      this.iid = this.$route.params.iid;

      // 根据iid请求详情数据
      getDetail(this.iid).then(res => {
        let data = res.result
        // console.log(data);
        // 获取轮播图数据
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 获取店铺信息对象
        this.shop = new Shop(data.shopInfo)

        // 获取商品的详情数据
        this.detailInfo = data.detailInfo
        // 获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      // 请求推荐数据
      gerRecommend().then(res => {
        this.recommends = res.data.list
      })

      // 导航栏4个按钮的赋值
      this.getThemeTopYs = debounce(() => {
        // 获取导航栏4个按钮的值
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
        this.themeTopYs.push(Number.MAX_VALUE)
      })
    },

    // 点击导航栏跳到指定位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
    },

    //监听滚动位置
    contentScroll(position) {
      //获取返回顶部按钮显示状态
      this.listenShowBackTop(position)

      //滚动内容与导航按钮对应
      let positionY = -position.y
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.currentIndex = i
          this.$refs.bar.currentIndex = i
        }
      }
    },

    //图片加载事件
    detailImageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopYs()
    },

    //添加购物车
    addToCart() {
      //获取购物车需要展示的信息
      const product = {}
      product.iid = this.iid
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowPrice

      //将商品添加至购物车
      this.addCart(product).then(res => {
        //弹窗提示
        this.$toast.show(res)
      })
      /*this.$store.dispatch('addCart', product).then(res => {
        console.log(res);
      })*/
    },
  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  background-color: #fff;
  z-index: 9;
}

.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>

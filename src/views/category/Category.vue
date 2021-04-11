<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <!--菜单栏-->
      <tab-menu :categories="categories"
                @selectItem="selectItem"/>
      <scroll id="tab-content">
        <!--标签种类-->
        <tab-content-category :subcategories="showSubcategory"/>
        <!--选项卡-->
        <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick"/>
        <!--商品列表-->
        <tab-content-detail :category-detail="showCategoryDetail"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";

import TabMenu from "./childComps/TabMenu";
import TabContentCategory from "./childComps/TabContentCategory";
import TabContentDetail from "./childComps/TabContentDetail";

import {getCategory, getSubcategory, getCategoryDetail} from '@/network/category'
import {tabControlMixin} from '@/common/mixin'

export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    TabControl,

    TabMenu,
    TabContentCategory,
    TabContentDetail
  },
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    }
  },
  created() {
    // 1.请求分类数据
    this._getCategory()
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // 获取分类数据
        this.categories = res.data.category.list
        //初始化每一个类别的子数据
        for (let i = 0, length = this.categories.length; i < length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        //请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      let mailKey = this.categories[index].maitKey
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getCategoryDetail('pop')
        this._getCategoryDetail('sell')
        this._getCategoryDetail('new')
      })
    },
    _getCategoryDetail(type) {
      //获取请求的miniWallkey
      let miniWallkey = this.categories[this.currentIndex].miniWallkey
      //发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        //将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })

    },

    selectItem(index) {
      this._getSubcategories(index)
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

#tab-content {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>

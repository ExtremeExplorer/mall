<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: {
    //行数
    cols: {
      type: Number,
      default: 2
    },
    //水平内边距
    hPadding:{
      type: Number,
      default: 8
    },
    //垂直内边距
    vPadding:{
      type: Number,
      default: 8
    },
    //item间隔
    itemSpace:{
      type: Number,
      default: 8
    },
    //行间隔
    lineSpace:{
      type: Number,
      default: 8
    }
  },
  mounted(){
    setTimeout(this._autoLayout,20)
  },
  updated(){
    this._autoLayout()
  },
  methods:{
    _autoLayout(){
    // 获取gridEl和children
      let gridEl = this.$refs.gridView
      let children = gridEl.children

    // 设置gridEl的内边距
      gridEl.style.padding = `${this.vPadding}px ${this.hPadding}px`
    // 设置item的宽度
      let itemWidth = (gridEl.clientWidth - 2 * this.hPadding - (this.cols - 1) * this.itemSpace) / this.cols
      let childrenLen = children.length
       for (let i =0 ;i<childrenLen;i++){
         let item = children[i]
         item.style.width = itemWidth + 'px';
         if ((i + 1) % this.cols !== 0) {
           item.style.marginRight = this.itemSpace + 'px';
         }
         if (i>=this.cols){
           item.style.marginTop = this.lineSpace + 'px';
         }
       }
    }
  }
}
</script>

<style scoped>
.grid-view{
  display: flex;
  flex-wrap: wrap;
}
</style>

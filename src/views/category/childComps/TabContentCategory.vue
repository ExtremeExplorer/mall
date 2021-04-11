<template>
  <grid-view :cols="3" :line-space="15" :v-padding="20" v-if="subcategories.list">
    <div class="item" v-for="(item,index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <span class="item-text">{{ item.title }}</span>
      </a>
    </div>
  </grid-view>
</template>

<script>
import GridView from "@/components/common/gridView/GridView";

export default {
  name: "TabContentCategory",
  components: {
    GridView
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  display: block;
  margin-top: 15px;
}

</style>

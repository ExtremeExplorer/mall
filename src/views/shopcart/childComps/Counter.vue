<template>
  <div class="count right">
    <span class="sub"
          v-show="this.counter.isShow"
          :class="{'count-sub':disable}"
          @click="sub">
      <img src="~assets/img/shopcart/sub.svg" alt="">
    </span>
    <span class="calculate" @click="isClick">
      x{{ counter.count }}
    </span>
    <span class="add"
          v-show="this.counter.isShow"
          @click="add">
      <img src="~assets/img/shopcart/add.svg" alt="">
    </span>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    //保存对象
    counter: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      //保存减按钮是否不禁用
      disable: true
    }
  },
  methods: {
    //减
    sub() {
      this.counter.count > 1 && this.counter.count--
      this.isDisable()
    },
    //加
    add() {
      this.counter.count++;
      this.isDisable()
    },
    //显示加减按钮
    isClick() {
      this.counter.isShow = !this.counter.isShow
      this.isDisable()
    },
    //判断减按钮是否禁用
    isDisable() {
      this.counter.count > 1 ? this.disable = false : this.disable = true
    }
  }
}
</script>

<style scoped>
.count {
  display: flex;
}

span {
  display: inline-flex;
  font-size: 14px;
  margin: 0 1px;
  border: 1px solid #afafaf;
  border-radius: 3px;
}

.calculate {
  padding: 0 2px;
}

.count-sub {
  background-color: #e5e5e5;
}

</style>

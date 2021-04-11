<template>
  <div class="bottom-menu">
    <check-button class="select-all"
                  :is-checked="isSelectAll"
                  @click.native="checkClick"/>
    <span>全选</span>
    <span v-show="!isShow" class="buy-product right">结算 {{ settlement }}</span>
    <span v-show="!isShow" class="total-price right">合计: <span>{{ totalPrice }}</span></span>
    <span v-show="isShow" class="delete right" @click="isDelete">删除</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

import {mapGetters} from 'vuex'

export default {
  name: "BottomBar",
  components: {
    CheckButton
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['cartList', 'cartLength']),
    isSelectAll() {
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked) && !undefined
    },
    //合计
    totalPrice() {
      return '¥ ' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    //结算
    settlement() {
      let calcLen = this.cartList.filter(item => item.checked).length
      return calcLen != 0 ? '(' + calcLen + ')' : ''
    }
  },
  methods: {
    //全选
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    //删除商品
    isDelete() {
      for (let i = 0; i < this.cartLength; i++) {
        if(this.cartList[i].checked) {
          this.cartList.splice(i, 1);
          i -= 1
        }
      }
    }
  }
}
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #fff;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(100, 100, 100, .1);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 11px;
}

.bottom-menu .total-price {
  margin-right: 10px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .total-price span {
  color: var(--color-high-text);
  font-size: 14px;
}

.bottom-menu .buy-product {
  width: 26%;
  height: 40px;
  background-color: var(--color-high-text);
  color: #fff;
  margin: 2px 8px 2px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 30px;
}

.bottom-menu .delete {
  width: 16%;
  height: 30px;
  color: var(--color-high-text);
  border: 1px solid var(--color-high-text);
  margin: 7px 10px 7px 0;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
}
</style>

import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
  // mutations唯一目的就是修改state中的状态
  // mutations中的每一个方法尽可能完成的事情比较单一一点

  // 增加商品数量
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  // 添加购物车
  [ADD_TO_CART](state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  }
}

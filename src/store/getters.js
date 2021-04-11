export default {
  //购物车数量
  cartLength(state) {
    return state.cartList.length
  },
  //购物车数据
  cartList(state) {
    return state.cartList
  }
}

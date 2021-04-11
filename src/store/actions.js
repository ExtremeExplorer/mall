import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        //商品数量加1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量加1')
      } else {
        //添加新的商品
        payload.count = 1
        payload.isShow = false
        context.commit(ADD_TO_CART, payload)
        resolve('添加新的商品')
      }
      reject('错误!')
    })
  }
}

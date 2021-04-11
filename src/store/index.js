import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from "./getters";

// 安装插件
Vue.use(Vuex)

const state = {
  cartList: [
    /*{iid: "1m7rp9w", count: 1, isShow: false, checked: false, image:  "//s5.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg", title: "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮", desc: "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮", price: "109.00"},
    {iid: "1m901la", count: 1, isShow: false, checked: false, image:  "//s5.mogucdn.com/mlcdn/55cf19/180925_6bdiibf87e046d836dcjie5l40fk1_641x641.jpg", title: "加绒加厚裤子女秋冬2018新款学生韩版宽松显瘦休闲哈伦运动卫裤秋", desc: "工厂自产自销质量保证,拍下有运费险不合适，不满意，不喜欢7天无理由退换！全场满1件-包邮，春夏季新款…有问题请及时沟通联系客服，我们将尽力帮您解决！在这里，向每一位给予好评和5分的买家表示真心的感谢！", price: "49.00"},
    {iid: "1m8dqau", count: 1, isShow: false, checked: false, image:  "//s11.mogucdn.com/mlcdn/c45406/180910_06le6c4gea295l6cl35h9e33dkh46_640x960.jpg", title: "2018秋装新款女装遮肚子显瘦洋气套装裙毛衣针织裙两件套", desc: "2018秋装新款女装遮肚子显瘦洋气套装裙毛衣针织裙两件套", price: "68.00"},
    {iid: "1m4mqlm", count: 1, isShow: false, checked: false, image: "//s11.mogucdn.com/mlcdn/c45406/180621_6276g6e01jcl5jh9jjj2i3gl8ciia_640x960.jpg", title: "2018夏季新款韩版宽松无袖短款吊带背心女学生外穿清新打底雪纺上衣潮", desc: "性感吊带背心是夏日中百搭的基本款哦，真正的时尚是崇尚自我，简约而富有个性,美丽的梦想其实就是这么简单！", price: "70.00"},
    {iid: "1ls1dp8", count: 1, isShow: false, checked: false, image: "//s11.mogucdn.com/mlcdn/c45406/180301_54i3j70b4hid5g4e8g8lg95hf981l_640x960.jpg", title: "2018夏装新款高品质短袖t恤女纯棉圆领宽松显瘦韩版学生女装", desc: "【多款可选】【新品特惠】【品牌T恤】【加入购物车 系统自动改价 如果没减价 请联系客服修改价格】【赠送运费险 七天无理由退换货】【无忧售后】", price: "39.00"},
    {iid: "1m8128y", count: 1, isShow: false, checked: false, image: "//s11.mogucdn.com/mlcdn/c45406/180902_6l1fk268lkc5ia6lcb40a59c29ibb_640x960.jpg", title: "谜秀格子衬衫女2018秋装新款韩版宽松早秋chic慵懒上衣港味衬衣潮", desc: "谜秀格子衬衫女2018秋装新款韩版宽松早秋chic慵懒上衣港味衬衣潮", price: "49.00"},
    {iid: "1m6bkks", count: 1, isShow: false, checked: false, image: "//s11.mogucdn.com/mlcdn/c45406/180723_827dgd0bdj5i4egcleje6j35eebbc_640x960.jpg", title: "港风少女短款牛仔外套女2018新款韩版牛仔衣夹克潮+高腰流苏蛋糕裙半身裙女蕾丝短裙两件套装", desc: "港风少女短款牛仔外套女2018新款韩版牛仔衣夹克潮+高腰流苏蛋糕裙半身裙女蕾丝短裙两件套装", price: "79.00"},
    {iid: "1m7isxu", count: 1, isShow: false, checked: false, image: "//s5.mogucdn.com/mlcdn/c45406/180821_7hh7eck08g26hibc4d24f4hg5j4bj_640x960.jpg", title: "2018新款早秋深V领纯色雪纺衬衫上衣＋高腰系带格子休闲九分裤两件套", desc: "厂家直销质量保证", price: "58.00"}*/
  ]
}
// 创建store对象
// noinspection JSUnresolvedFunction
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


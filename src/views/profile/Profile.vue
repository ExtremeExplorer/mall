<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">个人主页</div>
    </nav-bar>
    <!--用户信息-->
    <user-info/>
    <!--账户信息-->
    <account-info/>
    <!--列表-->
    <list-view :list-data="orderList" class="order-list"/>
    <list-view :list-data="serviceList" class="service-list"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import UserInfo from "./childComps/UserInfo";
import AccountInfo from "./childComps/AccountInfo";
import ListView from "./childComps/ListView";

export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    ListView
  },
  data() {
    return {
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#shop', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
      ]
    }
  }
}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.order-list, .service-list {
  margin-top: 12px;
}
</style>
i

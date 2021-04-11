<template>
  <div id="account-info">
    <div class="account-item">
      <div class="number">
        <span class="balance">{{ balance }}</span>元
      </div>
      <div class="info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">{{ discount }}</span>个
      </div>
      <div class="info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">{{ integral }}</span>分
      </div>
      <div class="info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountInfo",
  props: {
    //余额
    balance: {
      type: Number,
      default: 0
    },
    //优惠
    discount: {
      type: Number,
      default: 0
    },
    //积分
    integral: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
#account-info {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.info {
  margin-top: 6px;
}
</style>

<template>
  <div id="login">
    <div class="login-icon">
      <img src="@/assets/img/login/login.png" alt="">
    </div>
    <div class="login-user">
      <input type="text" autofocus placeholder="手机号码/邮箱/会员名">
      <input type="password" placeholder="请输入登录密码">
    </div>
    <div class="login-verify">
      <p class="left">短信验证码登录</p>
      <p class="right">免费注册</p>
    </div>
    <p class="btn">登录</p>
  </div>

</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
#login {
  display: block;
  width: 90vw;
  margin: 10% auto;
}

.login-icon > img {
  display: block;
  width: 70px;
  margin: 0 auto;
  background-color: white;
  border-radius: 50%;
}

.login-user > input {
  display: block;
  width: 100%;
  padding: 5px;
  outline: none;
  margin: 10% auto;
  border: 0;
  border-bottom: #ff6600 1px solid;
}

.btn {
  clear: both;
  width: 95%;
  padding: 9px;
  margin: 25% auto;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  border: #FF6600FF 1px solid;
  background-image: linear-gradient(left, #f59504 0%, #ff6f00 100%);
  background-image: -moz-linear-gradient(left, #f59504 0%, #ff6f00 100%);
  background-image: -ms-linear-gradient(left, #f59504 0%, #ff6f00 100%);
  background-image: -o-linear-gradient(left, #f59504 0%, #ff6f00 100%);
  background-image: -webkit-linear-gradient(left, #f59504 0%, #ff6f00 100%);
}
</style>

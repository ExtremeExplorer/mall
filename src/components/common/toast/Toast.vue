<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration = 1500) {
      let timer = 0
      this.isShow = true
      this.message = message
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>

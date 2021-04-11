<template>
  <div class="icon-selector" :class="{'selector-active': isChecked}">
    <img src="~/assets/img/shopcart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.icon-selector {
  display: flex;
  position: relative;
  margin: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #afafaf;
  cursor: pointer;
}

.selector-active {
  background-color: var(--color-high-text);
  border-color: var(--color-high-text);
}
</style>

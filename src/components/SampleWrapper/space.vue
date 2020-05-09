<template>
  <div class="wrapper">
    <div class="space-item space-item-left" :style="style"></div>
    <div class="space-item space-item-right"></div>
  </div>
</template>
<script>
export default {
  props: {
    value: Number
  },
  computed: {
    style() {
      return {
        marginRight: this.value + 'px'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline-flex;
  background: red;
}
.space-item {
  width: 64px;
  height: 64px;
  background: black;
}
</style>

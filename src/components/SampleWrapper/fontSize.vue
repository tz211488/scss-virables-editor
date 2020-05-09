<template>
  <div class="font-size-item" :style="style">AaBbCc</div>
</template>
<script>
export default {
  props: {
    value: Object
  },
  computed: {
    style() {
      return {
        fontSize: this.value.fontSize + 'px',
        lineHeight: this.value.lineHeight + 'px'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.font-size-item {
  background-color: red;
  display: inline-block;
}
</style>

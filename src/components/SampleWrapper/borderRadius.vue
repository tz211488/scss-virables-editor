<template>
  <div class="border-radius-item" :style="style"></div>
</template>
<script>
export default {
  props: {
    value: Number
  },
  computed: {
    style() {
      return {
        borderRadius: this.value != 50 ? `${this.value}px` : '50%'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.border-radius-item {
  width: 64px;
  height: 64px;
  border: 1px solid grey;
}
</style>

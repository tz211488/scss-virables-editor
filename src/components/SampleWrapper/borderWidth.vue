<template>
  <div class="border-color-item" :style="style"></div>
</template>
<script>
export default {
  props: {
    value: Number
  },
  computed: {
    style() {
      return {
        border: `${this.value}px solid black`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.border-color-item {
  width: 64px;
  height: 64px;
}
</style>

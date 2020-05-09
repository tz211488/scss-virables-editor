<template>
  <div class="color-item" :style="style"></div>
</template>
<script>
export default {
  props: {
    value: String
  },
  computed: {
    style() {
      return {
        backgroundColor: this.value
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.color-item {
  width: 64px;
  height: 32px;
}
</style>

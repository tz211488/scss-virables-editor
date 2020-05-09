<template>
  <div class="border-color-item" :style="style"></div>
</template>
<script>
export default {
  props: {
    value: String
  },
  computed: {
    style() {
      return {
        border: `1px solid ${this.value}`
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

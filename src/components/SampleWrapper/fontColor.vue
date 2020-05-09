<template>
  <div class="font-color-item" :style="style">AaBbCc</div>
</template>
<script>
export default {
  props: {
    value: String
  },
  computed: {
    style() {
      return {
        color: this.value
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.font-color-item {
  font-size: 18px;
}
</style>

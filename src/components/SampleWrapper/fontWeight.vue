<template>
  <div class="font-weight-item" :style="style">AaBbCc</div>
</template>
<script>
export default {
  props: {
    value: Number
  },
  computed: {
    style() {
      return {
        fontWeight: this.value
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.font-weight-item {
  font-size: 18px;
}
</style>

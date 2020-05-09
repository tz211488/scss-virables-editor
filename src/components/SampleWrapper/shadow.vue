<template>
  <div class="shadow-item" :style="style"></div>
</template>
<script>
export default {
  props: {
    value: Object
  },
  computed: {
    style() {
      let item = this.value;
      return {
        boxShadow: `${item.hShadow}px ${item.vShadow}px ${item.blur}px ${item.spread}px ${item.color}`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.shadow-item {
  width: 64px;
  height: 64px;
  margin: 30px;
}
</style>

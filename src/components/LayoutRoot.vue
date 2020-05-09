<template>
  <component :is="layout">
    <slot />
  </component>
</template>
<script>
export default {
  name: 'LayoutRoot',
  data() {
    return {};
  },
  computed: {
    layout() {
      return this.$store.state.layout;
    }
  }
};
</script>

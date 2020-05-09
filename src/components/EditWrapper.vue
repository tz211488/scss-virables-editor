<template>
  <component :is="type" :value="value" />
</template>
<script>
export default {
  name: 'EditWrapper',
  components: {
    color: () => import('./EditWrapper/editColor'),
    fontColor: () => import('./EditWrapper/editFontColor'),
    fontWeight: () => import('./EditWrapper/editFontWeight'),
    fontSize: () => import('./EditWrapper/editFontSize'),
    borderColor: () => import('./EditWrapper/editBorderColor'),
    borderWidth: () => import('./EditWrapper/editBorderWidth'),
    borderRadius: () => import('./EditWrapper/editBorderRadius'),
    space: () => import('./EditWrapper/editSpace'),
    zIndex: () => import('./EditWrapper/editZIndex'),
    shadowConfig: () => import('./EditWrapper/editShadow'),
    screenSize: () => import('./EditWrapper/editScreenSize')
  },
  props: {
    type: String,
    value: [String, Number, Object]
  },
  data() {
    return {};
  }
};
</script>

<template>
  <component :is="type" :value="value" />
</template>
<script>
export default {
  name: 'SampleWrapper',
  components: {
    color: () => import('./SampleWrapper/color'),
    fontColor: () => import('./SampleWrapper/fontColor'),
    fontWeight: () => import('./SampleWrapper/fontWeight'),
    fontSize: () => import('./SampleWrapper/fontSize'),
    borderColor: () => import('./SampleWrapper/borderColor'),
    borderWidth: () => import('./SampleWrapper/borderWidth'),
    borderRadius: () => import('./SampleWrapper/borderRadius'),
    space: () => import('./SampleWrapper/space'),
    zIndex: () => import('./SampleWrapper/zIndex'),
    shadowConfig: () => import('./SampleWrapper/shadow'),
    screenSize: () => import('./SampleWrapper/screenSize')
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

<template>
  <div id="app">
    <LayoutRoot>
      <router-view></router-view>
    </LayoutRoot>
  </div>
</template>

<script>
import LayoutRoot from './components/LayoutRoot';

export default {
  components: { LayoutRoot },
  name: 'app'
};
</script>

<style></style>

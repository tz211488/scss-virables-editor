<template>
  <div class="palete-container" @mouseout="handleMouseLeave">
    <div
      v-for="(item, index) in colorPalete"
      :style="{ backgroundColor: item.color }"
      :key="index"
      :class="[
        { active: activeItemIndex == index },
        'palete-item',
        { 'deep-color': index > 4 }
      ]"
      @mouseover="handleHover(item, index)"
      @click="handleClick(item)"
    >
      <span>{{ item.label }}</span>
      <transition name="slide-fade">
        <span v-if="activeItemIndex">{{ item.color }}</span>
      </transition>
    </div>
  </div>
</template>
<script>
import colorPaletes from '../plugins/antdesign-color';
import { copyContent } from '@/utils/helper.js';
export default {
  props: {
    colorName: String,
    color: String
  },
  data() {
    return {
      styleObject: {
        backgroundColor: 'green'
      },
      colorPalete: [],
      activeItemIndex: null
    };
  },
  mounted() {
    this.colorPalete = this.generateColor(this.color, this.colorName);
  },
  methods: {
    handleHover(item, index) {
      this.activeItemIndex = index;
    },
    handleMouseLeave() {
      this.activeItemIndex = null;
    },
    handleClick(item) {
      copyContent(item.color, `复制${item.label}: ${item.color}`);
    },
    generateColor(color, name) {
      let colorPaleteData = [];
      for (let i = 1; i < 11; i++) {
        colorPaleteData.push({
          label: name + '-' + i,

          color: colorPaletes(color, i)
        });
      }

      return colorPaleteData;
    }
  }
};
</script>
<style lang="scss" scoped>
.palete-container {
  width: 100%;
}
.palete-item {
  cursor: pointer;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  transition: all 0.2s;
  &.active {
    margin-right: -15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &.deep-color {
    color: white;
  }

  &:nth-child(1) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:nth-last-child(1) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>

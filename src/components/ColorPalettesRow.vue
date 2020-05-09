<template>
  <div class="palete-container" @mouseout="handleMouseLeave">
    <div
      v-for="(item, index) in colorPalete"
      :style="{ backgroundColor: item.color }"
      :key="index"
      :class="[
        { active: activeItemIndex == index + 1 },
        'palete-item',
        { 'deep-color': index > 4 }
      ]"
      @mouseover="handleHover(item, index)"
      @click="handleClick(item)"
    >
      <transition name="slide-fade">
        <span v-if="activeItemIndex">{{ item.color }}</span>
        <span v-else></span>
      </transition>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
import colorPaletes from '../plugins/antdesign-color';
import { copyContent, neutralPalette } from '@/utils/helper.js';
export default {
  props: {
    itemNum: Number,
    colorName: String,
    color: String,
    type: String
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
    if (this.type === 'neutral') {
      this.colorPalete = neutralPalette;
    } else {
      this.colorPalete = this.generateColor(this.color, this.colorName);
    }
  },
  watch: {
    color() {
      this.colorPalete = this.generateColor(this.color, this.colorName);
    }
  },
  methods: {
    handleHover(item, index) {
      this.activeItemIndex = index + 1;
    },
    handleMouseLeave() {
      this.activeItemIndex = null;
    },
    handleClick(item) {
      copyContent(item.color, `复制${item.label}: ${item.color}`);
    },
    generateColor(color, name) {
      let colorPaleteData = [];
      for (let i = 1; i < this.itemNum + 1; i++) {
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
  display: flex;
}
.palete-item {
  cursor: pointer;
  height: 80px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;

  transition: all 0.2s;
  &.active {
    margin-top: -15px;
    height: 95px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &.deep-color {
    color: white;
  }

  &:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:nth-last-child(1) {
    border-top-right-radius: 5px;
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
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>

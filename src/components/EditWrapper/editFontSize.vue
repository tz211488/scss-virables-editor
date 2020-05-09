<template>
  <div class="edit-variable">
    <el-popover placement="right" title="Title" width="200" trigger="hover">
      <el-slider
        v-model="fontSize"
        vertical
        height="200px"
        @change="handleCustomSizeChange"
      ></el-slider>
      <el-button slot="reference" circle>
        {{ this.value.value.value.fontSize }}
      </el-button>
    </el-popover>

    <el-popover placement="right" title="Title" width="200" trigger="hover">
      <el-slider
        v-model="lineHeight"
        vertical
        height="200px"
        @change="handleCustomLineHeightChange"
      ></el-slider>
      <el-button slot="reference" circle>
        {{ this.value.value.value.lineHeight }}
      </el-button>
    </el-popover>

    <el-dropdown @command="handleClickDropDownItem">
      <span class="el-dropdown-link">
        choose default setting
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in defaultFontSize"
          :key="index"
          :command="item"
        >
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  props: {
    value: Object
  },

  data() {
    return {
      fontSize: 0,
      lineHeight: 0
    };
  },

  computed: {
    defaultFontSize: function() {
      return this.$store.getters.fontSize;
    }
  },

  mounted() {
    this.fontSize = this.value.value.value.fontSize;
    this.lineHeight = this.value.value.value.lineHeight;
  },

  methods: {
    // changeColor(color) {
    //   console.log(color, this.$refs.colorPicker.showPicker);

    //   // search if the  color in baseColorList
    //   let colorBase = this.$store.getters.fontColor.find(
    //     (item) => item.value == color || item.value == color.toLowerCase()
    //   );
    //   if (!colorBase) {
    //     colorBase = {
    //       name: 'custom font color',
    //       value: color
    //     };
    //   }
    //   const data = Object.assign({}, this.value.value, colorBase);
    //   this.$store.commit('editVariables', {
    //     type: this.value.type,
    //     index: this.value.index,
    //     value: data
    //   });
    // },
    handleCustomSizeChange(value) {
      console.log(value);
      let fontData = {
        name: 'custom font size',
        value: {
          fontSize: value,
          lineHeight: this.value.value.value.lineHeight
        }
      };
      const data = Object.assign({}, this.value.value, fontData);
      this.$store.commit('editVariables', {
        type: this.value.type,
        index: this.value.index,
        value: data
      });
    },
    handleCustomLineHeightChange(value) {
      console.log(value);
      let fontData = {
        name: 'custom font size',
        value: {
          fontSize: this.value.value.value.fontSize,
          lineHeight: value
        }
      };
      const data = Object.assign({}, this.value.value, fontData);
      this.$store.commit('editVariables', {
        type: this.value.type,
        index: this.value.index,
        value: data
      });
    },
    handleClickDropDownItem(value) {
      this.fontSize = value.value.fontSize;
      this.lineHeight = value.value.lineHeight;
      const data = Object.assign({}, this.value.value, value);
      this.$store.commit('editVariables', {
        type: this.value.type,
        index: this.value.index,
        value: data
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button {
  margin-right: 30px;
}
</style>

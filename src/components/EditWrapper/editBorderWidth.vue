<template>
  <div class="edit-variable">
    <el-popover placement="right" title="Title" width="200" trigger="hover">
      <el-slider
        v-model="borderWidth"
        vertical
        height="200px"
        :step="0.5"
        @change="handleCustomSizeChange"
      ></el-slider>
      <el-button slot="reference" circle>
        {{ this.value.value.value }}
      </el-button>
    </el-popover>

    <el-dropdown @command="handleClickDropDownItem">
      <span class="el-dropdown-link">
        choose default setting
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in defaultBorderWidth"
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
      borderWidth: 0
    };
  },

  computed: {
    defaultBorderWidth: function() {
      return this.$store.getters.borderWidth;
    }
  },

  mounted() {
    this.borderWidth = this.value.value.value;
  },

  methods: {
    handleCustomSizeChange(value) {
      console.log(value);
      let widthData = {
        name: 'custom border width',
        value: value
      };
      const data = Object.assign({}, this.value.value, widthData);
      this.$store.commit('editVariables', {
        type: this.value.type,
        index: this.value.index,
        value: data
      });
    },

    handleClickDropDownItem(value) {
      this.borderWidth = value.value;
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

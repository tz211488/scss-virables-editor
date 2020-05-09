<template>
  <div class="edit-variable">
    <el-dropdown @command="handleClickDropDownItem">
      <span class="el-dropdown-link">
        choose default setting
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in defaultZIndex"
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

  computed: {
    defaultZIndex: function() {
      return this.$store.getters.zIndex;
    }
  },

  methods: {
    handleClickDropDownItem(value) {
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

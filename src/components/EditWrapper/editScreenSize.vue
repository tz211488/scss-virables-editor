<template>
  <div class="edit-variable">
    <div class="manual-set">
      <el-input
        v-model="customScreenSize"
        placeholder="请输入内容"
        type="number"
      ></el-input>
      <el-button
        type="success"
        icon="el-icon-check"
        circle
        @click="handleCustomScreenSize"
      ></el-button>
    </div>
    <el-dropdown @command="handleClickDropDownItem">
      <span class="el-dropdown-link">
        choose default setting
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in defaultScreenSize"
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
      customScreenSize: 0
    };
  },

  computed: {
    defaultScreenSize: function() {
      return this.$store.getters.screenSize;
    }
  },

  methods: {
    handleCustomScreenSize() {
      let screenData = {
        name: 'custom screen size',
        value: this.customScreenSize
      };
      const data = Object.assign({}, this.value.value, screenData);
      this.$store.commit('editVariables', {
        type: this.value.type,
        index: this.value.index,
        value: data
      });
      this.customScreenSize = 0;
    },
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
.manual-set {
  margin-right: 20px;
  display: flex;
  .el-button {
    margin-left: 16px;
  }
}
.edit-variable {
  display: flex;
}
.el-button {
  margin-right: 30px;
}
</style>

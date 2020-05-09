<template>
  <div class="edit-cell">
    <span v-if="!editStatus" @click="editCell">{{ value.varName }}</span>
    <div v-else class="edit-variable">
      <el-input v-model="customName" placeholder="请输入内容"></el-input>
      <el-button
        size="mini"
        type="success"
        icon="el-icon-check"
        circle
        @click="handleConfirm"
      ></el-button>
      <el-button
        size="mini"
        type="danger"
        icon="el-icon-delete"
        circle
        @click="handleCancel"
      ></el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number, Object],
    typeIndex: Number
  },
  data() {
    return {
      editStatus: false,
      customName: ''
    };
  },
  methods: {
    editCell() {
      this.customName = this.value.varName;
      this.editStatus = true;
    },
    handleConfirm() {
      console.log(this.value);
      this.$store.commit('editVariableName', {
        typeIndex: this.typeIndex,
        index: this.value.index,
        value: this.customName
      });
      this.editStatus = false;
    },
    handleCancel() {
      this.editStatus = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.edit-variable {
  display: flex;
  align-items: center;
}
.el-button {
  width: 24px;
  height: 24px;
  line-height: 24px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div>
    <div
      class="table-wrapper"
      v-for="(categoryData, index) in categoryTableData"
      :key="categoryData.name"
    >
      <p>{{ categoryData.name }}</p>
      <p>{{ categoryData.des }}</p>
      <el-table
        :data="categoryData.tableData"
        style="width: 100%"
        :row-class-name="addIndexToRow"
      >
        <el-table-column prop="varName" label="Variable Name" width="200">
          <template slot-scope="scope">
            <!-- <span v-if="!scope.row.edit" @click="scope.row.edit = true">
            {{ scope.row.name }}
          </span>
          <div v-else class="edit-variable">
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
          </div> -->
            <EditCell :value="scope.row" :typeIndex="index" />
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="Value Source"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="type"
          label="Value Type"
          width="180"
        ></el-table-column>
        <el-table-column label="Value" width="220">
          <template slot-scope="scope">
            <span>{{ scope.row.value }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Example">
          <template slot-scope="scope">
            <SampleWrapper :type="scope.row.type" :value="scope.row.value" />
          </template>
        </el-table-column>
        <el-table-column label="Edit" width="320">
          <template slot-scope="scope">
            <EditWrapper
              :value="{ type: index, index: scope.row.index, value: scope.row }"
              :type="scope.row.type"
            />
          </template>
        </el-table-column>
        <el-table-column width="120">
          <template slot="header">
            <el-button
              type="primary"
              @click="addNewItem(index)"
              icon="el-icon-plus"
            ></el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              plain
              v-if="categoryData.tableData.length != 1"
              @click="deleteItem(index, scope.row.index)"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import SampleWrapper from '@components/SampleWrapper';
import EditWrapper from '@components/EditWrapper';
import EditCell from '@components/EditCell';
export default {
  components: {
    SampleWrapper,
    EditWrapper,
    EditCell
  },
  data() {
    return {
      tableData: [
        {
          name: '$color-1',
          type: 'color',
          value: '#f0f5ff'
        }
      ]
    };
  },
  computed: {
    categoryTableData: function() {
      return this.$store.getters.categoryTableData;
    }
  },
  methods: {
    addIndexToRow({ row, rowIndex }) {
      row.index = rowIndex;
      row.edit = false;
    },
    addNewItem(typeIndex) {
      this.$store.commit('addNewItem', { typeIndex });
    },
    deleteItem(typeIndex, index) {
      this.$store.commit('deleteItem', { typeIndex, index });
    }
  }
};
</script>
<style lang="scss" scoped>
.table-wrapper {
  margin-top: 32px;
}
.el-table {
  margin-top: 8px;
  /deep/ thead {
    color: #939393;
    th {
      background: #dfdfdf;
    }
  }
}
.edit-variable {
  display: flex;
}
</style>

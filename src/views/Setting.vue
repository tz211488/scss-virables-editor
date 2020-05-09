<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="日期" width="180"></el-table-column>
    <el-table-column prop="type" label="姓名" width="180"></el-table-column>
    <el-table-column label="姓名" width="380">
      <template slot-scope="scope">
        <span>{{ scope.row.value }}</span>
      </template>
    </el-table-column>
    <el-table-column label="地址">
      <template slot-scope="scope">
        <SampleWrapper :type="scope.row.type" :value="scope.row.value" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import SampleWrapper from '@components/SampleWrapper';
export default {
  components: {
    SampleWrapper
  },
  data() {
    return {
      tableData: [
        {
          name: '$color-1',
          type: 'color',
          value: '#f0f5ff'
        },
        {
          name: '$font-color-1',
          type: 'fontColor',
          value: '#141414'
        },
        {
          name: '$font-weight-1',
          type: 'fontWeight',
          value: 700
        },
        {
          name: '$font-size-1',
          type: 'fontSize',
          value: {
            fontSize: 14,
            lineHeight: 22
          }
        },
        {
          name: '$border-color-1',
          type: 'borderColor',
          value: '#141414'
        },
        {
          name: '$border-color-1',
          type: 'borderWidth',
          value: 2
        },
        {
          name: '$border-radius-1',
          type: 'borderRadius',
          value: 5
        },
        {
          name: '$space-size-1',
          type: 'space',
          value: 8
        }
      ]
    };
  },
  mounted() {
    this.tableData = [
      ...this.$store.getters.baseColor,
      ...this.$store.getters.neutralColor,
      ...this.$store.getters.fontColor,
      ...this.$store.getters.fontSize,
      ...this.$store.getters.fontWeight,
      ...this.$store.getters.borderColor,
      ...this.$store.getters.borderWidth,
      ...this.$store.getters.borderRadius,
      ...this.$store.getters.spaceSize,
      ...this.$store.getters.shadowConfig
    ];
  }
};
</script>
<style lang="scss" scoped>
.color-item {
  width: 64px;
  height: 32px;
}
</style>

<template>
  <div class="content-page">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Font Size Reference">
        <el-checkbox-group v-model="form.selectRecommendFont" size="small">
          <div class="font-recommend">
            <div class="table-head">
              <div class="cell-item border-bottom">Font Size</div>
              <div class="cell-item border-bottom">Line Height</div>
              <div class="cell-item">English</div>
              <div class="cell-item">Chinese</div>
            </div>
            <div
              class="line-height"
              v-for="(item, index) in fontRecommedConfig"
              :key="index"
            >
              <div class="cell-item font-item border-bottom font-size-item">
                <el-tooltip content="click to add" placement="top">
                  <el-button circle @click="handleClickSizeBtn(item)">
                    {{ item.fontSize }}
                  </el-button>
                </el-tooltip>
              </div>
              <div class="cell-item font-item border-bottom">
                {{ item.lineHeight }}
              </div>
              <div class="cell-item font-item font-sample">
                <span
                  :style="{
                    fontSize: item.fontSize + 'px',
                    lineHeight: item.lineHeight + 'px',
                    backgroundColor: 'red'
                  }"
                >
                  aA
                </span>
              </div>
              <div class="cell-item font-item font-sample">
                <span
                  :style="{
                    fontSize: item.fontSize + 'px',
                    lineHeight: item.lineHeight + 'px',
                    backgroundColor: 'red'
                  }"
                >
                  我
                </span>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </el-form-item>
    </el-form>

    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Custom Font Size">
        <div class="font-recommend font-custom">
          <div class="table-head">
            <div class="cell-item border-bottom">Font Var Name</div>
            <div class="cell-item border-bottom">Font Size</div>
            <div class="cell-item border-bottom">Line Height</div>
            <div class="cell-item">English</div>
            <div class="cell-item">Chinese</div>
          </div>
          <div
            class="line-height"
            v-for="(item, index) in customFontConfig"
            :key="index"
          >
            <div class="cell-item font-item border-bottom font-name-item">
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="mini"
                @click="handleManualDeleteCustom(index)"
              ></el-button>
              {{ `$font-size-${index + 1}` }}
            </div>
            <div class="cell-item font-item border-bottom font-size-item">
              <el-popover
                placement="right"
                title="Title"
                width="200"
                trigger="hover"
              >
                <el-slider
                  v-model="item.fontSize"
                  vertical
                  height="200px"
                  @change="handleCustomSizeChange"
                ></el-slider>
                <el-button slot="reference" circle>
                  {{ item.fontSize }}
                </el-button>
              </el-popover>
            </div>
            <div class="cell-item font-item border-bottom">
              <el-popover
                placement="right"
                title="Title"
                width="200"
                trigger="hover"
                content="this is content, this is content, this is content"
              >
                <el-slider
                  v-model="item.lineHeight"
                  vertical
                  height="200px"
                ></el-slider>
                <el-button slot="reference" circle>
                  {{ item.lineHeight }}
                </el-button>
              </el-popover>
            </div>
            <div class="cell-item font-item font-sample">
              <span
                :style="{
                  fontSize: item.fontSize + 'px',
                  lineHeight: item.lineHeight + 'px',
                  backgroundColor: 'red'
                }"
              >
                aA
              </span>
            </div>
            <div class="cell-item font-item font-sample">
              <span
                :style="{
                  fontSize: item.fontSize + 'px',
                  lineHeight: item.lineHeight + 'px',
                  backgroundColor: 'red'
                }"
              >
                我
              </span>
            </div>
          </div>

          <div class="custom-font-action" v-if="!addCustomStatus">
            <el-button
              type="primary"
              icon="el-icon-plus"
              circle
              @click="handleManualAddCustom"
            ></el-button>
          </div>
          <div class="custom-font-action" v-else>
            <el-button
              type="primary"
              icon="el-icon-circle-check"
              circle
              @click="handleManualSaveCustom"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-refresh"
              circle
              @click="handleManualCancelCustom"
            ></el-button>
          </div>
        </div>
      </el-form-item>

      <el-form-item label="Font Weight Reference">
        <el-checkbox-group v-model="form.selectRecommendFont" size="small">
          <div class="font-recommend">
            <div class="table-head">
              <div class="cell-item border-bottom">Font Weight</div>

              <div class="cell-item">English</div>
              <div class="cell-item">Chinese</div>
            </div>
            <div
              class="line-height"
              v-for="(item, index) in fontWeightConfig"
              :key="index"
            >
              <div class="cell-item font-item border-bottom">
                {{ item.fontWeight }}
              </div>
              <div class="cell-item font-item font-sample">
                <span
                  :style="{
                    fontWeight: item.fontWeight
                  }"
                >
                  aA
                </span>
              </div>
              <div class="cell-item font-item font-sample">
                <span
                  :style="{
                    fontWeight: item.fontWeight
                  }"
                >
                  我
                </span>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="saveFontConfig">
          Save Settings
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { fontRecommedConfig, fontWeightConfig } from '@/utils/helper';
export default {
  data() {
    return {
      fontRecommedConfig: [],
      form: {
        selectRecommendFont: []
      },
      customFontConfig: [],
      fontWeightConfig: [],
      addCustomStatus: false
    };
  },

  mounted() {
    this.fontRecommedConfig = fontRecommedConfig;
    this.fontWeightConfig = fontWeightConfig;
    this.customFontConfig = this.$store.state.fontSize;
  },
  methods: {
    handleClickSizeBtn(item) {
      if (this.addCustomStatus) {
        this.$message({
          message: 'please complete operation first',
          type: 'warning'
        });
        return;
      }
      // 判断重复
      if (
        this.customFontConfig.find(
          (currentItem) => currentItem.fontSize == item.fontSize
        )
      ) {
        this.$message({
          message: 'duplicate size',
          type: 'warning'
        });
        return;
      }
      this.customFontConfig.push(Object.assign({}, item));
      this.customFontConfig.sort((a, b) => a.fontSize - b.fontSize);
    },
    handleCustomSizeChange() {
      this.customFontConfig.sort((a, b) => a.fontSize - b.fontSize);
    },
    handleManualAddCustom() {
      this.addCustomStatus = true;
      this.customFontConfig.push({
        fontSize: 14,
        lineHeight: 20
      });
    },
    handleManualCancelCustom() {
      this.customFontConfig.pop();
      this.addCustomStatus = false;
    },
    handleManualSaveCustom() {
      this.customFontConfig.sort((a, b) => a.fontSize - b.fontSize);
      this.addCustomStatus = false;
    },
    handleManualDeleteCustom(index) {
      this.customFontConfig.splice(index, 1);
    },
    saveFontConfig() {
      if (!this.customFontConfig.length) {
        this.$message({
          message: 'please select set font size config',
          type: 'warning'
        });
        return;
      }
      this.$store.commit('setState', {
        type: 'fontSize',
        data: this.customFontConfig
      });
      this.$store.commit('setState', {
        type: 'fontWeight',
        data: this.fontWeightConfig
      });

      this.$message({
        message: 'Save successfully',
        type: 'success'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.font-recommend {
  display: inline-flex;
  border: 1px solid grey;
  .table-head {
    border-right: 1px solid grey;
  }
  .cell-item {
    height: 64px;
    line-height: 64px;
    text-align: center;
    padding: 16px;
    font-size: 30px;
    .el-button {
      font-size: 30px;
    }
    &.border-bottom {
      border-bottom: 1px solid grey;
    }
    &.font-item {
      width: 100px;
    }
    &.font-sample {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.font-size-item {
      position: relative;
    }
    &.font-name-item {
      font-size: 14px;
      position: relative;
      .el-button {
        position: absolute;
        right: 4px;
        top: 4px;

        display: flex;
        justify-content: center;
        align-items: center;
        /deep/ i {
          font-size: 12px;
        }
      }
    }
  }
}

.font-custom {
  position: relative;
  .custom-font-action {
    width: 100px;
    position: absolute;
    right: -120px;
    top: calc(50% - 32px);
  }
}
</style>

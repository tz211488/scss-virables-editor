<template>
  <div class="content-page">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Custom Shadow">
        <div class="font-recommend font-custom">
          <div class="table-head">
            <div class="cell-item border-bottom">Font Var Name</div>
            <div class="cell-item border-bottom">Horizental Shadow</div>
            <div class="cell-item border-bottom">Vertical Shadow</div>
            <div class="cell-item border-bottom">Blur</div>
            <div class="cell-item border-bottom">Spread</div>
            <div class="cell-item border-bottom">Color</div>
            <div class="cell-item">Sample</div>
          </div>
          <div
            class="line-height"
            v-for="(item, index) in customShadowConfig"
            :key="index"
          >
            <div class="cell-item font-item border-bottom font-name-item">
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="handleManualDeleteCustom(index)"
              ></el-button>
              {{ `$shadow-${index + 1}` }}
            </div>
            <div class="cell-item border-bottom">
              <el-popover
                placement="right"
                title="Title"
                width="200"
                trigger="hover"
              >
                <el-slider
                  v-model="item.hShadow"
                  vertical
                  height="200px"
                ></el-slider>
                <el-button slot="reference" circle>
                  {{ item.hShadow }}
                </el-button>
              </el-popover>
            </div>

            <div class="cell-item border-bottom">
              <el-popover
                placement="right"
                title="Title"
                width="200"
                trigger="hover"
              >
                <el-slider
                  v-model="item.vShadow"
                  vertical
                  height="200px"
                ></el-slider>
                <el-button slot="reference" circle>
                  {{ item.vShadow }}
                </el-button>
              </el-popover>
            </div>

            <div class="cell-item border-bottom">
              <el-popover
                placement="right"
                title="Title"
                width="200"
                trigger="hover"
              >
                <el-slider
                  v-model="item.blur"
                  vertical
                  height="200px"
                ></el-slider>
                <el-button slot="reference" circle>
                  {{ item.blur }}
                </el-button>
              </el-popover>
            </div>

            <div class="cell-item border-bottom">
              <el-popover
                placement="right"
                title="Title"
                width="200"
                trigger="hover"
              >
                <el-slider
                  v-model="item.spread"
                  vertical
                  height="200px"
                ></el-slider>
                <el-button slot="reference" circle>
                  {{ item.spread }}
                </el-button>
              </el-popover>
            </div>

            <div class="cell-item border-bottom">
              <el-color-picker v-model="item.color"></el-color-picker>

              <el-button slot="reference" circle>
                {{ item.color }}
              </el-button>
            </div>

            <div class="cell-item">
              <span
                class="shadow-sample"
                :style="{
                  boxShadow: `${item.hShadow}px ${item.vShadow}px ${item.blur}px ${item.spread}px ${item.color}`
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
      <el-form-item label="">
        <el-button type="primary" @click="saveShadowConfig">
          Save Setting
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fontRecommedConfig: [],
      form: {
        selectRecommendFont: []
      },
      customShadowConfig: [],
      fontWeightConfig: [],
      addCustomStatus: false
    };
  },
  computed: {},

  mounted() {
    this.customShadowConfig = this.$store.state.shadowConfig;
  },
  methods: {
    // handleClickSizeBtn(item) {
    //   if (this.addCustomStatus) {
    //     this.$message({
    //       message: 'please complete operation first',
    //       type: 'warning'
    //     });
    //     return;
    //   }
    //   // 判断重复
    //   if (
    //     this.customFontConfig.find(
    //       (currentItem) => currentItem.fontSize == item.fontSize
    //     )
    //   ) {
    //     this.$message({
    //       message: 'duplicate size',
    //       type: 'warning'
    //     });
    //     return;
    //   }
    //   this.customFontConfig.push(Object.assign({}, item));
    //   this.customFontConfig.sort((a, b) => a.fontSize - b.fontSize);
    // },
    // handleCustomSizeChange() {
    //   this.customFontConfig.sort((a, b) => a.fontSize - b.fontSize);
    // },
    handleManualAddCustom() {
      this.addCustomStatus = true;
      this.customShadowConfig.push({
        hShadow: 2,
        vShadow: 2,
        blur: 2,
        spread: 2,
        color: '#595959'
      });
    },
    handleManualCancelCustom() {
      this.customShadowConfig.pop();
      this.addCustomStatus = false;
    },
    handleManualSaveCustom() {
      this.addCustomStatus = false;
    },
    handleManualDeleteCustom(index) {
      this.customShadowConfig.splice(index, 1);
    },
    saveShadowConfig() {
      if (!this.customShadowConfig.length) {
        this.$message({
          message: 'please set shadow config',
          type: 'warning'
        });
        return;
      }
      this.$store.commit('setState', {
        type: 'shadowConfig',
        data: this.customShadowConfig
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
      width: 200px;
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

.shadow-sample {
  height: 64px;
  width: 64px;
  display: inline-block;
}
</style>

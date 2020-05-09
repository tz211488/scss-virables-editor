<template>
  <div class="home">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Base Color">
        <el-radio-group
          v-model="form.baseColor"
          class="color-palette-container"
        >
          <el-radio
            :label="item.colorName"
            v-for="(item, index) in baseColorConfig"
            :key="index"
            :class="{ 'custom-palette': item.colorName === 'custom' }"
          >
            <ColorPalettes
              :color="item.color"
              :colorName="item.colorName"
              :ref="item.colorName"
            />
            <div
              class="color-picker-wrapper"
              v-if="item.colorName === 'custom'"
            >
              <el-color-picker
                v-model="customColor"
                size="medium"
              ></el-color-picker>
              <span>Please Select Custom Color</span>
            </div>
          </el-radio>

          <el-radio class="custom-select" label="custom">
            <ColorPalettesRow
              :itemNum="10"
              :color="customColor"
              colorName="custom"
              ref="custom"
            />

            <div class="color-picker-wrapper">
              <el-color-picker
                key="custom"
                v-model="customColor"
                @active-change="handleChangeCustomColor"
                size="medium"
              ></el-color-picker>
              <span>请选择自定义颜色</span>
            </div>
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Neutral Color Palette">
        <div>
          <div>
            <ColorPalettesRow
              key="neutral"
              :itemNum="13"
              color="#d9d9d9"
              colorName="grey"
              type="neutral"
              ref="neutral"
            />
          </div>
        </div>
      </el-form-item>
      <el-form-item label="" class="save-setting">
        <el-button type="primary" @click="saveColorConfig">
          Save Settings
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ColorPalettes from '@components/ColorPalettes';
import ColorPalettesRow from '@components/ColorPalettesRow';
import { baseColorConfig } from '@/utils/helper';
export default {
  name: 'Home',
  components: {
    ColorPalettes,
    ColorPalettesRow
  },
  data() {
    return {
      baseColorConfig: [],
      customColor: '',
      form: {
        name: '',
        baseColor: ''
      },
      colorData: []
    };
  },
  mounted() {
    this.baseColorConfig = baseColorConfig;
    this.customColor = this.$store.state.customColor || '#2f54eb';
    this.$nextTick(() => {
      this.form.baseColor = this.$store.state.selectedColor;
    });
  },
  watch: {
    'form.baseColor': function(newV) {
      console.log('121212', this.$refs[newV]);

      if (newV != 'custom') {
        this.colorData = this.$refs[newV][0].colorPalete;
      } else {
        this.colorData = this.$refs[newV].colorPalete;
      }
    }
  },

  methods: {
    handleChangeCustomColor(activColor) {
      this.customColor = activColor;
    },
    saveColorConfig() {
      const neutralColorData = this.$refs.neutral.colorPalete;

      if (!this.colorData.length) {
        this.$message({
          message: 'please select a colorpalette',
          type: 'warning'
        });
        return;
      }
      this.$store.commit('setState', {
        type: 'colorConfig',
        data: this.colorData
      });

      this.$store.commit('setState', {
        type: 'selectedColor',
        data: this.form.baseColor
      });

      this.$store.commit('setState', {
        type: 'customColor',
        data: this.customColor
      });

      this.$store.commit('setState', {
        type: 'neutralColorConfig',
        data: neutralColorData
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
.color-palette-container {
  /deep/ .el-radio__label {
    display: block;
    width: 280px;
    margin-right: 24px;
  }
}
.el-radio {
  padding-top: 36px;
  padding-left: 24px;
}
.custom-select {
  display: block;
  padding-top: 32px;
  /deep/ .el-radio__label {
    width: 780px;
  }
  .color-picker-wrapper {
    margin-top: 16px;
    display: flex;
    align-items: center;
  }
}
.custom-palette {
  position: relative;

  .color-picker-wrapper {
    position: absolute;

    top: 8px;
    right: 0;
    display: flex;
    align-items: center;
  }
}
.palette-form-item {
  width: 280px;
  margin-left: 32px;
}
.save-setting {
  margin-top: 64px;
}
</style>

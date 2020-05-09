<template>
  <el-header>
    <span class="title">Css Architecture Setting</span>
    <el-button @click="refreshStorage">refresh storage</el-button>
    <el-button @click="exportFile">export scss variables</el-button>
    <el-button @click="exportConfig">export config</el-button>

    <el-upload
      class="upload-demo"
      :file-list="file"
      accept="application/json"
      action="/"
      :auto-upload="false"
      :on-change="handleFileUpload"
      :show-file-list="false"
    >
      <el-button>import config</el-button>
    </el-upload>
  </el-header>
</template>
<script>
export default {
  data() {
    return {
      stringData: {},
      file: []
    };
  },
  methods: {
    refreshStorage() {
      this.$store.commit('refresh');
    },
    processFile(data) {
      return data
        .map((item) => {
          return this.generateCategory(item);
        })
        .join('');
    },
    generateCategory(data) {
      return `${this.sectionTitle(data.name)}${this.generateItems(
        data.tableData
      )}`;
    },
    generateItems(data) {
      return data
        .map((item) => {
          // const itemLength = item.varName.length;
          // let emptySpace;
          // if (50 - itemLength > 0) {
          //   emptySpace = Array(50 - itemLength)
          //     .fill(' ')
          //     .join('');
          // } else {
          //   emptySpace = '';
          // }

          return `${item.varName}:${this.processValue(item)} !default;`;
        })
        .join('\r');
    },
    sectionTitle(title) {
      return `\r\r// ${title}\r`;
    },
    processValue(item) {
      let returnValue;

      switch (item.type) {
        case 'fontSize':
          returnValue = `${item.value.fontSize}px`;
          break;
        case 'shadowConfig':
          returnValue = `${item.value.hShadow}px ${item.value.vShadow}px ${item.value.blur}px ${item.value.spread}px ${item.value.color}`;
          break;
        case 'space':
        case 'borderWidth':
        case 'borderRadius':
        case 'screenSize':
          returnValue = `${item.value}px`;
          break;

        default:
          returnValue = item.value;
      }

      return returnValue;
    },
    exportFile() {
      const filename = 'variables.scss';
      const text = this.processFile(this.$store.getters.categoryTableData);
      console.log(text);
      console.log(filename);
      var element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:text/scss;charset=utf-8,' + encodeURIComponent(text)
      );
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },

    exportConfig() {
      const filename = 'config.json';

      const dataSource = {
        resultSetting: this.$store.state.categoryTableData,
        colorConfig: this.$store.state.colorConfig,
        selectedColor: this.$store.state.selectedColor,
        fontSizeConfig: this.$store.state.fontSize,
        fontWeightConfig: this.$store.state.fontWeight,
        shadowConfig: this.$store.state.shadowConfig
      };
      const text = JSON.stringify(dataSource, null, '\t');

      var element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:application/json;charset=utf-8,' + encodeURIComponent(text)
      );
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    handleFileUpload(file) {
      console.log(file);
      const reader = new FileReader();
      reader.readAsText(file.raw);
      reader.onload = (evt) => {
        const {
          colorConfig,
          fontSizeConfig: fontSize,
          fontWeightConfig: fontWeight,
          resultSetting: categoryTableData,
          selectedColor,
          shadowConfig
        } = JSON.parse(evt.target.result);

        this.$store.commit('importSetting', {
          colorConfig,
          fontSize,
          fontWeight,
          categoryTableData,
          selectedColor,
          shadowConfig
        });
      };
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background: #262626;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    margin-right: 16px;
  }
}
.upload-demo {
  display: inline-block;
  margin-left: 16px;
}
</style>

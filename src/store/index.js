import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from '../plugins/vue-persist';
import {
  categoryTableData as initialCategoryTableData,
  neutralPalette
} from '../utils/helper';
import defaultConfig from '../utils/defaultConfig.json';

Vue.use(Vuex);

function _getValuefromStore(_, getters, oldV, type, name) {
  let currentV;

  switch (type) {
    case 'color':
      if (name == 'custom color') {
        currentV = oldV;
      } else {
        currentV = getters.baseColor.find((item) => item.name == name).value;
      }
      break;
    case 'fontColor':
      if (name == 'custom font color') {
        currentV = oldV;
      } else {
        currentV = getters.fontColor.find((item) => item.name == name).value;
      }
      break;
    case 'borderColor':
      if (name == 'custom border color') {
        currentV = oldV;
      } else {
        currentV = getters.borderColor.find((item) => item.name == name).value;
      }
      break;

    case 'fontSize':
      if (name == 'custom font size') {
        currentV = oldV;
      } else {
        currentV = getters.fontSize.find((item) => item.name == name).value;
      }
      break;
    case 'space':
      if (name == 'custom space size') {
        currentV = oldV;
      } else {
        currentV = getters.spaceSize.find((item) => item.name == name).value;
      }
      break;

    case 'borderWidth':
      if (name == 'custom border width') {
        currentV = oldV;
      } else {
        currentV = getters.borderWidth.find((item) => item.name == name).value;
      }
      break;

    case 'borderRadius':
      if (name == 'custom border radius') {
        currentV = oldV;
      } else {
        currentV = getters.borderRadius.find((item) => item.name == name).value;
      }
      break;

    case 'zIndex':
      if (name == 'custom z-index') {
        currentV = oldV;
      } else {
        currentV = getters.zIndex.find((item) => item.name == name).value;
      }
      break;

    case 'shadowConfig':
      if (name == 'custom shadowConfig') {
        currentV = oldV;
      } else {
        currentV = getters.shadowConfig.find((item) => item.name == name).value;
      }
      break;

    case 'screenSize':
      if (name == 'custom screen size') {
        currentV = oldV;
      } else {
        currentV = getters.screenSize.find((item) => item.name == name).value;
      }
      break;
  }

  return currentV;
}

export default new Vuex.Store({
  state: {
    layout: 'BaseLayout',
    colorConfig: defaultConfig.colorConfig,
    selectedColor: defaultConfig.selectedColor,
    customColor: '',
    neutralColorConfig: neutralPalette,
    fontSize: defaultConfig.fontSizeConfig,
    fontWeight: defaultConfig.fontWeightConfig,
    shadowConfig: defaultConfig.shadowConfig,
    categoryTableData: defaultConfig.resultSetting
  },
  getters: {
    baseColor(state) {
      return state.colorConfig.map((item, index) => {
        return {
          name: '$color-' + (index + 1),
          type: 'color',
          value: item.color
        };
      });
    },
    neutralColor(state) {
      return state.neutralColorConfig.map((item, index) => {
        return {
          name: '$neutral-color-' + (index + 1),
          type: 'color',
          value: item.color
        };
      });
    },
    fontColor(state) {
      return state.neutralColorConfig.map((item, index) => {
        return {
          name: '$font-color-' + (index + 1),
          type: 'fontColor',
          value: item.color
        };
      });
    },
    fontSize(state) {
      return state.fontSize.map((item, index) => {
        return {
          name: '$font-size-' + (index + 1),
          type: 'fontSize',
          value: {
            fontSize: item.fontSize,
            lineHeight: item.lineHeight
          }
        };
      });
    },
    fontWeight(state) {
      return state.fontWeight.map((item, index) => {
        return {
          name: '$font-weight-' + (index + 1),
          type: 'fontWeight',
          value: item.fontWeight
        };
      });
    },
    borderColor(state) {
      return state.neutralColorConfig.map((item, index) => {
        return {
          name: '$border-color-' + (index + 1),
          type: 'borderColor',
          value: item.color
        };
      });
    },
    shadowConfig(state) {
      return state.shadowConfig.map((item, index) => {
        return {
          name: '$shadow-' + (index + 1),
          type: 'shadowConfig',
          value: item
        };
      });
    },
    borderWidth() {
      return Array.of(0.5, 1, 1.5, 2).map((item, index) => {
        return {
          name: '$border-width-' + (index + 1),
          type: 'borderWidth',
          value: item
        };
      });
    },
    borderRadius() {
      return Array.of(2, 4, 8, 50).map((item, index) => {
        return {
          name: '$border-radius-' + (index + 1),
          type: 'borderRadius',
          value: item
        };
      });
    },
    spaceSize() {
      return Array.of(4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72).map(
        (item, index) => {
          return {
            name: '$space-size-' + (index + 1),
            type: 'space',
            value: item
          };
        }
      );
    },

    zIndex() {
      return Array.of(1, 10, 100, 1000, 2000, 3000, 4000, 5000).map(
        (item, index) => {
          return {
            name: '$z-index-' + (index + 1),
            type: 'zIndex',
            value: item
          };
        }
      );
    },

    screenSize() {
      return Array.of(640, 768, 1024, 1280, 1440).map((item, index) => {
        return {
          name: '$screen-size-' + (index + 1),
          type: 'screenSize',
          value: item
        };
      });
    },

    categoryTableData(state, getters) {
      return state.categoryTableData.map((item) => {
        item.tableData = item.tableData.map((subitem) => {
          subitem.value = _getValuefromStore(
            state,
            getters,
            subitem.value,
            subitem.type,
            subitem.name
          );
          return subitem;
        });
        return item;
      });
    }
  },
  mutations: {
    setState(state, payload) {
      state[payload.type] = payload.data;
    },
    editVariables(state, payload) {
      state.categoryTableData[payload.type].tableData.splice(
        payload.index,
        1,
        payload.value
      );
    },

    editVariableName(state, payload) {
      state.categoryTableData[payload.typeIndex].tableData[
        payload.index
      ].varName = payload.value;
    },

    addNewItem(state, payload) {
      const currentItemNum =
        state.categoryTableData[payload.typeIndex].tableData.length;

      const lastItem = JSON.parse(
        JSON.stringify(
          state.categoryTableData[payload.typeIndex].tableData[
            currentItemNum - 1
          ]
        )
      );

      state.categoryTableData[payload.typeIndex].tableData.push(lastItem);
    },

    deleteItem(state, payload) {
      const currentItemNum =
        state.categoryTableData[payload.typeIndex].tableData.length;

      if (payload.index < currentItemNum) {
        state.categoryTableData[payload.typeIndex].tableData.splice(
          payload.index,
          1
        );
      }
    },

    // eslint-disable-next-line
    refresh(state) {
      state = Object.assign(state, {
        layout: 'BaseLayout',
        colorConfig: [],
        // neutralColorConfig: [],
        fontSize: [],
        fontWeight: [],
        shadowConfig: [],
        categoryTableData: JSON.parse(JSON.stringify(initialCategoryTableData))
      });
    },

    importSetting(state, payload) {
      Object.assign(state, payload);
    }
  },
  actions: {},
  modules: {},
  plugins: [VuexPersistence.plugin]
});

<template>
  <div class="edit-variable">
    <el-color-picker
      v-model="color"
      ref="colorPicker"
      @change="changeColor"
      color-format="hex"
      :predefine="predefineColors"
    ></el-color-picker>
  </div>
</template>
<script>
export default {
  props: {
    value: Object
  },

  data() {
    return {
      color: ''
    };
  },

  computed: {
    predefineColors: function() {
      return this.$store.getters.borderColor.map((item) => item.value);
    }
  },

  mounted() {
    this.color = this.value.value.value;
  },

  methods: {
    changeColor(color) {
      console.log(color, this.$refs.colorPicker.showPicker);

      // search if the  color in baseColorList
      let colorBase = this.$store.getters.borderColor.find(
        (item) => item.value == color || item.value == color.toLowerCase()
      );
      if (!colorBase) {
        colorBase = {
          name: 'custom border color',
          value: color
        };
      }
      const data = Object.assign({}, this.value.value, colorBase);
      this.$store.commit('editVariables', {
        type: this.value.type,
        index: this.value.index,
        value: data
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

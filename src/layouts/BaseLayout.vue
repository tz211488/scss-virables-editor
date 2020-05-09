<template>
  <el-container direction="vertical">
    <Header />

    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1" router>
          <el-menu-item index="/color">
            <i class="el-icon-menu"></i>
            <span slot="title">Color Setting</span>
          </el-menu-item>
          <el-menu-item index="/font">
            <i class="el-icon-menu"></i>
            <span slot="title">Font SettiSettingng</span>
          </el-menu-item>
          <el-menu-item index="shadow">
            <i class="el-icon-menu"></i>
            <span slot="title">Shadow Setting</span>
          </el-menu-item>
          <el-menu-item index="setting">
            <i class="el-icon-menu"></i>
            <span slot="title">All Config</span>
          </el-menu-item>
          <el-menu-item index="derived-variables">
            <i class="el-icon-menu"></i>
            <span slot="title">Derived Variables</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><slot /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '@components/Header';
export default {
  components: { Header }
};
</script>
<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>

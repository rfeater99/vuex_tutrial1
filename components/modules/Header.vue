<template>
  <el-row>
    <el-col :span="24">
      <h1 >MemoApp <small>Ver. 3.0.0</small></h1>
      <!--el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      @select="handleSelect">
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.google.co.jp" target="_blank">Orders</a></el-menu-item>
      </el-menu-->
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<template>
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-main>
       <el-row>
        <el-col :span="24" class="actions">
          <el-button
            type="primary"
            @click="$router.push('memos/new')"
            icon="el-icon-plus"
            plain round>
            新規作成
          </el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <memo-list></memo-list>
        </el-col>
      </el-row>
   </el-main>
  </el-container>
</template>

<script>
import MemoList from '~/components/memos/MemoList'
import MyHeader from '~/components/modules/Header'

export default {
  components: {
    MemoList,
    MyHeader
  }
}
</script>

<style scope>
.el-table th {
  text-align: center;
}

.actions {
  padding-bottom: 10px;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  display: flex;
  align-items: center;
}
</style>

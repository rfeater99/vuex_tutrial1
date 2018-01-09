<template>
  <el-table
    :data="memoList"
    style="width:100%" stripe>
    <el-table-column
      label="タイトル">
      <template slot-scope="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="updateAt"
      label="更新時間">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px;">{{ scope.row.updateAt }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="_id"
      label="操作">
      <template slot-scope="scope">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-edit"
          plain round
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          plain round
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters('Memo', {
    'memoList': 'getMemos'
  }),
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scope>
.el-table th {
  text-align: center;
}
</style>

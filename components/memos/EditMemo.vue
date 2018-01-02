<template>
  <div>
    <el-dialog
      title="メモ"
      :visible="editDialogVisible"
      :before-close="cancel"
      width="80%"
      :show-close="false"
      label-position="top">
      <el-form :model="memo">
          <el-form-item label="タイトル">
            <el-input
              placeholder="Please input"
              v-model="memo.title"></el-input>
          </el-form-item>
          <el-form-item label="本文">
            <el-input
              placeholder="Please input"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 8 }"
              v-model="memo.content"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: mapActions('Memo/EditMemo', {
    'save': 'save',
    'cancel': 'cancel'
  }),
  computed: mapGetters('Memo/EditMemo', {
    'editDialogVisible': 'isEditDialogVisible',
    'memo': 'getMemo'
  })
}
</script>
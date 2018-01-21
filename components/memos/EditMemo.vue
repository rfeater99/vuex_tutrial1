<template>
  <div>
    <el-dialog
      title="メモ"
      :visible="true"
      :before-close="cancelHandler"
      width="80%"
      :show-close="false"
      label-position="top">
      <el-form :model="memo">
        <el-form-item label="タイトル">
          <el-input
            placeholder="Please input"
            v-model="memo.title" @input="updateMemo(memo)"></el-input>
        </el-form-item>
        <el-form-item label="本文">
          <el-input
            placeholder="Please input"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 8 }"
            v-model="memo.content" @input="updateMemo(memo)"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelHandler">Cancel</el-button>
        <el-button type="primary" @click="saveHandler">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    saveHandler () {
      this.$store.dispatch('Memo/EditMemo/save')
      this.$router.push('../memos')
    },
    cancelHandler () {
      this.$store.dispatch('Memo/EditMemo/cancel')
      this.$router.push('../memos')
    },
    ...mapActions('Memo/EditMemo', {
      'updateMemo': 'updateMemo'
    })
  },
  computed: mapGetters('Memo/EditMemo', {
    'memo': 'getMemo'
  })
}
</script>
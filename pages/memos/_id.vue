<template>
  <edit-memo></edit-memo>
</template>

<script>
import EditMemo from '~/components/memos/EditMemo'
export default {
  fetch ({store, params}) {
    store.dispatch('Memo/EditMemo/getMemo', params.id)
  },
  components: {
    EditMemo
  }
}
</script>

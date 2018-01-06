const SET_EDIT_MEMO_DIALOG_VISIBLE = 'setEditMemoDialogVisible'
const SET_MEMO = 'setMemo'

const EditMemo = {
  namespaced: true,
  state: {
    editDialogVisible: false,
    memo: {
      _id: '',
      _rev: '',
      title: 'aaa',
      content: 'bbbb',
      updateAt: ''
    }
  },
  mutations: {
    [SET_EDIT_MEMO_DIALOG_VISIBLE] (state, value) {
      state.editDialogVisible = value
    },
    [SET_MEMO] (state, value) {
      state.memo = value
      console.log('setMemo!')
      console.log(value)
    }
  },
  actions: {
    save ({ commit, state, rootState }, memo) {
      commit(SET_EDIT_MEMO_DIALOG_VISIBLE, false)
      console.log('save! memo!')
      console.log(memo)
      this.app.router.push('../memos')
    },
    cancel ({ commit, state, rootState }) {
      commit(SET_EDIT_MEMO_DIALOG_VISIBLE, false)
      console.log('canel! edit!')
      this.app.router.push('../memos')
    }
  },
  getters: {
    isEditDialogVisible (state, getters, rootState) {
      return state.editDialogVisible
    }
  }
}

const MemoList = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}

const Memo = {
  namespaced: true,
  state: {
    memoList: [
      {
        _id: '123abc0001',
        _rev: 'ake2234aeadfsa',
        title: 'aaa',
        content: 'bbb',
        updateAt: '2017/12/19 10:00'
      },
      {
        _id: '123abc0002',
        _rev: 'ake2234aeadfsa',
        title: 'aaa2',
        content: 'bbb2',
        updateAt: '2017/12/19 11:00'
      },
      {
        _id: '123abc0003',
        _rev: 'ake2234aeadfsa',
        title: 'aaa3',
        content: 'bbb3',
        updateAt: '2017/12/20 14:00'
      }
    ],
    memo: {
      _id: '',
      _rev: '',
      title: '',
      content: '',
      updateAt: ''
    },
    editDialogVisible: false
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    EditMemo,
    MemoList
  }
}

export default Memo

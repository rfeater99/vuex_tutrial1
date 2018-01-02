const SET_EDIT_MEMO_DIALOG_VISIBLE = 'setEditMemoDialogVisible'

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
    }
  },
  actions: {
    addMemo ({ commit, state, rootState }) {
      commit(SET_EDIT_MEMO_DIALOG_VISIBLE, true)
      console.log('add! memo!')      
    },
    save ({ commit, state, rootState }) {
      commit(SET_EDIT_MEMO_DIALOG_VISIBLE, false)
      console.log('save! memo!')
    },
    cancel ({ commit, state, rootState }) {
      commit(SET_EDIT_MEMO_DIALOG_VISIBLE, false)
      console.log('canel! edit!')
    }
  },
  getters: {
    isEditDialogVisible (state, getters, rootState) {
      return state.editDialogVisible
    },
    getMemo (state, getters, rootState) {
      return state.memo
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

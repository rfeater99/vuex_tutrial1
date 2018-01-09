import axios from '~/plugins/axios.js'
const SET_EDIT_MEMO_DIALOG_VISIBLE = 'setEditMemoDialogVisible'
const SET_MEMO = 'setMemo'
const SET_MEMOS = 'setMemos'

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
    memos: []
  },
  mutations: {
    [SET_MEMOS] (state, memos) {
      console.log('setMemos!')
      console.log(memos)
      state.memos = memos
    }
  },
  actions: {
    async getMemos ({commit}) {
      let {data} = await axios.get('memos')
      console.log('actions.getMemos!')
      commit(SET_MEMOS, data)
    }
  },
  getters: {
    getMemos (state, getters, rootState) {
      console.log('getters.getMemos!')
      return state.memos
    }
  },
  modules: {
    EditMemo,
    MemoList
  }
}

export default Memo

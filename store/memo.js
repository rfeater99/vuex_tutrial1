import axios from '~/plugins/axios.js'
import _ from 'lodash'
import uuid from 'node-uuid'
import moment from 'moment'
const SET_MEMO = 'setMemo'
const SET_MEMOS = 'setMemos'

const EditMemo = {
  namespaced: true,
  state: {
    memo: {
      id: '',
      title: '',
      content: '',
      updateAt: '',
      _rev: ''
    }
  },
  mutations: {
    [SET_MEMO] (state, value) {
      state.memo = value
      console.log('setMemo!')
    }
  },
  actions: {
    clearMemo ({ commit }) {
      commit(SET_MEMO, {
        id: '',
        title: '',
        content: '',
        updateAt: '',
        _rev: ''
      })
    },
    async getMemo ({commit}, id) {
      let {data} = await axios.get(`memos/${id}`)
      commit(SET_MEMO, data)
    },
    updateMemo ({ commit, state, rootState }, memo) {
      commit(SET_MEMO, memo)
    },
    async save ({ commit, state, rootState, getters, dispatch }) {
      console.log('save! memo!')
      var memo = getters.getMemo
      if (memo.id === '') {
        memo.id = uuid.v4()
      }
      memo.updateAt = moment().utcOffset(9).format('YYYY/MM/DD HH:mm:ss')
      await axios.put('memos', memo)
      dispatch('clearMemo')
    },
    cancel ({ commit, state, rootState, dispatch }) {
      console.log('canel! edit!')
      dispatch('clearMemo')
    }
  },
  getters: {
    getMemo (state, getters, rootState) {
      return state.memo
    }
  }
}

const MemoList = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async deleteMemo ({ commit, state, rootState }, id) {
      await axios.delete(`memos/${id}`)
      console.log('MemoList action delete')
    }
  },
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
      return _.cloneDeep(state.memos)
    }
  },
  modules: {
    EditMemo,
    MemoList
  }
}

export default Memo

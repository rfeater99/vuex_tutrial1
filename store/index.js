import Vue from 'vue'
import Vuex from 'vuex'
import { SET_STEP_COUNT, UPDATE_IMPRESSION } from './mutation-types'
import Memo from './memo'

Vue.use(Vuex)

const Form2 = {
  namespaced: true,
  state: {
    button: ['確認', '送信'],
    component: ['TextareaComp', 'StringComp']
  },
  mutations: {},
  actions: {
    buttonAction ({ commit, state, rootState }) {
      console.log('buttonAction!')
      if (rootState.errorFlag) {
        commit(SET_STEP_COUNT, null, {root: true}) // rootへのアクセス
      }
      if (rootState.stepCount === 2) {
        this.app.router.push('thanks')
      }
    }
  },
  getters: {
    getButton (state, getters, rootState) {
      return state.button[rootState.stepCount]
    },
    getComponent (state, getters, rootState) {
      return state.component[rootState.stepCount]
    }
  }
}

const Head = {
  state: {
    title: ['感想を入力', '確認画面', '送信完了']
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle (state, getters, rootState) {
      return state.title[rootState.stepCount]
    }
  }
}

const Textarea = {
  namespaced: true,
  state: {
    errorMsg: '入力は必須です'
  },
  getters: {
    getError (state, getters, rootState) {
      if (rootState.errorFlag) {
        return null
      } else {
        return state.errorMsg
      }
    }
  }
}

const String = {
  namespaced: true,
  getters: {
    getString (state, getters, rootState) {
      return rootState.impression
    }
  }
}

const store = () => new Vuex.Store({
  state: {
    stepCount: 0,
    impression: '',
    errorFlag: false // trueなら通過
  },
  mutations: {
    [SET_STEP_COUNT] (state) {
      console.log('root:setStepCount!')
      state.stepCount++
    },
    [UPDATE_IMPRESSION] (state, value) {
      state.impression = value
      if (state.impression) {
        state.errorFlag = true
      } else {
        state.errorFlag = false
      }
    }
  },
  modules: {
    Form2,
    Head,
    Textarea,
    String,
    Memo
  }
})

export default store

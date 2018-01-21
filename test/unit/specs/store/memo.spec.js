import axios from '~/plugins/axios.js'
import Memo from '~/store/memo.js'
import Vuex from 'vuex'
import { createLocalVue } from 'vue-test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)


describe ('store.Memo.EditMemoのテスト', () => {
  let ns = 'Memo/EditMemo/'
  const store = new Vuex.Store({
    modules: {
      Memo
    }
  })

  it ('mutations.setMemoのテスト', () => {
    let targetName = ns + 'setMemo'
    store.commit(targetName, {
      id: 'id-1',
      title: 'title-1',
      content: 'content-1',
      updateAt: '2018-01-20 18:29:51',
      _rev: '1-abc'
    })
    let memo = store.getters[ns + 'getMemo']
    expect(memo.id).toBe('id-1')
    expect(memo.title).toBe('title-1')
    expect(memo.content).toBe('content-1')
    expect(memo.updateAt).toBe('2018-01-20 18:29:51')
    expect(memo._rev).toBe('1-abc')

    store.commit(targetName, {})
    memo = store.getters[ns + 'getMemo']
    expect(memo).toEqual({})

    store.commit(targetName, null)
    memo = store.getters[ns + 'getMemo']
    expect(memo).toBe(null)
  })

  it ('actions.clearMemoのテスト', () => {
    let targetName = ns + 'clearMemo'
    store.dispatch(targetName)

    let memo = store.getters[ns + 'getMemo']
    expect(memo.id).toBe('')
    expect(memo.title).toBe('')
    expect(memo.content).toBe('')
    expect(memo.updateAt).toBe('')
    expect(memo._rev).toBe('')
  })
})

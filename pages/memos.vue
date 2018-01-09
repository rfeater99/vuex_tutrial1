<template>
  <div>
    <memo></memo>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import Memo from '~/components/Memo'

export default {
  fetch ({store}) {
    store.dispatch('Memo/getMemos')
  },
  components: {
    'Memo': Memo
  }
}
</script>

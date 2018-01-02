<template>
  <div>
    <memo></memo>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import Memo from '~/components/Memo'

export default {
  components: {
    'Memo': Memo
  }
}
</script>

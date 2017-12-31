<template>
  <p>{{string}}</p>
</template>

<script>
import { mapGetters } from 'Vuex'

export default {
  name: 'stringComp',
  computed: mapGetters('String', {
    'string': 'getString'
  })
}
</script>

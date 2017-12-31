<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea v-model="impression"></textarea>
  </div>
</template>

<script>
import { mapGetters } from 'Vuex'
import { UPDATE_IMPRESSION } from '~/store/mutation-types'

export default {
  name: 'textareaComp',
  computed: {
    impression: {
      get () {
        return this.$store.state.impression
      },
      set (value) {
        this.$store.commit(UPDATE_IMPRESSION, value)
      }
    },
    ...mapGetters('Textarea', {
      'error': 'getError'
    })
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
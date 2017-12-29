<template>
  <div>
    Thanksページ
    <HeadComp></HeadComp>
    送信ありがとうございました！
  </div>
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import { mapActions, mapGetters } from 'Vuex'

export default {
  name: 'thanks',
  components: {
      HeadComp
  }
}
</script>

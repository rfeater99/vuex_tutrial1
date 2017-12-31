<template>
  <div>
    Formページ
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <button v-on:click="buttonAction">{{button}}</button>
    <Child>
      <template slot-scope="props">
        <span>hello from parent</span>
        <span>{{ props.text }}</span>
      </template>
    </Child>
    <div class="block">
      <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate> 
    </div>
    <MyTable></MyTable>
  </div>
</template>

<script>
import HeadComp from '~/components/modules/HeadComp'
import TextareaComp from '~/components/modules/TextareaComp'
import StringComp from '~/components/modules/StringComp'
import { mapActions, mapGetters } from 'vuex'
import Child from '~/components/modules/Child'
import MyTable from '~/components/modules/MyTable'

export default {
  name: 'form2',
  methods: mapActions('Form2', {
    'buttonAction': 'buttonAction'
  }),
  data () {
    return {
      value: null
    }
  },
  computed: mapGetters('Form2', {
    'button': 'getButton',
    'isComponent': 'getComponent'
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp,
    Child,
    MyTable
  }
}
</script>

<style scoped>
.block {
  padding: 0 20px;
}
</style>

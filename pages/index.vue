<template>
  <div>
    <Form2></Form2>
    <el-button type="default" v-on:click="$router.push('memo')" round>
      メモ
    </el-button>
  </div>
</template>

<script>
import Form2 from '~/components/Form2'
export default {
  components: {
    Form2
  }
}
</script>
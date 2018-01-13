<template>
  <div></div>
</template>

<script>
export default {
  fetch ({store}) {
    store.dispatch('Memo/getMemos')
  }
}
</script>

 
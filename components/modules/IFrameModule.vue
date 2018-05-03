<template lang="pug">
  .i-frame
    iframe(:src='module.source')
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'
export default {
  name: 'IFrameModule',
  mixins: [ModuleMixin]
}
</script>

<style lang="sass">
.i-frame
  width: 100%
  height: 80vh
  iframe
    border: none
    width: 100%
    height: 100%
</style>


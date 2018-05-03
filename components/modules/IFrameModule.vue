<template lang="pug">
  .i-frame
    loading
    iframe(
      v-if='isVisible'
      :src='module.source'
    )
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'
import Loading from '@/components/Loading'

export default {
  name: 'IFrameModule',
  mixins: [ModuleMixin],
  components: { Loading }
}
</script>

<style lang="sass">
.i-frame
  width: 100%
  height: 80vh
  iframe
    position: relative
    z-index: 1
    border: none
    width: 100%
    height: 100%
</style>


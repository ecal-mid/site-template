<template lang="pug">
  .i-frame
    loading
    iframe(
      v-if='isVisible'
      :src='module.source'
    )
    flag(
      v-if='module.flag'
      :flag='module.flag'
      :size='module.size'
    )
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'
import Loading from '@/components/Loading'
import Flag from '@/components/Flag'

export default {
  name: 'IFrameModule',
  mixins: [ModuleMixin],
  components: { Loading, Flag }
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


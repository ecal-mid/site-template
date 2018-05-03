<template lang="pug">
  video.video(
    :autoplay='true'
    :muted='muted'
    :loop='true'
    :controls='controls'
    @mouseenter='enter'
    @mouseleave='leave'
  )
    source(:src='module.path ? module.path + module.file : module.file')
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'
export default {
  name: 'VideoModule',
  mixins: [ModuleMixin],
  data() {
    return {
      muted: true,
      controls: false
    }
  },
  methods: {
    enter() {
      this.muted = false
      // this.controls = true
    },
    leave() {
      this.muted = true
      // this.controls = false
    }
  }
}
</script>

<style lang="sass">
.video
  width: 100%
</style>

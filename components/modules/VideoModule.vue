<template lang="pug">
  .video
    video(
      ref='video'
      :muted='muted'
      :loop='true'
      :controls='controls'
      @mouseenter='enter'
      @mouseleave='leave'
      @click='togglePlay'
    )
      source(:src='module.path ? module.path + module.file : module.file')
    flag(
      flag='Click<br>-<br>Hover'
      :hide='hideFlag'
      :size='module.flag'
    )
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'
import Flag from '@/components/Flag'
export default {
  name: 'VideoModule',
  mixins: [ModuleMixin],
  components: { Flag },
  data() {
    return {
      play: false,
      muted: true,
      controls: false,
      hideFlag: false
    }
  },
  computed: {
    video() {
      return this.$refs.video
    }
  },
  methods: {
    enter() {
      this.muted = false
      this.video.play()
      this.play = true
      this.hideFlag = true
      // this.controls = true
    },
    leave() {
      this.muted = true
      this.video.pause()
      this.play = false
      this.hideFlag = false
      // this.controls = false
    },
    togglePlay() {
      this.play = !this.play
      if (this.play) this.video.play()
      else this.video.pause()
    }
  }
}
</script>

<style lang="sass">
.video
  width: 100%
  video
    width: 100%
</style>

<template lang="pug">
  .header-image
    .display(
      :style='{"background-image": "url(\'" + (module.source || module.file) + "\')"}'
      :class='[{cover: module.cover}, {contain: module.contain}, {repeat: module.repeat}]'
    )
      .text
        h1.title(
          v-if='module.title'
          v-html='module.title'
        )
        h5.sub-title(
          v-if='module.subTitle'
          v-html='module.subTitle'
        )
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'

export default {
  name: 'HeaderImageModule',
  mixins: [ModuleMixin]
}
</script>

<style lang="sass">
.header-image
  width: 100%
  height: 100vh
  .display
    position: relative
    widht: 100%
    height: 100%
    background-position: 50% 50%
    background-repeat: no-repeat
    background-clip: content-box
    .text
      mix-blend-mode: difference
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      color: white
      font-size: 4em
      > *
        text-align: center
  .cover
    background-size: cover
  .contain
    background-size: contain
  .repeat
    background-repeat: repeat
</style>

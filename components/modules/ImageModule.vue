<template lang="pug">
  .image
    .display(
      :style='{"background-image": "url(\'" + (module.source || module.file) + "\')"}'
      :class='[{cover: module.cover}, {contain: module.contain}, {repeat: module.repeat}]'
    )
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'

export default {
  name: 'ImageModule',
  mixins: [ModuleMixin]
}
</script>

<style lang="sass">
.image
  width: 100%
  height: 80vh
  .display
    widht: 100%
    height: 100%
    background-position: 50% 50%
    background-repeat: no-repeat
    background-clip: content-box
  .cover
    background-size: cover
  .contain
    background-size: contain
  .repeat
    background-repeat: repeat
</style>



<template lang="pug">
  .flag
    h3(
      v-html='flag'
      :style='{ width: size + "px", height: size + "px" }'
      :class='[{hide}]'
    )
</template>

<script>
export default {
  name: 'Flag',
  props: {
    size: {
      type: Number,
      default: 150
    },
    flag: {
      type: String,
      defaut: 'Flag'
    },
    hide: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">
.flag
  text-align: center
  font-size: 14px
  line-height: 13px
  user-select: none
  pointer-events: none
  position: absolute
  overflow: hidden
  z-index: 10
  top: 0
  left: 0
  mix-blend-mode: difference
  h3
    display: flex
    align-items: flex-end
    padding: 0 0 10px 0
    justify-content: center
    transform: translate3d(-50%, -50%, 0) rotate(-45deg)
    opacity: 1
    transition: all 0.3s ease-in-out
    background: white
    color: black
  h3.hide
    transform: translate3d(-100%, -100%, 0) rotate(-45deg)
    opacity: 0
</style>


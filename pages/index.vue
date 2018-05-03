<template lang="pug">
.site
  nav#menu
    a(href='/').home
  header
    component.module(
      v-for='(module, index) in content.headerModules'
      :key='index'
      :is='module.type + "Module"'
      :module='module'
      :style='module.style'
      :uuid='id(7)'
    )
  .wrapper
    component.module(
      v-for='(module, index) in content.wrapperModules'
      :key='index'
      :is='module.type + "Module"'
      :module='module'
      :style='module.style'
      :uuid='id(7)'
      :class='{"module-margin": module.margin}'
    )
</template>


<script>
import BaseMixin from '@/mixins/BaseMixin'
import ModulesList from '@/mixins/ModulesList'
import content from '@/site/content'

export default {
  mixins: [ModulesList, BaseMixin],
  data() {
    return {
      content
    }
  },
  mounted() {
    window.addEventListener('resize', e => {
      this.busEmit('resize', e)
    })
    window.addEventListener('scroll', e => {
      this.busEmit('scroll', e)
    })
  },
  methods: {
    id (length) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let id = ''
      for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)]
      }
      return id
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Rubik|Space+Mono')
body
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-family: 'Rubik', sans-serif
  background-color: rgb(240, 240, 240)
  font-size: 2vh
  padding-bottom: 50px
.home
  display: inline-block
  padding: 0.5em
  font-size: 1.5em
  position: relative
  color: black
  text-decoration: none
  transform: translate(20px, 20px) rotate(-45deg)
  border-left: solid white 3px
  border-top: solid white 3px
.arrow
  box-sizing: border-box
  height: 100%
  border-left: solid black
  border-top: solid black
  transform: rotate(-45deg)
#menu
  mix-blend-mode: difference
  position: fixed
  z-index: 2
  top: 0
  left: 0
.wrapper
  width: 80%
  margin: auto
  display: flex
  flex-wrap: wrap
  .module
    position: relative
    flex: 0 1 auto
    height: 80vh
    background: white
  .module-margin
    margin-top: 20px
</style>


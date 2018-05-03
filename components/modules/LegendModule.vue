<template lang="pug">
.legend
  h1.title {{module.title}}
  h4.sub.title {{module.subTitle}}
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'

export default {
  name: 'Slider',
  mixins: [ModuleMixin]
}
</script>

<style lang="sass">
.legend
  width: 50%
  padding: 10px
</style>


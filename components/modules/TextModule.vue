<template lang="pug">
.text
  .title(v-if='module.title')
    h1 {{module.title}}
  .content(v-if='module.text')
    p(v-html='module.text')
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'
export default {
  name: 'TextModule',
  mixins: [ModuleMixin]
}
</script>

<style lang="sass">
.text
  width: 50%
  padding: 20px
</style>


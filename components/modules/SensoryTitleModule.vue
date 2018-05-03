<template lang="pug">
  .sensory-title
    h1.title(
      v-if='module.title'
      v-html='module.title'
    )
    template(v-if='module.professor')
      br
      h3.professor(v-html='module.professor')
    template(v-if='module.students || module.student')
      br
      h4.students(v-html='module.students || module.student')
    template(v-if='module.description')
      br
      p.description(v-html='module.description')
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'

export default {
  name: 'SensoryTitleModule',
  mixins: [ModuleMixin]
}
</script>

<style lang="sass">
.sensory-title
  height: initial !important
  width: 100%
  padding: 20px
  padding-right: 50%
</style>


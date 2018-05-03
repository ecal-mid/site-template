import BaseMixin from '@/mixins/BaseMixin'

export default {
  props: ['module', 'uuid'],
  mixins: [BaseMixin],
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    this.updateVisibility()
    this.busOn('scroll', e => {
      this.updateVisibility()
    })
  },
  methods: {
    updateVisibility() {
      const { top, bottom, width, height } = this.$el.getBoundingClientRect()
      const vH = window.innerHeight
      if ((top > vH && bottom > vH) || (top < 0 && bottom < 0)) {
        this.isVisible = false
      } else {
        this.isVisible = true
      }
    }
  }
}

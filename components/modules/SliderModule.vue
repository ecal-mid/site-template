<template lang="pug">
.slider
  .swiper-container
    .swiper-wrapper
      template(
        v-if='module.batches'
        v-for='batch in module.batches'
      )
        template(v-if='batch.range')
          .swiper-slide(v-for='index in (batch.range[1] - batch.range[0])')
            template(v-if='batch.type === "images"')
              img(:src='getRangeFile(index + 1, batch.path, batch.file)')
        template(v-else)
          .swiper-slide(v-for='file in batch.files')
            template(v-if='batch.type === "images"')
              img(:src='batch.path ? batch.path + file : file')
            template(v-if='batch.type === "videos"')
              video(
                :autoplay='true'
                :loop='true'
                @click='preventDefault()'
              )
                source(:src='batch.path ? batch.path + file : file')
</template>

<script>
import ModuleMixin from '@/mixins/ModuleMixin'

export default {
  name: 'Slider',
  mixins: [ModuleMixin],
  mounted() {
    const swiperElement = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto'
    })
  },
  methods: {
    getRangeFile(index, path, file) {
      const sFile = file.split('/%num/%')
      return path + sFile[0] + index + sFile[1]
    }
  }
}
</script>

<style lang="sass">
.slider
  position: relative
  height: 100%
  width: 100%
  cursor: e-resize
  .swiper-container
    width: 100%
    height: 100%
    .swiper-wrapper
      height: 100%
      .swiper-slide
        width: auto
        height: 100%
        img
          height: 100%
        video
          height: 100%
  .button
    position: absolute
    z-index: 3
    top: 50%
    width: 30px
    height: 30px
  .prev
    left: 0
    transform: translate(-100%, -50%)
  .next
    right: 0
    transform: translate(100%, -50%)  rotate(180deg)
</style>



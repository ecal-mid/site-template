module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sensory Augmentation - Workshop with Philip Schuette',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: './swiper.min.css' }
    ],
    script: [
      { src: './swiper.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'black' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    base: '/projects/2018/sensory-augmentation/'
  }
}

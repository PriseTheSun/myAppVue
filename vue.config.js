const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      extraFonts: [
        {
          family: 'Inter',
          src: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'I Want My Pet | Adote um Amigo'
      return args
    })
  },
})

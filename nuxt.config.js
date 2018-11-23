module.exports = {
  env: {},
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxtjs/dotenv"],
  build: {
    extend: function(config) {
      config.node = {
        fs: "empty"
      }
    }
  }
}

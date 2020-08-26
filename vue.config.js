module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://fevrok.dev/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};

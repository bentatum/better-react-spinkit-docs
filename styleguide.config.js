const path = require('path')
const dir = path.join(__dirname, 'node_modules/better-react-spinkit/src')

module.exports = {
  title: 'better-react-spinkit',
  components: path.join(__dirname, 'node_modules/better-react-spinkit/src/**/*.js'),
  skipComponentsWithoutExample: true,
  styleguideDir: 'dist',
  updateWebpackConfig: (webpackConfig, env) => {
    webpackConfig.module.loaders.push({
      test: /\.js?$/,
      include: dir,
      loader: 'babel'
    })
    return webpackConfig
  }
}

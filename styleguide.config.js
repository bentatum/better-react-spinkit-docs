const path = require('path')
const dirs = [
  path.join(__dirname, 'node_modules/better-react-spinkit/src'),
  path.join(__dirname, 'src')
]

module.exports = {
  title: 'better-react-spinkit',
  components: path.join(__dirname, 'node_modules/better-react-spinkit/src/**/*.js'),
  skipComponentsWithoutExample: true,
  styleguideDir: 'dist',
  updateWebpackConfig: (webpackConfig, env) => {
    webpackConfig.resolve.alias['rsg-components/Layout/Renderer'] = path.join(__dirname, 'src/Layout')
    webpackConfig.module.loaders.push({
      test: /\.js?$/,
      include: dirs,
      loader: 'babel'
    })
    return webpackConfig
  }
}

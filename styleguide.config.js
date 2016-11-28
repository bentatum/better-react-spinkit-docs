
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  components: path.resolve('node_modules/better-react-spinkit/src/**/*.js'),
  skipComponentsWithoutExample: true,
  styleguideDir: 'dist',
  updateWebpackConfig (webpackConfig, env) {
    webpackConfig.resolve.alias['rsg-components/StyleGuide/StyleGuideRenderer'] = path.resolve('src/App')
    webpackConfig.module.loaders = [
      ...webpackConfig.module.loaders,
      {
        test: /\.js?$/,
        include: [
          path.resolve('node_modules/better-react-spinkit/src'),
          path.resolve('src')
        ],
        loader: 'babel'
      },
      {
        test: /\.scss?$/,
        include: path.resolve('src'),
        loader: ExtractTextPlugin.extract('css?module&sourceMap&localIdentName=[path][name]---[local]---[hash:base64:5]!sass?module&sourceMap&localIdentName=[path][name]---[local]---[hash:base64:5]')
      }
    ]
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new HtmlWebpackPlugin({
        title: 'better-react-spinkit',
        template: path.resolve('src/index.html')
      }),
      new ExtractTextPlugin('style.css')
    ]
    return webpackConfig
  }
}

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/main.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(jpg|jpeg|png|svg)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        limit: 2048
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.styl(us)?$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}
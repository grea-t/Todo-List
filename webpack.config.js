const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/main.js',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
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
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, '../src'),
      'styles': path.resolve(__dirname, '../src/assets/styles'),
      'images': path.resolve(__dirname, '../src/assets/images')
    }
  }
}
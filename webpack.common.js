const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Webpack-Init',
      favicon: 'favicon.ico',
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, 'dll'),
      manifest: require('./dll/alpha-manifest.json'), // eslint-disable-line
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, 'dll'),
      manifest: require('./dll/beta-manifest.json'), // eslint-disable-line
    }),
    //这个主要是将生成的vendor.dll.js文件加上hash值插入到页面中。
    new AddAssetHtmlPlugin([
      {
        filepath: path.resolve(__dirname, './dll/jlDll.*.js'),
        hash: true,
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}

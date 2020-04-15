const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    jquery: ['jquery'],
    alpha: ['./src/common/js/alpha', './src/common/js/a'],
    beta: ['./src/common/js/beta', './src/common/js/b', './src/common/js/c'],
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: 'jlDll.[name].js',
    library: '[name]_dll',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]_dll',
    }),
  ],
}

const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [{loader: 'babel-loader'}]
      },
      {
        test: /\.(css)$/,
        exclude: /\.module.css$/,
        use: [
          {loader: miniCssExtractPlugin.loader},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(css)$/,
        include: /\.module.css$/,
        use: [
          {loader: miniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              modules: {localIndentName: '[name]__[local]__[hash:base64:5]'},
              importLoaders: 1
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true
  },
  mode: 'development'
}
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './demo/main.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, './demo-dist'),
    publicPath: '/demo-dist/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: path.resolve(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.node$/,
        use: [{ loader: 'node-loader' }, { loader: 'file-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|svg|bmp)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
});

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
// eslint-disable-next-line
const { transformModel: baseTransform, registerRuntimeHelpers } = require('@vue/compiler-core');
const { isNativeWidget } = require('./dist/widgets/nativeWidget');

const x = Symbol('vModelText');

registerRuntimeHelpers({
  [x]: 'vModelText',
});

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
        use: {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              isNativeTag: isNativeWidget,
              directiveTransforms: {
                model: (dir, node, context) => {
                  const baseResult = baseTransform(dir, node, context);
                  const { tag } = node;
                  let directiveToUse;
                  if (tag === 'vn-line-edit') {
                    directiveToUse = x;
                  }
                  baseResult.needRuntime = context.helper(directiveToUse);
                  // console.log('dir', dir);
                  // console.log('node', node);
                  // console.log('context', context);
                  return baseResult;
                },
              },
            },
          },
        },
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

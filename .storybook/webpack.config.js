const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../', 'node_modules/react-native-elements'),
        path.resolve(__dirname, '../', 'node_modules/react-native-ratings'),
        path.resolve(__dirname, '../', 'node_modules/react-native-status-bar-height'),
        path.resolve(__dirname, '../', 'node_modules/react-native-vector-icons'),
        path.resolve(__dirname, '../'),
      ],
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: false,
          presets: ['module:metro-react-native-babel-preset' ],
          plugins: [
            'babel-plugin-react-native-web',
            '@babel/plugin-transform-modules-commonjs'
          ]
        }
      }
    },
    {
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'file-loader',
      }
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      include: path.resolve(__dirname, '../'),
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      ],
    },
  );

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../', 'node_modules/react-native-vector-icons/Fonts'),
        to: 'assets/fonts'
      }]
    }),
  );

  config.resolve.extensions = ['.web.ts', '.ts', '.json', '.web.tsx', '.tsx', '.web.js', '.js', '.web.jsx', '.jsx'];

  config.resolve.alias = {
    'react-native': 'react-native-web'
  };

  return config;
};
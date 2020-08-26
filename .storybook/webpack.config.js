const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../node_modules/react-native-elements/'),
        path.resolve(__dirname, '../node_modules/react-native-ratings/'),
        path.resolve(__dirname, '../node_modules/react-native-vector-icons/'),
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
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(__dirname, '../node_modules/react-native-vector-icons/'),
    }
  );

  config.resolve.extensions = ['.web.ts', '.ts', '.json', '.web.tsx', '.tsx', '.web.js', '.js', '.web.jsx', '.jsx'];

  config.resolve.alias = {
    'react-native': 'react-native-web'
  };

  return config;
};
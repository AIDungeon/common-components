module.exports = {
  plugins: [
    ['react-native-web', { commonjs: true }],
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ],
}

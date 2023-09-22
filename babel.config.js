module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "nativewind/babel",
    [
      'react-native-reanimated/plugin', {
          relativeSourceLocation: true,
      },
    ]
  ],
  // plugins: [
  //   'react-native-reanimated/plugin',
  // ],
};

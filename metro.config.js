const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      adb: '/Users/yaowen/Library/Android/sdk/platform-tools/adb',
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const extraNodeModules = require('node-libs-browser');

const config = {
  resolver: {
    extraNodeModules,
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs','obj','OBJ'],
    assetExts: ['glb', 'gltf', 'mtl', 'obj','png','jpeg','jpg','mp4' ,'OBJ'],
  },
};

// module.exports = {
//   resolver: {
//     sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
//     assetExts: ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg'],
//   },
// }

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

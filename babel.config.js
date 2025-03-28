module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@dtos/': './src/dtos',
          '@assets/': '.src/assets',
          '@components/': './src/components',
          '@screens/': './src/screens',
          '@storage/': './src/storage',
          '@utils/': './src/utils',
          '@services/': './src/services',
          '@hooks/': './src/contexts',
          '@routes/': './src/routes'
        },

        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.png',
          '.jpeg'
        ]
      }
    ]
  ]
  };
};

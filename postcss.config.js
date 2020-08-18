module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss': {},
      '@fullhuman/postcss-purgecss': true ? {
        content: 
          [
            './src/components/button/index.tsx',
            './src/**/*.{js,jsx,ts,tsx}',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      } : false,
      'postcss-nested': {},
      'postcss-custom-properties': {},
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
          "nesting-rules": true
        },
      },
    },
  };
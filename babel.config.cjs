module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react' // Remova se não usar Emotion
        }
      }
    ]
  ]
};

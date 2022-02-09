module.exports = [
  // Sprite for logos under social page
  {
    src: 'src/assets/logos/*.{png,gif,jpg}',
    destImage: 'src/assets/logos-sprite.png',
    destCSS: 'src/components/MarketingCard/sprite.scss',
    imgPath: '../../assets/logos-sprite.png',
    padding: 2,
    algorithm: 'binary-tree',
    algorithmOpts: {sort: false},
    cssTemplate: 'sprites.scss.handlebars',
  },
];

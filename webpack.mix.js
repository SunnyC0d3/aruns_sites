let mix = require('laravel-mix');

mix.js( 'assets/js/main.ts', 'public/js/app.js' )
   .sass( 'assets/scss/main.scss', 'public/css/app.css' );

mix.sass( 'assets/scss/components/image.scss', 'public/css/blocks/image.css' );
mix.sass( 'assets/scss/components/background-cover.scss', 'public/css/blocks/cover.css' );
mix.sass( 'assets/scss/components/buttons.scss', 'public/css/blocks/buttons.css' );

mix.minify( 
   [
      'public/js/app.js', 
      'public/css/app.css',
      'public/css/blocks/image.css',
      'public/css/blocks/cover.css',
      'public/css/blocks/buttons.css'
   ] 
);
let mix = require('laravel-mix');

mix.ts( 'assets/js/main.ts', 'public/js/app.js' )
   .sass( 'assets/scss/main.scss', 'public/css/app.css' )
   .sass( 'assets/scss/components/image.scss', 'public/css/blocks/image.css' )
   .sass( 'assets/scss/components/background-cover.scss', 'public/css/blocks/cover.css' )
   .sass( 'assets/scss/components/buttons.scss', 'public/css/blocks/buttons.css' )
   .minify( 
      [
         'public/js/app.js', 
         'public/css/app.css',
         'public/css/blocks/image.css',
         'public/css/blocks/cover.css',
         'public/css/blocks/buttons.css'
      ] 
   );
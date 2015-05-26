# laravel-elixir-uglify
uglify wrapper for laravel elixir

## Installation
```
npm install laravel-elixir-uglify --save-dev
```

## Usage
```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-uglify');

elixir(function(mix) {
    mix.uglify();
});
```

mix.uglify() by default is going to search every ```.js`` file in ```public/js``` then minify it and rename to ```.min.js``` extension

## Default
```javascript
mix.uglify('**/*.js', 'public/js', {
	mangle: true
});
```

If you want another options please see [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

For license see LICENSE file
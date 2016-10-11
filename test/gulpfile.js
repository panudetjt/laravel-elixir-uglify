const elixir = require('laravel-elixir');
require('../index');

elixir(function(mix) {
    mix.uglify();
});

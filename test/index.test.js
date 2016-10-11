const expect = require('chai').expect;
const elixir = require('laravel-elixir');
// const uglify = require('../index');
require('../index');

describe('laravel-elixir-uglify', () => {
  it('can access to laravel-elixir configure', (done) => {
    // expect(uglify.).to.equal(1);
    elixir(function(mix) {
        mix.uglify(['**/*.js', '!**/*.min.js'], 'public/js');
        done();
    });
  });
});

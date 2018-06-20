const pages = [];

let data = [];

pages.forEach(function(name) {
  data.push( require( './' + name ) );
});

module.exports = data;

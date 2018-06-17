let config = require('./config');
let express = require('express');
let router = express.Router();

// for each page in routes config
for( let route in config ) {
  let name = route;
  let options = config[route];

  if ( name === 'index' ) {
    router.get('/', function(req, res, next) {
      res.render( name, options );
    });
  }

  router.get('/' + name, function(req, res, next) {
    res.render( name, options );
  });

  // redirects, just in case
  router.get('/' + name + '.html', function(req, res, next) {
    res.render( name, options );
  });

  router.get('/' + name + '.php', function(req, res, next) {
    res.render( name, options );
  });
}

module.exports = router;

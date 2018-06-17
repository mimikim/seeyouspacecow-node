let config = require('./config');
let portfolioConfig = require('./config-portfolio')();
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

    // redirects, just in case
    router.get('/index.html', function(req, res, next) {
      res.render( name, options );
    });

    router.get('/index.php', function(req, res, next) {
      res.render( name, options );
    });
  }

  router.get('/' + name, function(req, res, next) {
    res.render( name, options );
  });
}

// generate portfolio item content
portfolioConfig.forEach( function( elm ) {
  router.get('/portfolio/' + elm.url, function(req, res, next) {
    res.render( 'portfolio-item', elm );
  });
});


module.exports = router;
